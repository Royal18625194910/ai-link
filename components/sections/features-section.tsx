"use client";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";
import { featureIcons } from "@/components/icons/feature-icons";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface FeatureCardProps {
  feature: typeof siteConfig.features[0];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    once: true,
  });

  const Icon = featureIcons[feature.icon];

  return (
    <motion.div
      ref={ref}
      variants={item}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      transition={{ delay: index * 0.1 }}
    >
      <MagicCard
        className="h-full p-6 transition-transform hover:scale-[1.02]"
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
    </motion.div>
  );
}

interface FeaturesSectionProps {
  className?: string;
}

export function FeaturesSection({ className }: FeaturesSectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    once: true,
  });

  return (
    <section
      className={cn(
        "relative bg-zinc-950 px-6 py-16 sm:px-8 sm:py-24",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl md:text-4xl">
            为什么选择
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              AI Link
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-400">
            我们为开发者和企业提供最可靠、最便捷的大模型接入方案
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          {siteConfig.features.map((feature, index) => (
            <FeatureCard
              key={feature.icon}
              feature={feature}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
