import type { Metadata } from "next";
import Menu from "@/composant/Menu";
import Contact from "@/composant/Contact";
import Footer from "@/composant/Footer";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Contact — Spirit Engineering Academy Casablanca"
      : "Contact — Spirit Engineering Academy Casablanca",
    description: isEn
      ? "Contact Spirit Engineering Academy in Casablanca for your transport training, road safety consulting and logistics needs. Phone: +212 6 07 72 12 74 — info@spirit.engineering."
      : "Contactez Spirit Engineering Academy à Casablanca pour vos besoins en formation transport, conseil en sécurité routière et logistique. Tél : +212 6 07 72 12 74 — info@spirit.engineering.",
    alternates: {
      canonical: `https://spirit.engineering/${lang}/contact/`,
      languages: {
        fr: "https://spirit.engineering/fr/contact/",
        en: "https://spirit.engineering/en/contact/",
      },
    },
    openGraph: {
      url: `https://spirit.engineering/${lang}/contact/`,
      title: "Contact — Spirit Engineering Academy Casablanca",
      description: isEn
        ? "Contact us for your transport training and road safety consulting needs in Morocco."
        : "Contactez-nous pour vos formations transport et conseil en sécurité routière au Maroc.",
    },
  };
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Menu />
      <main className="flex-1 pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
