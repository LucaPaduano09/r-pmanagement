import "server-only";

type ServerEnv = {
  databaseUrl: string | null;
  sessionSecret: string;
};

export function getServerEnv(): ServerEnv {
  return {
    databaseUrl: process.env.DATABASE_URL?.trim() || null,
    sessionSecret:
      process.env.SESSION_SECRET?.trim() || "rp-management-dev-secret-change-me",
  };
}

export function getDatabaseUrlOrThrow() {
  const { databaseUrl } = getServerEnv();

  if (!databaseUrl) {
    throw new Error(
      "DATABASE_URL_MISSING: crea /Users/lucapaduano/Desktop/rp-management/.env.local con DATABASE_URL e riavvia next dev.",
    );
  }

  return databaseUrl;
}
