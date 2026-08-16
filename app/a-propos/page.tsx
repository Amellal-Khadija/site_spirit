import Menu from "@/composant/Menu";
import APropos from "@/composant/APropos";
import Footer from "@/composant/Footer";

export const metadata = {
  title: "À propos — Centre de Formation Transport Casablanca",
  description:
    "Spirit Engineering Academy, expert en formation transport et sécurité routière au Maroc depuis plusieurs années. Basé à Casablanca, nous formons les professionnels du transport marocain.",
  alternates: {
    canonical: "https://spirit.engineering/a-propos/",
    languages: {
      fr: "https://spirit.engineering/fr/a-propos/",
      en: "https://spirit.engineering/en/a-propos/",
    },
  },
  openGraph: {
    url: "https://spirit.engineering/a-propos/",
    title: "À propos — Spirit Engineering Academy Casablanca",
    description: "Expert en formation transport, sécurité routière et logistique au Maroc.",
  },
};

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
