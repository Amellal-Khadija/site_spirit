import type { Metadata } from "next";
import Menu from "@/composant/Menu";
import APropos from "@/composant/APropos";
import Footer from "@/composant/Footer";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "About Us — Road Safety & Transport Training Center Casablanca"
      : "À propos — Centre de Formation Transport Casablanca",
    description: isEn
      ? "Spirit Engineering Academy, expert in transport training and road safety consulting in Morocco. Based in Casablanca, we train Moroccan transport professionals."
      : "Spirit Engineering Academy, expert en formation transport et sécurité routière au Maroc depuis plusieurs années. Basé à Casablanca, nous formons les professionnels du transport marocain.",
    alternates: {
      canonical: `https://spirit.engineering/${lang}/a-propos`,
      languages: {
        fr: "https://spirit.engineering/fr/a-propos",
        en: "https://spirit.engineering/en/a-propos",
      },
    },
    openGraph: {
      url: `https://spirit.engineering/${lang}/a-propos`,
      title: isEn ? "About Us — Spirit Engineering Academy Casablanca" : "À propos — Spirit Engineering Academy Casablanca",
      description: isEn
        ? "Expert in transport training, road safety consulting and logistics in Morocco."
        : "Expert en formation transport, sécurité routière et logistique au Maroc.",
    },
  };
}

export default function AProposPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Menu />
      <main className="flex-1 pt-16">
        <APropos />
      </main>
      <Footer />
    </div>
  );
}
