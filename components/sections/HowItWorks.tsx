const steps = [
  {
    number: "01",
    title: "Audit gratuit",
    description:
      "On commence par 30 minutes ensemble pour comprendre votre activité et identifier les opportunités IA les plus rentables.",
  },
  {
    number: "02",
    title: "Devis & validation",
    description:
      "Je vous envoie un devis détaillé sous 24h. Pas de surprise, pas de frais cachés. Vous validez avant de payer.",
  },
  {
    number: "03",
    title: "Livraison en 7 jours",
    description:
      "Je construis la solution, vous êtes tenu informé à chaque étape. Livraison + mise en production incluse.",
  },
  {
    number: "04",
    title: "Suivi 30 jours",
    description:
      "30 jours de support inclus après livraison. Ajustements, corrections, questions — je suis disponible.",
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="py-24 px-4 bg-muted/40">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Comment ça marche
          </p>
          <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            Simple, rapide,
            <span className="text-azure"> sans friction.</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute top-7 left-full w-full h-px bg-border -translate-x-1/2"
                />
              )}
              <div className="flex flex-col gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-azure-soft border border-azure/20">
                  <span className="font-heading text-lg font-semibold text-azure">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
