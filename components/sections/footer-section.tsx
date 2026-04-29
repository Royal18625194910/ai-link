"use client";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

interface FooterSectionProps {
  className?: string;
}

export function FooterSection({ className }: FooterSectionProps) {
  return (
    <footer
      className={cn(
        "relative border-t border-zinc-800/50 bg-zinc-950 px-6 py-8",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-cyan-500 to-purple-500">
              <span className="text-xs font-bold text-white">AI</span>
            </div>
            <span className="text-sm font-semibold text-zinc-400">
              {siteConfig.name}
            </span>
          </div>
          <p className="text-xs text-zinc-600">
            {siteConfig.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
