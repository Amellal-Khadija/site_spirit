'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import {
  Scale, Users, MapPin, Target, Package, ChevronRight,
  ShieldCheck, TrendingUp, Sliders, Handshake, AlertTriangle,
  BookOpen, Lightbulb, ClipboardCheck, BadgeCheck,
  Fuel, Globe, Leaf,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useT } from '@/lib/useT';

const SERVICE_ICONS: LucideIcon[] = [Scale, Users, MapPin, Target, Package];
const WHY_ICONS: LucideIcon[] = [ShieldCheck, TrendingUp, Sliders, Handshake];
const WHAT_WE_DO_ICONS: LucideIcon[] = [Lightbulb, BookOpen, ClipboardCheck, BadgeCheck];
const CHALLENGE_ICONS: LucideIcon[] = [Fuel, Globe, Leaf];

/* ─── Section label ─────────────────────────────────────────────────── */
function SectionLabel({ children, light }: Readonly<{ children: string; light?: boolean }>) {
  const color = light ? '#a8e063' : '#88C440';
  return (
    <div className="mb-5">
      <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color }}>
        {children}
      </span>
      <div style={{ width: 48, height: 3, marginTop: 8, borderRadius: 2, background: `linear-gradient(90deg,${color},transparent)` }} />
    </div>
  );
}

/* ─── Tag ───────────────────────────────────────────────────────────── */
function Tag({ children }: Readonly<{ children: string }>) {
  return (
    <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 100, background: 'rgba(136,196,64,0.10)', color: '#5a9a1a', border: '1px solid rgba(136,196,64,0.25)' }}>
      {children}
    </span>
  );
}

/* ─── Cycling card hero ─────────────────────────────────────────────── */
function HeroCyclingCard({ items, icons, label }: Readonly<{
  items: { title: string; desc: string }[];
  icons: LucideIcon[];
  label: string;
}>) {
  const [idx, setIdx]         = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((next: number) => {
    setVisible(false);
    setTimeout(() => { setIdx(next); setVisible(true); }, 280);
  }, []);

  useEffect(() => {
    const id = setInterval(() => goTo((idx + 1) % items.length), 7000);
    return () => clearInterval(id);
  }, [idx, items.length, goTo]);

  const Icon = icons[idx];
  const item = items[idx];

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl"
      style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.12)', minHeight: 340 }}>
      <div className="px-6 py-3" style={{ background: 'linear-gradient(90deg,#88C440,#6ab52e)' }}>
        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>{label}</p>
      </div>
      <div style={{ height: 3, background: 'rgba(255,255,255,0.08)' }}>
        <div key={idx} style={{ height: '100%', background: '#88C440', borderRadius: 2, animation: 'progress-bar 7s linear forwards' }} />
      </div>
      <div className="flex flex-col items-start p-8"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(10px)', transition: 'opacity 0.28s ease, transform 0.28s ease' }}>
        <div className="flex items-center justify-center mb-6"
          style={{ width: 64, height: 64, borderRadius: 18, background: 'rgba(136,196,64,0.15)', border: '1px solid rgba(136,196,64,0.3)' }}>
          <Icon size={28} style={{ color: '#88C440' }} />
        </div>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(136,196,64,0.9)', marginBottom: 10 }}>
          {String(idx + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </p>
        <h3 className="font-extrabold text-white mb-4 leading-tight"
          style={{ fontSize: '1.5rem', fontFamily: "'Century Gothic','CenturyGothic','AppleGothic',sans-serif" }}>
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.62)', fontFamily: "'Century Gothic','CenturyGothic','AppleGothic',sans-serif" }}>
          {item.desc}
        </p>
      </div>
      <div className="flex items-center justify-between px-8 pb-7">
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{ width: i === idx ? 24 : 8, height: 8, borderRadius: 4, background: i === idx ? '#88C440' : 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s' }} />
          ))}
        </div>
        <button onClick={() => goTo((idx + 1) % items.length)}
          className="flex items-center gap-1 text-xs font-semibold"
          style={{ color: 'rgba(255,255,255,0.45)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#88C440')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
          Suivant <ChevronRight size={13} />
        </button>
      </div>
      <style>{`@keyframes progress-bar { from{width:0%} to{width:100%} }`}</style>
    </div>
  );
}

/* ─── DARK section wrapper ──────────────────────────────────────────── */
const DARK_BG = 'linear-gradient(135deg,#0f1f0e 0%,#1a3016 60%,#243d1e 100%)';

