'use client';

import Link from 'next/link';
import {
  Scale, Users, MapPin, Target, Package, ChevronRight,
  ShieldCheck, TrendingUp, Sliders, Handshake,
  BookOpen, Lightbulb, ClipboardCheck, BadgeCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useT } from '@/lib/useT';

const SERVICE_ICONS: LucideIcon[] = [Scale, Users, MapPin, Target, Package];

const WHY_ICONS: LucideIcon[] = [ShieldCheck, TrendingUp, Sliders, Handshake];
const WHAT_WE_DO_ICONS: LucideIcon[] = [BookOpen, Lightbulb, ClipboardCheck, BadgeCheck];

/* ─── micro-composants ────────────────────────────────────────────────── */
function SectionLabel({ children }: Readonly<{ children: string }>) {
  return (
    <div className="mb-5">
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#88C440' }}>
        {children}
      </span>
      <div style={{ width: 48, height: 3, marginTop: 8, borderRadius: 2, background: 'linear-gradient(90deg,#88C440,transparent)' }} />
    </div>
  );
}

function Tag({ children }: Readonly<{ children: string }>) {
  return (
    <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 100, background: 'rgba(136,196,64,0.10)', color: '#5a9a1a', border: '1px solid rgba(136,196,64,0.25)' }}>
      {children}
    </span>
  );
}


