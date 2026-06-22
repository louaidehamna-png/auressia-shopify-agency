import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://auressia-shopify-agency.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Auressia — Services digitaux IA pour les PME de la Côte d'Azur",
    template: "%s | Auressia",
  },
  description:
    "Chatbots IA, automatisations no-code, sites web. Services digitaux à prix PME pour les entrepreneurs de Nice, Sophia Antipolis et la Côte d'Azur. Livraison en 7 jours.",
  keywords: [
    "agence chatbot Nice",
    "automatisation PME Sophia Antipolis",
    "chatbot WhatsApp restaurant Côte d'Azur",
    "agence IA Nice",
    "automatisation no-code 06",
    "Voiceflow Nice",
    "Make automation PME",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Auressia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Auressia — Services digitaux IA pour les PME de la Côte d'Azur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${BASE_URL}/#organization`,
  name: "Auressia",
  alternateName: "Auressia — Services digitaux IA",
  description:
    "Services digitaux IA pour les PME de la Côte d'Azur. Chatbots, automatisations Make, sites Framer — livrés en 7 jours.",
  url: BASE_URL,
  email: "louaidehamna@gmail.com",
  telephone: "+33760009646",
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/logo.png`,
  priceRange: "€190 – €690",
  currenciesAccepted: "EUR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 Rue Mantega",
    postalCode: "06100",
    addressLocality: "Nice",
    addressRegion: "Alpes-Maritimes",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Nice" },
    { "@type": "City", name: "Sophia Antipolis" },
    { "@type": "City", name: "Monaco" },
  ],
  founder: {
    "@type": "Person",
    "@id": `${BASE_URL}/#louai-dehamna`,
    name: "Louai Dehamna",
    jobTitle: "Fondateur & Consultant IA",
    email: "louaidehamna@gmail.com",
  },
  sameAs: ["https://www.linkedin.com/in/auressia-intelligence-0b73932a0/"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services digitaux IA",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Chatbot Starter", description: "Chatbot IA pour site web, livré en 5 jours." },
        price: "290", priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Chatbot WhatsApp Pro", description: "Chatbot IA intégré à WhatsApp Business, livré en 7 jours." },
        price: "490", priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Automatisation Make", description: "5 scénarios Make.com personnalisés, livrés en 5 jours." },
        price: "190", priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Site One-Pager Framer", description: "Site one-page sur Framer, mobile-first, livré en 7 jours." },
        price: "390", priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Pack Activité Complète", description: "Chatbot + automatisation + site one-pager, livré en 10 jours." },
        price: "690", priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Audit IA & Automatisation", description: "Audit gratuit, réponse sous 48h." },
        price: "0", priceCurrency: "EUR",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
