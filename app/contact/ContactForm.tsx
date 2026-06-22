"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Votre nom est requis"),
  email: z.string().email("Adresse email invalide"),
  activity: z.string().min(2, "Décrivez brièvement votre activité"),
  message: z.string().min(10, "Décrivez votre besoin en quelques mots"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-4">
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="text-center py-20">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-azure-soft">
                  <CheckCircle2 className="h-8 w-8 text-azure" />
                </div>
              </div>
              <h1 className="font-heading text-3xl font-semibold mb-4">
                Message reçu.
              </h1>
              <p className="text-muted-foreground text-lg">
                Je vous réponds sous 24h pour convenir d&apos;un créneau
                d&apos;audit. À très bientôt.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-12">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  Contact
                </p>
                <h1 className="font-heading text-4xl font-semibold tracking-tight mb-4 sm:text-5xl">
                  Parlons de votre
                  <span className="text-azure"> projet.</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Remplissez ce formulaire et je vous réponds sous 24h pour
                  convenir d&apos;un audit gratuit de 30 minutes. Pas
                  d&apos;engagement, pas de pitch commercial.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Votre nom
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Jean Dupont"
                      className={cn(
                        "w-full rounded-xl border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20",
                        errors.name ? "border-destructive" : "border-border"
                      )}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="jean@exemple.fr"
                      className={cn(
                        "w-full rounded-xl border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20",
                        errors.email ? "border-destructive" : "border-border"
                      )}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Votre activité
                  </label>
                  <input
                    {...register("activity")}
                    placeholder="Ex : cabinet d'architectes, salon de coiffure, consultant RH…"
                    className={cn(
                      "w-full rounded-xl border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20",
                      errors.activity ? "border-destructive" : "border-border"
                    )}
                  />
                  {errors.activity && (
                    <p className="mt-1.5 text-xs text-destructive">
                      {errors.activity.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ce que vous cherchez à résoudre
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Décrivez le problème ou l'objectif : tâches répétitives, demandes clients à gérer, présence en ligne à renforcer…"
                    className={cn(
                      "w-full rounded-xl border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none",
                      errors.message ? "border-destructive" : "border-border"
                    )}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full rounded-xl justify-center"
                  )}
                >
                  {loading ? "Envoi en cours…" : "Envoyer"}
                  {!loading && <Send className="ml-2 h-4 w-4" />}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Vos données ne sont pas partagées. Réponse sous 24h.
                </p>
              </form>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
