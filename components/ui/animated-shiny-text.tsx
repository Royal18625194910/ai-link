"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedShinyTextProps {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 100,
}: AnimatedShinyTextProps) {
  return (
    <span
      className={cn(
        "group inline-flex items-center justify-center",
        className
      )}
    >
      <motion.span
        className="inline-flex relative overflow-hidden"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <span className="relative z-10">{children}</span>
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          initial={{ x: `-${shimmerWidth}px` }}
          animate={{ x: "100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "linear",
          }}
          style={{
            width: `${shimmerWidth}px`,
          }}
        />
      </motion.span>
    </span>
  );
}
