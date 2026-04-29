"use client";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  className?: string;
}

export function CTASection({ className }: CTASectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    once: true,
  });

  const getStartedLink = () => {
    const baseUrl = siteConfig.cta.primary.href;
    const separator = baseUrl.includes("?") ? "&" : "?";
    return `${baseUrl}${separator}invite_code=${siteConfig.invite.code}`;
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-zinc-950 px-6 py-24 sm:px-8 sm:py-32",
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
          className="relative rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 p-8 sm:p-12 md:p-16 backdrop-blur-sm"
        >
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
              准备好开始了吗？
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 leading-relaxed">
              注册账号，立即开始使用 {siteConfig.name} 的所有功能
            </p>

            <div className="flex flex-col items-center justify-center">
              <ShimmerButton
                href={getStartedLink()}
                shimmerColor="rgba(6, 182, 212, 0.6)"
                background="linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)"
                className="text-lg px-10 py-4"
              >
                {siteConfig.cta.primary.text}
                <ArrowRight className="h-5 w-5" />
              </ShimmerButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
