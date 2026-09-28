"use client";

import { TerminalSimulator } from "./TerminalSimulator";
import { CodeBlock } from "./CodeBlock";
import { Callout } from "./Callout";

interface LessonContentProps {
  content: string;
}

// Parse custom tags and markdown content
export function LessonContent({ content }: LessonContentProps) {
  const elements: React.ReactNode[] = [];
  let key = 0;

  // Split content into lines and process
  const lines = content.split("\n");
  let i = 0;
  let inCodeBlock = false;
  let codeBlockLang = "";
  let codeBlockContent: string[] = [];
  let inTerminal = false;
  let terminalContent: string[] = [];
  let inCallout: "tip" | "warning" | "info" | "aussie" | null = null;
  let calloutContent: string[] = [];

  while (i < lines.length) {
    const line = lines[i];

    // Terminal blocks
    if (line.trim() === "<terminal>") {
      inTerminal = true;
      terminalContent = [];
      i++;
      continue;
    }
    if (line.trim() === "</terminal>" && inTerminal) {
      elements.push(
        <TerminalSimulator key={key++} content={terminalContent.join("\n")} />
      );
      inTerminal = false;
      i++;
      continue;
    }
    if (inTerminal) {
      terminalContent.push(line);
      i++;
      continue;
    }

    // Callout blocks
    if (line.trim() === "<tip>") {
      inCallout = "tip";
      calloutContent = [];
      i++;
      continue;
    }
    if (line.trim() === "<warning>") {
      inCallout = "warning";
      calloutContent = [];
      i++;
      continue;
    }
    if (line.trim() === "<info>") {
      inCallout = "info";
      calloutContent = [];
      i++;
      continue;
    }
    if (line.trim() === "<aussie>") {
      inCallout = "aussie";
      calloutContent = [];
      i++;
      continue;
    }
    if ((line.trim() === "</tip>" || line.trim() === "</warning>" || line.trim() === "</info>" || line.trim() === "</aussie>") && inCallout) {
      elements.push(
        <Callout key={key++} type={inCallout}>
          <div dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(calloutContent.join("\n")) }} />
        </Callout>
      );
      inCallout = null;
      i++;
      continue;
    }
    if (inCallout) {
      calloutContent.push(line);
      i++;
      continue;
    }

    // Code blocks (```)
    if (line.trim().startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockLang = line.trim().slice(3) || "plaintext";
        codeBlockContent = [];
      } else {
        elements.push(
          <CodeBlock key={key++} code={codeBlockContent.join("\n")} language={codeBlockLang} />
        );
        inCodeBlock = false;
      }
      i++;
      continue;
    }
    if (inCodeBlock) {
      codeBlockContent.push(line);
      i++;
      continue;
    }

    // Headings
    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={key++} className="text-3xl font-bold text-white mt-8 mb-4">
          {line.slice(2)}
        </h1>
      );
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-white mt-8 mb-3">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-xl font-semibold text-white mt-6 mb-2">
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // Tables
    if (line.includes("|") && line.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].includes("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      elements.push(renderTable(tableLines, key++));
      continue;
    }

    // Empty lines
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Lists
    if (line.trim().startsWith("- ") || line.trim().match(/^\d+\. /)) {
      const listItems: string[] = [];
      const isOrdered = line.trim().match(/^\d+\. /);
      
      while (i < lines.length && (lines[i].trim().startsWith("- ") || lines[i].trim().match(/^\d+\. /))) {
        const itemContent = lines[i].trim().replace(/^[-\d.]+\s*/, "");
        listItems.push(itemContent);
        i++;
      }

      if (isOrdered) {
        elements.push(
          <ol key={key++} className="list-decimal list-inside text-slate-300 space-y-2 my-4 ml-4">
            {listItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(item) }} />
            ))}
          </ol>
        );
      } else {
        elements.push(
          <ul key={key++} className="list-disc list-inside text-slate-300 space-y-2 my-4 ml-4">
            {listItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(item) }} />
            ))}
          </ul>
        );
      }
      continue;
    }

    // Regular paragraphs
    const paragraphLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].startsWith("#") && !lines[i].includes("<") && !lines[i].startsWith("```") && !lines[i].startsWith("-") && !lines[i].match(/^\d+\. /) && !lines[i].includes("|")) {
      paragraphLines.push(lines[i]);
      i++;
    }
    
    if (paragraphLines.length > 0) {
      elements.push(
        <p key={key++} className="text-slate-300 my-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(paragraphLines.join(" ")) }} />
      );
    } else {
      i++;
    }
  }

  return <div className="lesson-content">{elements}</div>;
}

// Parse inline markdown (bold, italic, code, links)
function parseInlineMarkdown(text: string): string {
  return text
    // Code (backticks)
    .replace(/`([^`]+)`/g, '<code class="bg-slate-700 text-orange-400 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    // Bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    // Italic
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
    // Checkmarks
    .replace(/✅/g, '<span class="text-green-400">✅</span>')
    .replace(/❌/g, '<span class="text-red-400">❌</span>')
    .replace(/⚠️/g, '<span>⚠️</span>');
}

// Render markdown table
function renderTable(lines: string[], key: number): React.ReactNode {
  // Parse header
  const headerLine = lines[0];
  const headers = headerLine.split("|").filter(h => h.trim() !== "").map(h => h.trim());
  
  // Skip separator line (|---|---|)
  const dataLines = lines.slice(2);
  
  const rows = dataLines.map(line => 
    line.split("|").filter(c => c.trim() !== "").map(c => c.trim())
  );

  return (
    <div key={key} className="my-6 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-700">
            {headers.map((header, i) => (
              <th key={i} className="text-left text-white font-semibold py-3 px-4">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-800">
              {row.map((cell, j) => (
                <td key={j} className="text-slate-300 py-3 px-4" dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(cell) }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
