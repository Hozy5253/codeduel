"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Authentication will be connected to the backend later.
    console.log("Login submitted");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-10 text-center">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white font-bold text-black">
                C
              </div>

              <span className="text-2xl font-bold">CodeDuel</span>
            </Link>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl">
            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Welcome back</h1>

              <p className="mt-2 text-sm text-zinc-400">
                Sign in to continue your coding journey.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 transition focus:border-white/30"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-zinc-300"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-xs text-zinc-400 transition hover:text-white"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    autoComplete="current-password"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 pr-20 text-sm text-white outline-none placeholder:text-zinc-600 transition focus:border-white/30"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 transition hover:text-white"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Login */}
              <button
                type="submit"
                className="w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:bg-zinc-200"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />

              <span className="text-xs text-zinc-600">OR</span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* OAuth */}
            <div className="space-y-3">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] py-3 text-sm font-medium text-white transition hover:bg-white/[0.07]"
              >
                Continue with Google
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] py-3 text-sm font-medium text-white transition hover:bg-white/[0.07]"
              >
                Continue with GitHub
              </button>
            </div>

            {/* Register */}
            <p className="mt-8 text-center text-sm text-zinc-500">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-white transition hover:text-zinc-300"
              >
                Create one
              </Link>
            </p>
          </div>

          {/* Back */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-zinc-600 transition hover:text-zinc-400"
            >
              ← Back to CodeDuel
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
