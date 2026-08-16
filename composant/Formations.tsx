'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CheckCircle, GraduationCap, ChevronRight, X, Users, Wifi, MapPin, BookOpen, ArrowRight,
} from 'lucide-react';
import { useT } from '@/lib/useT';
import type { CourseItem } from '@/lib/i18n';

const DARK_BG = 'linear-gradient(135deg,#0f1f0e 0%,#1a3016 60%,#243d1e 100%)';
const GREEN   = '#88C440';

/* ─── SectionLabel ──────────────────────────────────────────────── */
function SectionLabel({ children, light }: Readonly<{ children: string; light?: boolean }>) {
  const c = light ? '#a8e063' : GREEN;
  return (
    <div className="mb-5">
      <span style={{ fontSize:14, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:c }}>
        {children}
      </span>
      <div style={{ width:48, height:3, marginTop:8, borderRadius:2, background:`linear-gradient(90deg,${c},transparent)` }} />
    </div>
  );
}

/* ─── Course card ───────────────────────────────────────────────── */
function CourseCard({ course, onDetail }: Readonly<{
  course: CourseItem;
  onDetail: (c: CourseItem) => void;
}>) {
  return (
    <button
      onClick={() => onDetail(course)}
      className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
      style={{ width:240, flexShrink:0, borderTop:`3px solid ${course.accentColor}`, cursor:'pointer' }}>

      <div className="flex items-center justify-center mb-4"
        style={{ width:46, height:46, borderRadius:13, background:`${course.accentColor}18` }}>
        <GraduationCap size={21} style={{ color: course.accentColor }} />
      </div>

      <p className="font-bold text-gray-900 text-sm mb-2 leading-snug">{course.title}</p>

      <p className="text-xs leading-relaxed flex-1" style={{ color:'#9ca3af' }}>
        {course.description
          ? course.description.slice(0, 80) + '…'
          : course.mode === 'online'
            ? 'Formation en ligne — cliquez pour plus de détails.'
            : course.category}
      </p>

      <div className="flex items-center gap-1 mt-4" style={{ color: course.accentColor, fontSize:11, fontWeight:600 }}>
        En savoir plus <ArrowRight size={11} />
      </div>
    </button>
  );
}

/* ─── Marquee carousel — même animation que Conseil (40 s) ──────── */
function CourseCarousel({ courses, onDetail, paused }: Readonly<{
  courses: CourseItem[];
  onDetail: (c: CourseItem) => void;
  paused: boolean;
}>) {
  if (courses.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center py-16 rounded-2xl border border-dashed border-gray-200">
          <BookOpen size={28} style={{ color:'#d1d5db', marginBottom:12 }} />
          <p className="font-semibold text-gray-400 text-sm">Aucune formation dans cette catégorie</p>
        </div>
      </div>
    );
  }

  const needsLoop = courses.length > 4;
  const speed = Math.max(15, courses.length * 4);
  const displayed = needsLoop ? [...courses, ...courses] : courses;

  return (
    <div style={{ overflow:'hidden' }}>
      <div style={{
        display:'flex',
        gap:16,
        width: needsLoop ? 'max-content' : undefined,
        flexWrap: needsLoop ? undefined : 'wrap',
        padding: needsLoop ? undefined : '0 32px',
        animation: needsLoop ? `carouselScroll ${speed}s linear infinite` : undefined,
        animationPlayState: needsLoop && paused ? 'paused' : 'running',
      }}>
        {displayed.map((course, i) => (
          <CourseCard key={`${course.id}-${i}`} course={course} onDetail={onDetail} />
        ))}
      </div>
    </div>
  );
}

