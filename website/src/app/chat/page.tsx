"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Header from "@/components/Header";

const bundleSkills: Record<string, { name: string; skills: string[] }> = {
  "tradie-bundle": {
    name: "Tradie Bundle",
    skills: ["BAS & GST Expert", "Superannuation Guide", "WorkCover & Insurance", "Trade Licensing", "Invoice & Quoting"]
  },
  "real-estate-bundle": {
    name: "Real Estate Bundle", 
    skills: ["Property Investment AU", "Stamp Duty Calculator", "Rental Yield Analyzer", "Contract Review", "Depreciation Guide"]
  },
  "small-business-bundle": {
    name: "Small Business Bundle",
    skills: ["ABN & Business Setup", "BAS & GST Expert", "Payroll & PAYG", "Fair Work Compliance", "Business Insurance", "Bookkeeping Basics"]
  },
  "finance-bundle": {
    name: "Finance Bundle",
    skills: ["Tax Deductions Guide", "Superannuation Guide", "Investment Basics", "Budgeting & Savings"]
  },
  "hospitality-bundle": {
    name: "Hospitality Bundle",
    skills: ["Food Safety & HACCP", "Liquor Licensing", "Fair Work Hospitality", "Rostering & Wages", "BAS & GST Expert"]
  },
  "ecommerce-bundle": {
    name: "E-Commerce Bundle",
    skills: ["Australian Consumer Law", "GST for Online Sales", "Shipping & Returns", "Dropshipping AU", "Privacy & Terms"]
  }
};

interface Message {
  role: "user" | "assistant";
  content: string;
}

function ChatContent() {
  const searchParams = useSearchParams();
  const bundleId = searchParams.get("bundle") || "small-business-bundle";
  const bundle = bundleSkills[bundleId] || bundleSkills["small-business-bundle"];
  
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `G'day! 🇦🇺 I'm loaded with the ${bundle.name} skills:\n\n${bundle.skills.map(s => `• ${s}`).join("\n")}\n\nAsk me anything about Australian business, tax, or compliance. Try questions like:\n\n"Do I need to register for GST?"\n"How much super do I pay employees?"\n"What's the stamp duty on a $800k property in NSW?"`
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: userMessage,
          bundleId,
          history: messages.slice(-6)
        })
      });
      
      const data = await response.json();
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: data.reply || "Sorry, I couldn't process that. Try again?"
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Sorry, something went wrong. Please try again."
      }]);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col">
      <Header
        navLinks={[
          { href: "/bundles", label: "\u2190 Back to Bundles", className: "text-blue-400 hover:text-blue-300" },
        ]}
        backLink={{ href: "/bundles", label: `Testing: ${bundle.name}` }}
      />

      <div className="flex-1 max-w-4xl w-full mx-auto flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800 text-slate-200 border border-slate-700"
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-slate-700 p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Australian business, tax, compliance..."
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-medium"
            >
              Send
            </button>
          </form>
          <p className="text-slate-500 text-xs text-center mt-2">
            This is a demo. For full access, <Link href={`/bundles`} className="text-blue-400 hover:underline">get the bundle</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white">Loading chat...</div>
      </div>
    }>
      <ChatContent />
    </Suspense>
  );
}
