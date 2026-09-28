"use client";

interface ProgressBarProps {
  progress: number; // 0-100
  label?: string;
  showPercentage?: boolean;
  size?: "sm" | "md" | "lg";
}

export function ProgressBar({ 
  progress, 
  label, 
  showPercentage = true,
  size = "md" 
}: ProgressBarProps) {
  const heights = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3"
  };

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-slate-400 text-sm">{label}</span>}
          {showPercentage && (
            <span className="text-orange-400 text-sm font-medium">{Math.round(progress)}%</span>
          )}
        </div>
      )}
      <div className={`w-full bg-slate-700 rounded-full ${heights[size]} overflow-hidden`}>
        <div
          className={`bg-gradient-to-r from-orange-500 to-orange-400 ${heights[size]} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  );
}
