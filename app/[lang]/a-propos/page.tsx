import Menu from "@/composant/Menu";
import APropos from "@/composant/APropos";
import Footer from "@/composant/Footer";

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
