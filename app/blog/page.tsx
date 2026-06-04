import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Automatisation et IA pour les PME",
  description:
    "Conseils pratiques sur l'automatisation no-code, les chatbots IA et la transformation digitale des PME.",
  alternates: { canonical: "/blog" },
};

const articles = [
  {
    slug: "chatbot-whatsapp-pme",
    title: "Pourquoi un chatbot WhatsApp change vraiment les choses pour une PME",
    excerpt:
      "WhatsApp est le canal de communication numéro 1 en France. Voici comment l'automatiser sans perdre l'aspect humain.",
    date: "Bientôt disponible",
    readTime: "5 min",
    category: "Chatbots IA",
  },
  {
    slug: "automatisation-make-cas-concrets",
    title: "5 automatisations Make qui font gagner 5h par semaine",
    excerpt:
      "Des cas concrets d'automatisations no-code pour les petites entreprises : facturation, CRM, emails, réservations.",
    date: "Bientôt disponible",
    readTime: "7 min",
    category: "Automatisation",
  },
  {
    slug: "ia-pme-par-ou-commencer",
    title: "IA pour les PME : par où commencer sans se perdre",
    excerpt:
      "Un guide honnête pour les dirigeants de PME qui veulent utiliser l'IA sans jargon et sans budget démesuré.",
    date: "Bientôt disponible",
    readTime: "6 min",
    category: "IA & Stratégie",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Blog</p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Automatisation & IA
              <br />
              <span className="text-azure">pour les PME.</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Conseils pratiques, cas concrets, sans jargon.
            </p>
          </div>

          <div className="space-y-4">
            {articles.map((article) => (
              <div
                key={article.slug}
                className="rounded-2xl border border-border bg-card p-6 opacity-70"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary bg-azure-soft px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
                <h2 className="font-heading text-lg font-semibold mb-2">{article.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <span className="text-xs text-muted-foreground">{article.date}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
