"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";

export function CheckoutButton({ shopifyHandle, label }: { shopifyHandle: string; label: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shopifyHandle }),
      });
      const data = await res.json();
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        setError("Erreur lors de la création du checkout.");
      }
    } catch {
      setError("Erreur réseau. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-2">
      <button
        onClick={handleClick}
        disabled={loading}
        className={cn(
          buttonVariants({ size: "lg" }),
          "w-full rounded-xl justify-center"
        )}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            {label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
      {error && <p className="text-xs text-destructive text-center">{error}</p>}
    </div>
  );
}
