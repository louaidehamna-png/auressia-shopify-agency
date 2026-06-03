import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Auressia — Services digitaux IA pour les PME de la Côte d'Azur",
  description:
    "Chatbots IA, automatisations no-code, sites web. Livrés en 7 jours à des prix PME. Nice, Sophia Antipolis, Côte d'Azur.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
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
