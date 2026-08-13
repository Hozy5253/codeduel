"use client";

import Link from "next/link";

const stats = [
  {
    label: "Rating",
    value: "1200",
    description: "+0 this week",
  },
  {
    label: "Skill Level",
    value: "Beginner",
    description: "Keep improving",
  },
  {
    label: "Global Rank",
    value: "#1,284",
    description: "Top 15%",
  },
];

const activities = [
  {
    problem: "Two Sum",
    difficulty: "Easy",
    result: "Accepted",
    rating: "+18",
  },
  {
    problem: "Binary Search",
    difficulty: "Medium",
    result: "Accepted",
    rating: "+24",
  },
  {
    problem: "Graph Traversal",
    difficulty: "Medium",
    result: "Wrong Answer",
    rating: "-12",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white font-bold text-black">
              C
            </div>

            <span className="text-xl font-bold">CodeDuel</span>
          </Link>

          <div className="flex items-center gap-5">
            <button className="text-zinc-400 transition hover:text-white">
              🔔
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold">
              H
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl">
        {/* Sidebar */}
        <aside className="hidden min-h-[calc(100vh-4rem)] w-60 border-r border-white/10 p-6 md:block">
          <nav className="space-y-2">
            <NavItem href="/dashboard" label="Dashboard" active />

            <NavItem href="/practice" label="Practice" />

            <NavItem href="/contests" label="Contests" />

            <NavItem href="/duels" label="Duels" />

            <NavItem href="/leaderboard" label="Leaderboard" />

            <NavItem href="/analytics" label="Analytics" />
          </nav>

          <div className="mt-10 border-t border-white/10 pt-6">
            <NavItem href="/profile" label="Profile" />

            <NavItem href="/settings" label="Settings" />
          </div>
        </aside>

        {/* Main */}
        <section className="flex-1 px-6 py-10">
          {/* Welcome */}
          <div>
            <p className="text-sm text-zinc-500">Welcome back</p>

            <h1 className="mt-1 text-3xl font-bold">
              Ready for your next duel?
            </h1>

            <p className="mt-2 text-zinc-400">
              Improve your skills, compete with others and climb the rankings.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-sm text-zinc-500">{stat.label}</p>

                <p className="mt-2 text-2xl font-bold">{stat.value}</p>

                <p className="mt-1 text-xs text-zinc-600">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Duel Card */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="p-7">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-400" />

                    <span className="text-xs font-medium uppercase tracking-widest text-green-400">
                      Ready to duel
                    </span>
                  </div>

                  <h2 className="mt-3 text-2xl font-bold">Find an opponent</h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
                    We'll match you with a player close to your rating and skill
                    level.
                  </p>
                </div>

                <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200">
                  Find Match
                </button>
              </div>
            </div>

            {/* Match Info */}
            <div className="grid border-t border-white/10 sm:grid-cols-3">
              <MatchInfo label="Skill Level" value="Beginner" />

              <MatchInfo label="Match Duration" value="90 Minutes" />

              <MatchInfo label="Opponent Range" value="±100 Rating" />
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Activity</h2>

              <Link
                href="/submissions"
                className="text-sm text-zinc-500 transition hover:text-white"
              >
                View all
              </Link>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
              {activities.map((activity, index) => (
                <div
                  key={activity.problem}
                  className={`flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between ${
                    index !== activities.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <div>
                    <p className="font-medium">{activity.problem}</p>

                    <p className="mt-1 text-xs text-zinc-500">
                      {activity.difficulty}
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <span
                      className={
                        activity.result === "Accepted"
                          ? "text-sm text-green-400"
                          : "text-sm text-red-400"
                      }
                    >
                      {activity.result}
                    </span>

                    <span
                      className={
                        activity.rating.startsWith("+")
                          ? "text-sm text-green-400"
                          : "text-sm text-red-400"
                      }
                    >
                      {activity.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* Navigation Item */

function NavItem({
  href,
  label,
  active = false,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block rounded-lg px-3 py-2 text-sm transition ${
        active
          ? "bg-white text-black font-medium"
          : "text-zinc-500 hover:bg-white/5 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}

/* Match Information */

function MatchInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-5">
      <p className="text-xs text-zinc-600">{label}</p>

      <p className="mt-1 text-sm font-medium text-zinc-300">{value}</p>
    </div>
  );
}
