import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";

const services = [
  {
    name: "Chatbot Voiceflow Starter",
    description:
      "Un chatbot intelligent intégré à votre site ou WhatsApp. Répond aux questions courantes 24h/24.",
    price: 290,
    originalPrice: 590,
    delivery: "5 jours",
    highlights: ["Intégration site ou WhatsApp", "Entraîné sur vos FAQ", "1 révision incluse"],
    tag: "Populaire",
    handle: "chatbot-voiceflow-starter",
  },
  {
    name: "Chatbot WhatsApp Business Pro",
    description:
      "Automatisez vos conversations WhatsApp Business. Réservations, devis, support — sans intervention humaine.",
    price: 490,
    originalPrice: 990,
    delivery: "7 jours",
    highlights: ["WhatsApp Business API", "Flux de réservation", "Intégration agenda", "2 révisions"],
    tag: "Best seller",
    handle: "chatbot-whatsapp-pro",
  },
  {
    name: "Automatisation Make (5 scénarios)",
    description:
      "5 automatisations sur mesure avec Make. Connectez vos outils, éliminez les tâches répétitives.",
    price: 190,
    originalPrice: 390,
    delivery: "5 jours",
    highlights: ["5 scénarios Make", "Connexion CRM, email, sheets", "Documentation incluse"],
    handle: "automatisation-make",
  },
  {
    name: "Site Web One-Pager Framer",
    description:
      "Un site one-page moderne, rapide, et optimisé SEO. Parfait pour lancer une offre ou une activité.",
    price: 390,
    originalPrice: 790,
    delivery: "7 jours",
    highlights: ["Design sur mesure", "SEO on-page", "Mobile-first", "Hébergement Framer inclus 1 an"],
    handle: "site-one-pager-framer",
  },
  {
    name: "Pack Restaurant Complet",
    description:
      "Chatbot + système de réservation automatisé. Idéal pour les restaurants, bars et hôtels de la Côte d'Azur.",
    price: 690,
    originalPrice: 1490,
    delivery: "10 jours",
    highlights: ["Chatbot WhatsApp", "Réservations automatiques", "Rappels SMS", "Tableau de bord"],
    tag: "Économisez 800€",
    handle: "pack-restaurant",
  },
  {
    name: "Audit IA & Automatisation",
    description:
      "30 minutes pour analyser votre activité et identifier les 3 automatisations à plus fort impact.",
    price: 0,
    originalPrice: 90,
    delivery: "Sous 48h",
    highlights: ["Appel visio 30 min", "Rapport personnalisé", "Feuille de route IA"],
    tag: "Gratuit",
    handle: "audit-ia",
  },
];

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
            Prix cassés pendant le lancement. Chaque service est livré avec un
            suivi de 30 jours inclus.
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
                  className={`absolute -top-2.5 left-4 text-xs ${
                    service.price === 0
                      ? "bg-terracotta text-white border-0"
                      : "bg-azure-soft text-azure border-azure/20"
                  }`}
                >
                  {service.tag}
                </Badge>
              )}

              <div className="flex-1">
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {service.name}
                </h3>
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
                        <>{service.price}€</>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground line-through">
                      {service.originalPrice}€
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
                  {service.price === 0 ? "Réserver l'audit" : "Commander"}
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
