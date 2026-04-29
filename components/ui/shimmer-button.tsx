"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ShimmerButton({
  children,
  className,
  onClick,
  href,
  shimmerColor = "#ffffff",
  shimmerSize = "0.1em",
  shimmerDuration = "3s",
  borderRadius = "100px",
  background = "radial-gradient(ellipse 80% 50% at 50% 0%,hsl(var(--primary)/20) 0%,transparent 60%)",
  ...props
}: ShimmerButtonProps) {
  const buttonContent = (
    <motion.button
      onClick={onClick}
      className={cn(
        "group relative flex cursor-pointer overflow-hidden whitespace-nowrap border border-white/20 px-6 py-3 text-white transition-all duration-300 hover:scale-105",
        className
      )}
      style={{
        borderRadius,
        background,
        "--shimmer-color": shimmerColor,
        "--shimmer-size": shimmerSize,
        "--shimmer-duration": shimmerDuration,
      } as React.CSSProperties}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(115deg, transparent 40%, var(--shimmer-color) 45%, var(--shimmer-color) 55%, transparent 60%)`,
            backgroundSize: `200% 100%`,
          }}
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "linear",
          }}
        />
      </div>
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}
