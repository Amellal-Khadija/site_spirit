import type { Metadata } from "next";
import "./globals.css";
import LangProvider from "@/composant/LangProvider";
import ScrollAnimObserver from "@/composant/ScrollAnimObserver";
import ChatBot from "@/composant/ChatBot";

export const metadata: Metadata = {
  metadataBase: new URL("https://spirit.engineering"),
  title: {
    template: "%s | Spirit Engineering Academy",
    default: "Spirit Engineering Academy — Formation Transport & Sécurité Routière Maroc",
  },
  description:
    "Spirit Engineering Academy, centre de formation professionnelle à Casablanca. Formation conducteurs (Loi 52-05), ADR, Éco-conduite, Sécurité routière, HSE et logistique au Maroc.",
  keywords: [
    "formation transport Maroc",
    "formation conducteur professionnel Maroc",
    "sécurité routière Maroc",
    "loi 52-05 formation",
    "formation ADR Maroc",
    "éco-conduite Casablanca",
    "formation HSE Maroc",
    "formation logistique Maroc",
    "centre formation Casablanca",
    "Spirit Engineering Academy",
    "formation professionnelle transport",
    "formation chauffeur professionnel",
    "conseil routier Maroc",
    "conseil en sécurité routière",
    "cabinet conseil transport Maroc",
    "audit sécurité routière Maroc",
    "certification ISO 39001 Maroc",
    "Spirit conseil routier",
  ],
  authors: [{ name: "Spirit Engineering Academy", url: "https://spirit.engineering/" }],
  creator: "Spirit Engineering Academy",
  publisher: "Spirit Engineering Academy",
  verification: {
    other: { "msvalidate.01": "8B1223769478F62404157BCF3A4272D5" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://spirit.engineering/" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://spirit.engineering/",
    siteName: "Spirit Engineering Academy",
    title: "Spirit Engineering Academy — Formation Transport & Sécurité Routière Maroc",
    description:
      "Centre de formation professionnelle à Casablanca : transport, sécurité routière, ADR, Éco-conduite, HSE.",
    images: [{ url: "/spirit-logo.png", width: 512, height: 512, alt: "Spirit Engineering Academy" }],
  },
  twitter: {
    card: "summary",
    title: "Spirit Engineering Academy — Formation Transport Maroc",
    description: "Formation conducteurs professionnels, sécurité routière et logistique à Casablanca, Maroc.",
    images: ["/spirit-logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://spirit.engineering/#organization",
      name: "Spirit Engineering Academy",
      alternateName: "Spirit Engineering",
      description:
        "Centre de formation et cabinet de conseil routier spécialisé en sécurité routière, ADR, Éco-conduite, HSE, logistique et certification ISO 39001 au Maroc.",
      url: "https://spirit.engineering",
      logo: "https://spirit.engineering/spirit-logo.png",
      image: "https://spirit.engineering/spirit-logo.png",
      telephone: "+212607721274",
      email: "info@spirit.engineering",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5ème étage, Espace A2, 357 Boulevard Mohammed",
        addressLocality: "Casablanca",
        postalCode: "20000",
        addressCountry: "MA",
        addressRegion: "Grand Casablanca",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.5892,
        longitude: -7.6095,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      priceRange: "$$",
      areaServed: [
        { "@type": "Country", name: "Maroc" },
        { "@type": "City", name: "Casablanca" },
        { "@type": "City", name: "Rabat" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Formations professionnelles",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Formation conducteurs professionnels - Loi 52-05",
              description: "Formation obligatoire pour conducteurs professionnels selon la loi marocaine 52-05",
              provider: { "@id": "https://spirit.engineering/#organization" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Formation ADR - Transport de matières dangereuses",
              description: "Certification ADR pour le transport de marchandises dangereuses au Maroc",
              provider: { "@id": "https://spirit.engineering/#organization" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Éco-conduite",
              description: "Formation éco-conduite pour réduire la consommation de carburant et les émissions",
              provider: { "@id": "https://spirit.engineering/#organization" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Sécurité routière et prévention des risques",
              description: "Formation sécurité routière et prévention des risques pour les professionnels du transport",
              provider: { "@id": "https://spirit.engineering/#organization" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Conseil en sécurité routière — ISO 39001",
              description: "Conseil routier, audit et accompagnement à la certification ISO 39001 pour les entreprises de transport au Maroc.",
              areaServed: { "@type": "Country", name: "Maroc" },
              provider: { "@id": "https://spirit.engineering/#organization" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Audit et diagnostic sécurité routière",
              description: "Évaluation des risques routiers, des trajets et des pratiques de conduite pour les flottes professionnelles au Maroc.",
              areaServed: { "@type": "Country", name: "Maroc" },
              provider: { "@id": "https://spirit.engineering/#organization" },
            },
          },
        ],
      },
      sameAs: ["https://learn.spirit.engineering"],
    },
    {
      "@type": "WebSite",
      "@id": "https://spirit.engineering/#website",
      url: "https://spirit.engineering/",
      name: "Spirit Engineering Academy",
      publisher: { "@id": "https://spirit.engineering/#organization" },
      inLanguage: ["fr", "en"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LangProvider>
          <ScrollAnimObserver />
          {children}
          <ChatBot />
        </LangProvider>
      </body>
    </html>
  );
}
