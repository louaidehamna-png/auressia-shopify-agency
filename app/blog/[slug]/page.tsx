import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Clock, ArrowLeft } from "lucide-react";
import { articles, getArticle } from "@/lib/blog";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://auressia-shopify-agency.vercel.app";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.filter((a) => a.published).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${BASE_URL}/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAt ?? undefined,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const relatedArticles = articles.filter(
    (a) => a.published && a.slug !== article.slug
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${BASE_URL}/og-image.png`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#louai-dehamna`,
      name: "Louai Dehamna",
      jobTitle: "Fondateur & Consultant IA",
      url: "https://www.linkedin.com/in/auressia-intelligence-0b73932a0/",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Auressia",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: `${BASE_URL}/blog/${article.slug}`,
  };

  const faqSchema = article.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <main className="pt-28 pb-24 px-4">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-primary bg-azure-soft px-2.5 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl mb-4">
            {article.title}
          </h1>

          <p className="text-sm text-muted-foreground mb-12">
            Par{" "}
            <a
              href="https://www.linkedin.com/in/auressia-intelligence-0b73932a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              Louai Dehamna
            </a>
            , fondateur d&apos;Auressia ·{" "}
            {new Date(article.publishedAt!).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            {article.content.map((block, i) =>
              block.startsWith("## ") ? (
                <h2 key={i} className="font-heading text-2xl font-semibold mt-10 mb-2">
                  {block.replace("## ", "")}
                </h2>
              ) : (
                <p key={i} className="leading-relaxed text-foreground/90">
                  {block}
                </p>
              )
            )}
          </div>

          {article.faq && article.faq.length > 0 && (
            <div className="mt-16">
              <h2 className="font-heading text-2xl font-semibold mb-6">
                Questions fréquentes
              </h2>
              <div className="space-y-6">
                {article.faq.map((item) => (
                  <div key={item.question}>
                    <h3 className="font-heading text-base font-semibold mb-1.5">
                      {item.question}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="font-heading text-2xl font-semibold mb-6">
                Articles liés
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="rounded-2xl border border-border bg-card p-5 hover:border-azure transition-colors"
                  >
                    <span className="text-xs font-medium text-primary bg-azure-soft px-2.5 py-1 rounded-full">
                      {related.category}
                    </span>
                    <h3 className="font-heading text-base font-semibold mt-3 mb-1.5">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {related.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 rounded-2xl border border-border bg-card p-6">
            <p className="font-heading text-lg font-semibold mb-2">
              Vous voulez évaluer si ça a du sens pour votre activité ?
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Audit gratuit de 30 minutes, réponse sous 48h.
            </p>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Voir les services
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
