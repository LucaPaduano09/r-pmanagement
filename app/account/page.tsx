import { logoutAction } from "@/app/actions/auth";
import { ProfileForm } from "@/components/forms/profile-form";
import { requireCurrentUser } from "@/lib/auth";
import { getPrisma } from "@/lib/prisma";
import { formatCurrency } from "@/lib/utils";

export default async function AccountPage() {
  const currentUser = await requireCurrentUser();
  const prisma = getPrisma();
  const [orders, walletTransactions] = await Promise.all([
    prisma.order.findMany({
      where: { userId: currentUser.id },
      include: {
        items: {
          select: {
            id: true,
            title: true,
            unitPrice: true,
            quantity: true,
            walletGain: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      take: 10,
    }),
    prisma.walletTransaction.findMany({
      where: { userId: currentUser.id },
      orderBy: { createdAt: "desc" },
      take: 10,
    }),
  ]);

  const displayName =
    [currentUser.firstName, currentUser.lastName].filter(Boolean).join(" ") ||
    currentUser.email;

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div className="rounded-[2.5rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">
          Dashboard cliente
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">
              Ciao, {displayName}
            </h1>
            <p className="mt-2 text-base text-slate-600">
              Accesso attivo con {currentUser.email}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-[2rem] bg-slate-950 px-6 py-5 text-white">
              <p className="text-sm uppercase tracking-[0.24em] text-sky-200/80">
                Saldo wallet
              </p>
              <p className="mt-2 text-4xl font-semibold tracking-[-0.06em]">
                {formatCurrency(currentUser.walletBalance)}
              </p>
            </div>
            <form action={logoutAction}>
              <button
                type="submit"
                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white"
              >
                Logout
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
              Ordini recenti
            </h2>
            {orders.length ? (
              <div className="mt-6 space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="rounded-[1.5rem] border border-white bg-white p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-950">{order.items[0]?.title ?? "Ordine"}</p>
                        <p className="mt-1 text-sm text-slate-500">{order.id}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-slate-950">
                          {formatCurrency(order.totalAmount)}
                        </p>
                        <p className="mt-1 text-sm text-emerald-600">{order.status}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {order.items.map((item) => (
                        <span
                          key={item.id}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {item.title} x{item.quantity}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-6 text-sm leading-7 text-slate-500">
                Nessun ordine ancora registrato. Quando acquisterai una card dal marketplace, la
                troverai qui insieme al relativo accredito wallet.
              </p>
            )}
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
              Movimenti wallet
            </h2>
            {walletTransactions.length ? (
              <div className="mt-6 space-y-4">
                {walletTransactions.map((movement) => (
                  <div
                    key={movement.id}
                    className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-white bg-white p-4"
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-600">{movement.description}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                        {movement.type}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-slate-950">
                      {movement.amount > 0 ? "+" : ""}
                      {formatCurrency(movement.amount)}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-6 text-sm leading-7 text-slate-500">
                Il wallet è pronto. Vedrai qui top-up, bonus e utilizzi del credito.
              </p>
            )}
          </section>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <ProfileForm
            firstName={currentUser.firstName ?? ""}
            lastName={currentUser.lastName ?? ""}
            phone={currentUser.phone ?? ""}
            email={currentUser.email}
          />
          <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
              Riepilogo account
            </h2>
            <div className="mt-6 space-y-4">
              {[
                { label: "Email", value: currentUser.email },
                {
                  label: "Membro dal",
                  value: currentUser.createdAt.toLocaleDateString("it-IT"),
                },
                {
                  label: "Ordini registrati",
                  value: String(orders.length),
                },
                {
                  label: "Movimenti wallet",
                  value: String(walletTransactions.length),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-white bg-white p-4"
                >
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="text-sm font-semibold text-slate-950">{item.value}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
