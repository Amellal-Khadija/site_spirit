import Menu from "@/composant/Menu";
import Accueil from "@/composant/Accueil";
import Footer from "@/composant/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Menu />
      <main className="flex-1 pt-16">
        <Accueil />
      </main>
      <Footer />
    </div>
  );
}
