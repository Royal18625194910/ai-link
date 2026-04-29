"use client";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

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
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group"
    >
      <MagicCard
        className="h-full overflow-hidden transition-all duration-300"
        gradientColor="rgba(139, 92, 246, 0.4)"
        gradientOpacity={0.15}
      >
        <div className="relative flex h-full flex-col p-5">
          <div className="mb-4 flex items-start justify-between">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br",
                model.color
              )}
            >
              <span className="text-sm font-bold text-white">
                {model.name.charAt(0)}
              </span>
            </div>
          </div>

          <h3 className="mb-1 text-base font-semibold text-zinc-100">
            {model.name}
          </h3>
          <p className="mb-3 text-xs text-zinc-500">{model.provider}</p>

          <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
            {model.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {model.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-zinc-800/50 px-2.5 py-1 text-xs text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </MagicCard>
    </motion.div>
  );
}

interface ModelShowcaseSectionProps {
  className?: string;
}

export function ModelShowcaseSection({
  className,
}: ModelShowcaseSectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    once: true,
  });

  return (
    <section
      className={cn(
        "relative bg-zinc-900/30 px-6 py-16 sm:px-8 sm:py-24",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl md:text-4xl">
            支持
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              30+
            </span>
            {" "}主流大模型
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-400">
            一次接入，即可调用全球顶尖的大语言模型，无需为每个平台单独开发
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
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
          className="mt-10 text-center"
        >
          <p className="text-sm text-zinc-500">
            还有更多模型持续接入中...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
