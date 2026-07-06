import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Clock } from "lucide-react";
import { articles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Automatisation et IA pour les PME",
  description:
    "Conseils pratiques sur l'automatisation no-code, les chatbots IA et la transformation digitale des PME.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_APP_URL ?? "https://www.auressia.fr"}/blog` },
};

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
            {articles.map((article) => {
              const card = (
                <div
                  className={`rounded-2xl border border-border bg-card p-6 ${
                    article.published ? "hover:border-azure transition-colors" : "opacity-70"
                  }`}
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
                  <span className="text-xs text-muted-foreground">
                    {article.published
                      ? new Date(article.publishedAt!).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      : "Bientôt disponible"}
                  </span>
                </div>
              );

              return article.published ? (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  {card}
                </Link>
              ) : (
                <div key={article.slug}>{card}</div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
