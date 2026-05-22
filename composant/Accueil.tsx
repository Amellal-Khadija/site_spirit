'use client';

import Link from 'next/link';
import { Scale, Users, MapPin, Target, Package, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ─── données ─────────────────────────────────────────────────────── */

const SERVICES: { num: string; title: string; desc: string; tags: string[]; Icon: LucideIcon }[] = [
  { num: '01', Icon: Scale,   title: 'Conseil & Conformité réglementaire',     desc: 'Accompagnement des entreprises de transport dans le respect du code de la route marocain (loi 52-05), des normes de sécurité et de la réglementation du transport de marchandises.', tags: ['Loi 52-05', 'Transport', 'Audit'] },
  { num: '02', Icon: Users,   title: 'Formation des conducteurs professionnels', desc: "Programmes complets pour chauffeurs poids lourds : conduite sécurisée, éco-conduite, gestion de la fatigue, transport ADR et premiers secours.", tags: ['ADR', 'Éco-conduite', 'Sécurité'] },
  { num: '03', Icon: MapPin,  title: 'Évaluation & Audit des trajets',          desc: "Analyse des itinéraires pour identifier les zones à risque, recommandation des routes les plus sûres et évaluation des conditions de transport.", tags: ['Itinéraires', 'Analyse', 'Risques'] },
  { num: '04', Icon: Target,  title: 'Coaching conduite professionnelle',       desc: "Accompagnement terrain des chauffeurs : conduite défensive, dépassement sécurisé, conduite de nuit et gestion des montées et descentes.", tags: ['Terrain', 'Défensive', 'Coaching'] },
  { num: '05', Icon: Package, title: 'Chargement & Logistique sécurisée',      desc: "Formation aux procédures de chargement, déchargement et arrimage des marchandises selon les normes en vigueur.", tags: ['Arrimage', 'Manutention', 'Normes'] },
];

const CERTS = [
  { code: 'Loi 52-05', name: 'Code de la route' },
  { code: 'ADR',       name: 'Matières dangereuses' },
  { code: 'ISO 39001', name: 'Sécurité routière' },
  { code: 'Objectif',  name: 'Zéro accident' },
];

const STATS = [
  { value: '28',   label: 'Formations' },
  { value: '156+', label: 'Leçons vidéo' },
  { value: '5',    label: 'Domaines' },
];

const FIGURES = [
  { value: '4 160',     sub: 'décès sur les routes du Maroc', note: 'sur les 11 premiers mois 2025 (NARSA)', cls: 'border-red-100 bg-red-50', color: '#dc2626' },
  { value: '+25,7%',    sub: 'hausse des accidents mortels',  note: 'vs. même période 2024',                cls: 'border-orange-100 bg-orange-50', color: '#ea580c' },
  { value: '2026–2030', sub: 'Stratégie nationale NARSA',     note: 'Spirit Engineering aligne vos équipes', cls: '', color: '#5a9a1a', green: true },
];

/* ─── micro-composants ────────────────────────────────────────────── */

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-5">
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#88C440' }}>
        {children}
      </span>
      <div style={{ width: 48, height: 3, marginTop: 8, borderRadius: 2, background: 'linear-gradient(90deg,#88C440,transparent)' }} />
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 100, background: 'rgba(136,196,64,0.10)', color: '#5a9a1a', border: '1px solid rgba(136,196,64,0.25)' }}>
      {children}
    </span>
  );
}

/* ─── page ─────────────────────────────────────────────────────────── */

