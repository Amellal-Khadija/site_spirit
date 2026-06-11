'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '@/assets/logo_spirit.png';
import { useT } from '@/lib/useT';

export default function Menu() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useT();

  const links = [
    { label: t.nav.home,       href: '/' },
    { label: t.nav.consultant, href: '/consultant' },
    { label: t.nav.formations, href: '/formations' },
    { label: t.nav.about,      href: '/a-propos' },
    { label: t.nav.contact,    href: '/contact' },
  ];

  // Normalise le pathname : retire le slash final et le préfixe de langue (/fr, /en)
  const base = (() => {
    let p = pathname;
    if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
    p = p.replace(/^\/(fr|en)/, '') || '/';
    return p;
  })();

  const isActive = (href: string) => base === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center h-full py-2">
          <Image src={Logo} alt="Spirit Engineering Academy" height={105} width={380} className="object-contain" style={{ height: '105px', width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              className={`text-sm px-4 py-2 rounded-md transition-all duration-200 ${
                isActive(link.href)
                  ? 'text-[#5a9a1a] font-bold bg-[#88C440]/10 ring-1 ring-[#88C440]/40'
                  : 'text-gray-600 font-medium hover:text-[#88C440] hover:bg-green-50'
              }`}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block h-0.5 w-5 rounded-full transition-all duration-200 origin-center ${menuOpen ? 'bg-[#88C440] rotate-45 translate-y-[7px]' : 'bg-gray-700'}`} />
          <span className={`block h-0.5 w-5 rounded-full transition-all duration-200 bg-gray-700 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-0.5 w-5 rounded-full transition-all duration-200 origin-center ${menuOpen ? 'bg-[#88C440] -rotate-45 -translate-y-[7px]' : 'bg-gray-700'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-1 shadow-lg">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              className={`block text-sm px-4 py-2.5 rounded-lg transition-colors ${
                isActive(link.href)
                  ? 'text-[#5a9a1a] font-bold bg-[#88C440]/10 ring-1 ring-[#88C440]/40'
                  : 'text-gray-600 font-medium hover:text-[#88C440] hover:bg-green-50'
              }`}
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
