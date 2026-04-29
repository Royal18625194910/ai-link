"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedListProps {
  items: {
    id: number;
    icon?: React.ReactNode;
    title: string;
    description?: string;
  }[];
  className?: string;
  delay?: number;
}

export function AnimatedList({ items, className, delay = 1500 }: AnimatedListProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, delay);

    return () => clearInterval(interval);
  }, [items.length, delay]);

  const item = items[index];

  if (!item) return null;

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3"
        >
          {item.icon && (
            <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
              {item.icon}
            </div>
          )}
          <div>
            <div className="font-medium text-foreground">{item.title}</div>
            {item.description && (
              <div className="text-sm text-muted-foreground">{item.description}</div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
