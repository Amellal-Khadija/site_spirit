import Menu from "@/composant/Menu";
import Contact from "@/composant/Contact";
import Footer from "@/composant/Footer";

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
