"use client";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface ModelCardProps {
  model: typeof siteConfig.models[0];
  index: number;
}

function ModelCard({ model, index }: ModelCardProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={item}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group"
    >
      <MagicCard
        className="h-full overflow-hidden transition-all duration-300"
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
            <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-cyan-400" />
          </div>

          <h3 className="mb-1 text-xl font-semibold text-zinc-100">
            {model.name}
          </h3>
          <p className="mb-3 text-sm text-zinc-500">{model.provider}</p>

          <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
            {model.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {model.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-zinc-800/50 px-2.5 py-1 text-xs text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-zinc-800/50">
            <div className="flex items-center justify-between">
              <span className="text-xs text-zinc-500">起步价</span>
              <span className="text-sm font-medium text-cyan-400">
                {model.price}
              </span>
            </div>
          </div>
        </div>
      </MagicCard>
    </motion.div>
  );
}

interface ModelShowcaseSectionProps {
  className?: string;
}

export function ModelShowcaseSection({ className }: ModelShowcaseSectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    once: true,
  });

  return (
    <section
      className={cn(
        "relative bg-zinc-900/50 px-4 py-20 sm:py-32",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            支持
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              30+
            </span>
            {" "}主流大模型
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            一次接入，即可调用全球顶尖的大语言模型，无需为每个平台单独开发
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          {siteConfig.models.map((model, index) => (
            <ModelCard
              key={model.id}
              model={model}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-500">
            还有更多模型持续接入中...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
