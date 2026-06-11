import type { Metadata } from "next";
import "./globals.css";
import LangProvider from "@/composant/LangProvider";
import ScrollAnimObserver from "@/composant/ScrollAnimObserver";

export const metadata: Metadata = {
  title: "Spirit Engineering Academy - Formation Professionnelle Transport",
  description: "Formation conducteurs professionnels, conseil transport et sécurité routière. Loi 52-05, ADR, Éco-conduite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LangProvider>
          <ScrollAnimObserver />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
