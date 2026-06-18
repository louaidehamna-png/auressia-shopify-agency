export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string | null;
  published: boolean;
  content: string[];
};

export const articles: BlogArticle[] = [
  {
    slug: "chatbot-whatsapp-pme",
    title: "Pourquoi un chatbot WhatsApp change vraiment les choses pour une PME",
    excerpt:
      "WhatsApp est le canal de communication numéro 1 en France. Voici comment l'automatiser sans perdre l'aspect humain.",
    category: "Chatbots IA",
    readTime: "6 min",
    publishedAt: "2026-06-18",
    published: true,
    content: [
      "WhatsApp est devenu le canal de contact préféré des clients en France, devant l'email et le téléphone, pour tout ce qui touche à la prise de rendez-vous, aux questions rapides ou au suivi d'une commande. Le problème pour la plupart des petites entreprises, c'est que ce canal reste géré à la main, depuis un téléphone, souvent en dehors des horaires de travail.",
      "## Le coût réel de répondre à la main",
      "Une PME qui gère WhatsApp Business manuellement perd des opportunités de trois façons : les messages reçus le soir ou le week-end restent sans réponse jusqu'au lendemain, les questions répétitives (horaires, tarifs, disponibilités) prennent du temps à chaque fois, et certains prospects qui n'obtiennent pas de réponse rapide se tournent simplement vers un concurrent qui répond plus vite.",
      "Un chatbot ne remplace pas la relation humaine, il filtre et accélère la partie répétitive pour que le temps humain se concentre sur les échanges qui ont vraiment besoin d'un humain.",
      "## API officielle vs solutions non officielles",
      "Il existe deux façons de connecter un chatbot à WhatsApp. La première passe par l'API officielle WhatsApp Business de Meta, qui nécessite une validation du numéro et du nom de l'entreprise, mais garantit la stabilité du service. La seconde repose sur des outils non officiels qui se connectent au compte WhatsApp personnel — plus rapides à mettre en place, mais avec un vrai risque de bannissement du numéro par Meta, ce qui peut couper l'accès à WhatsApp Business du jour au lendemain.",
      "Pour une entreprise qui dépend de ce canal pour vendre, ce risque n'en vaut pas la peine. C'est pour cette raison que l'API officielle est la seule option recommandée dès qu'il y a un volume de messages régulier.",
      "## Ce qu'un chatbot WhatsApp peut faire concrètement",
      "Les cas d'usage les plus efficaces pour une PME sont les suivants : répondre aux questions fréquentes (horaires, tarifs, zone d'intervention) à toute heure, qualifier un lead en posant 2 ou 3 questions avant de transmettre la conversation à un humain, prendre un rendez-vous directement dans un calendrier connecté, et envoyer des confirmations ou rappels automatiques (rendez-vous, commande, livraison).",
      "## Ce qu'il ne doit pas faire",
      "Un bon chatbot sait reconnaître ses limites. Dès qu'une demande sort du cadre prévu — une réclamation, une question complexe, un client mécontent — il doit transférer la conversation à un humain plutôt que de répondre à côté. C'est ce qui évite l'effet \"robot frustrant\" que beaucoup de clients ont déjà subi avec de mauvais chatbots.",
      "## Combien de temps ça prend à mettre en place",
      "La mise en place d'un chatbot WhatsApp Business via l'API officielle prend généralement entre 5 et 7 jours : validation du numéro auprès de Meta, configuration des parcours de conversation (FAQ, prise de RDV, qualification), puis tests avant la mise en production. C'est un délai court comparé au temps perdu chaque semaine à répondre manuellement aux mêmes questions.",
      "Si vous voulez évaluer si ça a du sens pour votre activité, le plus simple est de partir d'un audit gratuit de 30 minutes plutôt que de deviner — chaque métier a ses propres questions répétitives et ses propres points de friction.",
    ],
  },
  {
    slug: "automatisation-make-cas-concrets",
    title: "5 automatisations Make qui font gagner 5h par semaine",
    excerpt:
      "Des cas concrets d'automatisations no-code pour les petites entreprises : facturation, CRM, emails, réservations.",
    category: "Automatisation",
    readTime: "7 min",
    publishedAt: null,
    published: false,
    content: [],
  },
  {
    slug: "ia-pme-par-ou-commencer",
    title: "IA pour les PME : par où commencer sans se perdre",
    excerpt:
      "Un guide honnête pour les dirigeants de PME qui veulent utiliser l'IA sans jargon et sans budget démesuré.",
    category: "IA & Stratégie",
    readTime: "6 min",
    publishedAt: null,
    published: false,
    content: [],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug && article.published);
}
