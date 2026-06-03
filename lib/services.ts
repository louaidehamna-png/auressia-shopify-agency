export type Service = {
  handle: string;
  shopifyHandle: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice: number;
  delivery: string;
  highlights: string[];
  included: string[];
  tag?: string;
};

export const services: Service[] = [
  {
    handle: "chatbot-voiceflow-starter",
    shopifyHandle: "chatbot-starter",
    name: "Chatbot Starter",
    tagline: "Vos questions fréquentes, gérées automatiquement.",
    description:
      "Vos clients posent les mêmes questions encore et encore. Ce chatbot les gère à votre place — sur votre site ou WhatsApp, même à 2h du matin.",
    longDescription:
      "Entraîné sur vos propres contenus (FAQ, offres, horaires, tarifs), ce chatbot répond instantanément à vos visiteurs sans que vous ayez à intervenir. Intégrable sur votre site web ou directement dans WhatsApp. Idéal pour décharger votre SAV sur les demandes répétitives.",
    price: 290,
    originalPrice: 590,
    delivery: "5 jours",
    highlights: [
      "Intégration site web ou WhatsApp",
      "Entraîné sur vos FAQ et offres",
      "1 révision incluse",
    ],
    included: [
      "Conception du flux de conversation",
      "Intégration sur votre canal (site ou WhatsApp)",
      "Entraînement sur vos contenus",
      "Tests & mise en production",
      "Documentation d'utilisation",
      "30 jours de support",
    ],
    tag: "Offre de lancement",
  },
  {
    handle: "chatbot-whatsapp-pro",
    shopifyHandle: "chatbot-whatsapp-pro",
    name: "Chatbot WhatsApp Pro",
    tagline: "Votre WhatsApp travaille même quand vous ne l'êtes pas.",
    description:
      "WhatsApp est votre premier canal client, mais vous ne pouvez pas y être en permanence. Ce chatbot répond, qualifie les demandes, prend des rendez-vous et envoie des devis — vous n'intervenez que quand c'est vraiment nécessaire.",
    longDescription:
      "Construit sur l'API officielle WhatsApp Business, ce chatbot gère l'ensemble de vos conversations entrantes. Il peut qualifier les prospects, collecter des informations, proposer des créneaux dans votre agenda et notifier votre équipe sur les cas complexes. Zéro friction pour vos clients, zéro charge pour vous.",
    price: 490,
    originalPrice: 990,
    delivery: "7 jours",
    highlights: [
      "WhatsApp Business API officielle",
      "Prise de rendez-vous intégrée",
      "Qualification des demandes",
      "2 révisions incluses",
    ],
    included: [
      "Configuration WhatsApp Business API",
      "Flux de conversation sur mesure",
      "Intégration agenda (Google Calendar ou autre)",
      "Notifications équipe sur cas complexes",
      "Tests & mise en production",
      "30 jours de support",
    ],
    tag: "Offre de lancement",
  },
  {
    handle: "automatisation-make",
    shopifyHandle: "automatisation-make",
    name: "Automatisation Make",
    tagline: "Ces 5 tâches répétitives ? Elles tourneront seules.",
    description:
      "Vous passez des heures chaque semaine sur des tâches identiques — saisie, transfert de données, envois d'emails, mises à jour. Je les automatise une fois, elles tournent seules après.",
    longDescription:
      "Avec Make (ex-Integromat), je conçois 5 scénarios d'automatisation sur mesure pour votre activité. Connexion entre vos outils existants (CRM, Google Sheets, email, Notion, Slack, etc.), déclencheurs personnalisés, gestion d'erreurs. Vous récupérez des heures de travail chaque semaine.",
    price: 190,
    originalPrice: 390,
    delivery: "5 jours",
    highlights: [
      "5 scénarios Make sur mesure",
      "Connexion avec vos outils existants",
      "Documentation complète incluse",
    ],
    included: [
      "Audit de vos flux de travail actuels",
      "Conception de 5 scénarios d'automatisation",
      "Connexion CRM, email, sheets, Slack…",
      "Tests & activation",
      "Documentation détaillée",
      "30 jours de support",
    ],
  },
  {
    handle: "site-one-pager-framer",
    shopifyHandle: "site-one-pager-framer",
    name: "Site One-Pager Framer",
    tagline: "Un site qui donne envie de vous contacter.",
    description:
      "Un site one-page moderne, rapide et optimisé SEO. Conçu pour convertir, pas juste pour cocher la case présence en ligne.",
    longDescription:
      "Conçu sur Framer avec une approche conversion-first : chaque section a un rôle précis. Le résultat est un site rapide (Core Web Vitals au vert), mobile-first, optimisé pour Google, et qui reflète réellement votre activité. Hébergement Framer inclus la première année.",
    price: 390,
    originalPrice: 790,
    delivery: "7 jours",
    highlights: [
      "Design sur mesure, pas un template",
      "SEO on-page complet",
      "Mobile-first",
      "Hébergement Framer inclus 1 an",
    ],
    included: [
      "Design et intégration sur Framer",
      "Copywriting des sections principales",
      "SEO on-page (balises, meta, vitesse)",
      "Formulaire de contact intégré",
      "Configuration du domaine",
      "30 jours de support",
    ],
  },
  {
    handle: "pack-activite-complete",
    shopifyHandle: "pack-activite-complete",
    name: "Pack Activité Complète",
    tagline: "Le duo qui change vraiment les choses.",
    description:
      "Chatbot WhatsApp + automatisation des réservations et relances. La combinaison la plus impactante pour les commerces et prestataires de services qui veulent reprendre le contrôle de leur temps.",
    longDescription:
      "Ce pack combine un chatbot WhatsApp Pro et un système d'automatisation complet : confirmations de rendez-vous, rappels automatiques, suivi post-service. Moins de no-shows, moins de temps au téléphone, plus de chiffre d'affaires. Conçu pour les activités à forte composante relationnelle.",
    price: 690,
    originalPrice: 1490,
    delivery: "10 jours",
    highlights: [
      "Chatbot WhatsApp complet",
      "Automatisation réservations & relances",
      "Rappels automatiques (SMS ou WhatsApp)",
      "Tableau de bord de suivi",
    ],
    included: [
      "Tout le Chatbot WhatsApp Pro",
      "Système de réservation automatisé",
      "Rappels et confirmations automatiques",
      "Tableau de bord de pilotage",
      "Formation à l'outil (1h)",
      "30 jours de support",
    ],
    tag: "Offre de lancement",
  },
  {
    handle: "audit-ia",
    shopifyHandle: "audit-ia-automatisation",
    name: "Audit IA & Automatisation",
    tagline: "30 minutes pour savoir exactement quoi faire.",
    description:
      "Un diagnostic honnête de votre activité : pas de jargon, pas de pitch, pas de vente forcée. On identifie ensemble les 3 automatisations qui auraient le plus d'impact pour vous.",
    longDescription:
      "En 30 minutes d'échange, j'analyse vos processus actuels et identifie les opportunités IA les plus pertinentes pour votre contexte. Vous repartez avec un rapport personnalisé et une feuille de route concrète — que vous décidiez de travailler avec moi ou non.",
    price: 0,
    originalPrice: 90,
    delivery: "Sous 48h",
    highlights: [
      "Appel visio 30 minutes",
      "Rapport personnalisé",
      "Feuille de route IA concrète",
    ],
    included: [
      "Appel de diagnostic (30 min)",
      "Analyse de vos processus actuels",
      "Identification des 3 priorités IA",
      "Rapport PDF personnalisé",
      "Feuille de route actionnable",
    ],
    tag: "Gratuit",
  },
];

export function getServiceByHandle(handle: string): Service | undefined {
  return services.find((s) => s.handle === handle);
}
