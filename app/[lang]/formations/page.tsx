import type { Metadata } from "next";
import Menu from "@/composant/Menu";
import Formations from "@/composant/Formations";
import Footer from "@/composant/Footer";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Transport & Road Safety Training Programs — Morocco"
      : "Formations Transport & Sécurité Routière — Maroc",
    description: isEn
      ? "Professional training catalog: drivers (Law 52-05), ADR, eco-driving, road safety, HSE, logistics. In-person in Casablanca and online. Spirit Engineering Academy."
      : "Catalogue de formations professionnelles : conducteurs (Loi 52-05), ADR, Éco-conduite, Sécurité routière, HSE, Logistique. Présentiel Casablanca et en ligne. Spirit Engineering Academy.",
    keywords: isEn
      ? ["transport training Morocco", "professional driver training Casablanca", "law 52-05", "ADR training", "eco-driving", "road safety training"]
      : ["formation transport Maroc", "formation conducteur Casablanca", "loi 52-05", "formation ADR", "éco-conduite", "sécurité routière formation"],
    alternates: {
      canonical: `https://spirit.engineering/${lang}/formations/`,
      languages: {
        fr: "https://spirit.engineering/fr/formations/",
        en: "https://spirit.engineering/en/formations/",
      },
    },
    openGraph: {
      url: `https://spirit.engineering/${lang}/formations/`,
      title: isEn
        ? "Transport & Road Safety Training — Morocco — Spirit Engineering Academy"
        : "Formations Transport & Sécurité Routière Maroc — Spirit Engineering Academy",
      description: isEn
        ? "In-person and online training: Law 52-05, ADR, eco-driving, HSE in Casablanca."
        : "Formations présentiel et en ligne : Loi 52-05, ADR, Éco-conduite, HSE à Casablanca.",
    },
  };
}

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
