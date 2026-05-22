import Menu from "@/composant/Menu";
import Formations from "@/composant/Formations";
import Footer from "@/composant/Footer";

export const metadata = {
  title: "Formations — Spirit Engineering Academy",
  description: "Catalogue de formations professionnelles en sécurité routière, éco-conduite et logistique.",
};

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
