
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-900 p-8 text-center shadow-xl sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Retail POS System
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          Inventory Manager
        </h1>

        <p className="mt-4 leading-7 text-slate-400">
          Manage products, track stock, and monitor your sales
          from one simple dashboard.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="./authentications/login"
            className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Login
          </Link>

          <Link
            href="./authentications/register"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-800"
          >
            Create Account
          </Link>
        </div>
      </div>
    </main>
  );
}
