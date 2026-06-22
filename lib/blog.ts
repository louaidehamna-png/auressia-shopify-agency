export type FaqItem = { question: string; answer: string };

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string | null;
  published: boolean;
  content: string[];
  faq?: FaqItem[];
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
      "WhatsApp est un canal très utilisé par les clients en France pour tout ce qui touche à la prise de rendez-vous, aux questions rapides ou au suivi d'une commande. Le problème, c'est que ce canal reste souvent géré à la main, depuis un téléphone, en dehors des horaires de travail.",
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
    faq: [
      {
        question: "Combien de temps faut-il pour mettre en place un chatbot WhatsApp ?",
        answer:
          "Généralement entre 5 et 7 jours via l'API officielle WhatsApp Business : validation du numéro auprès de Meta, configuration des parcours de conversation, puis tests avant la mise en production.",
      },
      {
        question: "Quelle est la différence entre l'API officielle WhatsApp et les solutions non officielles ?",
        answer:
          "L'API officielle de Meta nécessite une validation du numéro mais garantit la stabilité du service. Les solutions non officielles, connectées au compte WhatsApp personnel, exposent à un risque de bannissement du numéro par Meta.",
      },
      {
        question: "Un chatbot WhatsApp peut-il remplacer le service client humain ?",
        answer:
          "Non. Un chatbot filtre et accélère les échanges répétitifs, mais doit transférer à un humain dès qu'une demande sort du cadre prévu (réclamation, question complexe, client mécontent).",
      },
    ],
  },
  {
    slug: "automatisation-make-cas-concrets",
    title: "5 automatisations Make qui peuvent faire gagner 5h par semaine",
    excerpt:
      "Des cas concrets d'automatisations no-code pour les petites entreprises : facturation, CRM, emails, réservations.",
    category: "Automatisation",
    readTime: "7 min",
    publishedAt: "2026-06-22",
    published: true,
    content: [
      "La plupart des petites entreprises perdent plusieurs heures par semaine sur des tâches qui ne demandent aucune réflexion : copier une info d'un outil à un autre, relancer un client par email, mettre à jour un tableau. Make.com permet d'automatiser ces tâches sans écrire une ligne de code, en connectant les outils que vous utilisez déjà (Gmail, Google Sheets, Stripe, WhatsApp, Notion, etc.).",
      "Voici 5 automatisations concrètes, classées par facilité de mise en place.",
      "## 1. Facturation automatique après chaque vente",
      "Dès qu'un paiement est reçu (Stripe, PayPal), Make génère automatiquement la facture, l'envoie par email au client et l'archive dans un dossier Google Drive ou Notion. Plus besoin de faire ça à la main à chaque vente, ni de chercher une facture égarée trois mois plus tard.",
      "## 2. Synchronisation des leads vers le CRM",
      "Chaque nouveau message reçu via le formulaire de contact du site, WhatsApp ou une publicité Facebook est automatiquement ajouté au CRM (Notion, Airtable, HubSpot) avec la source, la date et les informations du contact. Le dirigeant reçoit une notification immédiate au lieu de découvrir le lead trois jours plus tard en vérifiant sa boîte mail.",
      "## 3. Relances automatiques des devis sans réponse",
      "Un devis envoyé et resté sans réponse après 3 jours déclenche automatiquement un email de relance personnalisé. C'est l'une des automatisations qui peut avoir le plus d'impact direct sur le chiffre d'affaires : un devis sans réponse n'a pas forcément été refusé, il a pu simplement être oublié dans une boîte mail chargée.",
      "## 4. Confirmations et rappels de rendez-vous",
      "Connecté à un calendrier (Google Calendar, Cal.com), Make envoie automatiquement une confirmation au moment de la prise de rendez-vous, puis un rappel 24h avant par email ou SMS. Ça réduit directement le taux de rendez-vous manqués, qui coûte cher dans les métiers de service.",
      "## 5. Reporting hebdomadaire automatique",
      "Chaque lundi matin, Make compile les ventes, les nouveaux leads et les rendez-vous de la semaine précédente dans un récapitulatif envoyé par email ou posté sur Slack. Le dirigeant a une vision claire de son activité sans avoir à ouvrir cinq outils différents pour la reconstituer.",
      "## Ce que ça coûte vraiment",
      "Make propose un plan gratuit limité en nombre d'opérations, suffisant pour tester une automatisation simple. Au-delà, les plans payants démarrent autour de 9€/mois. Le vrai coût n'est pas l'abonnement, c'est le temps de configuration : construire un scénario fiable (avec gestion des erreurs, des cas particuliers) prend généralement plusieurs heures par automatisation pour quelqu'un qui découvre l'outil.",
      "## Combien de temps pour mettre en place les 5",
      "Pour une PME avec des outils déjà en place (CRM, calendrier, Stripe), la mise en place de ces 5 automatisations prend généralement 5 jours : audit des outils existants, construction des scénarios, tests, puis ajustements. Le gain de temps hebdomadaire dépend ensuite du volume d'activité de l'entreprise.",
      "Si vous voulez savoir lesquelles de ces automatisations ont du sens pour votre activité précise, un audit gratuit de 30 minutes suffit à le cerner — chaque métier a ses propres tâches répétitives.",
    ],
    faq: [
      {
        question: "Combien coûte Make.com ?",
        answer:
          "Make propose un plan gratuit limité en nombre d'opérations. Les plans payants démarrent autour de 9€/mois. Le vrai coût n'est pas l'abonnement mais le temps de configuration des scénarios.",
      },
      {
        question: "Faut-il savoir coder pour utiliser Make ?",
        answer:
          "Non, Make est un outil no-code : les automatisations se construisent en connectant visuellement des applications (Gmail, Stripe, Notion, etc.) sans écrire de code.",
      },
      {
        question: "Combien de temps faut-il pour mettre en place plusieurs automatisations ?",
        answer:
          "Pour une PME avec des outils déjà en place (CRM, calendrier, Stripe), la mise en place de 5 automatisations prend généralement 5 jours : audit des outils existants, construction des scénarios, tests, ajustements.",
      },
    ],
  },
  {
    slug: "ia-pme-par-ou-commencer",
    title: "IA pour les PME : par où commencer sans se perdre",
    excerpt:
      "Un guide honnête pour les dirigeants de PME qui veulent utiliser l'IA sans jargon et sans budget démesuré.",
    category: "IA & Stratégie",
    readTime: "6 min",
    publishedAt: "2026-06-22",
    published: true,
    content: [
      "\"IA\" est devenu un mot qu'on entend partout, sans qu'il soit toujours clair ce que ça veut dire concrètement pour une petite entreprise. Beaucoup de dirigeants de PME hésitent à s'y mettre, soit parce que ça semble réservé aux grandes structures avec un budget IT, soit parce qu'ils ne savent pas par où commencer sans perdre du temps et de l'argent sur quelque chose qui ne sert à rien.",
      "Voici une façon honnête de voir les choses.",
      "## Le piège du \"tout automatiser d'un coup\"",
      "Un risque à éviter : vouloir transformer toute l'entreprise en même temps, en automatisant le service client, le marketing, la comptabilité et le recrutement tout à la fois. Le projet devient alors trop gros, prend des mois, coûte cher, et il devient difficile de voir un résultat concret avant longtemps.",
      "La bonne approche, c'est l'inverse : identifier une seule tâche qui prend du temps chaque semaine et qui suit toujours le même schéma (répondre aux mêmes questions, copier les mêmes infos d'un outil à l'autre, relancer les mêmes types de clients), puis la régler avant de passer à la suivante.",
      "## Les 3 types d'IA réellement utiles pour une PME",
      "Pour la plupart des petites entreprises, l'IA utile se range dans trois catégories, pas plus : un chatbot pour gérer les conversations répétitives avec les clients (sur le site ou WhatsApp), une automatisation no-code pour faire circuler l'information entre les outils existants (CRM, facturation, calendrier), et la génération de contenu pour accélérer la rédaction de posts, d'emails ou de descriptions de produits. Tout le reste — IA prédictive, modèles sur-mesure, agents complexes — concerne des entreprises avec des besoins et des volumes très différents d'une PME classique.",
      "## Combien ça coûte vraiment",
      "Il n'y a pas de budget IA universel. Une automatisation simple peut démarrer autour de 190€, un chatbot autour de 290-490€ selon la complexité, un site avec IA intégrée autour de 390€. Le vrai risque financier n'est pas le prix de l'outil, c'est de payer pour un projet mal cadré qui ne résout pas un vrai problème de l'entreprise.",
      "## Les signaux qui indiquent que c'est le bon moment",
      "Trois signes indiquent généralement qu'une PME est prête à automatiser une tâche précise : la même question revient plusieurs fois par semaine de la part des clients, une tâche administrative prend plus d'une heure par semaine sans demander de réflexion particulière, ou l'entreprise perd des opportunités simplement parce que personne n'a le temps de répondre assez vite.",
      "Si aucun de ces signaux n'est présent, ce n'est probablement pas encore le moment — et c'est une réponse honnête, pas un argument de vente.",
      "## Par où commencer concrètement",
      "La meilleure première étape n'est pas d'acheter un outil, mais de lister les tâches répétitives de la semaine et de repérer celle qui revient le plus souvent. C'est exactement ce qu'un audit gratuit permet de faire en 30 minutes : identifier la tâche la plus rentable à automatiser en premier, avant de s'engager sur quoi que ce soit.",
    ],
    faq: [
      {
        question: "Par où commencer avec l'IA pour une PME ?",
        answer:
          "Par lister les tâches répétitives de la semaine et repérer celle qui revient le plus souvent, plutôt que d'acheter un outil sans avoir identifié de problème précis à résoudre.",
      },
      {
        question: "Combien coûte un projet IA pour une PME ?",
        answer:
          "Il n'y a pas de budget universel : une automatisation simple peut démarrer autour de 190€, un chatbot autour de 290-490€, un site avec IA intégrée autour de 390€, selon la complexité du besoin.",
      },
      {
        question: "Comment savoir si ma PME est prête pour l'IA ?",
        answer:
          "Trois signaux : la même question revient plusieurs fois par semaine de la part des clients, une tâche administrative prend plus d'une heure par semaine sans réflexion particulière, ou l'entreprise perd des opportunités faute de temps pour répondre assez vite.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug && article.published);
}
