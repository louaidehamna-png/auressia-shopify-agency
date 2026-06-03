import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-navy dark:bg-card border border-border p-12 text-center">
          {/* Background glow */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-azure/15 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-terracotta/10 blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="font-heading text-4xl font-semibold text-white dark:text-foreground tracking-tight mb-4 sm:text-5xl">
              Prêt à automatiser ?
            </h2>
            <p className="text-lg text-white/70 dark:text-muted-foreground max-w-xl mx-auto mb-10">
              Commencez par un audit gratuit de 30 minutes. On analyse ensemble
              où l&apos;IA peut vous faire gagner du temps et de l&apos;argent.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full bg-azure text-white hover:bg-azure/90 px-8 h-12 text-base"
                )}
              >
                Réserver mon audit gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "rounded-full text-white/80 dark:text-muted-foreground hover:text-white hover:bg-white/10 px-8 h-12 text-base"
                )}
              >
                Voir tous les services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
