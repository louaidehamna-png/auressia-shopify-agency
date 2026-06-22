"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`flex items-center gap-1 rounded-full px-3 py-2 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 border border-border shadow-sm backdrop-blur-md"
            : "bg-background/70 border border-border/50 backdrop-blur-sm"
        }`}
      >
        <Link href="/" className="mr-3 flex items-center gap-2 px-2">
          <Image src="/logo.png" alt="Auressia" width={28} height={23} priority />
          <span className="font-heading text-lg font-semibold tracking-tight">
            Auressia
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-0.5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "sm" }),
            "ml-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          Audit gratuit
        </Link>
      </nav>
    </header>
  );
}
