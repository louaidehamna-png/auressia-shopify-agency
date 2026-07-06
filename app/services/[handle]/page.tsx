import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckoutButton } from "@/components/CheckoutButton";
import { services, getServiceByHandle } from "@/lib/services";
import {
  ArrowRight,
  Clock,
  CheckCircle2,
  ArrowLeft,
  Shield,
} from "lucide-react";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://www.auressia.fr";

type Props = { params: Promise<{ handle: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ handle: s.handle }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const service = getServiceByHandle(handle);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${handle}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { handle } = await params;
  const service = getServiceByHandle(handle);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.longDescription,
    provider: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Auressia",
    },
    areaServed: [
      { "@type": "City", name: "Nice" },
      { "@type": "City", name: "Sophia Antipolis" },
      { "@type": "City", name: "Monaco" },
    ],
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "EUR",
      url: `${BASE_URL}/services/${service.handle}`,
    },
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="pt-28 pb-24 px-4">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Tous les services
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            {/* Left — content */}
            <div>
              {service.tag && (
                <Badge
                  className={cn(
                    "mb-4 text-xs",
                    service.price === 0
                      ? "bg-terracotta text-white border-0"
                      : "bg-azure-soft text-azure border-azure/20"
                  )}
                >
                  {service.tag}
                </Badge>
              )}
              <h1 className="font-heading text-4xl font-semibold tracking-tight mb-2 sm:text-5xl">
                {service.name}
              </h1>
              <p className="text-lg font-medium text-primary mb-6">
                {service.tagline}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                {service.longDescription}
              </p>

              <h2 className="font-heading text-xl font-semibold mb-4">
                Ce qui est inclus
              </h2>
              <ul className="space-y-3 mb-10">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl bg-muted/50 border border-border p-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">30 jours de support inclus</p>
                    <p className="text-sm text-muted-foreground">
                      Après livraison, je reste disponible pour les ajustements,
                      corrections et questions. Pas d&apos;abandon post-projet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — pricing card */}
            <div>
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
                <div className="mb-6">
                  <div className="text-4xl font-heading font-semibold mb-1">
                    {service.price === 0 ? (
                      <span className="text-terracotta">Gratuit</span>
                    ) : (
                      <>
                        {service.price}&thinsp;€
                        {service.pricePeriod && (
                          <span className="text-lg text-muted-foreground font-normal">
                            {service.pricePeriod}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  {service.tag && service.price > 0 && (
                    <div className="text-sm text-terracotta font-medium">
                      {service.tag}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Clock className="h-4 w-4" />
                  Livraison : {service.delivery}
                </div>

                <CheckoutButton
                  shopifyHandle={service.shopifyHandle}
                  label={service.price === 0 ? "Réserver l'audit" : "Commander ce service"}
                />

                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "w-full justify-center text-muted-foreground"
                  )}
                >
                  Une question ? Contactez-moi
                </Link>

                <div className="mt-6 pt-6 border-t border-border space-y-2">
                  {service.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
