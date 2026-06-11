import Menu from '@/composant/Menu';
import Consultant from '@/composant/consultant';
import Footer from '@/composant/Footer';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Menu />
      <main className="flex-1 pt-16">
        <Consultant />
      </main>
      <Footer />
    </div>
  );
}
