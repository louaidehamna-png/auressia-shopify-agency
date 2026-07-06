import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";

export function CaseStudy() {
  return (
    <section id="realisations" className="py-24 px-4 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Réalisation
          </p>
          <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            Du concret,
            <br />
            <span className="text-azure">pas des slides.</span>
          </h2>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge className="bg-azure-soft text-azure border-azure/20">
              Site vitrine
            </Badge>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              Nice
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              Livré en 7 jours
            </span>
          </div>

          <h3 className="font-heading text-2xl font-semibold mb-3">
            ME Propreté — entreprise de nettoyage
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            ME Propreté n&apos;avait aucune présence en ligne. Site vitrine
            conçu, écrit et mis en ligne en une semaine : présentation des
            services, zone d&apos;intervention, formulaire de contact, SEO
            local. L&apos;entreprise est désormais visible sur Google et
            joignable en deux clics.
          </p>

          <a
            href="https://louaidehamna-png.github.io/bilel-web-site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-azure hover:underline"
          >
            Voir le site en ligne
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
