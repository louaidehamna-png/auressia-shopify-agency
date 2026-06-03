"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SHOPIFY_DOMAIN = "eemfbd-0n.myshopify.com";

export function CheckoutButton({ shopifyHandle, label }: { shopifyHandle: string; label: string }) {
  const url = `https://${SHOPIFY_DOMAIN}/products/${shopifyHandle}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ size: "lg" }),
        "w-full rounded-xl justify-center"
      )}
    >
      {label}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  );
}