/* ─── Page ──────────────────────────────────────────────────────────── */
export default function Accueil() {
  const t = useT();

  return (
    <div className="text-gray-900">

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <Image src="/hero_bg.png" alt="" fill priority
          className="object-cover object-center pointer-events-none"
          style={{ zIndex: 0 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(120deg,rgba(5,15,5,0.55) 0%,rgba(10,25,10,0.38) 50%,rgba(5,15,5,0.22) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 75% 30%,rgba(136,196,64,0.20) 0%,transparent 55%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0.07, backgroundImage: 'radial-gradient(circle,#88C440 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-32 lg:pt-24 lg:pb-40">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-start">
            <div>
              <Link href="/consultant"
                className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 hover:brightness-125"
                style={{ background: 'rgba(136,196,64,0.18)', border: '1px solid rgba(136,196,64,0.45)', color: '#c6f0b8' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#88C440', flexShrink: 0, boxShadow: '0 0 8px rgba(136,196,64,0.8)' }} />
                {t.hero.badge}
              </Link>
              <h1 className="font-extrabold tracking-tight leading-[1.06] text-white mb-7"
                style={{ fontSize: 'clamp(2.4rem,5.2vw,3.9rem)' }}>
                <span style={{ color: '#88C440' }}>{t.hero.h1[0]}</span><br />
                {t.hero.h1[1]}<br />
                <span style={{ color: '#88C440' }}>{t.hero.h1[2]}</span>
              </h1>
              <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: 'rgba(255,255,255,0.72)' }}>
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 mb-12">
                <Link href="/formations"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: '#88C440', boxShadow: '0 4px 22px rgba(136,196,64,0.45)' }}>
                  {t.hero.ctaFormations} <ChevronRight size={15} />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white border transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
                  style={{ borderColor: 'rgba(255,255,255,0.35)' }}>
                  {t.hero.ctaContact}
                </Link>
              </div>
              <div className="flex items-center pt-7" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                {t.hero.heroStats.map((s, i) => (
                  <div key={s.label} className="flex items-center">
                    {i > 0 && <div style={{ width: 1, height: 36, margin: '0 24px', background: 'rgba(255,255,255,0.15)' }} />}
                    <div>
                      <p className="font-extrabold text-white leading-none" style={{ fontSize: '2rem' }}>{s.value}</p>
                      <p className="text-xs mt-1 font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <HeroCyclingCard items={t.whatWeDo.items} icons={WHAT_WE_DO_ICONS} label={t.hero.domainsTitle} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: 70, overflow: 'hidden' }}>
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
            <path d="M0,35 C480,70 960,0 1440,35 L1440,70 L0,70 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ══ WHAT WE DO ════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>{t.whatWeDo.label}</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 max-w-2xl mx-auto">
              {t.whatWeDo.title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.whatWeDo.items.map((item, i) => {
              const Icon = WHAT_WE_DO_ICONS[i];
              return (
                <div key={item.title}
                  className="flex flex-col p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  style={{ borderTop: '3px solid #88C440' }}>
                  <div className="flex items-center justify-center mb-5 self-start"
                    style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(136,196,64,0.10)' }}>
                    <Icon size={24} style={{ color: '#88C440' }} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: '#6b7280' }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ COMPANY STATS ═════════════════════════════════════════════ */}
      <section className="py-16" style={{ background: DARK_BG }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center font-bold uppercase tracking-widest mb-12"
            style={{ fontSize: 14, color: 'rgba(168,224,99,0.8)', letterSpacing: '0.25em' }}>
            {t.companyStats.label}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {t.companyStats.items.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center text-center py-4 px-6"
                style={{ borderRight: i < t.companyStats.items.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <p className="font-extrabold leading-none mb-2" style={{ fontSize: '2.6rem', color: '#88C440' }}>{s.value}</p>
                <p className="text-xs font-medium leading-snug" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ÉNERGIE — stats (avec bg image) ══════════════════════════ */}
      <section className="relative py-16 overflow-hidden">
        <Image src="/bg_energie.png" alt="" fill priority
          className="object-cover object-center pointer-events-none"
          style={{ zIndex: 0 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg,rgba(10,20,8,0.62) 0%,rgba(15,31,14,0.55) 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel light>{t.energy.label}</SectionLabel>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {t.energy.items.map((f, i) => {
              const eStyles = [
                { border: 'rgba(234,88,12,0.5)',  color: '#fb923c' },
                { border: 'rgba(136,196,64,0.5)', color: '#88C440' },
                { border: 'rgba(220,38,38,0.5)',  color: '#f87171' },
                { border: 'rgba(59,130,246,0.5)', color: '#60a5fa' },
              ];
              const es = eStyles[i];
              return (
              <div key={f.value} className="flex flex-col gap-2 p-6 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(12px)', border: `1px solid ${es.border}` }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: es.color }}>
                  {f.sub}
                </p>
                <p className="font-extrabold leading-none" style={{ fontSize: '2rem', color: es.color }}>{f.value}</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{f.note}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ ÉNERGIE — enjeux cards (fond blanc) ══════════════════════ */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 16 }}>
            {t.energy.challengesLabel}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {t.energy.challenges.map((c, i) => {
              const Icon = CHALLENGE_ICONS[i];
              return (
                <div key={c.title}
                  className="flex flex-col gap-4 p-7 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-center self-start"
                    style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(136,196,64,0.10)' }}>
                    <Icon size={22} style={{ color: '#88C440' }} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base">{c.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: '#6b7280' }}>{c.desc}</p>
                  <Tag>{c.tag}</Tag>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ NARSA ═════════════════════════════════════════════════════ */}
      <section className="relative py-16 overflow-hidden">
        <Image src="/bg_route.png" alt="" fill priority
          className="object-cover object-center pointer-events-none"
          style={{ zIndex: 0 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg,rgba(10,20,8,0.62) 0%,rgba(15,31,14,0.55) 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)' }}>
              <AlertTriangle size={13} style={{ color: '#f59e0b' }} />
              <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f59e0b' }}>
                {t.narsa.label}
              </span>
            </div>
            <div style={{ width: 48, height: 2, borderRadius: 2, background: 'linear-gradient(90deg,#f59e0b,transparent)' }} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.narsa.items.map((f, i) => {
              const styles = [
                { border: 'rgba(220,38,38,0.4)',  bg: 'rgba(255,255,255,0.10)', color: '#f87171' },
                { border: 'rgba(234,88,12,0.4)',  bg: 'rgba(255,255,255,0.10)', color: '#fb923c' },
                { border: 'rgba(136,196,64,0.4)', bg: 'rgba(255,255,255,0.10)', color: '#88C440' },
                { border: 'rgba(220,38,38,0.4)',  bg: 'rgba(255,255,255,0.10)', color: '#f87171' },
              ];
              const st = styles[i];
              return (
                <div key={f.value} className="p-5 rounded-2xl flex flex-col gap-2"
                  style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(12px)', border: `1px solid ${st.border}` }}>
                  <p className="font-extrabold leading-none" style={{ fontSize: '1.8rem', color: st.color }}>{f.value}</p>
                  <p className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>{f.sub}</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{f.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════════ */}

      <section className="py-20 lg:py-28" style={{ background: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>{t.services.label}</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-4">{t.services.title}</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#6b7280' }}>{t.services.subtitle}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((s, idx) => {
              const Icon = SERVICE_ICONS[idx];
              return (
                <div key={s.num}
                  className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute inset-y-0 left-0 w-1" style={{ background: '#88C440' }} />
                  <div className="p-7 pl-8">
                    <span className="absolute top-4 right-5 text-7xl font-black leading-none select-none pointer-events-none"
                      style={{ color: 'rgba(136,196,64,0.06)' }}>{s.num}</span>
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ POURQUOI NOUS CHOISIR ═════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>{t.whyUs.label}</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">{t.whyUs.title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {t.whyUs.items.map((item, i) => {
              const Icon = WHY_ICONS[i];
              return (
                <div key={item.title}
                  className="flex items-start gap-5 p-7 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex-shrink-0 flex items-center justify-center"
                    style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(136,196,64,0.10)' }}>
                    <Icon size={22} style={{ color: '#88C440' }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 lg:py-24" style={{ background: DARK_BG }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 65% 50%,rgba(136,196,64,0.18) 0%,transparent 65%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0.05, backgroundImage: 'radial-gradient(circle,#88C440 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">{t.cta.title}</h2>
          <p className="text-lg mb-10" style={{ color: '#c6f0b8' }}>{t.cta.subtitle}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/formations"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: '#88C440', boxShadow: '0 6px 20px rgba(136,196,64,0.30)' }}>
              {t.cta.formations} <ChevronRight size={15} />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white border transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.4)' }}>
              {t.cta.contact}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
