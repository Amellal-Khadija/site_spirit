import Menu from "@/composant/Menu";
import Formations from "@/composant/Formations";
import Footer from "@/composant/Footer";

export const metadata = {
  title: "Formations Transport & Sécurité Routière — Maroc",
  description:
    "Catalogue de formations professionnelles : conducteurs (Loi 52-05), ADR, Éco-conduite, Sécurité routière, HSE, Logistique. Présentiel Casablanca et en ligne. Spirit Engineering Academy.",
  keywords: ["formation transport Maroc", "formation conducteur Casablanca", "loi 52-05", "formation ADR", "éco-conduite", "sécurité routière formation"],
  alternates: {
    canonical: "https://spirit.engineering/formations/",
    languages: {
      fr: "https://spirit.engineering/fr/formations/",
      en: "https://spirit.engineering/en/formations/",
    },
  },
  openGraph: {
    url: "https://spirit.engineering/formations/",
    title: "Formations Transport & Sécurité Routière Maroc — Spirit Engineering Academy",
    description: "Formations présentiel et en ligne : Loi 52-05, ADR, Éco-conduite, HSE à Casablanca.",
  },
};

export default function FormationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Menu />
      <main className="flex-1 pt-16">
        <Formations />
      </main>
      <Footer />
    </div>
  );
}
