"use client";

import Link from "next/link";
import { useState } from "react";

type Difficulty = "Easy" | "Medium" | "Hard";

type Problem = {
  id: number;
  title: string;
  difficulty: Difficulty;
  category: string;
  acceptance: string;
  solved: boolean;
};

const problems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays",
    acceptance: "49.2%",
    solved: true,
  },
  {
    id: 2,
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    acceptance: "42.7%",
    solved: false,
  },
  {
    id: 3,
    title: "Binary Search",
    difficulty: "Easy",
    category: "Searching",
    acceptance: "55.8%",
    solved: true,
  },
  {
    id: 4,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "Strings",
    acceptance: "36.4%",
    solved: false,
  },
  {
    id: 5,
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Arrays",
    acceptance: "47.1%",
    solved: false,
  },
  {
    id: 6,
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Graphs",
    acceptance: "61.3%",
    solved: false,
  },
  {
    id: 7,
    title: "Course Schedule",
    difficulty: "Medium",
    category: "Graphs",
    acceptance: "48.6%",
    solved: false,
  },
  {
    id: 8,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Binary Search",
    acceptance: "42.1%",
    solved: false,
  },
];

export default function PracticePage() {
  const [difficulty, setDifficulty] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProblems = problems.filter((problem) => {
    const matchesDifficulty =
      difficulty === "All" || problem.difficulty === difficulty;

    const matchesSearch =
      problem.title.toLowerCase().includes(search.toLowerCase()) ||
      problem.category.toLowerCase().includes(search.toLowerCase());

    return matchesDifficulty && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}

      <header className="border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white font-bold text-black">
              C
            </div>

            <span className="text-xl font-bold">CodeDuel</span>
          </Link>

          <Link
            href="/dashboard"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            ← Dashboard
          </Link>
        </div>
      </header>

      {/* Main */}

      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Heading */}

        <div>
          <p className="text-sm uppercase tracking-widest text-zinc-600">
            Practice
          </p>

          <h1 className="mt-2 text-3xl font-bold">DSA Problems</h1>

          <p className="mt-2 text-zinc-400">
            Improve your problem-solving skills and prepare for your next duel.
          </p>
        </div>

        {/* Search + Filters */}

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}

          <input
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-white/30 lg:max-w-md"
          />

          {/* Difficulty */}

          <div className="flex gap-2">
            {["All", "Easy", "Medium", "Hard"].map((level) => (
              <button
                key={level}
                onClick={() => setDifficulty(level)}
                className={`rounded-lg px-4 py-2 text-sm transition ${
                  difficulty === level
                    ? "bg-white font-medium text-black"
                    : "border border-white/10 text-zinc-500 hover:text-white"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Problem Count */}

        <div className="mt-8 text-sm text-zinc-600">
          {filteredProblems.length} problems
        </div>

        {/* Problems */}

        <div className="mt-3 overflow-hidden rounded-2xl border border-white/10">
          {/* Header */}

          <div className="hidden grid-cols-[60px_1fr_150px_150px_100px] border-b border-white/10 px-5 py-4 text-xs uppercase tracking-wider text-zinc-600 md:grid">
            <span>#</span>
            <span>Problem</span>
            <span>Difficulty</span>
            <span>Category</span>
            <span>Acceptance</span>
          </div>

          {/* Rows */}

          {filteredProblems.map((problem) => (
            <Link
              href={`/problems/${problem.id}`}
              key={problem.id}
              className="grid gap-3 border-b border-white/10 px-5 py-5 transition last:border-0 hover:bg-white/[0.03] md:grid-cols-[60px_1fr_150px_150px_100px] md:items-center"
            >
              {/* Number */}

              <span className="text-sm text-zinc-600">{problem.id}</span>

              {/* Title */}

              <div className="flex items-center gap-3">
                {problem.solved && <span className="text-green-400">✓</span>}

                <span className="text-sm font-medium text-white">
                  {problem.title}
                </span>
              </div>

              {/* Difficulty */}

              <span
                className={`text-sm ${
                  problem.difficulty === "Easy"
                    ? "text-green-400"
                    : problem.difficulty === "Medium"
                      ? "text-yellow-400"
                      : "text-red-400"
                }`}
              >
                {problem.difficulty}
              </span>

              {/* Category */}

              <span className="text-sm text-zinc-500">{problem.category}</span>

              {/* Acceptance */}

              <span className="text-sm text-zinc-500">
                {problem.acceptance}
              </span>
            </Link>
          ))}
        </div>

        {/* Empty State */}

        {filteredProblems.length === 0 && (
          <div className="mt-4 rounded-2xl border border-white/10 p-12 text-center">
            <p className="text-zinc-400">No problems found.</p>
          </div>
        )}
      </section>
    </main>
  );
}
