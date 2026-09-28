"use client";

interface CalloutProps {
  type: "tip" | "warning" | "info" | "aussie";
  title?: string;
  children: React.ReactNode;
}

const styleMap = {
  tip: {
    bg: "bg-green-900/30",
    border: "border-green-700",
    icon: "\u2713",
    defaultTitle: "Tip",
  },
  info: {
    bg: "bg-blue-900/30",
    border: "border-blue-700",
    icon: "\u2139",
    defaultTitle: "Info",
  },
  warning: {
    bg: "bg-yellow-900/30",
    border: "border-yellow-700",
    icon: "\u26A0",
    defaultTitle: "Warning",
  },
  aussie: {
    bg: "bg-green-900/30",
    border: "border-green-700",
    icon: "\uD83C\uDDE6\uD83C\uDDFA",
    defaultTitle: "Aussie Note",
  },
} as const;

export function Callout({ type, title, children }: CalloutProps) {
  const style = styleMap[type];

  return (
    <div
      className={`my-4 p-4 rounded-lg ${style.bg} border ${style.border}`}
      data-testid={`callout-${type}`}
    >
      <div className="flex items-start gap-3">
        <span className="text-xl" aria-hidden="true">{style.icon}</span>
        <div className="flex-1">
          <p className="font-medium text-white mb-1">{title ?? style.defaultTitle}</p>
          <div className="text-slate-300 text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
