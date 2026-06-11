'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Target, BadgeCheck, Users, ShieldCheck, Truck, Zap,
  CheckCircle2, ArrowRight, Award, ChevronRight,
  Building2, Star,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useT } from '@/lib/useT';

const DARK_BG = 'linear-gradient(135deg,#0f1f0e 0%,#1a3016 60%,#243d1e 100%)';
const GREEN   = '#88C440';

function SectionLabel({ children, light }: { children: string; light?: boolean }) {
  const c = light ? '#a8e063' : GREEN;
  return (
    <div className="mb-5">
      <span style={{ fontSize:13, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:c }}>
        {children}
      </span>
      <div style={{ width:48, height:3, marginTop:8, borderRadius:2, background:`linear-gradient(90deg,${c},transparent)` }} />
    </div>
  );
}

const MISSION_ICONS: LucideIcon[] = [Target, BadgeCheck, Users];
const EXPERTISE_ICONS: LucideIcon[] = [ShieldCheck, Truck, Zap];

export default function APropos() {
  const t  = useT();
  const ab = t.about;

  return (
    <div style={{ fontFamily:"'Century Gothic','CenturyGothic','AppleGothic',sans-serif", color:'#111827' }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: DARK_BG }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:'radial-gradient(ellipse at 70% 40%,rgba(136,196,64,0.18) 0%,transparent 60%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ opacity:0.05, backgroundImage:'radial-gradient(circle,#88C440 1px,transparent 1px)', backgroundSize:'32px 32px' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-28 lg:pt-24 lg:pb-32">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
            style={{ background:'rgba(136,196,64,0.15)', border:'1px solid rgba(136,196,64,0.4)' }}>
            <span style={{ width:7, height:7, borderRadius:'50%', background:GREEN, display:'inline-block' }} />
            <span style={{ fontSize:13, fontWeight:700, color:'#c6f0b8' }}>{ab.badge}</span>
          </div>
          <h1 className="font-extrabold leading-tight tracking-tight text-white mb-5"
            style={{ fontSize:'clamp(2rem,4.5vw,3.25rem)' }}>
            {ab.h1[0]}<br />
            <span style={{ color:GREEN }}>{ab.h1[1]}</span>
          </h1>
          <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color:'rgba(255,255,255,0.68)' }}>
            {ab.subtitle}
          </p>

          {/* stats */}
          <div className="flex flex-wrap gap-4">
            {ab.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center px-7 py-4 rounded-2xl"
                style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.10)', minWidth:100 }}>
                <span className="text-3xl font-extrabold" style={{ color:GREEN }}>{s.value}</span>
                <span className="text-xs text-center mt-1" style={{ color:'rgba(255,255,255,0.55)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height:60, overflow:'hidden' }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width:'100%', height:'100%', display:'block' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── CONTEXTE ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel>{ab.context.label}</SectionLabel>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ab.context.items.map((item, i) => {
              const cfg = [
                { bg:'rgba(220,38,38,0.06)', border:'rgba(220,38,38,0.18)', color:'#dc2626' },
                { bg:'rgba(234,88,12,0.06)',  border:'rgba(234,88,12,0.18)',  color:'#ea580c' },
                { bg:'rgba(136,196,64,0.08)', border:'rgba(136,196,64,0.25)', color:'#5a9a1a' },
              ][i];
              return (
                <div key={item.value} className="flex flex-col items-start p-7 rounded-2xl"
                  style={{ background:cfg.bg, border:`1px solid ${cfg.border}` }}>
                  <span className="text-4xl font-extrabold mb-2" style={{ color:cfg.color }}>{item.value}</span>
                  <p className="font-bold text-gray-900 text-sm mb-1">{item.sub}</p>
                  <p className="text-xs" style={{ color:'#6b7280' }}>{item.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background:'#f8faf5' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 lg:gap-20 gap-12 items-start">
            <div>
              <SectionLabel>{ab.mission.label}</SectionLabel>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 mb-4">{ab.mission.title}</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color:'#6b7280' }}>{ab.mission.subtitle}</p>
              <ul className="space-y-3">
                {ab.mission.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color:GREEN }} />
                    <span className="text-sm leading-relaxed text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {ab.mission.valueCards.map((card, i) => (
                <div key={card.title}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4"
                  style={{ borderLeft:`3px solid ${GREEN}` }}>
                  <div className="flex items-center justify-center flex-shrink-0"
                    style={{ width:44, height:44, borderRadius:12, background:'rgba(136,196,64,0.10)' }}>
                    {[Target, BadgeCheck, Users][i] && (() => { const Icon = MISSION_ICONS[i]; return <Icon size={20} style={{ color:GREEN }} />; })()}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{card.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color:'#6b7280' }}>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISES ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 lg:py-20" style={{ background: DARK_BG }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:'radial-gradient(ellipse at 30% 60%,rgba(136,196,64,0.15) 0%,transparent 65%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel light>{ab.expertise.label}</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-3">{ab.expertise.title}</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color:'rgba(255,255,255,0.60)' }}>{ab.expertise.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ab.expertise.cards.map((card, i) => (
              <div key={card.title}
                className="rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
                style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.10)', backdropFilter:'blur(8px)' }}>
                <div className="flex items-center justify-center mb-4"
                  style={{ width:52, height:52, borderRadius:14, background:'rgba(136,196,64,0.18)' }}>
                  {(() => { const Icon = EXPERTISE_ICONS[i]; return <Icon size={22} style={{ color:GREEN }} />; })()}
                </div>
                <h3 className="font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color:'rgba(255,255,255,0.60)' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FONDATEUR ────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-start">

            {/* photo */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative rounded-2xl overflow-hidden" style={{ width:220, aspectRatio:'4/5' }}>
                <Image src="/Zakaria KARTOUBI.jpg" alt="Zakaria KARTOUBI — Fondateur" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background:'linear-gradient(transparent,rgba(15,31,14,0.85))' }}>
                  <p className="text-white font-bold text-sm">{ab.founder.name}</p>
                  <p style={{ color:'#a8e063', fontSize:12 }}>{ab.founder.role}</p>
                </div>
              </div>
            </div>

            {/* content */}
            <div>
              <SectionLabel>{ab.founder.label}</SectionLabel>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 mb-1">{ab.founder.name}</h2>
              <p className="font-semibold mb-6" style={{ color:GREEN }}>{ab.founder.role}</p>

              <p className="text-sm leading-relaxed mb-3" style={{ color:'#4b5563' }}>{ab.founder.bio1}</p>
              <p className="text-sm leading-relaxed mb-6" style={{ color:'#4b5563' }}>{ab.founder.bio2}</p>

              <div className="grid sm:grid-cols-2 gap-3 mb-7">
                <div className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background:'rgba(136,196,64,0.07)', border:'1px solid rgba(136,196,64,0.20)' }}>
                  <Award size={16} className="mt-0.5 flex-shrink-0" style={{ color:GREEN }} />
                  <div>
                    <p className="text-xs font-bold mb-0.5" style={{ color:'#5a9a1a' }}>{ab.founder.specialty}</p>
                    <p className="text-xs text-gray-700">{ab.founder.specialtyValue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background:'rgba(136,196,64,0.07)', border:'1px solid rgba(136,196,64,0.20)' }}>
                  <Building2 size={16} className="mt-0.5 flex-shrink-0" style={{ color:GREEN }} />
                  <div>
                    <p className="text-xs font-bold mb-0.5" style={{ color:'#5a9a1a' }}>{ab.founder.audience}</p>
                    <p className="text-xs text-gray-700">{ab.founder.audienceValue}</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl mb-2"
                style={{ background:'rgba(136,196,64,0.06)', border:'1px solid rgba(136,196,64,0.20)' }}>
                <p className="font-bold text-gray-900 text-sm mb-1">{ab.founder.commercial.title}</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color:'#6b7280' }}>{ab.founder.commercial.desc}</p>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{ background:GREEN, boxShadow:`0 4px 14px ${GREEN}30` }}>
                  {ab.founder.commercial.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 lg:py-20" style={{ background: DARK_BG }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:'radial-gradient(ellipse at 80% 30%,rgba(136,196,64,0.12) 0%,transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel light>{ab.team.label}</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-3">{ab.team.title}</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color:'rgba(255,255,255,0.55)' }}>{ab.team.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {ab.team.members.map((member) => (
              <div key={member.name}
                className="flex items-center gap-4 p-5 rounded-2xl hover:-translate-y-0.5 transition-all duration-300"
                style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.10)', backdropFilter:'blur(8px)' }}>
                <div className="flex items-center justify-center rounded-full font-extrabold text-white flex-shrink-0"
                  style={{ width:52, height:52, background:`linear-gradient(135deg,${GREEN},#5a9a1a)`, fontSize:16 }}>
                  {member.initials}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{member.name}</p>
                  <p className="text-xs" style={{ color:'#a8e063' }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>{ab.certifications.label}</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">{ab.certifications.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ab.certifications.items.map((cert, i) => {
              const colors = [GREEN, '#3b82f6', '#f59e0b'];
              const c = colors[i] ?? GREEN;
              return (
                <div key={cert.code}
                  className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ borderTop:`3px solid ${c}` }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold px-3 py-1 rounded-full"
                      style={{ background:`${c}12`, color:c, border:`1px solid ${c}25` }}>
                      {cert.code}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                      style={{ background:c }}>
                      {cert.benefit}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color:'#6b7280' }}>{cert.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PARTENAIRES + CTA ────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background:'#f8faf5' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* partenaires */}
            <div>
              <SectionLabel>{ab.partners.label}</SectionLabel>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{ab.partners.title}</h2>
              <p className="text-sm mb-6 leading-relaxed" style={{ color:'#6b7280' }}>{ab.partners.subtitle}</p>
              <div className="flex flex-wrap gap-3">
                {ab.partners.list.map((p) => (
                  <div key={p}
                    className="flex items-center gap-2 px-4 py-2.5 border rounded-xl text-sm font-semibold text-gray-600 hover:border-[#88C440] hover:text-[#5a9a1a] hover:shadow-[0_4px_12px_rgba(136,196,64,0.15)] transition-all cursor-default bg-white"
                    style={{ borderColor:'#e5e7eb' }}>
                    <Star size={12} style={{ color:GREEN }} />
                    {p}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="relative overflow-hidden rounded-2xl p-8" style={{ background: DARK_BG }}>
              <div className="absolute inset-0 pointer-events-none"
                style={{ background:'radial-gradient(ellipse at 70% 30%,rgba(136,196,64,0.20) 0%,transparent 70%)' }} />
              <div className="relative">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ background:'rgba(136,196,64,0.20)', color:'#c6f0b8' }}>
                  {ab.partners.cta.badge}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {ab.partners.cta.title1}<br />
                  <span style={{ color:GREEN }}>{ab.partners.cta.title2}</span>
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color:'rgba(198,240,184,0.85)' }}>
                  {ab.partners.cta.desc}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link href="/formations"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                    style={{ background:GREEN, boxShadow:`0 4px 16px ${GREEN}35` }}>
                    {ab.partners.cta.formations} <ChevronRight size={13} />
                  </Link>
                  <Link href="/contact"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white border transition-all hover:-translate-y-0.5 hover:bg-white/10"
                    style={{ borderColor:'rgba(255,255,255,0.35)' }}>
                    {ab.partners.cta.contact}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
