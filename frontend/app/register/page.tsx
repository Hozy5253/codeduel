"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Registration will be connected to the backend later.
    console.log("Registration submitted");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8 text-center">
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
              <h1 className="text-2xl font-bold">Create your account</h1>

              <p className="mt-2 text-sm text-zinc-400">
                Join CodeDuel and start competing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 transition focus:border-white/30"
                />
              </div>

              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Username
                </label>

                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Choose a username"
                  required
                  autoComplete="username"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 transition focus:border-white/30"
                />

                <p className="mt-2 text-xs text-zinc-600">
                  Your username will be visible to other players.
                </p>
              </div>

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
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    required
                    autoComplete="new-password"
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

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    required
                    autoComplete="new-password"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 pr-20 text-sm text-white outline-none placeholder:text-zinc-600 transition focus:border-white/30"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 transition hover:text-white"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-black"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-5 text-zinc-500"
                >
                  I agree to the CodeDuel Terms of Service and Privacy Policy.
                </label>
              </div>

              {/* Register */}
              <button
                type="submit"
                className="w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:bg-zinc-200"
              >
                Create Account
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
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 text-sm font-medium text-white transition hover:bg-white/[0.07]"
              >
                Continue with Google
              </button>

              <button
                type="button"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 text-sm font-medium text-white transition hover:bg-white/[0.07]"
              >
                Continue with GitHub
              </button>
            </div>

            {/* Login */}
            <p className="mt-8 text-center text-sm text-zinc-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-white transition hover:text-zinc-300"
              >
                Login
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