/* ─── Section (online / présentiel) avec filtre par catégorie ────── */
function FormationSection({ mode, courses, onDetail, t }: Readonly<{
  mode: 'online' | 'presentiel';
  courses: CourseItem[];
  onDetail: (c: CourseItem) => void;
  t: ReturnType<typeof useT>;
}>) {
  const [paused, setPaused]               = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  const fp       = t.formationsPage;
  const isOnline = mode === 'online';
  const sec      = isOnline ? fp.onlineSection : fp.presentielSection;
  const Icon     = isOnline ? Wifi : MapPin;
  const accentBg     = isOnline ? 'rgba(59,130,246,0.08)' : 'rgba(136,196,64,0.08)';
  const accentBorder = isOnline ? 'rgba(59,130,246,0.20)' : 'rgba(136,196,64,0.20)';
  const accentColor  = isOnline ? '#3b82f6' : GREEN;

  const categories = ['Tous', ...Array.from(new Set(courses.map(c => c.category)))];
  const filtered   = activeCategory === 'Tous' ? courses : courses.filter(c => c.category === activeCategory);

  /* ── cas vide : section "à venir" ── */
  if (courses.length === 0) {
    const TEASER_TOPICS = [
      'Prévention Risque Routier',
      'Éco-conduite',
      'ISO 39001',
      'Leadership HSE',
      'ESG & Durabilité',
      'Audit Interne ISO',
    ];
    return (
      <div className="mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-4"
              style={{ background: accentBg, border:`1px solid ${accentBorder}` }}>
              <Icon size={16} style={{ color: accentColor }} />
              <span style={{ fontSize:13, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color: accentColor }}>
                {sec.label}
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 mb-2">{sec.title}</h2>
            <p className="text-base" style={{ color:'#6b7280', maxWidth:520 }}>{sec.subtitle}</p>
          </div>

          {/* banner "à venir" */}
          <div className="relative overflow-hidden rounded-3xl p-10 lg:p-14"
            style={{ background:'linear-gradient(135deg,#f0f7ff 0%,#e8f4e8 100%)', border:'1px solid #dbeafe' }}>

            {/* dot pattern */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ opacity:0.06, backgroundImage:'radial-gradient(circle,#3b82f6 1px,transparent 1px)', backgroundSize:'28px 28px' }} />

            <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-10">

              {/* left */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                  style={{ background:'rgba(59,130,246,0.12)', border:'1px solid rgba(59,130,246,0.25)' }}>
                  <span style={{ fontSize:11, fontWeight:700, letterSpacing:'0.12em', color:'#3b82f6', textTransform:'uppercase' }}>
                    Prochainement disponible
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Nos formations en ligne arrivent bientôt
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color:'#6b7280', maxWidth:440 }}>
                  Accédez à nos programmes depuis n'importe où, à votre rythme. Vidéos, QCM, certifications et
                  accompagnement expert — entièrement en ligne.
                </p>

                {/* teaser topics */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {TEASER_TOPICS.map(topic => (
                    <span key={topic}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold"
                      style={{ background:'white', border:'1px solid #dbeafe', color:'#3b82f6' }}>
                      {topic}
                    </span>
                  ))}
                </div>

                <a
                  href="https://wa.me/212607721274?text=Bonjour%2C%20je%20souhaite%20%C3%AAtre%20inform%C3%A9(e)%20du%20lancement%20des%20formations%20en%20ligne."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
                  style={{ background:'#3b82f6', boxShadow:'0 4px 16px rgba(59,130,246,0.35)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Être informé(e) du lancement
                </a>
              </div>

              {/* right — placeholder cards */}
              <div className="flex gap-3 flex-shrink-0">
                {[0, 1, 2].map(idx => (
                  <div key={idx}
                    className="rounded-2xl p-5 border border-blue-100"
                    style={{
                      width:160,
                      background:'white',
                      opacity: 1 - idx * 0.25,
                      transform: `translateY(${idx * 8}px)`,
                      filter: idx > 0 ? 'blur(0.5px)' : 'none',
                    }}>
                    <div className="rounded-xl mb-3"
                      style={{ width:36, height:36, background:'rgba(59,130,246,0.10)' }} />
                    <div className="rounded mb-2" style={{ height:10, background:'#e5e7eb', width:'80%' }} />
                    <div className="rounded mb-1" style={{ height:8, background:'#f3f4f6', width:'100%' }} />
                    <div className="rounded" style={{ height:8, background:'#f3f4f6', width:'65%' }} />
                    <div className="mt-3 rounded"
                      style={{ height:6, background:'rgba(59,130,246,0.15)', width:'50%' }} />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-20">

      {/* ── header ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-4"
              style={{ background: accentBg, border:`1px solid ${accentBorder}` }}>
              <Icon size={16} style={{ color: accentColor }} />
              <span style={{ fontSize:13, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color: accentColor }}>
                {sec.label}
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 mb-2">{sec.title}</h2>
            <p className="text-base" style={{ color:'#6b7280', maxWidth:520 }}>{sec.subtitle}</p>
          </div>

          {activeCategory === 'Tous' && (
            <div className="flex items-center gap-3 flex-shrink-0 pb-1">
              <span style={{ fontSize:12, color:'#9ca3af' }}>
                {paused ? '⏸ En pause' : '▶ Défilement auto'}
              </span>
              <button
                onClick={() => setPaused(p => !p)}
                className="flex items-center justify-center rounded-xl border border-gray-200 bg-white hover:border-green-400 hover:shadow-md transition-all"
                style={{ width:42, height:42, cursor:'pointer' }}>
                {paused
                  ? <ChevronRight size={18} style={{ color:GREEN }} />
                  : <span style={{ fontSize:16 }}>⏸</span>
                }
              </button>
            </div>
          )}
        </div>

        {/* ── filtres catégorie ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setPaused(false); }}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: isActive ? accentColor : 'white',
                  color:      isActive ? 'white'      : '#6b7280',
                  border:     `1px solid ${isActive ? accentColor : '#e5e7eb'}`,
                  cursor:     'pointer',
                  boxShadow:  isActive ? `0 4px 12px ${accentColor}30` : 'none',
                }}>
                {cat}
                {cat !== 'Tous' && (
                  <span className="ml-2 text-xs font-normal opacity-70">
                    {courses.filter(c => c.category === cat).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── carousel animé (Tous) ou grille statique (filtre actif) ── */}
      {activeCategory === 'Tous' ? (
        <CourseCarousel courses={filtered} onDetail={onDetail} paused={paused} />
      ) : (
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center text-center py-16 rounded-2xl border border-dashed border-gray-200">
              <BookOpen size={28} style={{ color:'#d1d5db', marginBottom:12 }} />
              <p className="font-semibold text-gray-400 text-sm">Aucune formation dans cette catégorie</p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-4">
              {filtered.map(course => (
                <CourseCard key={course.id} course={course} onDetail={onDetail} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Course detail modal ───────────────────────────────────────── */
const WA_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const LMS_BASE = process.env.NEXT_PUBLIC_LMS_URL ?? 'https://learn.spirit.engineering';

function CourseDetailModal({ course, onClose }: Readonly<{ course: CourseItem; onClose: () => void }>) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const waText = encodeURIComponent(
    [
      '👋 Bonjour Spirit Engineering,',
      '',
      'Je souhaite avoir plus d\'informations sur la formation :',
      `*${course.title}*`,
      course.category ? `Catégorie : ${course.category}` : '',
      course.level    ? `Niveau : ${course.level}`       : '',
      course.price    ? `Prix : ${course.price}`         : '',
      '',
      'Merci de me recontacter.',
    ].filter(Boolean).join('\n')
  );
  const waUrl = `https://wa.me/212607721274?text=${waText}`;

  return (
    <div className="fixed inset-0 z-50">
      <button
        aria-label="Fermer"
        className="absolute inset-0 w-full h-full"
        style={{ background:'rgba(0,0,0,0.55)', backdropFilter:'blur(6px)', border:'none', cursor:'default' }}
        onClick={onClose}
      />

      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto">

          {/* header */}
          <div className="flex items-center justify-between px-7 py-5" style={{ background: DARK_BG }}>
            <div>
              <p className="font-bold text-white text-sm">Fiche formation</p>
              <p style={{ fontSize:11, color:'rgba(255,255,255,0.55)' }}>Spirit Engineering Academy</p>
            </div>
            <button onClick={onClose}
              style={{ background:'none', border:'none', cursor:'pointer', color:'rgba(255,255,255,0.6)' }}>
              <X size={18} />
            </button>
          </div>

          <div className="p-7">

            {/* titre + badges */}
            <div className="flex items-start gap-4 mb-5">
              <div className="flex items-center justify-center flex-shrink-0"
                style={{ width:52, height:52, borderRadius:14, background:`${course.accentColor}18` }}>
                <GraduationCap size={24} style={{ color: course.accentColor }} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">{course.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {course.category && (
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                      style={{ background:`${course.accentColor}12`, color: course.accentColor }}>
                      {course.category}
                    </span>
                  )}
                  {course.level && (
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-100 text-gray-600">
                      {course.level}
                    </span>
                  )}
                  {course.mode === 'online' && (
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                      style={{ background:'rgba(59,130,246,0.10)', color:'#3b82f6' }}>
                      En ligne
                    </span>
                  )}
                  {course.mode === 'presentiel' && (
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                      style={{ background:'rgba(136,196,64,0.12)', color:'#4a7c0f' }}>
                      Présentiel
                    </span>
                  )}
                </div>
              </div>
              {course.price && (
                <p className="font-extrabold text-lg flex-shrink-0" style={{ color: GREEN }}>{course.price}</p>
              )}
            </div>


            {/* description — présentiel uniquement */}
            {course.mode === 'presentiel' && course.description && (
              <p className="text-sm leading-relaxed mb-6 p-4 rounded-2xl"
                style={{ color:'#4b5563', background:'#f9fafb', border:'1px solid #f3f4f6' }}>
                {course.description}
              </p>
            )}

            {/* infos supplémentaires */}
            <div className="flex flex-wrap gap-3 mb-6">
              {course.instructor && (
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Users size={13} />
                  <span>{course.instructor}</span>
                </div>
              )}
              {course.lessons > 0 && (
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <BookOpen size={13} />
                  <span>{course.lessons} modules</span>
                </div>
              )}
            </div>

            {/* boutons d'action */}
            <div className="flex flex-col gap-3">
              {course.mode === 'online' && (
                <a
                  href={course.slug ? `${LMS_BASE}/courses/${course.slug}` : LMS_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5"
                  style={{ background: course.accentColor, boxShadow:`0 4px 18px ${course.accentColor}40` }}>
                  <GraduationCap size={16} />
                  S'inscrire sur la plateforme LMS
                </a>
              )}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5"
                style={{ background:'#25D366', boxShadow:'0 4px 18px rgba(37,211,102,0.35)' }}>
                {WA_ICON}
                Contacter via WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Skeleton card ─────────────────────────────────────────────── */
function SkeletonCard() {
  return (
    <div className="flex flex-col p-6 rounded-2xl border border-gray-100 bg-white animate-pulse"
      style={{ width:240, flexShrink:0 }}>
      <div className="rounded-xl mb-4" style={{ width:46, height:46, background:'#f3f4f6' }} />
      <div className="rounded mb-2" style={{ height:12, background:'#f3f4f6', width:'85%' }} />
      <div className="rounded mb-1" style={{ height:10, background:'#f3f4f6', width:'100%' }} />
      <div className="rounded mb-1" style={{ height:10, background:'#f3f4f6', width:'70%' }} />
      <div className="rounded mt-4" style={{ height:10, background:'#f3f4f6', width:'40%' }} />
    </div>
  );
}

/* ─── LMS mapping ───────────────────────────────────────────────── */
const LMS_URL = 'https://learn.spirit.engineering';

function mapLmsCourses(list: Array<Record<string, unknown>>, lmsUrl = LMS_URL): CourseItem[] {
  return list.map((c, idx) => ({
    id:             idx + 1,
    title:          String(c.title ?? ''),
    category:       String((c.category as Record<string, unknown>)?.name ?? ''),
    instructor:     `${String((c.instructor as Record<string, unknown>)?.first_name ?? '')} ${String((c.instructor as Record<string, unknown>)?.last_name ?? '')}`.trim(),
    level:          ({ BEGINNER:'Débutant', INTERMEDIATE:'Intermédiaire', ADVANCED:'Avancé' } as Record<string,string>)[String(c.level)] ?? String(c.level ?? ''),
    description:    String(c.description ?? ''),
    price:          String(c.price ?? 'Sur devis'),
    hasCertificate: false,
    accentColor:    String(c.accent_color ?? '#88C440'),
    mode:           (c.mode === 'online' ? 'online' : 'presentiel') as 'online' | 'presentiel',
    lessons:        Number(c.sections_count ?? 0),
    qcm: 0, exams: 0,
    slug:           String(c.slug ?? ''),
    thumbnail:      c.thumbnail ? `${lmsUrl}${String(c.thumbnail)}` : undefined,
  }));
}

/* ─── Page ──────────────────────────────────────────────────────── */
export default function Formations() {
  const lmsUrl = process.env.NEXT_PUBLIC_LMS_URL ?? LMS_URL;
  const t  = useT();
  const fp = t.formationsPage;

  const [detailCourse, setDetailCourse] = useState<CourseItem | null>(null);
  const [courses, setCourses]           = useState<CourseItem[]>([]);
  const [loading, setLoading]           = useState(true);
  const [apiError, setApiError]         = useState(false);

  useEffect(() => {
    fetch(`${lmsUrl}/api/public/courses`, { headers: { Accept: 'application/json' } })
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then((raw: unknown) => {
        const list = Array.isArray(raw) ? raw : ((raw as Record<string, unknown>).data ?? []) as unknown[];
        setCourses(mapLmsCourses(list as Array<Record<string, unknown>>, lmsUrl));
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.error('[Formations] fetch failed:', err);
        setCourses(fp.courses);
        setApiError(true);
        setLoading(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onlineCourses     = courses.filter(c => c.mode === 'online');
  const presentielCourses = fp.courses;

  return (
    <div style={{ fontFamily:"'Century Gothic','CenturyGothic','AppleGothic',sans-serif" }}>

      <style>{`
        @keyframes carouselScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

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
                <span style={{ fontSize:13, fontWeight:600, color:'#c6f0b8' }}>
                  {courses.length || fp.courses.length} {fp.availableLabel}
                </span>
              </div>
              {onlineCourses.length > 0 && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)' }}>
                  <Wifi size={14} style={{ color:'rgba(255,255,255,0.6)' }} />
                  <span style={{ fontSize:13, fontWeight:600, color:'rgba(255,255,255,0.6)' }}>
                    {onlineCourses.length} en ligne
                  </span>
                </div>
              )}
              {presentielCourses.length > 0 && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)' }}>
                  <MapPin size={14} style={{ color:'rgba(255,255,255,0.6)' }} />
                  <span style={{ fontSize:13, fontWeight:600, color:'rgba(255,255,255,0.6)' }}>
                    {presentielCourses.length} en présentiel
                  </span>
                </div>
              )}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)' }}>
                <Users size={14} style={{ color:'rgba(255,255,255,0.6)' }} />
                <span style={{ fontSize:13, fontWeight:600, color:'rgba(255,255,255,0.6)' }}>
                  Formateurs certifiés
                </span>
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
      <section className="py-16 lg:py-20 bg-white overflow-hidden">
        {loading ? (
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {apiError && (
              <p className="text-xs mb-6 px-3 py-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-700">
                Connexion au LMS indisponible — affichage des formations en cache.
              </p>
            )}
            <div className="flex gap-4 overflow-hidden mb-16">
              {Array.from({ length: 5 }, (_, i) => i).map(i => <SkeletonCard key={i} />)}
            </div>
            <div className="flex gap-4 overflow-hidden">
              {Array.from({ length: 5 }, (_, i) => i).map(i => <SkeletonCard key={i} />)}
            </div>
          </div>
        ) : (
          <>
            <FormationSection mode="presentiel" courses={presentielCourses} onDetail={setDetailCourse} t={t} />
            <FormationSection mode="online"     courses={onlineCourses}     onDetail={setDetailCourse} t={t} />
          </>
        )}
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
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
            style={{ background: GREEN, boxShadow:`0 6px 20px ${GREEN}30` }}>
            Demander une formation sur-mesure <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      {detailCourse && <CourseDetailModal course={detailCourse} onClose={() => setDetailCourse(null)} />}
    </div>
  );
}
