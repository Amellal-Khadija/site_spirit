'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Target, BadgeCheck, Users, ShieldCheck, Truck, Zap,
  CheckCircle2, ArrowRight
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-4">
      <span className="text-[#88C440] uppercase" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em' }}>
        {children}
      </span>
      <div className="mt-2" style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, #88C440, transparent)' }} />
    </div>
  );
}

function IconBox({ Icon, bgColor = 'rgba(136,196,64,0.10)', iconColor = '#88C440' }: { Icon: LucideIcon; bgColor?: string; iconColor?: string }) {
  return (
    <div
      className="flex items-center justify-center flex-shrink-0"
      style={{ width: '52px', height: '52px', borderRadius: '14px', background: bgColor }}
    >
      <Icon size={22} style={{ color: iconColor }} />
    </div>
  );
}

const MISSION_ITEMS = [
  'Des contenus adaptés aux réalités métier',
  'Des certifications reconnues par les entreprises',
  'Un accompagnement humain et personnalisé',
  'Une approche orientée résultats mesurables',
];

const VALUE_CARDS = [
  {
    Icon: Target,
    title: 'Prévenir les risques',
    desc: 'Réduire les incidents et renforcer la culture sécurité grâce à des contenus pratiques et contextualisés.',
  },
  {
    Icon: BadgeCheck,
    title: 'Valider les compétences',
    desc: "Donner de la valeur aux acquis avec des certifications alignées sur les exigences professionnelles.",
  },
  {
    Icon: Users,
    title: 'Accompagner les entreprises',
    desc: "Aider les organisations à structurer la montée en compétences de leurs équipes avec des solutions adaptées.",
  },
];

const EXPERTISE_CARDS = [
  {
    Icon: ShieldCheck,
    title: 'Sécurité routière',
    desc: "Formations pratiques pour prévenir les risques routiers : conduite défensive, réduction des comportements à risque et bonnes pratiques terrain.",
  },
  {
    Icon: Truck,
    title: 'Mobilité durable',
    desc: "Parcours axés sur l'éco-conduite et l'optimisation des consommations pour réduire l'empreinte carbone et les coûts opérationnels.",
  },
  {
    Icon: Zap,
    title: 'Manutention & sécurité',
    desc: "Modules pratiques sur la manutention, l'arrimage, l'utilisation des équipements de levage et la prévention des accidents en zone logistique.",
  },
];

const CERTS = [
  {
    code: 'ISO 39001',
    benefit: 'Réduction des accidents',
    title: 'Sécurité Routière',
    desc: "Système de management de la sécurité du trafic routier. Réduit les accidents mortels et graves, aligne votre organisation sur la stratégie nationale NARSA 2026–2030.",
  },
  {
    code: 'ISO 50001',
    benefit: 'Réduction des coûts',
    title: 'Performance Énergétique',
    desc: "Optimisation des consommations d'énergie de votre flotte. Réduction des coûts opérationnels, diminution de l'empreinte carbone et accès aux marchés exigeants.",
  },
  {
    code: 'ISO 45001 / 14001',
    benefit: 'HSE & conformité',
    title: 'Santé, Sécurité & Environnement',
    desc: "Prévention des risques professionnels (45001) et management environnemental (14001). Protège vos collaborateurs et renforce votre image.",
  },
];

const PARTNERS = ['VIVO ENERGY', 'OCP', 'Entreprises industrielles', 'Professionnels du transport', 'Structures HSE'];

