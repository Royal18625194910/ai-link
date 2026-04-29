"use client";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";

interface ModelShowcaseSectionProps {
  className?: string;
}

export function ModelShowcaseSection({
  className,
}: ModelShowcaseSectionProps) {
  return (
    <section
      className={cn(
        "relative bg-zinc-900/30 py-24 px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-6">
            支持
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              30+
            </span>
            {" "}主流大模型
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            一次接入，即可调用全球顶尖的大语言模型，无需为每个平台单独开发
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.models.map((model) => (
            <MagicCard
              key={model.id}
              className="h-full"
              gradientColor="rgba(139, 92, 246, 0.4)"
              gradientOpacity={0.15}
            >
              <div className="relative flex h-full flex-col p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br",
                      model.color
                    )}
                  >
                    <span className="text-lg font-bold text-white">
                      {model.name.charAt(0)}
                    </span>
                  </div>
                </div>

                <h3 className="mb-1 text-lg font-semibold text-zinc-100">
                  {model.name}
                </h3>
                <p className="mb-4 text-sm text-zinc-500">{model.provider}</p>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400">
                  {model.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {model.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-zinc-800/50 px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </MagicCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500">
            还有更多模型持续接入中...
          </p>
        </div>
      </div>
    </section>
  );
}
