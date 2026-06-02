import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LangProvider from "@/composant/LangProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
