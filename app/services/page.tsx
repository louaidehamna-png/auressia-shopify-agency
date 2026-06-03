import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { services } from "@/lib/services";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Chatbots IA, automatisations no-code, sites web. Tous les services Auressia avec tarifs transparents et délais réels.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Catalogue complet
            </p>
            <h1 className="font-heading text-5xl font-semibold tracking-tight mb-4">
              Ce qu&apos;on peut faire
              <br />
              <span className="text-azure">pour votre activité.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Des prix transparents, des délais honnêtes, un interlocuteur
              unique du début à la fin. Commencez par l&apos;audit gratuit si
              vous ne savez pas par où démarrer.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.handle}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                {service.tag && (
                  <Badge
                    className={cn(
                      "absolute -top-2.5 left-4 text-xs",
                      service.price === 0
                        ? "bg-terracotta text-white border-0"
                        : "bg-azure-soft text-azure border-azure/20"
                    )}
                  >
                    {service.tag}
                  </Badge>
                )}

                <div className="flex-1">
                  <h2 className="font-heading text-lg font-semibold mb-1">
                    {service.name}
                  </h2>
                  <p className="text-xs font-medium text-primary mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-border">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <div className="text-2xl font-heading font-semibold">
                        {service.price === 0 ? (
                          <span className="text-terracotta">Gratuit</span>
                        ) : (
                          <>{service.price}&thinsp;€</>
                        )}
                      </div>
                      {service.price > 0 && (
                        <div className="text-xs text-muted-foreground line-through">
                          {service.originalPrice}&thinsp;€
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {service.delivery}
                    </div>
                  </div>
                  <Link
                    href={`/services/${service.handle}`}
                    className={cn(
                      buttonVariants({
                        variant: service.price === 0 ? "outline" : "default",
                      }),
                      "w-full rounded-xl justify-center"
                    )}
                  >
                    {service.price === 0
                      ? "Réserver l'audit"
                      : "Voir le détail"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Vous ne savez pas quel service correspond à votre besoin ?
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-8"
              )}
            >
              Demandez l&apos;audit gratuit — on définit ça ensemble
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
