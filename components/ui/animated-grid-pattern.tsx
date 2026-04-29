"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: [number, number];
  strokeDasharray?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
  className?: string;
  squaresClassName?: string;
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  squares = [4, 4],
  strokeDasharray = 0,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  className,
  squaresClassName,
}: AnimatedGridPatternProps) {
  const [renderedSquares, setRenderedSquares] = useState<
    Array<{
      id: number;
      pos: [number, number];
      opacity: number;
    }>
  >([]);

  useEffect(() => {
    const numSquares = squares[0] * squares[1];
    const newSquares = Array.from({ length: numSquares }, (_, i) => ({
      id: i,
      pos: [i % squares[0], Math.floor(i / squares[0])] as [number, number],
      opacity: Math.random() * maxOpacity,
    }));
    setRenderedSquares(newSquares);
  }, [squares, maxOpacity]);

  const generateId = () => {
    return Math.random().toString(36).substring(2, 11);
  };

  const patternId = generateId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full overflow-visible",
        className
      )}
    >
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M ${width} 0 L 0 0 0 ${height}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      {renderedSquares.map((square) => (
        <motion.rect
          key={square.id}
          className={cn("fill-current", squaresClassName)}
          width={width - 1}
          height={height - 1}
          x={square.pos[0] * width + x + 1}
          y={square.pos[1] * height + y + 1}
          initial={{ opacity: square.opacity }}
          animate={{
            opacity: [
              square.opacity,
              Math.random() * maxOpacity,
              square.opacity,
            ],
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay: square.id * 0.1,
            repeatDelay,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
