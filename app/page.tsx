import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { Footer } from "@/components/Footer";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://auressia-shopify-agency.vercel.app";

export const metadata: Metadata = {
  title: "Auressia — Services digitaux IA pour les PME de la Côte d'Azur",
  description:
    "Chatbots IA, automatisations no-code, sites web. Livrés en 7 jours à des prix PME. Nice, Sophia Antipolis, Côte d'Azur.",
  alternates: {
    canonical: BASE_URL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Pour quel type d'activité ces services sont-ils adaptés ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour la plupart des PME, indépendants et prestataires de services. Si vous avez des tâches répétitives, des demandes clients récurrentes ou une présence en ligne à renforcer, l'IA peut probablement vous aider. L'audit gratuit est justement là pour vérifier ça dans votre contexte précis.",
      },
    },
    {
      "@type": "Question",
      name: "Je ne suis pas du tout technique. Est-ce que ça me convient ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "C'est exactement pour vous que ces services existent. Je m'occupe de tout — conception, développement, mise en production. Vous n'avez pas besoin de comprendre comment ça fonctionne pour en bénéficier. Ce qui compte, c'est le résultat.",
      },
    },
    {
      "@type": "Question",
      name: "Que se passe-t-il après les 30 jours de support ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous pouvez continuer en totale autonomie — tout est documenté. Si vous souhaitez un accompagnement continu, je propose des forfaits de maintenance. On en parle sans engagement lors de l'audit gratuit.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi les prix sont-ils inférieurs aux agences habituelles ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Je travaille seul, sans intermédiaires ni locaux, et j'utilise des outils no-code efficaces qui permettent de livrer vite. Je préfère des prix accessibles et une vraie réputation construite sur la satisfaction, plutôt que des marges d'agence.",
      },
    },
    {
      "@type": "Question",
      name: "Un chatbot peut-il vraiment remplacer une vraie conversation ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non, et ce n'est pas l'objectif. Un bon chatbot gère les demandes répétitives et les questions courantes — celles qui prennent du temps sans apporter de valeur ajoutée. Les vrais échanges, la relation client, la vente complexe : ça reste humain. Le chatbot libère du temps pour ce qui compte.",
      },
    },
    {
      "@type": "Question",
      name: "Les délais annoncés sont-ils réels ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. La plupart des services simples sont livrés en 3 à 5 jours. Les projets plus complexes (Pack Activité Complète) peuvent aller jusqu'à 10 à 12 jours. Je ne promets jamais ce que je ne peux pas tenir — si le délai doit changer, je vous préviens en amont.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
