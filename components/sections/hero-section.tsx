"use client";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const scrollAnim = { y: [0, 10, 0] };
  const dotAnim = { y: [0, 8, 0], opacity: [1, 0.5, 1] };
  const fadeInUp = { opacity: 1, y: 0 };
  const fadeInUpInitial = { opacity: 0, y: 20 };
  const scaleInInitial = { opacity: 0, scale: 0.9 };
  const scaleIn = { opacity: 1, scale: 1 };
  const fadeIn = { opacity: 1 };
  const fadeInInitial = { opacity: 0 };

  return (
    <section
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950 px-4 py-20",
        className
      )}
    >
      <AnimatedGridPattern
        maxOpacity={0.15}
        duration={3}
        repeatDelay={1}
        className={cn(
          "absolute inset-0 h-full w-full",
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
        strokeDasharray={2}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={scaleInInitial}
          animate={scaleIn}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <a
            href={siteConfig.invite.link}
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-200 backdrop-blur-sm transition-all hover:bg-zinc-800/50"
          >
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span className="text-sm">
              {siteConfig.invite.title}：{siteConfig.invite.code}
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.h1
          className="mt-8 bg-gradient-to-b from-zinc-100 via-zinc-100 to-zinc-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
          initial={fadeInUpInitial}
          animate={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="block">大模型</span>
          <span className="block">
            <AnimatedGradientText
              colors={["#06b6d4", "#8b5cf6", "#ec4899"]}
              className="font-extrabold"
            >
              中转站
            </AnimatedGradientText>
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl"
          initial={fadeInUpInitial}
          animate={fadeInUp}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {siteConfig.tagline}
          <br />
          <span className="text-zinc-300">
            GPT-4o、Claude 3.5、Gemini、Llama 3，一键接入
          </span>
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
          initial={fadeInUpInitial}
          animate={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ShimmerButton
            href={siteConfig.cta.primary.href}
            shimmerColor="rgba(6, 182, 212, 0.6)"
            background="linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)"
            className="text-lg px-8 py-4"
          >
            {siteConfig.cta.primary.text}
            <ArrowRight className="h-5 w-5" />
          </ShimmerButton>

          <a
            href={siteConfig.cta.secondary.href}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-8 py-4 text-lg font-medium text-zinc-200 backdrop-blur-sm transition-all hover:bg-zinc-800/50"
          >
            {siteConfig.cta.secondary.text}
          </a>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-zinc-500"
          initial={fadeInInitial}
          animate={fadeIn}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          {[
            { label: "模型支持", value: "30+" },
            { label: "开发者", value: "10K+" },
            { label: "API 调用", value: "1亿+" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <span className="font-bold text-zinc-200">{stat.value}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={scrollAnim}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-6 w-10 rounded-full border-2 border-zinc-700 flex justify-center">
          <motion.div
            className="mt-2 h-2 w-2 rounded-full bg-zinc-500"
            animate={dotAnim}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