/* ─── page ──────────────────────────────────────────────────────────────── */
export default function Accueil() {
  const t = useT();

  return (
    <div className="text-gray-900">

      {/* ════════════════════ HERO ════════════════════ */}
      {/* Image à placer dans /public/hero-bg.jpg — route, transport, HSE… */}
      <section
        className="relative overflow-hidden border-b border-gray-100"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay sombre pour lisibilité du texte */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(120deg, rgba(15,30,12,0.78) 0%, rgba(26,58,22,0.65) 55%, rgba(26,58,22,0.50) 100%)' }} />
        {/* Glow vert décoratif */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(136,196,64,0.15) 0%, transparent 55%)' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-24 lg:pt-20 lg:pb-32">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-center">

            {/* colonne gauche */}
            <div>
              <div className="hero-badge inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full text-sm font-semibold"
                style={{ background: 'rgba(136,196,64,0.18)', border: '1px solid rgba(136,196,64,0.45)', color: '#c6f0b8' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#88C440', flexShrink: 0 }} />
                {t.hero.badge}
              </div>

              <h1 className="hero-h1 font-extrabold tracking-tight leading-[1.1] text-white mb-6"
                style={{ fontSize: 'clamp(2.1rem,4.8vw,3.4rem)' }}>
                {t.hero.h1[0]}<br />
                <span style={{ color: '#88C440' }}>{t.hero.h1[1]}</span><br />
                {t.hero.h1[2]}
              </h1>

              <p className="hero-sub text-lg leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {t.hero.subtitle}
              </p>

              <div className="hero-cta flex flex-wrap gap-3 mb-12">
                <Link href="/formations"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: '#88C440', boxShadow: '0 4px 18px rgba(136,196,64,0.40)' }}>
                  {t.hero.ctaFormations} <ChevronRight size={15} />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white border transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
                  style={{ borderColor: 'rgba(255,255,255,0.4)' }}>
                  {t.hero.ctaContact}
                </Link>
              </div>

              <div className="hero-stats flex items-center gap-0 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                {t.hero.heroStats.map((s, i) => (
                  <div key={s.label} className="flex items-center">
                    {i > 0 && (
                      <div style={{ width: 1, height: 40, margin: '0 28px', background: 'linear-gradient(to bottom,transparent,rgba(255,255,255,0.2),transparent)' }} />
                    )}
                    <div>
                      <p className="text-3xl font-extrabold text-white leading-none">{s.value}</p>
                      <p className="text-xs mt-1 font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* colonne droite */}
            <div className="hero-card">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
                <div className="px-6 py-4" style={{ background: 'linear-gradient(90deg,#88C440 0%,#6ab52e 100%)' }}>
                  <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>
                    {t.hero.domainsTitle}
                  </p>
                </div>
                <ul className="bg-white divide-y divide-gray-100">
                  {t.services.items.map((s, i) => (
                    <li key={s.num} className="flex items-center gap-4 px-5 py-4 hover:bg-green-50/50 transition-colors duration-150 cursor-default">
                      <span className="flex-shrink-0 flex items-center justify-center text-xs font-bold"
                        style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(136,196,64,0.12)', border: '1.5px solid rgba(136,196,64,0.35)', color: '#5a9a1a' }}>
                        {i + 1}
                      </span>
                      <span className="flex-1 text-sm font-semibold text-gray-800 leading-snug">{s.title}</span>
                      <ChevronRight size={15} style={{ color: '#88C440', flexShrink: 0 }} />
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 gap-2 p-3 bg-gray-50 border-t border-gray-100">
                  {t.hero.certs.map(c => (
                    <div key={c.code}
                      className="flex flex-col items-center justify-center py-3 rounded-xl border border-gray-100 bg-white text-center hover:border-[#88C440]/40 hover:shadow-sm transition-all duration-200">
                      <span className="text-sm font-bold" style={{ color: '#88C440' }}>{c.code}</span>
                      <span className="text-xs mt-0.5" style={{ color: '#9ca3af' }}>{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════ WHAT WE DO ════════════════════ */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="anim-fade-up text-center mb-14">
            <SectionLabel>{t.whatWeDo.label}</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              {t.whatWeDo.title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whatWeDo.items.map((item, i) => {
              const Icon = WHAT_WE_DO_ICONS[i];
              const delays = ['delay-1','delay-2','delay-3','delay-4'];
              return (
                <div key={item.title}
                  className={`anim-scale ${delays[i]} flex flex-col items-center text-center p-7 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                  <div className="flex items-center justify-center mb-5"
                    style={{ width: 60, height: 60, borderRadius: 16, background: 'rgba(136,196,64,0.10)' }}>
                    <Icon size={26} style={{ color: '#88C440' }} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════ COMPANY STATS ════════════════════ */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-8" style={{ color: '#88C440', letterSpacing: '0.2em' }}>
            {t.companyStats.label}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {t.companyStats.items.map((s, i) => {
              const delays = ['delay-1','delay-2','delay-3','delay-4','delay-5'];
              return (
              <div key={s.label} className={`anim-fade-up ${delays[i]} flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 bg-white hover:border-[#88C440]/40 hover:shadow-md transition-all duration-200`}>
                <p className="text-3xl font-extrabold leading-none mb-1" style={{ color: '#88C440' }}>{s.value}</p>
                <p className="text-xs font-medium text-gray-500 leading-snug">{s.label}</p>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════ CHIFFRES CLÉS NARSA ════════════════════ */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="anim-fade-up text-center mb-10">
            <SectionLabel>{t.narsa.label}</SectionLabel>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {t.narsa.items.map((f, i) => {
              const styles = [
                { cls: 'border-red-100 bg-red-50', color: '#dc2626' },
                { cls: 'border-orange-100 bg-orange-50', color: '#ea580c' },
                { cls: '', color: '#5a9a1a', green: true },
              ];
              const narsaDelays = ['delay-1','delay-2','delay-3'];
              const st = styles[i];
              return (
                <div key={f.value}
                  className={`anim-fade-up ${narsaDelays[i]} p-6 rounded-2xl border flex flex-col gap-2 ${st.cls}`}
                  style={st.green ? { background: 'rgba(136,196,64,0.07)', borderColor: 'rgba(136,196,64,0.3)' } : undefined}>
                  <p className="text-3xl font-extrabold" style={{ color: st.color }}>{f.value}</p>
                  <p className="text-sm font-semibold text-gray-800">{f.sub}</p>
                  <p className="text-xs" style={{ color: '#9ca3af' }}>{f.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════ SERVICES ════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="anim-fade-up text-center mb-14">
            <SectionLabel>{t.services.label}</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((s, idx) => {
              const Icon = SERVICE_ICONS[idx];
              const svcDelays = ['delay-1','delay-2','delay-3','delay-4','delay-5'];
              return (
                <div key={s.num}
                  className={`anim-scale ${svcDelays[idx]} group relative bg-white border border-gray-100 rounded-2xl p-7 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                  <span className="absolute top-4 right-5 text-7xl font-black leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(136,196,64,0.07)' }}>
                    {s.num}
                  </span>
                  <div className="flex items-center justify-center mb-4"
                    style={{ width: 50, height: 50, borderRadius: 14, background: 'rgba(136,196,64,0.10)' }}>
                    <Icon size={22} style={{ color: '#88C440' }} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug">{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#6b7280' }}>{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(t2 => <Tag key={t2}>{t2}</Tag>)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════ POURQUOI NOUS CHOISIR ════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="anim-fade-up text-center mb-14">
            <SectionLabel>{t.whyUs.label}</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              {t.whyUs.title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyUs.items.map((item, i) => {
              const Icon = WHY_ICONS[i];
              const whyDelays = ['delay-1','delay-2','delay-3','delay-4'];
              return (
                <div key={item.title}
                  className={`anim-fade-up ${whyDelays[i]} flex flex-col items-start p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                  <div className="flex items-center justify-center mb-4"
                    style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(136,196,64,0.10)' }}>
                    <Icon size={22} style={{ color: '#88C440' }} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════ CTA BANNER ════════════════════ */}
      <section className="relative overflow-hidden py-20 lg:py-24"
        style={{ background: 'linear-gradient(135deg,#1a3a16 0%,#2d5a27 60%,#3d7a32 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 65% 50%,rgba(136,196,64,0.18) 0%,transparent 65%)' }} />
        <div className="anim-fade-up relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
            {t.cta.title}
          </h2>
          <p className="text-lg mb-10" style={{ color: '#c6f0b8' }}>
            {t.cta.subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/formations"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: '#88C440', boxShadow: '0 6px 20px rgba(136,196,64,0.30)' }}>
              {t.cta.formations} <ChevronRight size={15} />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm text-white border transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.4)' }}>
              {t.cta.contact}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
