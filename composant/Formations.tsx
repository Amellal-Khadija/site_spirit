'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Award, BookOpen, BarChart2, CheckCircle, Clock,
  GraduationCap, ChevronRight, X, Users, Tag,
} from 'lucide-react';
import { useT } from '@/lib/useT';
import type { CourseItem } from '@/lib/i18n';

const DARK_BG = 'linear-gradient(135deg,#0f1f0e 0%,#1a3016 60%,#243d1e 100%)';
const GREEN   = '#88C440';

/* ─── helpers ───────────────────────────────────────────────────── */
function SectionLabel({ children, light }: { children: string; light?: boolean }) {
  const c = light ? '#a8e063' : GREEN;
  return (
    <div className="mb-5">
      <span style={{ fontSize:14, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:c }}>{children}</span>
      <div style={{ width:48, height:3, marginTop:8, borderRadius:2, background:`linear-gradient(90deg,${c},transparent)` }} />
    </div>
  );
}

function LevelBadge({ level }: { level: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    'Débutant':     { bg:'rgba(34,197,94,0.10)',  color:'#16a34a' },
    'Beginner':     { bg:'rgba(34,197,94,0.10)',  color:'#16a34a' },
    'Intermédiaire':{ bg:'rgba(59,130,246,0.10)', color:'#2563eb' },
    'Intermediate': { bg:'rgba(59,130,246,0.10)', color:'#2563eb' },
    'Avancé':       { bg:'rgba(239,68,68,0.10)',  color:'#dc2626' },
    'Advanced':     { bg:'rgba(239,68,68,0.10)',  color:'#dc2626' },
  };
  const s = colors[level] ?? { bg:'rgba(136,196,64,0.10)', color:'#5a9a1a' };
  return (
    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
      style={{ background: s.bg, color: s.color }}>
      {level}
    </span>
  );
}

