"use client";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTASectionProps {
  className?: string;
}

export function CTASection({ className }: CTASectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    once: true,
  });

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-zinc-950 px-4 py-20 sm:py-32",
        className
      )}
    >
      <AnimatedGridPattern
        maxOpacity={0.1}
        duration={4}
        repeatDelay={1}
        className={cn(
          "absolute inset-0 h-full w-full",
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
        strokeDasharray={2}
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 p-8 sm:p-12 backdrop-blur-sm"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-1.5 text-sm text-cyan-300 border border-cyan-500/30">
              <Sparkles className="h-4 w-4" />
              限时优惠
            </span>
          </div>

          <div className="pt-6 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
              准备好开始了吗？
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
              注册账号，立即获得免费额度。使用邀请码{" "}
              <span className="font-semibold text-cyan-400">
                {siteConfig.invite.code}
              </span>
              ，额外享受 {siteConfig.invite.description}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <ShimmerButton
                href={siteConfig.cta.primary.href}
                shimmerColor="rgba(6, 182, 212, 0.6)"
                background="linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)"
                className="text-lg px-10 py-4"
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
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-zinc-500"
            >
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>无需信用卡</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>免费额度 $5</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>按量付费</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
