"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Subtle background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-azure/8 blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] rounded-full bg-terracotta/6 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.div custom={0} initial="hidden" animate="show" variants={fadeUp}>
          <Badge
            variant="secondary"
            className="mb-6 gap-1.5 px-3 py-1.5 text-xs font-medium bg-azure-soft text-azure border-azure/20"
          >
            <Sparkles className="h-3 w-3" />
            Nice · Sophia Antipolis · Côte d&apos;Azur
          </Badge>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-heading text-5xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          L&apos;IA qui travaille
          <br />
          <span className="text-azure">pour votre PME.</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed sm:text-xl"
        >
          Chatbots, automatisations no-code, sites web. Des outils IA
          concrètement utiles, livrés en&nbsp;7&nbsp;jours, à des prix
          accessibles aux PME du&nbsp;06.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Link
            href="/services"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base"
            )}
          >
            Découvrir les services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-8 h-12 text-base"
            )}
          >
            Audit gratuit (30 min)
          </Link>
        </motion.div>

        <motion.p
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-6 text-sm text-muted-foreground"
        >
          Pas de carte bancaire. Pas d&apos;engagement.
        </motion.p>
      </div>

      {/* Trust strip */}
      <motion.div
        custom={5}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="mt-20 w-full max-w-3xl mx-auto"
      >
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground/60 mb-6">
          Outils utilisés
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 items-center">
          {["Voiceflow", "Botpress", "Make", "Zapier", "Framer", "Webflow"].map(
            (tool) => (
              <span key={tool} className="text-sm font-medium text-muted-foreground/70">
                {tool}
              </span>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}
