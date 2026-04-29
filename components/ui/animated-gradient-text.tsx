"use client";

import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export function AnimatedGradientText({
  children,
  className,
  colors = ["#ffaa40", "#9c40ff", "#ff40aa"],
  speed = 3,
}: AnimatedGradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
    backgroundSize: "300% 300%",
    animation: `gradientShift ${speed}s ease infinite`,
  };

  return (
    <span
      className={cn(
        "inline-block text-transparent bg-clip-text",
        className
      )}
      style={gradientStyle}
    >
      {children}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </span>
  );
}