export default function APropos() {
  return (
    <div style={{ color: '#111827' }}>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden border-b border-gray-100"
        style={{ background: 'linear-gradient(150deg, #f5fef0 0%, #ffffff 55%, #f8faff 100%)' }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(136,196,64,0.15) 0%, transparent 65%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{ border: '1px solid rgba(136,196,64,0.4)', background: 'rgba(136,196,64,0.08)', color: '#5a9a1a' }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#88C440', display: 'inline-block' }} />
            Spirit Engineering Academy
          </div>
          <h1 className="font-extrabold leading-tight tracking-tight text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}>
            Former, certifier,<br />
            <span style={{ color: '#88C440' }}>faire progresser.</span>
          </h1>
          <p className="text-lg max-w-2xl mb-6" style={{ color: '#6b7280' }}>
            Nous accompagnons les professionnels et les entreprises avec des formations ciblées en sécurité, énergie et performance opérationnelle. Des contenus concrets, directement applicables sur le terrain.
          </p>
          <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, #88C440, transparent)' }} />

          <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-100 max-w-lg">
            {[
              { value: '5', label: "Domaines d'expertise" },
              { value: '4', label: 'Certifications ISO' },
              { value: '28', label: 'Formations' },
            ].map((s) => (
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
            <SectionLabel>Pourquoi c&apos;est urgent</SectionLabel>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-red-100 bg-red-50">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">4 160</div>
                <p className="text-sm font-semibold text-gray-800 mb-1">décès sur les routes du Maroc</p>
                <p className="text-xs" style={{ color: '#6b7280' }}>11 premiers mois 2025 — Source NARSA</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-orange-100 bg-orange-50">
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-1">+25,7%</div>
                <p className="text-sm font-semibold text-gray-800 mb-1">hausse des accidents mortels</p>
                <p className="text-xs" style={{ color: '#6b7280' }}>par rapport à la même période 2024</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl" style={{ background: 'rgba(136,196,64,0.07)', border: '1px solid rgba(136,196,64,0.25)' }}>
              <div>
                <div className="text-3xl font-bold mb-1" style={{ color: '#5a9a1a' }}>2030</div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Objectif stratégie NARSA 2026–2030</p>
                <p className="text-xs" style={{ color: '#6b7280' }}>Réduire de 50% les accidents graves</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 lg:gap-20 gap-12 items-start">
            <div>
              <SectionLabel>Notre mission</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Pourquoi Spirit Engineering Academy a été créée
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#6b7280' }}>
                Face à la hausse alarmante des accidents de la route au Maroc (+25,7% en 2025), Spirit Engineering Academy est née pour répondre aux besoins concrets des entreprises de transport qui cherchent à protéger leurs équipes, respecter la réglementation et réduire leurs risques opérationnels.
              </p>
              <ul className="space-y-3">
                {MISSION_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#88C440' }} />
                    <span className="text-sm leading-relaxed text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {VALUE_CARDS.map((card) => (
                <div key={card.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                  <IconBox Icon={card.Icon} />
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
            <SectionLabel>Nos domaines</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-3">
              Trois expertises au service de la sécurité et de la performance
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
              Nos programmes s&apos;articulent autour de domaines clés pour les entreprises industrielles, logistiques et de mobilité.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {EXPERTISE_CARDS.map((card) => (
              <div key={card.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <IconBox Icon={card.Icon} />
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
              <SectionLabel>Le fondateur</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-1">Zakaria KARTOUBI</h2>
              <p className="text-base font-semibold mb-5" style={{ color: '#88C440' }}>Fondateur &amp; Pédagogue</p>
              <div className="relative rounded-2xl overflow-hidden max-w-xs" style={{ aspectRatio: '4/5' }}>
                <Image
                  src="/Zakaria KARTOUBI.jpg"
                  alt="Zakaria KARTOUBI — Fondateur"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-5"
                  style={{ background: 'linear-gradient(transparent, rgba(26,58,22,0.85))' }}
                >
                  <p className="text-white font-bold">Zakaria KARTOUBI</p>
                  <p style={{ color: '#c6f0b8', fontSize: '13px' }}>Fondateur &amp; Pédagogue</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 lg:pt-12">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Une pédagogie orientée résultats</h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#6b7280' }}>
                  Professionnel de la formation et de l&apos;accompagnement terrain, Zakaria KARTOUBI conçoit des parcours orientés résultats pour les entreprises et les apprenants en activité. Son approche relie sécurité, performance opérationnelle et montée en compétences durable.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                  Il accompagne les professionnels avec une approche centrée sur les usages réels, l&apos;efficacité opérationnelle et la sécurité des pratiques.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="p-3 rounded-xl" style={{ background: '#f8f9fa' }}>
                    <p className="text-xs font-bold mb-0.5" style={{ color: '#88C440' }}>Spécialités</p>
                    <p className="text-xs text-gray-700">Sécurité, énergie, mobilité durable</p>
                  </div>
                  <div className="p-3 rounded-xl" style={{ background: '#f8f9fa' }}>
                    <p className="text-xs font-bold mb-0.5" style={{ color: '#88C440' }}>Public visé</p>
                    <p className="text-xs text-gray-700">Professionnels, entreprises, équipes terrain</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Accompagnement commercial</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#6b7280' }}>
                  Un interlocuteur dédié est disponible pour les demandes d&apos;équipes, les besoins multi-utilisateurs, les dispositifs d&apos;accompagnement RH et les parcours sur mesure.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{ background: '#88C440' }}
                >
                  Nous contacter <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Certifications</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Des parcours qui valorisent les compétences acquises
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CERTS.map((cert) => (
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
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Ils nous font confiance</SectionLabel>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Nos partenaires &amp; clients</h2>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: '#6b7280' }}>
                Spirit Engineering Academy intervient auprès de grands groupes industriels, d&apos;opérateurs logistiques et d&apos;entreprises de transport à travers tout le Maroc.
              </p>
              <div className="flex flex-wrap gap-3">
                {PARTNERS.map((p) => (
                  <div
                    key={p}
                    className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:border-[#88C440] hover:text-[#5a9a1a] hover:shadow-[0_4px_12px_rgba(136,196,64,0.15)] transition-all cursor-default"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #1a3a16 0%, #2d5a27 60%, #3d7a32 100%)' }}>
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                style={{ background: 'rgba(136,196,64,0.20)', color: '#c6f0b8' }}
              >
                Prêt à commencer ?
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Formez vos équipes,<br />
                <span style={{ color: '#88C440' }}>réduisez vos risques.</span>
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(198,240,184,0.85)' }}>
                Demandez un devis personnalisé ou explorez notre catalogue de formations alignées sur la réglementation marocaine et les normes ISO.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/formations" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5" style={{ background: '#88C440' }}>
                  Voir les formations →
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white border transition-all hover:-translate-y-0.5 hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.35)' }}>
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
