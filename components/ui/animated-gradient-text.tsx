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
    animationDuration: `${speed}s`,
  };

  return (
    <span
      className={cn(
        "inline-block text-transparent bg-clip-text animate-gradient-shift",
        className
      )}
      style={gradientStyle}
    >
      {children}
    </span>
  );
}
