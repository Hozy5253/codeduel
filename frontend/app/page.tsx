import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <Hero />

      <section id="features" className="bg-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Built for competition
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Everything you need to compete
            </h2>

            <p className="mt-4 text-zinc-400">
              CodeDuel combines competitive programming, skill-based matchmaking
              and intelligent analytics into one platform.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="⚔️"
              title="Skill-Based Duels"
              description="Compete against developers with similar skill and rating."
            />

            <FeatureCard
              icon="⏱️"
              title="Adaptive Timers"
              description="Contest duration adapts to your current skill level."
            />

            <FeatureCard
              icon="🏆"
              title="Competitive Rankings"
              description="Earn rating points and climb global and contest leaderboards."
            />

            <FeatureCard
              icon="💻"
              title="Advanced Code Editor"
              description="Write, test and submit solutions in a powerful coding environment."
            />

            <FeatureCard
              icon="🤖"
              title="AI Code Analysis"
              description="Get intelligent feedback about your code and performance."
            />

            <FeatureCard
              icon="📊"
              title="Performance Analytics"
              description="Understand your strengths, weaknesses and progress over time."
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © 2026 CodeDuel. All rights reserved.
          </p>

          <p className="text-sm text-zinc-600">Code. Compete. Conquer.</p>
        </div>
      </footer>
    </main>
  );
}
