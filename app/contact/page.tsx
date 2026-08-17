import Menu from "@/composant/Menu";
import Contact from "@/composant/Contact";
import Footer from "@/composant/Footer";

export const metadata = {
  title: "Contact — Spirit Engineering Academy Casablanca",
  description:
    "Contactez Spirit Engineering Academy à Casablanca pour vos besoins en formation transport, sécurité routière et logistique. Tél : +212 6 07 72 12 74 — info@spirit.engineering.",
  alternates: {
    canonical: "https://spirit.engineering/contact/",
    languages: {
      fr: "https://spirit.engineering/fr/contact/",
      en: "https://spirit.engineering/en/contact/",
    },
  },
  openGraph: {
    url: "https://spirit.engineering/contact/",
    title: "Contact — Spirit Engineering Academy Casablanca",
    description: "Contactez-nous pour vos formations transport et sécurité routière au Maroc.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://spirit.engineering/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://spirit.engineering/contact/" },
  ],
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Menu />
      <main className="flex-1 pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
