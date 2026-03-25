import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { getServerEnv } from "@/lib/env";
import { getPrisma } from "@/lib/prisma";

const SESSION_COOKIE_NAME = "rp_session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7;
const PASSWORD_KEY_LENGTH = 64;

type SessionPayload = {
  userId: string;
  expiresAt: number;
};

type SafeUser = Awaited<ReturnType<typeof getCurrentUser>>;

function getSessionSecret() {
  return getServerEnv().sessionSecret;
}

function toBase64Url(input: string | Buffer) {
  return Buffer.from(input).toString("base64url");
}

function signValue(value: string) {
  return createHmac("sha256", getSessionSecret()).update(value).digest("base64url");
}

function encodeSession(payload: SessionPayload) {
  const encodedPayload = toBase64Url(JSON.stringify(payload));
  const signature = signValue(encodedPayload);
  return `${encodedPayload}.${signature}`;
}

function decodeSession(token?: string) {
  if (!token) {
    return null;
  }

  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature) {
    return null;
  }

  const expected = signValue(encodedPayload);
  const isValid =
    signature.length === expected.length &&
    timingSafeEqual(Buffer.from(signature), Buffer.from(expected));

  if (!isValid) {
    return null;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8"),
    ) as SessionPayload;

    if (!payload.userId || payload.expiresAt < Date.now()) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, PASSWORD_KEY_LENGTH).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, storedHash: string) {
  const [salt, originalHash] = storedHash.split(":");
  if (!salt || !originalHash) {
    return false;
  }

  const computedHash = scryptSync(password, salt, PASSWORD_KEY_LENGTH).toString("hex");
  return timingSafeEqual(Buffer.from(computedHash), Buffer.from(originalHash));
}

export async function createUserSession(userId: string) {
  const expires = new Date(Date.now() + SESSION_DURATION_MS);
  const token = encodeSession({
    userId,
    expiresAt: expires.getTime(),
  });

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires,
  });
}

export async function clearUserSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  return decodeSession(token);
}

export async function getCurrentUser() {
  const session = await getSession();

  if (!session?.userId) {
    return null;
  }

  return getPrisma().user.findUnique({
    where: { id: session.userId },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      walletBalance: true,
      createdAt: true,
    },
  });
}

export async function requireCurrentUser() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  return user;
}

export async function redirectIfAuthenticated(destination = "/account") {
  const user = await getCurrentUser();
  if (user) {
    redirect(destination);
  }
}

export type AuthUser = NonNullable<SafeUser>;
