"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Vous travaillez avec tous les types de PME ?",
    answer:
      "Oui. Restaurants, professions libérales, artisans, e-commerçants, cabinets de conseil — l'automatisation et les chatbots s'adaptent à presque toutes les activités. L'audit gratuit permet de vérifier si votre cas est adapté.",
  },
  {
    question: "Je ne suis pas technique. Est-ce que je peux quand même utiliser ces services ?",
    answer:
      "C'est exactement pour vous que j'ai créé Auressia. Je m'occupe de tout : la conception, le développement, la mise en production. Vous n'avez pas besoin de comprendre comment ça fonctionne pour en bénéficier.",
  },
  {
    question: "Que se passe-t-il après les 30 jours de support ?",
    answer:
      "Après les 30 jours, vous pouvez continuer de façon autonome — je vous fournis la documentation. Pour les besoins continus, je propose des forfaits de maintenance mensuelle. On en parle lors de l'audit.",
  },
  {
    question: "Pourquoi les prix sont-ils aussi bas ?",
    answer:
      "Je travaille seul, sans équipe commerciale ni locaux à payer, et j'utilise des outils no-code efficaces. Je préfère construire une réputation solide à Nice avec des prix accessibles, plutôt que facturer des marges d'agence.",
  },
  {
    question: "Les chatbots sont-ils vraiment efficaces pour mon secteur ?",
    answer:
      "Ça dépend de votre cas. Un chatbot WhatsApp pour un restaurant permet typiquement de gérer 80% des demandes de réservation sans intervention humaine. Pour un autre secteur, le bénéfice sera différent — c'est pourquoi l'audit existe.",
  },
  {
    question: "Quels sont les délais réels ? 7 jours c'est vraiment possible ?",
    answer:
      "Oui, pour la majorité des services. Les projets simples (chatbot starter, automatisations Make) sont souvent livrés en 3 à 5 jours. Le Pack Restaurant ou les projets complexes peuvent aller jusqu'à 10-12 jours. Je ne promets jamais ce que je ne peux pas tenir.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Questions fréquentes
          </p>
          <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            Des réponses
            <span className="text-terracotta"> directes.</span>
          </h2>
        </div>

        <Accordion className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={i}
              className="rounded-xl border border-border bg-card px-6"
            >
              <AccordionTrigger className="font-heading text-base font-medium text-left py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
