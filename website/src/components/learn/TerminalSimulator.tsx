"use client";

import { useState } from "react";

interface TerminalLine {
  type: "input" | "output" | "prompt";
  content: string;
}

function parseTerminalContent(content: string): TerminalLine[] {
  const lines = content.trim().split("\n");
  return lines.map(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith("$") || trimmed.startsWith(">") || trimmed.startsWith("PS ") || trimmed.endsWith("%") || trimmed.endsWith(">")) {
      return { type: "input" as const, content: trimmed };
    }
    return { type: "output" as const, content: trimmed };
  });
}

interface TerminalSimulatorProps {
  content: string;
}

export function TerminalSimulator({ content }: TerminalSimulatorProps) {
  const [copied, setCopied] = useState(false);
  const lines = parseTerminalContent(content);

  const copyToClipboard = () => {
    // Extract just the commands (lines starting with $)
    const commands = lines
      .filter(l => l.type === "input" && l.content.startsWith("$"))
      .map(l => l.content.slice(2).trim())
      .join("\n");
    
    navigator.clipboard.writeText(commands);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-slate-700">
      {/* Terminal header */}
      <div className="bg-slate-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-slate-400 text-sm ml-2">Terminal</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="text-slate-400 hover:text-white text-sm flex items-center gap-1 transition"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      
      {/* Terminal content */}
      <div className="bg-slate-900 p-4 font-mono text-sm overflow-x-auto">
        {lines.map((line, i) => (
          <div key={i} className={line.type === "input" ? "text-green-400" : "text-slate-300"}>
            {line.content}
          </div>
        ))}
        <div className="text-green-400 animate-pulse">▌</div>
      </div>
    </div>
  );
}
