'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Award, BookOpen, ClipboardList, GraduationCap,
  BarChart2, CheckCircle, Clock, X, Send
} from 'lucide-react';

interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  lessons: number;
  qcm: number;
  exams: number;
  description: string;
  price: string;
  hasCertificate: boolean;
  accentColor: string;
}

const COURSES: Course[] = [
  {
    id: 1,
    title: 'Conduite Sécurisée et Défensive',
    category: 'Sécurité',
    instructor: 'Z. Kartoubi',
    level: 'Intermédiaire',
    lessons: 12,
    qcm: 8,
    exams: 2,
    description: "Maîtrisez les techniques de conduite défensive pour réduire les risques d'accidents en conditions réelles de transport professionnel.",
    price: '2 500 MAD',
    hasCertificate: true,
    accentColor: '#88C440',
  },
  {
    id: 2,
    title: 'Transport de Matières Dangereuses (ADR)',
    category: 'ADR',
    instructor: 'Z. Kartoubi',
    level: 'Avancé',
    lessons: 20,
    qcm: 15,
    exams: 3,
    description: 'Formation complète sur la réglementation ADR pour le transport de marchandises dangereuses par route selon les normes européennes.',
    price: '4 200 MAD',
    hasCertificate: true,
    accentColor: '#e85d04',
  },
  {
    id: 3,
    title: 'Conformité Loi 52-05',
    category: 'Réglementation',
    instructor: 'Z. Kartoubi',
    level: 'Débutant',
    lessons: 8,
    qcm: 6,
    exams: 1,
    description: "Comprenez et appliquez le code de la route marocain (Loi 52-05) pour une conformité totale de votre flotte.",
    price: '1 800 MAD',
    hasCertificate: true,
    accentColor: '#3b82f6',
  },
  {
    id: 4,
    title: 'Éco-conduite et Gestion de Carburant',
    category: 'Performance',
    instructor: 'Z. Kartoubi',
    level: 'Débutant',
    lessons: 10,
    qcm: 7,
    exams: 1,
    description: "Réduisez la consommation de carburant et l'empreinte écologique de votre flotte grâce aux techniques d'éco-conduite certifiées.",
    price: '1 500 MAD',
    hasCertificate: false,
    accentColor: '#88C440',
  },
  {
    id: 5,
    title: 'Premiers Secours & Gestion des Accidents',
    category: 'Sécurité',
    instructor: 'Z. Kartoubi',
    level: 'Intermédiaire',
    lessons: 6,
    qcm: 4,
    exams: 1,
    description: 'Formez vos conducteurs aux gestes de premiers secours et à la gestion des situations urgence sur la route.',
    price: '1 200 MAD',
    hasCertificate: true,
    accentColor: '#ef4444',
  },
  {
    id: 6,
    title: 'Arrimage et Chargement des Marchandises',
    category: 'Logistique',
    instructor: 'Z. Kartoubi',
    level: 'Intermédiaire',
    lessons: 9,
    qcm: 5,
    exams: 1,
    description: "Maîtrisez les procédures de chargement, d'arrimage et de déchargement conformes aux normes de sécurité en vigueur.",
    price: '2 000 MAD',
    hasCertificate: true,
    accentColor: '#f59e0b',
  },
];

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

