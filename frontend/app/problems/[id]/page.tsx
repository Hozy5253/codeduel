"use client";

import Link from "next/link";
import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function ProblemPage() {
  const [language, setLanguage] = useState("python");

  const [code, setCode] = useState(
    `def twoSum(nums, target):
    # Write your solution here
    pass`,
  );

  const [output, setOutput] = useState("Run your code to see the output.");

  const handleRun = () => {
    setOutput("Code execution will be connected to the CodeDuel Judge.");
  };

  const handleSubmit = () => {
    setOutput("Submission will be sent to the CodeDuel Judge.");
  };

  return (
    <main className="flex h-screen flex-col bg-black text-white">
      {/* Top Navigation */}

      <header className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 px-5">
        <div className="flex items-center gap-4">
          <Link
            href="/practice"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            ← Problems
          </Link>

          <div className="h-5 w-px bg-white/10" />

          <span className="font-semibold">Two Sum</span>

          <span className="rounded-md bg-green-400/10 px-2 py-1 text-xs text-green-400">
            Easy
          </span>
        </div>

        {/* Controls */}

        <div className="flex items-center gap-3">
          {/* Language */}

          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white outline-none"
          >
            <option value="python" className="bg-black">
              Python
            </option>

            <option value="cpp" className="bg-black">
              C++
            </option>

            <option value="java" className="bg-black">
              Java
            </option>

            <option value="javascript" className="bg-black">
              JavaScript
            </option>
          </select>

          {/* Timer */}

          <div className="hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-sm sm:block">
            00:59:42
          </div>

          {/* Run */}

          <button
            onClick={handleRun}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10"
          >
            ▶ Run
          </button>

          {/* Submit */}

          <button
            onClick={handleSubmit}
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Submit
          </button>
        </div>
      </header>

      {/* Main Workspace */}

      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        {/* Problem Description */}

        <section className="w-full overflow-y-auto border-b border-white/10 p-6 lg:w-[42%] lg:border-b-0 lg:border-r">
          <div className="max-w-xl">
            <h1 className="text-2xl font-bold">Two Sum</h1>

            <div className="mt-3 flex items-center gap-3">
              <span className="text-sm text-green-400">Easy</span>

              <span className="text-sm text-zinc-600">Arrays</span>
            </div>

            {/* Description */}

            <div className="mt-8">
              <h2 className="text-lg font-semibold">Description</h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Given an array of integers and a target integer, return the
                indices of the two numbers such that they add up to the target.
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                You may assume that each input has exactly one solution, and you
                may not use the same element twice.
              </p>
            </div>

            {/* Example */}

            <div className="mt-8">
              <h2 className="text-lg font-semibold">Example</h2>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 font-mono text-sm">
                <p className="text-zinc-500">Input</p>

                <p className="mt-2 text-zinc-300">nums = [2, 7, 11, 15]</p>

                <p className="mt-4 text-zinc-500">target = 9</p>

                <p className="mt-4 text-zinc-500">Output</p>

                <p className="mt-2 text-green-400">[0, 1]</p>
              </div>
            </div>

            {/* Constraints */}

            <div className="mt-8 pb-10">
              <h2 className="text-lg font-semibold">Constraints</h2>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-400">
                <li>2 ≤ nums.length ≤ 10⁴</li>

                <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>

                <li>-10⁹ ≤ target ≤ 10⁹</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Right Side */}

        <section className="flex min-h-0 w-full flex-1 flex-col">
          {/* Editor */}

          <div className="min-h-0 flex-1">
            <Editor
              height="100%"
              language={language}
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{
                fontSize: 14,
                minimap: {
                  enabled: false,
                },
                padding: {
                  top: 16,
                },
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>

          {/* Console */}

          <div className="h-48 shrink-0 border-t border-white/10 bg-black">
            <div className="flex h-12 items-center border-b border-white/10 px-5">
              <span className="text-sm font-medium">Console</span>
            </div>

            <div className="p-5">
              <pre className="whitespace-pre-wrap font-mono text-xs text-zinc-500">
                {output}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
