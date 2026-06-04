'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import Logo from '@/assets/logo_spirit.png';
import { useT } from '@/lib/useT';

const ISO_BADGES = ['ISO 39001', 'ISO 50001', 'ISO 14001', 'ISO 45001'];

function ColLabel({ children }: Readonly<{ children: string }>) {
  return (
    <>
      <h4 className="font-bold text-white mb-3"
        style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7 }}>
        {children}
      </h4>
      <div style={{ width: '32px', height: '2px', background: '#88C440', borderRadius: '2px', marginBottom: '16px' }} />
    </>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useT();
  const ft = t.footer;

  const navLinks = [
    { label: t.nav.home,       href: '/' },
    { label: t.nav.formations, href: '/formations' },
    { label: t.nav.about,      href: '/a-propos' },
    { label: t.nav.contact,    href: '/contact' },
  ];

  return (
    <footer style={{ background: '#2d5a27' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-5">
        <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-10 pb-10"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image src={Logo} alt="Spirit Logo" height={80} width={300} className="object-contain" style={{ height: '80px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
            </div>
            <p className="font-bold text-white mb-0.5" style={{ fontSize: '15px' }}>Spirit Engineering Academy</p>
            <p className="mb-3" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)' }}>{ft.tagline}</p>
            <p className="leading-relaxed mb-5" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>
              {ft.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {ISO_BADGES.map((badge) => (
                <span key={badge} style={{
                  background: 'rgba(136,196,64,0.10)', color: '#88C440',
                  border: '1px solid rgba(136,196,64,0.2)', borderRadius: '6px',
                  padding: '3px 8px', fontSize: '10px', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>
                  {badge}
                </span>
              ))}
            </div>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { href: 'https://facebook.com/spiritengineering', label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { href: 'https://instagram.com/spiritengineering', label: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z' },
                { href: 'https://linkedin.com/company/spirit-engineering', label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
              ].map(({ href, label, path }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="flex items-center justify-center rounded-lg transition-all hover:scale-110"
                  style={{ width: 34, height: 34, background: 'rgba(255,255,255,0.08)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <ColLabel>{ft.navLabel}</ColLabel>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-[#c6f0b8]"
                    style={{ color: 'rgba(255,255,255,0.90)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Formations */}
          <div>
            <ColLabel>{ft.formationsLabel}</ColLabel>
            <ul className="flex flex-col gap-2.5">
              {ft.formationLinks.map((label) => (
                <li key={label}>
                  <Link href="/formations"
                    className="text-sm inline-flex items-center gap-1 transition-colors hover:text-[#c6f0b8]"
                    style={{ color: 'rgba(255,255,255,0.90)' }}>
                    {label}
                    <ArrowUpRight size={12} style={{ opacity: 0.4 }} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <ColLabel>{ft.contactLabel}</ColLabel>
            <ul className="flex flex-col gap-3 text-sm mb-5">
              <li className="flex items-start gap-2" style={{ color: 'rgba(255,255,255,0.75)' }}>
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#88C440' }} />
                <span>5 étg, Espace A2, 357 Bd Mohammed<br />Casablanca 20000</span>
              </li>
              <li>
                <a href="mailto:info@spirit.engineering"
                  className="flex items-center gap-2 transition-colors hover:text-[#c6f0b8]"
                  style={{ color: 'rgba(255,255,255,0.75)' }}>
                  <Mail size={14} style={{ color: '#88C440' }} />
                  info@spirit.engineering
                </a>
              </li>
              <li>
                <a href="tel:+212607721274"
                  className="flex items-center gap-2 transition-colors hover:text-[#c6f0b8]"
                  style={{ color: 'rgba(255,255,255,0.75)' }}>
                  <Phone size={14} style={{ color: '#88C440' }} />
                  +212 6 07 72 12 74
                </a>
              </li>
              <li>
                <a href="tel:+212660705515"
                  className="flex items-center gap-2 transition-colors hover:text-[#c6f0b8]"
                  style={{ color: 'rgba(255,255,255,0.75)' }}>
                  <Phone size={14} style={{ color: '#88C440' }} />
                  +212 6 60 70 55 15
                </a>
              </li>
            </ul>
            <Link href="/contact"
              className="inline-flex items-center px-4 py-2 rounded-lg font-bold text-white transition-all hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(136,196,64,0.3)]"
              style={{ background: '#88C440', fontSize: '13px' }}>
              {t.nav.contact}
            </Link>
          </div>
        </div>

        <div className="py-5">
          <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.75)' }}>
            {ft.copyright(currentYear)}
          </p>
        </div>
      </div>
    </footer>
  );
}