/* ─── Course card ───────────────────────────────────────────────── */
function CourseCard({ course, onEnroll, t }: {
  course: CourseItem;
  onEnroll: (c: CourseItem) => void;
  t: ReturnType<typeof useT>;
}) {
  const fp = t.formationsPage;
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      style={{ borderTop:`3px solid ${course.accentColor}` }}>

      {/* icon zone */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4">
        <div className="flex items-center justify-center"
          style={{ width:52, height:52, borderRadius:14, background:`${course.accentColor}18` }}>
          <GraduationCap size={24} style={{ color: course.accentColor }} />
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{ background:`${course.accentColor}12`, color: course.accentColor }}>
          {course.category}
        </span>
      </div>

      {/* content */}
      <div className="flex flex-col flex-1 px-6 pb-6">
        <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">{course.title}</h3>
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color:'#6b7280' }}>{course.description}</p>

        {/* meta */}
        <div className="flex flex-wrap gap-3 mb-5 pb-5" style={{ borderBottom:'1px solid #f3f4f6' }}>
          <LevelBadge level={course.level} />
          <span className="text-xs flex items-center gap-1" style={{ color:'#9ca3af' }}>
            <BookOpen size={11} /> {course.lessons} leçons
          </span>
          <span className="text-xs flex items-center gap-1" style={{ color:'#9ca3af' }}>
            <BarChart2 size={11} /> {course.qcm} QCM
          </span>
          {course.hasCertificate && (
            <span className="text-xs flex items-center gap-1" style={{ color:'#5a9a1a' }}>
              <Award size={11} /> Certificat
            </span>
          )}
        </div>

        {/* footer */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-extrabold" style={{ fontSize:'1.2rem', color: GREEN }}>{course.price}</p>
            <p className="text-xs" style={{ color:'#9ca3af' }}>par {course.instructor}</p>
          </div>
          <button onClick={() => onEnroll(course)}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
            style={{ background: GREEN, boxShadow:`0 4px 14px ${GREEN}35` }}>
            {fp.enrollButton} <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Enroll modal ──────────────────────────────────────────────── */
function EnrollModal({ course, onClose }: { course: CourseItem; onClose: () => void }) {
  const [sent, setSent] = useState(false);

  const waUrl = () => {
    const lines = [
      '👋 Bonjour Spirit Engineering,',
      '',
      `Je souhaite m'inscrire à la formation :`,
      `*${course.title}*`,
      `Catégorie : ${course.category} | Niveau : ${course.level}`,
      `Prix : ${course.price}`,
      '',
      'Merci de me recontacter pour confirmer mon inscription.',
    ];
    return `https://wa.me/212607721274?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background:'rgba(0,0,0,0.55)', backdropFilter:'blur(6px)' }}
      onClick={() => !sent && onClose()}>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={e => e.stopPropagation()}>

        {/* header */}
        <div className="flex items-center justify-between px-7 py-5"
          style={{ background: DARK_BG }}>
          <div>
            <p className="font-bold text-white text-sm">Inscription à la formation</p>
            <p style={{ fontSize:11, color:'rgba(255,255,255,0.55)' }}>Spirit Engineering</p>
          </div>
          {!sent && (
            <button onClick={onClose} style={{ background:'none', border:'none', cursor:'pointer', color:'rgba(255,255,255,0.6)' }}>
              <X size={18} />
            </button>
          )}
        </div>

        <div className="p-7">
          {/* course recap */}
          <div className="flex items-center gap-3 mb-6 p-4 rounded-2xl"
            style={{ background:`${course.accentColor}08`, border:`1px solid ${course.accentColor}25` }}>
            <div className="flex items-center justify-center flex-shrink-0"
              style={{ width:44, height:44, borderRadius:12, background:`${course.accentColor}18` }}>
              <GraduationCap size={20} style={{ color: course.accentColor }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-gray-900 text-sm leading-snug truncate">{course.title}</p>
              <p className="text-xs" style={{ color:'#9ca3af' }}>{course.category} · {course.level}</p>
            </div>
            <p className="font-extrabold flex-shrink-0" style={{ color: GREEN }}>{course.price}</p>
          </div>

          {!sent ? (
            <>
              <p className="text-sm mb-6" style={{ color:'#6b7280' }}>
                Cliquez sur <strong>"S'inscrire via WhatsApp"</strong> pour envoyer votre demande directement à notre équipe. Vous recevrez une confirmation sous 24h.
              </p>
              <div className="flex flex-col gap-3">
                <a href={waUrl()} target="_blank" rel="noopener noreferrer"
                  onClick={() => setSent(true)}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5"
                  style={{ background:'#25D366', boxShadow:'0 4px 18px rgba(37,211,102,0.40)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  S'inscrire via WhatsApp
                </a>
                <button onClick={onClose}
                  className="w-full py-3 rounded-xl font-semibold text-sm border transition-all"
                  style={{ borderColor:'#e5e7eb', color:'#6b7280', background:'none', cursor:'pointer' }}>
                  Annuler
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center text-center py-4">
              <div className="flex items-center justify-center mb-4"
                style={{ width:64, height:64, borderRadius:'50%', background:'rgba(37,211,102,0.12)' }}>
                <CheckCircle size={32} style={{ color:'#25D366' }} />
              </div>
              <p className="font-bold text-gray-900 text-lg mb-2">Demande envoyée !</p>
              <p className="text-sm mb-6" style={{ color:'#6b7280' }}>
                WhatsApp a été ouvert avec votre demande.<br/>Notre équipe vous confirme sous 24h.
              </p>
              <button onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white"
                style={{ background: GREEN, cursor:'pointer', border:'none' }}>
                Fermer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */
export default function Formations() {
  const [enrollCourse, setEnrollCourse] = useState<CourseItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('Tous');
  const t  = useT();
  const fp = t.formationsPage;

  const categories = ['Tous', ...Array.from(new Set(fp.courses.map(c => c.category)))];
  const filtered   = activeFilter === 'Tous' ? fp.courses : fp.courses.filter(c => c.category === activeFilter);

  return (
    <div style={{ fontFamily:"'Century Gothic','CenturyGothic','AppleGothic',sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: DARK_BG }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:'radial-gradient(ellipse at 70% 40%,rgba(136,196,64,0.18) 0%,transparent 60%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ opacity:0.05, backgroundImage:'radial-gradient(circle,#88C440 1px,transparent 1px)', backgroundSize:'32px 32px' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-28 lg:pt-24 lg:pb-32">
          <div className="max-w-2xl">
            <SectionLabel light>{fp.catalogLabel}</SectionLabel>
            <h1 className="font-extrabold tracking-tight leading-tight text-white mb-5"
              style={{ fontSize:'clamp(2rem,4.5vw,3.2rem)' }}>
              {fp.title[0]}{' '}
              <span style={{ color: GREEN }}>{fp.title[1]}</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color:'rgba(255,255,255,0.68)' }}>
              {fp.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(136,196,64,0.15)', border:'1px solid rgba(136,196,64,0.35)' }}>
                <CheckCircle size={14} style={{ color: GREEN }} />
                <span style={{ fontSize:13, fontWeight:600, color:'#c6f0b8' }}>{fp.courses.length} {fp.availableLabel}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)' }}>
                <Users size={14} style={{ color:'rgba(255,255,255,0.6)' }} />
                <span style={{ fontSize:13, fontWeight:600, color:'rgba(255,255,255,0.6)' }}>Formateurs certifiés</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)' }}>
                <Award size={14} style={{ color:'rgba(255,255,255,0.6)' }} />
                <span style={{ fontSize:13, fontWeight:600, color:'rgba(255,255,255,0.6)' }}>Certificats inclus</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height:60, overflow:'hidden' }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width:'100%', height:'100%', display:'block' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── CATALOGUE ────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* filtres par catégorie */}
          {fp.courses.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveFilter(cat)}
                  className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150"
                  style={{
                    background: activeFilter === cat ? GREEN : '#f8f9fa',
                    color:      activeFilter === cat ? '#fff' : '#374151',
                    border:     activeFilter === cat ? `1px solid ${GREEN}` : '1px solid #e5e7eb',
                    cursor: 'pointer',
                  }}>
                  {cat === 'Tous' ? (
                    <span className="flex items-center gap-1.5"><Tag size={12} /> Tous ({fp.courses.length})</span>
                  ) : (
                    cat
                  )}
                </button>
              ))}
            </div>
          )}

          {/* grille */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(course => (
                <CourseCard key={course.id} course={course} onEnroll={setEnrollCourse} t={t} />
              ))}
            </div>
          ) : (
            /* état vide */
            <div className="flex flex-col items-center text-center py-28">
              <div className="flex items-center justify-center mb-5"
                style={{ width:72, height:72, borderRadius:20, background:'rgba(136,196,64,0.10)' }}>
                <BookOpen size={32} style={{ color: GREEN }} />
              </div>
              <p className="font-bold text-gray-900 text-xl mb-2">{fp.noneTitle}</p>
              <p className="text-base mb-8 max-w-sm" style={{ color:'#6b7280' }}>{fp.noneSubtitle}</p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
                style={{ background: GREEN, boxShadow:`0 4px 18px ${GREEN}35` }}>
                {fp.noneCta} <ChevronRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16" style={{ background: DARK_BG }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:'radial-gradient(ellipse at 60% 50%,rgba(136,196,64,0.15) 0%,transparent 65%)' }} />
        <div className="relative max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Vous ne trouvez pas la formation qu'il vous faut ?
          </h2>
          <p className="mb-8" style={{ color:'#c6f0b8', fontSize:15 }}>
            Contactez-nous pour une formation sur-mesure adaptée à vos équipes et vos objectifs.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
            style={{ background: GREEN, boxShadow:`0 6px 20px ${GREEN}30` }}>
            Demander une formation sur-mesure <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      {enrollCourse && <EnrollModal course={enrollCourse} onClose={() => setEnrollCourse(null)} />}
    </div>
  );
}
