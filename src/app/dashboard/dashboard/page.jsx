
import Link from "next/link";
import {
  Package,
  ShoppingCart,
  ChartNoAxesCombined,
  Boxes,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Products",
    value: "0",
    icon: Package,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Total Sales",
    value: "৳0",
    icon: ShoppingCart,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Inventory Items",
    value: "0",
    icon: Boxes,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Total Revenue",
    value: "৳0",
    icon: ChartNoAxesCombined,
    color: "bg-orange-100 text-orange-600",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-blue-600">
              Inventory Management
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Welcome back! Here is your business overview.
            </p>
          </div>

          <Link
            href="/dashboard/products"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <Package size={18} />
            Manage Products
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Statistics */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}
                  >
                    <Icon size={24} />
                  </div>
                  <ArrowUpRight size={18} className="text-gray-400" />
                </div>

                <p className="mt-5 text-sm font-medium text-gray-500">
                  {stat.title}
                </p>
                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  {stat.value}
                </h2>
              </div>
            );
          })}
        </section>

        {/* Quick Actions */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900">
            Quick Actions
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Quickly access your inventory workflows.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              href="/dashboard/products"
              className="group rounded-xl border border-gray-200 p-5 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <Package className="text-blue-600" size={24} />
              <h3 className="mt-4 font-semibold text-gray-900">
                Manage Products
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Add, update, and view products.
              </p>
            </Link>

            <Link
              href="/dashboard/pos"
              className="group rounded-xl border border-gray-200 p-5 transition hover:border-green-300 hover:bg-green-50"
            >
              <ShoppingCart className="text-green-600" size={24} />
              <h3 className="mt-4 font-semibold text-gray-900">
                Point of Sale
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Create sales and process checkout.
              </p>
            </Link>

            <Link
              href="/dashboard/sales"
              className="group rounded-xl border border-gray-200 p-5 transition hover:border-purple-300 hover:bg-purple-50"
            >
              <ChartNoAxesCombined
                className="text-purple-600"
                size={24}
              />
              <h3 className="mt-4 font-semibold text-gray-900">
                Sales History
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Review previous transactions.
              </p>
            </Link>
          </div>
        </section>

        {/* Empty State */}
        <section className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
          <Boxes size={36} className="mx-auto text-gray-400" />
          <h2 className="mt-4 text-lg font-semibold text-gray-900">
            Your inventory starts here
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
            Add your first product to start managing stock and recording sales.
          </p>
          <Link
            href="/dashboard/products"
            className="mt-5 inline-flex rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
          >
            Add Your First Product
          </Link>
        </section>
      </div>
    </main>
  );
}