function CourseCard({ course, onEnroll }: { course: Course; onEnroll: (c: Course) => void }) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      {/* Thumbnail */}
      <div
        className="relative h-44 rounded-t-xl overflow-hidden flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${course.accentColor}18 0%, ${course.accentColor}35 100%)` }}
      >
        <GraduationCap size={52} style={{ color: course.accentColor, opacity: 0.55 }} />
        <div
          className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm"
          style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)', color: '#111827' }}
        >
          {course.category}
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={{ background: 'rgba(136,196,64,0.15)', color: '#5a9a1a' }}
          >
            {course.instructor.charAt(0)}
          </div>
          <span className="text-xs truncate" style={{ color: '#6b7280' }}>{course.instructor}</span>
        </div>

        <h3 className="font-bold text-gray-900 text-sm leading-snug mb-3 line-clamp-2">{course.title}</h3>

        <div className="flex items-center gap-2 flex-wrap mb-4">
          <span className="text-xs flex items-center gap-1" style={{ color: '#6b7280' }}>
            <BarChart2 size={11} /> {course.level}
          </span>
          <span className="text-xs flex items-center gap-1" style={{ color: '#6b7280' }}>
            <BookOpen size={11} /> {course.lessons} leçons
          </span>
          <span className="text-xs flex items-center gap-1" style={{ color: '#6b7280' }}>
            <ClipboardList size={11} /> {course.qcm} QCM
          </span>
          {course.hasCertificate && (
            <span
              className="text-xs font-medium flex items-center gap-1 px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(136,196,64,0.12)', color: '#5a9a1a' }}
            >
              <Award size={10} /> Certificat
            </span>
          )}
        </div>

        <button
          onClick={() => onEnroll(course)}
          className="w-full py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: '#5cb85c' }}
        >
          S&apos;inscrire / Prévisualiser
        </button>

        <p className="text-xs text-center mt-2 flex items-center justify-center gap-1" style={{ color: '#6b7280' }}>
          <CheckCircle size={10} style={{ color: '#88C440' }} /> Réservé aux membres
        </p>
      </div>

      {/* Hover popup */}
      <div
        className="absolute left-full top-0 ml-3 w-72 z-30 opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto transition-all duration-200"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.15))' }}
      >
        <div className="absolute -left-1.5 top-5 w-3 h-3 bg-white rotate-45" style={{ border: '1px solid #e5e7eb', borderRight: 'none', borderTop: 'none' }} />
        <div className="bg-white border border-gray-200 rounded-xl p-5 ml-1">
          <h4 className="font-bold text-gray-900 text-sm mb-2">{course.title}</h4>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full inline-block mb-3"
            style={{ background: 'rgba(136,196,64,0.12)', color: '#5a9a1a' }}
          >
            {course.category}
          </span>
          <p className="text-xs leading-relaxed mb-4 line-clamp-3" style={{ color: '#6b7280' }}>{course.description}</p>
          <div className="flex gap-3 mb-4 text-xs" style={{ color: '#6b7280' }}>
            <span>{course.level}</span>
            <span>·</span>
            <span>{course.lessons} leçons</span>
            <span>·</span>
            <span>{course.exams} examen{course.exams > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg mb-4" style={{ background: '#f8f9fa' }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: 'rgba(136,196,64,0.15)', color: '#5a9a1a' }}>
              {course.instructor.charAt(0)}
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900">{course.instructor}</p>
              <p className="text-xs" style={{ color: '#6b7280' }}>Formateur certifié</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-base font-bold" style={{ color: '#88C440' }}>{course.price}</span>
            <button
              onClick={() => onEnroll(course)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white"
              style={{ background: '#5cb85c' }}
            >
              Voir le cours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function EnrollModal({ course, onClose }: { course: Course; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
        {!submitted ? (
          <>
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h3 className="font-bold text-gray-900">Demande d&apos;inscription</h3>
                <p className="text-sm mt-0.5" style={{ color: '#6b7280' }}>Vérifiez vos coordonnées et ajoutez un message.</p>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                <X size={18} className="text-gray-500" />
              </button>
            </div>

            <div
              className="mx-6 mt-4 p-3 rounded-xl flex items-center gap-3"
              style={{ background: 'rgba(136,196,64,0.07)', border: '1px solid rgba(136,196,64,0.2)' }}
            >
              <div className="w-12 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(136,196,64,0.15)' }}>
                <GraduationCap size={20} style={{ color: '#88C440' }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{course.title}</p>
                <p className="text-xs" style={{ color: '#6b7280' }}>par {course.instructor}</p>
              </div>
              <span className="text-sm font-bold flex-shrink-0" style={{ color: '#88C440' }}>{course.price}</span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Nom complet *</label>
                  <input required placeholder="Votre nom" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-xl outline-none focus:border-[#88C440] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email *</label>
                  <input required type="email" placeholder="email@entreprise.ma" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-xl outline-none focus:border-[#88C440] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Téléphone *</label>
                <input required placeholder="+212 6XX XXX XXX" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-xl outline-none focus:border-[#88C440] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Message (optionnel)</label>
                <textarea rows={3} placeholder="Questions ou informations supplémentaires..." className="w-full px-3 py-2 text-sm border border-gray-200 rounded-xl outline-none focus:border-[#88C440] transition-colors resize-none" />
              </div>
              <div className="flex gap-3 pt-1">
                <button type="button" onClick={onClose} className="flex-1 py-2.5 text-sm font-semibold border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                  Annuler
                </button>
                <button type="submit" className="flex-[2] py-2.5 text-sm font-semibold text-white rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-200" style={{ background: '#88C440' }}>
                  <Send size={13} /> Envoyer la demande
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="p-10 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(234,179,8,0.15)' }}>
              <Clock size={32} style={{ color: '#ca8a04' }} />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Demande envoyée !</h3>
            <p className="text-sm mb-6 max-w-xs mx-auto" style={{ color: '#6b7280' }}>
              Votre demande d&apos;inscription a bien été reçue. Un administrateur va l&apos;examiner et vous donnera accès à la formation très prochainement.
            </p>
            <button onClick={onClose} className="px-6 py-2.5 text-sm font-semibold text-white rounded-xl" style={{ background: '#88C440' }}>
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Formations() {
  const [enrollCourse, setEnrollCourse] = useState<Course | null>(null);

  return (
    <div style={{ color: '#111827' }}>

      {/* HERO */}
      <section
        className="relative overflow-hidden border-b border-gray-100"
        style={{ background: 'linear-gradient(150deg, #f5fef0 0%, #ffffff 55%, #f8faff 100%)' }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(136,196,64,0.15) 0%, transparent 65%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <SectionLabel>Catalogue</SectionLabel>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            Nos <span style={{ color: '#88C440' }}>Formations</span> Professionnelles
          </h1>
          <p className="text-base max-w-xl mb-5" style={{ color: '#6b7280' }}>
            Formations en sécurité routière, éco-conduite et logistique professionnelle pour les entreprises de transport.
          </p>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: 'rgba(136,196,64,0.10)', color: '#5a9a1a', border: '1px solid rgba(136,196,64,0.25)' }}
          >
            <CheckCircle size={14} /> {COURSES.length} formations disponibles
          </div>
        </div>
      </section>

      {/* GRILLE */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {COURSES.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COURSES.map((course) => (
                <CourseCard key={course.id} course={course} onEnroll={setEnrollCourse} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(136,196,64,0.10)' }}>
                <BookOpen size={28} style={{ color: '#88C440' }} />
              </div>
              <p className="font-bold text-gray-900 text-lg mb-2">Aucune formation pour le moment</p>
              <p className="text-sm mb-6" style={{ color: '#6b7280' }}>Les formations seront publiées prochainement.</p>
              <Link href="/contact" className="inline-block px-6 py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#88C440' }}>
                Nous contacter
              </Link>
            </div>
          )}
        </div>
      </section>

      {enrollCourse && <EnrollModal course={enrollCourse} onClose={() => setEnrollCourse(null)} />}
    </div>
  );
}
