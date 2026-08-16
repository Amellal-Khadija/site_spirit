import type { Metadata } from "next";
import Menu from "@/composant/Menu";
import Accueil from "@/composant/Accueil";
import Footer from "@/composant/Footer";

export const metadata: Metadata = {
  title: "Spirit Engineering Academy — Formation Transport & Sécurité Routière Maroc",
  description:
    "Centre de formation professionnelle à Casablanca : conducteurs professionnels (Loi 52-05), ADR, Éco-conduite, Sécurité routière, HSE et logistique. Formations présentiel et en ligne.",
  alternates: {
    canonical: "https://spirit.engineering/",
    languages: {
      fr: "https://spirit.engineering/fr/",
      en: "https://spirit.engineering/en/",
    },
  },
  openGraph: {
    url: "https://spirit.engineering/",
    title: "Spirit Engineering Academy — Formation Transport & Sécurité Routière Maroc",
    description:
      "Formation conducteurs professionnels, sécurité routière et logistique à Casablanca. Loi 52-05, ADR, Éco-conduite.",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Menu />
      <main className="flex-1 pt-16">
        <Accueil />
      </main>
      <Footer />
    </div>
  );
}
