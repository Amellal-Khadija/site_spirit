'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Target, BadgeCheck, Users, ShieldCheck, Truck, Zap,
  CheckCircle2, ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useT } from '@/lib/useT';

function SectionLabel({ children }: Readonly<{ children: string }>) {
  return (
    <div className="mb-4">
      <span className="text-[#88C440] uppercase" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em' }}>
        {children}
      </span>
      <div className="mt-2" style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, #88C440, transparent)' }} />
    </div>
  );
}

function IconBox({ Icon, bgColor = 'rgba(136,196,64,0.10)', iconColor = '#88C440' }: Readonly<{ Icon: LucideIcon; bgColor?: string; iconColor?: string }>) {
  return (
    <div className="flex items-center justify-center flex-shrink-0"
      style={{ width: '52px', height: '52px', borderRadius: '14px', background: bgColor }}>
      <Icon size={22} style={{ color: iconColor }} />
    </div>
  );
}

const MISSION_ICONS: LucideIcon[] = [Target, BadgeCheck, Users];
const EXPERTISE_ICONS: LucideIcon[] = [ShieldCheck, Truck, Zap];

export default function APropos() {
  const t = useT();
  const ab = t.about;

  return (
    <div style={{ color: '#111827' }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-gray-100"
        style={{ background: 'linear-gradient(150deg, #f5fef0 0%, #ffffff 55%, #f8faff 100%)' }}>
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(136,196,64,0.15) 0%, transparent 65%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{ border: '1px solid rgba(136,196,64,0.4)', background: 'rgba(136,196,64,0.08)', color: '#5a9a1a' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#88C440', display: 'inline-block' }} />
            {ab.badge}
          </div>
          <h1 className="font-extrabold leading-tight tracking-tight text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}>
            {ab.h1[0]}<br />
            <span style={{ color: '#88C440' }}>{ab.h1[1]}</span>
          </h1>
          <p className="text-lg max-w-2xl mb-6" style={{ color: '#6b7280' }}>{ab.subtitle}</p>
          <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, #88C440, transparent)' }} />
          <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-100 max-w-lg">
            {ab.stats.map((s) => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                <div className="text-sm" style={{ color: '#6b7280' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEXTE ── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <SectionLabel>{ab.context.label}</SectionLabel>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ab.context.items.map((item, i) => {
              const styles = [
                { cls: 'border-red-100 bg-red-50', color: '#dc2626' },
                { cls: 'border-orange-100 bg-orange-50', color: '#ea580c' },
                { cls: '', color: '#5a9a1a', green: true },
              ];
              const st = styles[i];
              return (
                <div key={item.value}
                  className={`flex items-start gap-4 p-6 rounded-2xl border ${st.cls}`}
                  style={st.green ? { background: 'rgba(136,196,64,0.07)', border: '1px solid rgba(136,196,64,0.25)' } : undefined}>
                  <div>
                    <div className="text-3xl font-bold mb-1" style={{ color: st.color }}>{item.value}</div>
                    <p className="text-sm font-semibold text-gray-800 mb-1">{item.sub}</p>
                    <p className="text-xs" style={{ color: '#6b7280' }}>{item.note}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 lg:gap-20 gap-12 items-start">
            <div>
              <SectionLabel>{ab.mission.label}</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{ab.mission.title}</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#6b7280' }}>{ab.mission.subtitle}</p>
              <ul className="space-y-3">
                {ab.mission.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#88C440' }} />
                    <span className="text-sm leading-relaxed text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {ab.mission.valueCards.map((card, i) => (
                <div key={card.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                  <IconBox Icon={MISSION_ICONS[i]} />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{card.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISES ── */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>{ab.expertise.label}</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-3">{ab.expertise.title}</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#6b7280' }}>{ab.expertise.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ab.expertise.cards.map((card, i) => (
              <div key={card.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <IconBox Icon={EXPERTISE_ICONS[i]} />
                <h3 className="font-bold text-gray-900 mt-4 mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FONDATEUR ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 items-start">
            <div>
              <SectionLabel>{ab.founder.label}</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-1">{ab.founder.name}</h2>
              <p className="text-base font-semibold mb-5" style={{ color: '#88C440' }}>{ab.founder.role}</p>
              <div className="relative rounded-2xl overflow-hidden max-w-xs" style={{ aspectRatio: '4/5' }}>
                <Image src="/Zakaria KARTOUBI.jpg" alt="Zakaria KARTOUBI — Fondateur" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-5" style={{ background: 'linear-gradient(transparent, rgba(26,58,22,0.85))' }}>
                  <p className="text-white font-bold">{ab.founder.name}</p>
                  <p style={{ color: '#c6f0b8', fontSize: '13px' }}>{ab.founder.role}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 lg:pt-12">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">{ab.founder.commercial.title}</h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#6b7280' }}>{ab.founder.bio1}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{ab.founder.bio2}</p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="p-3 rounded-xl" style={{ background: '#f8f9fa' }}>
                    <p className="text-xs font-bold mb-0.5" style={{ color: '#88C440' }}>{ab.founder.specialty}</p>
                    <p className="text-xs text-gray-700">{ab.founder.specialtyValue}</p>
                  </div>
                  <div className="p-3 rounded-xl" style={{ background: '#f8f9fa' }}>
                    <p className="text-xs font-bold mb-0.5" style={{ color: '#88C440' }}>{ab.founder.audience}</p>
                    <p className="text-xs text-gray-700">{ab.founder.audienceValue}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">{ab.founder.commercial.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#6b7280' }}>{ab.founder.commercial.desc}</p>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{ background: '#88C440' }}>
                  {ab.founder.commercial.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>{ab.team.label}</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-3">{ab.team.title}</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: '#6b7280' }}>{ab.team.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ab.team.members.map((member) => (
              <div key={member.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
                <div className="flex items-center justify-center rounded-full text-xl font-bold text-white mb-4"
                  style={{ width: 72, height: 72, background: 'linear-gradient(135deg,#88C440,#5a9a1a)', flexShrink: 0 }}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm font-medium" style={{ color: '#88C440' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>{ab.certifications.label}</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">{ab.certifications.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ab.certifications.items.map((cert) => (
              <div key={cert.code} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(136,196,64,0.12)', color: '#5a9a1a', border: '1px solid rgba(136,196,64,0.25)' }}>
                    {cert.code}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: '#88C440' }}>
                    {cert.benefit}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTENAIRES + CTA ── */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>{ab.partners.label}</SectionLabel>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{ab.partners.title}</h2>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: '#6b7280' }}>{ab.partners.subtitle}</p>
              <div className="flex flex-wrap gap-3">
                {ab.partners.list.map((p) => (
                  <div key={p} className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:border-[#88C440] hover:text-[#5a9a1a] hover:shadow-[0_4px_12px_rgba(136,196,64,0.15)] transition-all cursor-default">
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #1a3a16 0%, #2d5a27 60%, #3d7a32 100%)' }}>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                style={{ background: 'rgba(136,196,64,0.20)', color: '#c6f0b8' }}>
                {ab.partners.cta.badge}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {ab.partners.cta.title1}<br />
                <span style={{ color: '#88C440' }}>{ab.partners.cta.title2}</span>
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(198,240,184,0.85)' }}>{ab.partners.cta.desc}</p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/formations" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5" style={{ background: '#88C440' }}>
                  {ab.partners.cta.formations}
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white border transition-all hover:-translate-y-0.5 hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.35)' }}>
                  {ab.partners.cta.contact}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
