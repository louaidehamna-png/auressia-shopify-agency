import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_APP_URL ?? "https://auressia-shopify-agency.vercel.app"}/mentions-legales` },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-4">
        <div className="mx-auto max-w-3xl prose prose-neutral dark:prose-invert">
          <h1 className="font-heading text-4xl font-semibold mb-8">Mentions légales</h1>

          <h2>Éditeur du site</h2>
          <p>
            Auressia — Louai Dehamna<br />
            Nice, France<br />
            Email : louaidehamna@gmail.com
          </p>

          <h2>Hébergement</h2>
          <p>
            Vercel Inc.<br />
            440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
            vercel.com
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, graphismes) est la propriété exclusive
            d'Auressia. Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les données collectées via le formulaire de contact (nom, email, message) sont utilisées
            uniquement pour répondre à vos demandes. Elles ne sont pas transmises à des tiers.
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression
            de vos données. Pour exercer ces droits : louaidehamna@gmail.com
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site utilise des cookies d'analyse (Vercel Analytics) pour mesurer l'audience de manière
            anonyme. Aucun cookie publicitaire n'est utilisé.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
