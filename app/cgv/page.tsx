import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_APP_URL ?? "https://auressia-shopify-agency.vercel.app"}/cgv` },
};

export default function CGVPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-4">
        <div className="mx-auto max-w-3xl prose prose-neutral dark:prose-invert">
          <h1 className="font-heading text-4xl font-semibold mb-8">Conditions générales de vente</h1>

          <h2>1. Objet</h2>
          <p>
            Les présentes CGV régissent les ventes de services digitaux proposés par Auressia (Louai Dehamna)
            à ses clients professionnels et particuliers.
          </p>

          <h2>2. Services et tarifs</h2>
          <p>
            Les prix affichés sont en euros TTC. Auressia est en régime de franchise de TVA (article 293 B du CGI) —
            TVA non applicable. Les tarifs sont ceux en vigueur au moment de la commande.
          </p>

          <h2>3. Commande et paiement</h2>
          <p>
            La commande est confirmée après paiement complet via Shopify Payments. Le paiement vaut acceptation
            des présentes CGV. Aucune commande n'est prise en charge sans paiement préalable.
          </p>

          <h2>4. Délais de livraison</h2>
          <p>
            Les délais indiqués sur les fiches service sont donnés à titre indicatif et courent à partir de la
            réception du paiement et des éléments nécessaires fournis par le client. Tout retard ne saurait
            donner lieu à des pénalités sauf accord écrit préalable.
          </p>

          <h2>5. Droit de rétractation</h2>
          <p>
            Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique
            pas aux prestations de services pleinement exécutées avant la fin du délai de rétractation.
            Pour l'Audit IA gratuit, aucun remboursement n'est applicable.
          </p>

          <h2>6. Responsabilité</h2>
          <p>
            Auressia s'engage à livrer les services décrits dans les fiches produits. La responsabilité d'Auressia
            ne saurait être engagée en cas de force majeure ou de manquement du client à ses obligations
            (fourniture des accès, contenus, validations).
          </p>

          <h2>7. Propriété intellectuelle</h2>
          <p>
            À compter du paiement intégral, le client est propriétaire des livrables produits. Auressia conserve
            le droit de mentionner le projet dans son portfolio, sauf demande contraire écrite du client.
          </p>

          <h2>8. Loi applicable</h2>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à
            rechercher une solution amiable avant tout recours judiciaire. Tribunal compétent : Nice (06).
          </p>

          <p className="text-sm text-muted-foreground mt-8">Dernière mise à jour : juin 2026</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
