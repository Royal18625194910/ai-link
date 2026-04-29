"use client";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";
import { featureIcons } from "@/components/icons/feature-icons";

interface FeaturesSectionProps {
  className?: string;
}

export function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <section
      className={cn(
        "relative bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-6">
            为什么选择
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              AI Link
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            我们为开发者和企业提供最可靠、最便捷的大模型接入方案
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.features.map((feature) => {
            const Icon = featureIcons[feature.icon];
            return (
              <MagicCard
                key={feature.icon}
                className="h-full p-6"
                gradientColor="rgba(6, 182, 212, 0.4)"
                gradientOpacity={0.15}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                    {Icon && <Icon className="h-6 w-6 text-cyan-400" />}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </MagicCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
