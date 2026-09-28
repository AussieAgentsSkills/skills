"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = "plaintext", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting based on language
  const highlightCode = (code: string, lang: string) => {
    if (lang === "json") {
      return code
        .replace(/"([^"]+)":/g, '<span class="text-purple-400">"$1"</span>:')
        .replace(/: "([^"]+)"/g, ': <span class="text-green-400">"$1"</span>')
        .replace(/: (\d+)/g, ': <span class="text-orange-400">$1</span>')
        .replace(/: (true|false|null)/g, ': <span class="text-blue-400">$1</span>');
    }
    if (lang === "bash" || lang === "shell") {
      return code
        .replace(/^(\$|>)/gm, '<span class="text-green-500">$1</span>')
        .replace(/#.*/g, '<span class="text-slate-500">$&</span>');
    }
    if (lang === "typescript" || lang === "javascript" || lang === "tsx" || lang === "jsx") {
      return code
        .replace(/\b(const|let|var|function|return|if|else|for|while|import|export|from|default|interface|type|extends|implements|class|new|async|await)\b/g, '<span class="text-purple-400">$1</span>')
        .replace(/\b(string|number|boolean|any|void|null|undefined|true|false)\b/g, '<span class="text-blue-400">$1</span>')
        .replace(/"[^"]*"|'[^']*'|`[^`]*`/g, '<span class="text-green-400">$&</span>')
        .replace(/\/\/.*/g, '<span class="text-slate-500">$&</span>');
    }
    return code;
  };

  return (
    <div className="my-4 rounded-lg overflow-hidden border border-slate-700">
      {/* Header */}
      <div className="bg-slate-800 px-4 py-2 flex items-center justify-between">
        <span className="text-slate-400 text-sm font-mono">{title ?? language}</span>
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
      
      {/* Code content */}
      <pre className="bg-slate-900 p-4 overflow-x-auto">
        <code 
          className="text-sm font-mono text-slate-300"
          dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }}
        />
      </pre>
    </div>
  );
}
