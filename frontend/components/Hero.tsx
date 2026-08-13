export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 pt-20">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          Competitive DSA Platform
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          Code.
          <span className="text-zinc-500"> Compete.</span>
          <br />
          Conquer.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Challenge developers at your skill level, solve DSA problems, compete
          in real-time duels, and climb the CodeDuel leaderboard.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-white px-7 py-3.5 font-semibold text-black transition hover:bg-zinc-200">
            Start Coding
          </button>

          <button className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">
            Explore Contests
          </button>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 border-y border-white/10 py-8">
          <div>
            <p className="text-2xl font-bold text-white">10K+</p>
            <p className="mt-1 text-sm text-zinc-500">Problems</p>
          </div>

          <div className="border-x border-white/10">
            <p className="text-2xl font-bold text-white">50K+</p>
            <p className="mt-1 text-sm text-zinc-500">Developers</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-white">24/7</p>
            <p className="mt-1 text-sm text-zinc-500">Competition</p>
          </div>
        </div>
      </div>
    </section>
  );
}
