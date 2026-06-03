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

export const metadata: Metadata = {
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
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
