"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Pour quel type d'activité ces services sont-ils adaptés ?",
    answer:
      "Pour la plupart des PME, indépendants et prestataires de services. Si vous avez des tâches répétitives, des demandes clients récurrentes ou une présence en ligne à renforcer, l'IA peut probablement vous aider. L'audit gratuit est justement là pour vérifier ça dans votre contexte précis.",
  },
  {
    question: "Je ne suis pas du tout technique. Est-ce que ça me convient ?",
    answer:
      "C'est exactement pour vous que ces services existent. Je m'occupe de tout — conception, développement, mise en production. Vous n'avez pas besoin de comprendre comment ça fonctionne pour en bénéficier. Ce qui compte, c'est le résultat.",
  },
  {
    question: "Que se passe-t-il après les 30 jours de support ?",
    answer:
      "Vous pouvez continuer en totale autonomie — tout est documenté. Si vous souhaitez un accompagnement continu, je propose des forfaits de maintenance. On en parle sans engagement lors de l'audit gratuit.",
  },
  {
    question: "Pourquoi les prix sont-ils inférieurs aux agences habituelles ?",
    answer:
      "Je travaille seul, sans intermédiaires ni locaux, et j'utilise des outils no-code efficaces qui permettent de livrer vite. Je préfère des prix accessibles et une vraie réputation construite sur la satisfaction, plutôt que des marges d'agence.",
  },
  {
    question: "Un chatbot peut-il vraiment remplacer une vraie conversation ?",
    answer:
      "Non, et ce n'est pas l'objectif. Un bon chatbot gère les demandes répétitives et les questions courantes — celles qui prennent du temps sans apporter de valeur ajoutée. Les vrais échanges, la relation client, la vente complexe : ça reste humain. Le chatbot libère du temps pour ce qui compte.",
  },
  {
    question: "Les délais annoncés sont-ils réels ?",
    answer:
      "Oui. La plupart des services simples sont livrés en 3 à 5 jours. Les projets plus complexes (Pack Activité Complète) peuvent aller jusqu'à 10 à 12 jours. Je ne promets jamais ce que je ne peux pas tenir — si le délai doit changer, je vous préviens en amont.",
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
