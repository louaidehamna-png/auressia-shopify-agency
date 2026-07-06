import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";

export function Services() {
  return (
    <section id="services" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Catalogue
          </p>
          <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            Des services concrets,
            <br />
            <span className="text-terracotta">pas des promesses.</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Prix fixes, sans surprise. Chaque service est livré avec 30 jours
            de support inclus — pas d&apos;abandon post-livraison.
          </p>
        </div>

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
                <h3 className="font-heading text-lg font-semibold mb-1">
                  {service.name}
                </h3>
                <p className="text-xs font-medium text-primary mb-3">
                  {service.tagline}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
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
                        <>
                          {service.price}&thinsp;€
                          {service.pricePeriod && (
                            <span className="text-sm text-muted-foreground font-normal">
                              {service.pricePeriod}
                            </span>
                          )}
                        </>
                      )}
                    </div>
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
                  {service.price === 0 ? "Réserver l'audit" : "En savoir plus"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
