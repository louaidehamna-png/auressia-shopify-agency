import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Auressia, c'est un service digital créé pour rendre l'IA et l'automatisation accessibles aux PME. Qui est derrière et pourquoi.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    title: "Honnêteté avant tout",
    description:
      "Pas de promesses exagérées, pas de délais inventés. Si quelque chose ne correspond pas à votre besoin, je vous le dis directement — même si ça signifie ne pas travailler ensemble.",
  },
  {
    title: "Des prix accessibles, vraiment",
    description:
      "L'IA et l'automatisation ne devraient pas être réservées aux grandes entreprises. Les outils existent, le savoir-faire aussi. Les marges d'agence, non.",
  },
  {
    title: "La livraison, pas les slides",
    description:
      "Pas de stratégie de 40 pages. Des outils qui fonctionnent, livrés vite, qui changent concrètement quelque chose dans votre quotidien.",
  },
  {
    title: "Un interlocuteur, pas une équipe anonyme",
    description:
      "Vous parlez toujours à la même personne — du premier échange jusqu'au support après livraison. Pas de compte manager, pas de transfert de dossier.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-4">
        <div className="mx-auto max-w-3xl">
          {/* Intro */}
          <div className="mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
              À propos
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight mb-8 sm:text-5xl leading-[1.1]">
              Pourquoi Auressia existe.
            </h1>
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Je m&apos;appelle Louai. J&apos;ai créé Auressia parce que j&apos;en avais assez de voir des
                PME payer des fortunes pour des résultats médiocres — ou
                renoncer à l&apos;IA parce que les prix des agences étaient
                inaccessibles.
              </p>
              <p>
                Les outils existent. Voiceflow, Botpress, Make, Zapier, Framer
                — ils permettent de construire en quelques jours ce qui prenait
                des semaines de développement il y a deux ans. Le problème,
                c&apos;est rarement le manque d&apos;outils. C&apos;est le
                manque de quelqu&apos;un qui sait les assembler correctement
                pour votre contexte précis.
              </p>
              <p>
                Auressia, c&apos;est ça : un service direct, sans intermédiaire,
                sans frais fixes à rembourser. Des livrables concrets, à des
                prix que les PME peuvent vraiment se permettre.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="font-heading text-2xl font-semibold mb-8">
              Ce qui guide chaque projet
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="font-heading text-base font-semibold mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-3xl bg-muted/40 border border-border p-10 text-center">
            <h2 className="font-heading text-2xl font-semibold mb-3">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Commençons par 30 minutes d&apos;échange. Gratuit, sans engagement.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-8"
              )}
            >
              Prendre rendez-vous
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