export default function Accueil() {
  return (
    <div className="text-gray-900">

      {/* ════════════════════ HERO ════════════════════ */}
      <section
        className="relative overflow-hidden border-b border-gray-100"
        style={{ background: 'linear-gradient(150deg,#f5fef0 0%,#ffffff 55%,#f8faff 100%)' }}
      >
        {/* glows décoratifs */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 82% 25%,rgba(136,196,64,0.17) 0%,transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(136,196,64,0.07) 0%,transparent 70%)' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-24 lg:pt-20 lg:pb-32">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-center">

            {/* ── colonne gauche ── */}
            <div>
              {/* badge */}
              <div className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full text-sm font-semibold"
                style={{ background: 'rgba(136,196,64,0.09)', border: '1px solid rgba(136,196,64,0.35)', color: '#5a9a1a' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#88C440', flexShrink: 0 }} />
                Spirit Engineering Academy — Maroc
              </div>

              {/* H1 */}
              <h1 className="font-extrabold tracking-tight leading-[1.1] text-gray-900 mb-6"
                style={{ fontSize: 'clamp(2.1rem,4.8vw,3.4rem)' }}>
                Sécurité Routière<br />
                <span style={{ color: '#88C440' }}>&amp; Formation</span><br />
                Professionnelle
              </h1>

              {/* sous-titre */}
              <p className="text-lg leading-relaxed mb-8 max-w-md" style={{ color: '#6b7280' }}>
                Conseil, formation et coaching pour les entreprises de transport au Maroc.
                Conformité réglementaire, conducteurs certifiés et zéro accident.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 mb-12">
                <Link href="/formations"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: '#88C440', boxShadow: '0 4px 18px rgba(136,196,64,0.30)' }}>
                  Voir les formations <ChevronRight size={15} />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-gray-800 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5">
                  Nous contacter
                </Link>
              </div>

              {/* stats */}
              <div className="flex items-center gap-0 pt-8 border-t border-gray-100">
                {STATS.map((s, i) => (
                  <div key={s.label} className="flex items-center">
                    {i > 0 && (
                      <div style={{ width: 1, height: 40, margin: '0 28px', background: 'linear-gradient(to bottom,transparent,#e2e8f0,transparent)' }} />
                    )}
                    <div>
                      <p className="text-3xl font-extrabold text-gray-900 leading-none">{s.value}</p>
                      <p className="text-xs mt-1 font-medium" style={{ color: '#6b7280' }}>{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── colonne droite : carte domaines ── */}
            <div>
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
                {/* ── header vert ── */}
                <div className="px-6 py-4" style={{ background: 'linear-gradient(90deg,#88C440 0%,#6ab52e 100%)' }}>
                  <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>
                    5 Domaines d&apos;intervention
                  </p>
                </div>

                {/* ── liste ── */}
                <ul className="bg-white divide-y divide-gray-100">
                  {SERVICES.map((s, i) => (
                    <li key={s.num} className="flex items-center gap-4 px-5 py-4 hover:bg-green-50/50 transition-colors duration-150 cursor-default">
                      {/* numéro cercle */}
                      <span
                        className="flex-shrink-0 flex items-center justify-center text-xs font-bold"
                        style={{
                          width: 28, height: 28, borderRadius: '50%',
                          background: 'rgba(136,196,64,0.12)',
                          border: '1.5px solid rgba(136,196,64,0.35)',
                          color: '#5a9a1a',
                        }}
                      >
                        {i + 1}
                      </span>
                      {/* texte */}
                      <span className="flex-1 text-sm font-semibold text-gray-800 leading-snug">
                        {s.title}
                      </span>
                      {/* chevron */}
                      <ChevronRight size={15} style={{ color: '#88C440', flexShrink: 0 }} />
                    </li>
                  ))}
                </ul>

                {/* ── grille certifs 2×2 ── */}
                <div className="grid grid-cols-2 gap-2 p-3 bg-gray-50 border-t border-gray-100">
                  {CERTS.map(c => (
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

      {/* ════════════════════ CHIFFRES CLÉS ════════════════════ */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel>Pourquoi agir maintenant — Bilan NARSA 2025</SectionLabel>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {FIGURES.map(f => (
              <div key={f.value}
                className={`p-6 rounded-2xl border flex flex-col gap-2 ${f.cls}`}
                style={f.green ? { background: 'rgba(136,196,64,0.07)', borderColor: 'rgba(136,196,64,0.3)' } : undefined}>
                <p className="text-3xl font-extrabold" style={{ color: f.color }}>{f.value}</p>
                <p className="text-sm font-semibold text-gray-800">{f.sub}</p>
                <p className="text-xs" style={{ color: '#9ca3af' }}>{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ SERVICES ════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Notre expertise</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Nos 5 domaines d&apos;intervention
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
              Des formations terrain adaptées aux besoins réels des entreprises de transport et de logistique au Maroc
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(s => (
              <div key={s.num}
                className="group relative bg-white border border-gray-100 rounded-2xl p-7 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                {/* filigrane numéro */}
                <span className="absolute top-4 right-5 text-7xl font-black leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(136,196,64,0.07)' }}>
                  {s.num}
                </span>

                {/* icon box */}
                <div className="flex items-center justify-center mb-4"
                  style={{ width: 50, height: 50, borderRadius: 14, background: 'rgba(136,196,64,0.10)' }}>
                  <s.Icon size={22} style={{ color: '#88C440' }} />
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#6b7280' }}>{s.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {s.tags.map(t => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ CTA BANNER ════════════════════ */}
      <section className="relative overflow-hidden py-20 lg:py-24"
        style={{ background: 'linear-gradient(135deg,#1a3a16 0%,#2d5a27 60%,#3d7a32 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 65% 50%,rgba(136,196,64,0.18) 0%,transparent 65%)' }} />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
            Prêt à former vos équipes ?
          </h2>
          <p className="text-lg mb-10" style={{ color: '#c6f0b8' }}>
            Contactez-nous pour un devis personnalisé ou explorez nos formations disponibles.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/formations"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: '#88C440', boxShadow: '0 6px 20px rgba(136,196,64,0.30)' }}>
              Voir les formations <ChevronRight size={15} />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm text-white border transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.4)' }}>
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
