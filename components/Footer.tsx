import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const links = [
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <span className="font-heading text-xl font-semibold">Auressia</span>
            <p className="mt-2 text-sm text-muted-foreground">
              Services digitaux IA pour les PME de la Côte d&apos;Azur. Nice ·
              Sophia Antipolis · Monaco.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Auressia. Tous droits réservés.</p>
          <p>Fait à Nice, France 🌊</p>
        </div>
      </div>
    </footer>
  );
}
