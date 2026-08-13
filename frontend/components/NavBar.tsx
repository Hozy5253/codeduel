export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black font-bold">
            C
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            CodeDuel
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            How It Works
          </a>

          <a
            href="#leaderboard"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Leaderboard
          </a>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-3">
          <button className="hidden text-sm text-zinc-300 transition hover:text-white sm:block">
            Login
          </button>

          <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
