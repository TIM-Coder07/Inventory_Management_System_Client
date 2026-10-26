"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "../../lib/auth";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

import {
  Eye,
  EyeOff,
  Package,
  ArrowRight,
  LoaderCircle,
  TriangleAlert,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await loginUser(form);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-white">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl md:grid-cols-2">
        {/* Branding Section */}
        <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-800 p-10 md:flex">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />

          <div className="relative z-10">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                <Package className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.2em]">
                Inventory Manager
              </span>
            </Link>

            <h1 className="mt-20 text-4xl font-bold leading-tight tracking-tight">
              Welcome back to your business hub.
            </h1>

            <p className="mt-5 max-w-sm leading-7 text-white/80">
              Manage your products, monitor stock levels, and track your sales
              from one simple dashboard.
            </p>

            <div className="mt-10 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Everything in one place</p>
                <p className="text-sm text-white/70">
                  Smart inventory. Simpler business.
                </p>
              </div>
            </div>
          </div>

          <p className="relative z-10 text-sm text-white/70">
            Inventory Management System
          </p>
        </section>

        {/* Login Form */}
        <section className="flex items-center justify-center p-5 sm:p-10">
          <Card className="w-full border-0 bg-transparent text-white shadow-none">
            <CardHeader className="px-0 pb-6">
              <Link
                href="/"
                className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
              >
                <Package className="h-4 w-4" />
                Inventory Manager
              </Link>

              <CardTitle className="text-3xl font-bold tracking-tight">
                Welcome back
              </CardTitle>

              <CardDescription className="text-slate-400">
                Enter your credentials to access your account.
              </CardDescription>
            </CardHeader>

            <CardContent className="px-0">
              {error && (
                <Alert
                  variant="destructive"
                  className="mb-5 border-red-500/30 bg-red-500/10 text-red-300"
                  role="alert"
                >
                  <TriangleAlert className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-200">
                    Email address
                  </Label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="h-12 border-slate-700 bg-slate-800 text-white placeholder:text-slate-500 focus-visible:border-emerald-400 focus-visible:ring-emerald-400/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-200">
                    Password
                  </Label>

                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      value={form.password}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="h-12 border-slate-700 bg-slate-800 pr-12 text-white placeholder:text-slate-500 focus-visible:border-emerald-400 focus-visible:ring-emerald-400/30"
                    />

                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={() => setShowPassword((prev) => !prev)}
                      disabled={loading}
                      className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2 text-slate-400 hover:bg-slate-700 hover:text-white"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 w-full bg-emerald-500 font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  {loading ? (
                    <>
                      <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign in
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              <p className="mt-7 text-center text-sm text-slate-400">
                Don&apos;t have an account?{" "}
                <Link
                  href="/authentications/register"
                  className="font-semibold text-emerald-400 transition hover:text-emerald-300"
                >
                  Create account
                </Link>
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
