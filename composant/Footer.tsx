'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import Logo from '@/assets/logo_spirit.png';

const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'Formations', href: '/formations' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

const FORMATION_LINKS = [
  'Conformité réglementaire',
  'Conducteurs professionnels',
  'Audit des trajets',
  'Coaching conduite',
  'Logistique sécurisée',
];

const ISO_BADGES = ['ISO 39001', 'ISO 50001', 'ISO 14001', 'ISO 45001'];

function ColLabel({ children }: { children: string }) {
  return (
    <>
      <h4
        className="font-bold text-white mb-3"
        style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7 }}
      >
        {children}
      </h4>
      <div style={{ width: '32px', height: '2px', background: '#88C440', borderRadius: '2px', marginBottom: '16px' }} />
    </>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#2d5a27' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-5">
        <div
          className="grid lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-10 pb-10"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image
                src={Logo}
                alt="Spirit Logo"
                height={40}
                className="w-auto"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
              />
            </div>
            <p className="font-bold text-white mb-0.5" style={{ fontSize: '15px' }}>Spirit Engineering Academy</p>
            <p className="mb-3" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)' }}>Formation • Audit • Conseil</p>
            <p className="leading-relaxed mb-5" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>
              Expert international en sécurité routière, efficacité énergétique et performance opérationnelle. Intervenant au Maroc, en Afrique et à l&apos;international.
            </p>
            <div className="flex flex-wrap gap-2">
              {ISO_BADGES.map((badge) => (
                <span
                  key={badge}
                  style={{
                    background: 'rgba(136,196,64,0.10)',
                    color: '#88C440',
                    border: '1px solid rgba(136,196,64,0.2)',
                    borderRadius: '6px',
                    padding: '3px 8px',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <ColLabel>Navigation</ColLabel>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#c6f0b8]"
                    style={{ color: 'rgba(255,255,255,0.90)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Formations */}
          <div>
            <ColLabel>Formations</ColLabel>
            <ul className="flex flex-col gap-2.5">
              {FORMATION_LINKS.map((label) => (
                <li key={label}>
                  <Link
                    href="/formations"
                    className="text-sm inline-flex items-center gap-1 transition-colors hover:text-[#c6f0b8]"
                    style={{ color: 'rgba(255,255,255,0.90)' }}
                  >
                    {label}
                    <ArrowUpRight size={12} style={{ opacity: 0.4 }} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <ColLabel>Contact</ColLabel>
            <ul className="flex flex-col gap-3 text-sm mb-5">
              <li className="flex items-start gap-2" style={{ color: 'rgba(255,255,255,0.75)' }}>
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#88C440' }} />
                <span>5 étg, Espace A2, 357 Bd Mohammed<br />Casablanca 20000</span>
              </li>
              <li>
                <a
                  href="mailto:info@spirit.engineering"
                  className="flex items-center gap-2 transition-colors hover:text-[#c6f0b8]"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  <Mail size={14} style={{ color: '#88C440' }} />
                  info@spirit.engineering
                </a>
              </li>
              <li>
                <a
                  href="tel:+212607721274"
                  className="flex items-center gap-2 transition-colors hover:text-[#c6f0b8]"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  <Phone size={14} style={{ color: '#88C440' }} />
                  +212 6 07 72 12 74
                </a>
              </li>
              <li>
                <a
                  href="tel:+212660705515"
                  className="flex items-center gap-2 transition-colors hover:text-[#c6f0b8]"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  <Phone size={14} style={{ color: '#88C440' }} />
                  +212 6 60 70 55 15
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 rounded-lg font-bold text-white transition-all hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(136,196,64,0.3)]"
              style={{ background: '#88C440', fontSize: '13px' }}
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5">
          <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.75)' }}>
            © {currentYear} Spirit Engineering Academy — Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
