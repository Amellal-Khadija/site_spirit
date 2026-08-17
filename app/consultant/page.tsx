import type { Metadata } from "next";
import Menu from '@/composant/Menu';
import Consultant from '@/composant/consultant';
import Footer from '@/composant/Footer';

export const metadata: Metadata = {
  title: "Conseil en Sécurité Routière & Certification ISO — Spirit Engineering ",
  description:
    "Cabinet de conseil routier et HSE à Casablanca : audit, diagnostic et accompagnement à la certification ISO 39001, 45001, 50001 pour les entreprises de transport et de logistique au Maroc.",
  keywords: [
    "conseil routier Maroc",
    "conseil en sécurité routière",
    "cabinet conseil transport Casablanca",
    "audit sécurité routière Maroc",
    "certification ISO 39001 Maroc",
    "conseil HSE Maroc",
    "Spirit Engineering  conseil",
  ],
  alternates: { canonical: "https://spirit.engineering/consultant/" },
  openGraph: {
    url: "https://spirit.engineering/consultant/",
    title: "Conseil en Sécurité Routière & Certification ISO — Spirit Engineering Academy",
    description:
      "Audit, diagnostic et accompagnement à la certification ISO pour les entreprises de transport et de logistique au Maroc.",
  },
  twitter: {
    card: "summary",
    title: "Conseil en Sécurité Routière — Spirit Engineering Academy",
    description: "Cabinet de conseil routier et HSE au Maroc : audit, ISO 39001, accompagnement transport.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://spirit.engineering/" },
    { "@type": "ListItem", position: 2, name: "Conseil", item: "https://spirit.engineering/consultant/" },
  ],
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Menu />
      <main className="flex-1 pt-16">
        <Consultant />
      </main>
      <Footer />
    </div>
  );
}
