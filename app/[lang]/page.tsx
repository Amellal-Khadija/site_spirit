import type { Metadata } from "next";
import Menu from "@/composant/Menu";
import Accueil from "@/composant/Accueil";
import Footer from "@/composant/Footer";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Spirit Engineering Academy — Transport & Road Safety Training Morocco"
      : "Spirit Engineering Academy — Formation Transport & Sécurité Routière Maroc",
    description: isEn
      ? "Spirit Engineering Academy, professional training center in Casablanca. Driver training (Law 52-05), ADR, eco-driving, road safety, HSE and logistics in Morocco."
      : "Spirit Engineering Academy, centre de formation professionnelle à Casablanca. Formation conducteurs (Loi 52-05), ADR, Éco-conduite, Sécurité routière, HSE et logistique au Maroc.",
    alternates: {
      canonical: `https://spirit.engineering/${lang}/`,
      languages: {
        fr: "https://spirit.engineering/fr/",
        en: "https://spirit.engineering/en/",
      },
    },
    openGraph: {
      url: `https://spirit.engineering/${lang}/`,
      title: isEn
        ? "Spirit Engineering Academy — Transport & Road Safety Training Morocco"
        : "Spirit Engineering Academy — Formation Transport & Sécurité Routière Maroc",
      description: isEn
        ? "Transport training, road safety consulting and logistics in Casablanca, Morocco."
        : "Formation conducteurs professionnels, sécurité routière et logistique à Casablanca, Maroc.",
    },
  };
}

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
