'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import {
  ChevronRight, Award, ClipboardCheck, TrendingUp, RefreshCw,
  Shield, Leaf, Activity, Zap, BookOpen, Users, GraduationCap,
  Search, FileText, Rocket, BarChart2, AlertTriangle, CheckCircle,
  Star, X, Target, Car, Building2, Lightbulb, Globe, DollarSign,
  BadgeCheck, ChevronDown, ArrowRight,
} from 'lucide-react';

const DARK_BG = 'linear-gradient(135deg,#0f1f0e 0%,#1a3016 60%,#243d1e 100%)';
const GREEN   = '#88C440';

/* ─── helpers ─────────────────────────────────────────────────────── */
function SectionLabel({ children, light }) {
  const c = light ? '#a8e063' : GREEN;
  return (
    <div className="mb-5">
      <span style={{ fontSize:14, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:c }}>{children}</span>
      <div style={{ width:48, height:3, marginTop:8, borderRadius:2, background:`linear-gradient(90deg,${c},transparent)` }} />
    </div>
  );
}

function Chip({ children, color = GREEN }) {
  return (
    <span style={{ fontSize:11, padding:'3px 10px', borderRadius:100, background:`${color}18`, color, border:`1px solid ${color}40` }}>
      {children}
    </span>
  );
}

/* ─── assistant data ─────────────────────────────────────────────── */
const CATEGORIES = [
  {
    id:'certification', Icon:Award, color:'#3b82f6',
    title:'Obtenir une certification ISO',
    desc:'ISO 39001, 45001, 50001, 9001, 14001…',
    questions:[
      { id:'norme',   label:'Quelle norme vous intéresse ?',                   type:'select', options:['ISO 39001 — Sécurité Routière','ISO 45001 — Santé & Sécurité','ISO 50001 — Énergie','ISO 9001 — Qualité','ISO 14001 — Environnement','ISO 27001 — Sécurité de l\'information','Autre / Je ne sais pas encore'] },
      { id:'systeme', label:'Avez-vous déjà un système de management en place ?', type:'select', options:['Oui, partiellement','Non, départ de zéro','Oui, mais non certifié'] },
      { id:'delai',   label:'Quel est votre délai souhaité ?',                 type:'select', options:['Moins de 6 mois','6 à 12 mois','Plus de 12 mois'] },
    ],
    proposal:{
      title:'Votre parcours certification sur-mesure',
      services:[
        { Icon:Search,        label:'Diagnostic initial & Gap Analysis' },
        { Icon:FileText,      label:'Accompagnement documentaire complet' },
        { Icon:GraduationCap, label:'Formation des équipes internes' },
        { Icon:ClipboardCheck,label:'Audit à blanc & préparation' },
        { Icon:Award,         label:'Support à la certification officielle' },
      ],
    },
  },
  {
    id:'performance', Icon:TrendingUp, color:GREEN,
    title:'Améliorer la performance de mon organisation',
    desc:'Processus, gouvernance, excellence opérationnelle',
    questions:[
      { id:'secteur', label:'Quel est votre secteur d\'activité ?',    type:'select', options:['Transport & Logistique','Industrie','Énergie & Utilities','Secteur public / Para-public','Services','Autre'] },
      { id:'defi',    label:'Quels sont vos principaux défis ?',        type:'select', options:['Processus inefficaces','Problèmes de gouvernance','Gestion des risques insuffisante','Atteindre l\'excellence opérationnelle'] },
    ],
    proposal:{
      title:'Notre approche performance organisationnelle',
      services:[
        { Icon:Search,    label:'Diagnostic organisationnel approfondi' },
        { Icon:RefreshCw, label:'Optimisation des processus clés' },
        { Icon:Building2, label:'Renforcement de la gouvernance' },
        { Icon:Shield,    label:'Gestion des risques structurée' },
        { Icon:BarChart2, label:'Pilotage par indicateurs de performance' },
      ],
    },
  },
  {
    id:'competences', Icon:GraduationCap, color:'#f59e0b',
    title:'Développer les compétences de mes équipes',
    desc:'Formation, parcours certifiants, capacity building',
    questions:[
      { id:'effectif', label:'Combien de collaborateurs sont concernés ?',      type:'select', options:['Moins de 50','50 à 200','Plus de 200'] },
      { id:'domaine',  label:'Quels domaines de compétences visez-vous ?',      type:'select', options:['Sécurité & HSE','Management & Leadership','Compétences techniques métier','Soft skills & communication','Plusieurs domaines'] },
      { id:'plan',     label:'Disposez-vous d\'un plan de formation existant ?', type:'select', options:['Oui, plan en place','Non, à construire','Plan partiel à compléter'] },
    ],
    proposal:{
      title:'Votre ingénierie de formation sur-mesure',
      services:[
        { Icon:Search,        label:'Analyse des besoins et des écarts' },
        { Icon:FileText,      label:'Conception du plan de formation' },
        { Icon:GraduationCap, label:'Parcours certifiants adaptés' },
        { Icon:Users,         label:'Capacity building & train-the-trainer' },
        { Icon:BarChart2,     label:'Évaluation des compétences et suivi' },
      ],
    },
  },
  {
    id:'financement', Icon:DollarSign, color:'#8b5cf6',
    title:'Bénéficier des mécanismes de financement',
    desc:'CSF, GIAC/GAC, contrats spéciaux de formation',
    questions:[
      { id:'org',       label:'Quel est votre type d\'organisation ?',    type:'select', options:['PME (< 200 salariés)','Grande entreprise','ONG / Association','Secteur public'] },
      { id:'dispositif',label:'Quel(s) dispositif(s) vous intéresse(nt) ?', type:'select', options:['CSF — Contrats Spéciaux de Formation','GIAC / GAC','Contrats spéciaux sectoriels','Plusieurs dispositifs','Je ne sais pas encore'] },
    ],
    proposal:{
      title:'Notre accompagnement au financement formation',
      services:[
        { Icon:Search,        label:'Audit d\'éligibilité et diagnostic financier' },
        { Icon:FileText,      label:'Élaboration des dossiers de demande' },
        { Icon:ClipboardCheck,label:'Gestion administrative et suivi' },
        { Icon:TrendingUp,    label:'Optimisation des enveloppes de financement' },
        { Icon:Rocket,        label:'Mise en œuvre du plan de formation financé' },
      ],
    },
  },
  {
    id:'securite', Icon:Car, color:'#ef4444',
    title:'Améliorer ma sécurité routière & mobilité durable',
    desc:'ISO 39001, flotte, conducteurs, politique mobilité',
    questions:[
      { id:'flotte',      label:'Quelle est la taille de votre flotte ?',              type:'select', options:['Moins de 10 véhicules','10 à 50 véhicules','Plus de 50 véhicules'] },
      { id:'conducteurs', label:'Combien de conducteurs professionnels avez-vous ?',   type:'select', options:['Moins de 20','20 à 100','Plus de 100'] },
      { id:'objectif',    label:'Quel est votre objectif prioritaire ?',               type:'select', options:['Réduire les accidents et incidents','Obtenir la certification ISO 39001','Mettre en place une politique de mobilité durable','Conformité réglementaire (Loi 52-05)'] },
    ],
    proposal:{
      title:'Votre programme sécurité routière & mobilité durable',
      services:[
        { Icon:Search,        label:'Diagnostic sécurité routière & flotte' },
        { Icon:Award,         label:'Accompagnement certification ISO 39001' },
        { Icon:Leaf,          label:'Politique de mobilité durable' },
        { Icon:Shield,        label:'Programmes de prévention & sensibilisation' },
        { Icon:GraduationCap, label:'Formation des conducteurs professionnels' },
      ],
    },
  },
];

/* ─── expertise cards ───────────────────────────────────────────── */
const EXPERTISE = [
  { Icon:Award,        color:'#3b82f6', title:'Certification ISO',               enjeux:'Compétitivité internationale, exigences clients et parties prenantes, crédibilité organisationnelle.',                                              benefices:'Reconnaissance internationale, réduction des risques, meilleure gouvernance, accès aux marchés exigeants.',         methodo:'Diagnostic → Gap analysis → Documentation → Formation → Audit à blanc → Certification', resultats:'Certification obtenue, processus maîtrisés, équipes compétentes.' },
  { Icon:ClipboardCheck,color:'#f59e0b',title:'Audit & Conformité',              enjeux:'Maîtrise des risques réglementaires, conformité aux référentiels sectoriels et légaux.',                                                            benefices:'Vision claire des écarts, plan d\'action priorisé, réduction de l\'exposition aux sanctions.',                     methodo:'Planification → Revue documentaire → Audit terrain → Rapport → Plan d\'action → Suivi',  resultats:'Rapport certifié, non-conformités traitées, conformité améliorée.' },
  { Icon:Lightbulb,    color:GREEN,     title:'Conseil stratégique',             enjeux:'Définir une vision claire, aligner les ressources sur les priorités et anticiper les transformations.',                                              benefices:'Vision cohérente, décisions éclairées, avantage concurrentiel durable.',                                            methodo:'Analyse → Ateliers co-construction → Feuille de route → Accompagnement → Évaluation',    resultats:'Plan stratégique validé, objectifs mesurables, équipes alignées.' },
  { Icon:RefreshCw,    color:'#8b5cf6', title:'Transformation organisationnelle',enjeux:'Adapter structures, processus et cultures à un environnement en mutation rapide.',                                                                   benefices:'Organisation agile, résistance au changement réduite, performance accrue.',                                         methodo:'Diagnostic → Vision cible → Plan de transformation → Déploiement → Ancrage',            resultats:'Transformation réussie, organisation performante, collaborateurs engagés.' },
  { Icon:Shield,       color:'#ef4444', title:'Sécurité routière',               enjeux:'4 160 décès sur les routes du Maroc (NARSA 2025). Responsabilité légale et morale des employeurs.',                                                benefices:'Réduction des accidents, économies flotte, conformité Loi 52-05, certification ISO 39001.',                         methodo:'Diagnostic → Politique mobilité → Formation conducteurs → ISO 39001 → Suivi KPI',       resultats:'Accidents réduits, économies carburant, ISO 39001 obtenue.' },
  { Icon:Leaf,         color:'#10b981', title:'Mobilité durable',                enjeux:'Transition énergétique, MACF européen, enjeux RSE et réduction de l\'empreinte carbone.',                                                           benefices:'−15 % carburant certifié, conformité RSE, accès marchés européens.',                                                methodo:'Bilan carbone → Stratégie → Éco-conduite → Reporting → ISO 50001',                       resultats:'Empreinte carbone réduite, coûts maîtrisés, politique RSE crédible.' },
  { Icon:Activity,     color:'#f97316', title:'Santé & Sécurité au travail',     enjeux:'Prévention des accidents, conformité réglementaire, bien-être des collaborateurs.',                                                                 benefices:'Accidentologie réduite, conformité assurée, certification ISO 45001.',                                              methodo:'Évaluation des risques → Plan d\'action → Formation → Procédures → ISO 45001',          resultats:'Accidents réduits, conformité totale, ISO 45001 obtenue.' },
  { Icon:Zap,          color:'#eab308', title:'Management de l\'énergie',        enjeux:'Coûts énergétiques croissants, objectifs neutralité carbone 2030, pression RSE.',                                                                   benefices:'Réduction de la facture énergétique, ISO 50001, accès aux mécanismes d\'efficacité.',                               methodo:'Revue énergétique → Plan efficacité → Formation → Pilotage → ISO 50001',                resultats:'Économies mesurées, ISO 50001 obtenue, reporting carbone fiable.' },
  { Icon:Target,       color:'#6366f1', title:'Gestion des risques',             enjeux:'Complexité croissante des environnements et exposition à des risques multidimensionnels.',                                                           benefices:'Vision consolidée des risques, décisions proactives, résilience renforcée.',                                        methodo:'Cartographie → Évaluation → Plans de traitement → Suivi → ISO 31000',                  resultats:'Cartographie validée, risques traités, culture du risque développée.' },
  { Icon:BookOpen,     color:'#0ea5e9', title:'Développement des compétences',   enjeux:'Obsolescence rapide des compétences, besoin de performance et d\'adaptabilité des équipes.',                                                        benefices:'Équipes compétentes, performance individuelle et collective améliorée.',                                             methodo:'Analyse des besoins → Ingénierie pédagogique → Déploiement → Évaluation',               resultats:'Compétences développées, ROI formation mesurable.' },
  { Icon:Globe,        color:'#14b8a6', title:'Capacity building',               enjeux:'Renforcement institutionnel, transfert de savoir-faire et autonomisation des organisations.',                                                        benefices:'Organisations autonomes, expertise interne renforcée, durabilité des interventions.',                               methodo:'Diagnostic institutionnel → Plan renforcement → Formation → Transfert → Évaluation',   resultats:'Expertise internalisée, organisations autonomes, impacts durables.' },
  { Icon:GraduationCap,color:'#ec4899', title:'Ingénierie de formation',         enjeux:'Besoins complexes nécessitant une approche pédagogique rigoureuse et des dispositifs financés.',                                                   benefices:'Programmes alignés, efficacité pédagogique maximale, financements mobilisés.',                                      methodo:'Analyse → Conception → Développement → Déploiement → Évaluation → Amélioration',       resultats:'Programmes certifiants déployés, compétences validées, financements obtenus.' },
];

/* ─── stats ──────────────────────────────────────────────────────── */
const STATS = [
  { value:'100+',   label:'Organisations accompagnées' },
  { value:'5 000+', label:'Collaborateurs formés' },
  { value:'50+',    label:'Certifications obtenues' },
  { value:'200+',   label:'Audits réalisés' },
  { value:'96 %',   label:'Taux de satisfaction' },
  { value:'−30 %',  label:'Réduction des risques observée' },
];

/* ─── testimonials ───────────────────────────────────────────────── */
const TESTIMONIALS = [
  { name:'Mohammed ALAOUI', role:'Directeur HSE',    company:'Groupe Transport & Logistique', stars:5, text:'Spirit Engineering Academy nous a accompagnés de A à Z dans notre certification ISO 39001. En moins de 9 mois, nous avons obtenu la certification et réduit nos accidents de flotte de 28 %.' },
  { name:'Fatima BENALI',   role:'DRH',              company:'Société Industrielle Casablanca', stars:5, text:'Le plan de formation conçu par Spirit a transformé nos équipes. Ils ont également mobilisé les financements CSF, réduisant nos coûts de 60 %. Je recommande vivement.' },
  { name:'Karim TAHIR',     role:'Responsable Qualité',company:'Opérateur Énergétique Maroc', stars:5, text:'Leur expertise en ISO 50001 est remarquable. Nous avons réduit notre consommation énergétique de 18 % dès la première année grâce à leur accompagnement.' },
];

/* ─── méthodologie ───────────────────────────────────────────────── */
const METHODO = [
  { Icon:Search,    num:'01', title:'Diagnostic',           desc:'Analyse approfondie de votre situation : audit terrain, entretiens, revue documentaire, identification des risques et opportunités prioritaires.' },
  { Icon:FileText,  num:'02', title:'Co-construction',      desc:'Définition des objectifs avec vos équipes, co-conception de la feuille de route et validation des solutions adaptées à votre contexte.' },
  { Icon:Rocket,    num:'03', title:'Accompagnement',       desc:'Mise en œuvre opérationnelle : formations, procédures, outils sur-mesure et présence terrain pour garantir l\'adoption.' },
  { Icon:BarChart2, num:'04', title:'Mesure de la performance', desc:'Suivi des indicateurs clés, reporting régulier et amélioration continue pour garantir l\'atteinte durable de vos objectifs.' },
];

/* ─── why us ─────────────────────────────────────────────────────── */
const WHY_US = [
  { Icon:BadgeCheck,  title:'Consultants certifiés',         desc:'Tous nos consultants sont certifiés dans leurs domaines d\'intervention (ISO, HSE, transport) et disposent d\'une expérience terrain reconnue.' },
  { Icon:Globe,       title:'Expertise multisectorielle',    desc:'Transport, industrie, énergie, secteur public — nous intervenons dans tous les secteurs avec une approche contextualisée.' },
  { Icon:Target,      title:'Orientation résultats',         desc:'Chaque mission est définie avec des indicateurs mesurables. Nous nous engageons sur des résultats concrets et vérifiables.' },
  { Icon:Users,       title:'Accompagnement personnalisé',   desc:'Un interlocuteur dédié tout au long de votre projet, disponible et réactif, pour un suivi humain et de proximité.' },
  { Icon:TrendingUp,  title:'Méthodologies éprouvées',       desc:'Nos approches s\'appuient sur les meilleures pratiques internationales (ISO, PDCA, Lean, etc.) adaptées à vos réalités opérationnelles.' },
  { Icon:CheckCircle, title:'Réponse sous 24h',              desc:'Vous obtenez une proposition technique et financière détaillée sous 24 heures après votre première prise de contact.' },
];

/* ════════════════════════════════════════════════════════════════════ */
export default function Consultant() {
  const [step,        setStep]       = useState('select'); // select | questions
  const [cat,         setCat]        = useState(null);
  const [answers,     setAnswers]    = useState({});
  const [modal,          setModal]          = useState(null);
  const [carouselPaused, setCarouselPaused] = useState(false);

  const openModal  = (card) => { setCarouselPaused(true);  setModal(card); };
  const closeModal = ()     => { setCarouselPaused(false); setModal(null); };
  const [showConfirm, setShowConfirm]= useState(false);
  const [sent,        setSent]       = useState(false);

  const selectCat = (c) => { setCat(c); setAnswers({}); setStep('questions'); setSent(false); };
  const setAns    = (id, v) => setAnswers(p => ({ ...p, [id]: v }));
  const allDone   = cat ? cat.questions.every(q => answers[q.id]) : false;
  const reset     = () => { setStep('select'); setCat(null); setAnswers({}); setShowConfirm(false); setSent(false); };

  const buildWhatsAppUrl = () => {
    if (!cat) return '#';
    const lines = [
      '👋 Bonjour Spirit Engineering,',
      '',
      `Je souhaite obtenir une proposition pour : *${cat.title}*`,
      '',
      '📋 *Mes réponses :*',
      ...cat.questions.map(q => `• ${q.label}\n  ➜ ${answers[q.id] || '—'}`),
      '',
      'Merci de me contacter pour un accompagnement personnalisé.',
    ];
    return `https://wa.me/212607721274?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const buildMailUrl = () => {
    if (!cat) return '#';
    const subject = `Demande de conseil — ${cat.title}`;
    const body = [
      'Bonjour Spirit Engineering,',
      '',
      `Je souhaite obtenir une proposition pour : ${cat.title}`,
      '',
      'Mes réponses :',
      ...cat.questions.map(q => `• ${q.label}\n  ➜ ${answers[q.id] || '—'}`),
      '',
      'Merci de me contacter pour un accompagnement personnalisé.',
    ].join('\n');
    return `mailto:info@spirit.engineering?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="text-gray-900" style={{ fontFamily:"'Century Gothic','CenturyGothic','AppleGothic',sans-serif" }}>

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: DARK_BG }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:'radial-gradient(ellipse at 70% 40%,rgba(136,196,64,0.20) 0%,transparent 62%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ opacity:0.05, backgroundImage:'radial-gradient(circle,#88C440 1px,transparent 1px)', backgroundSize:'32px 32px' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32 lg:pt-28 lg:pb-40">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full"
              style={{ background:'rgba(136,196,64,0.18)', border:'1px solid rgba(136,196,64,0.45)' }}>
              <span style={{ width:7, height:7, borderRadius:'50%', background:GREEN, boxShadow:'0 0 8px rgba(136,196,64,0.8)', flexShrink:0 }} />
              <span style={{ fontSize:13, fontWeight:700, color:'#c6f0b8' }}>Conseil · Audit · Formation · Certification</span>
            </div>
            <h1 className="font-extrabold tracking-tight leading-tight text-white mb-6"
              style={{ fontSize:'clamp(2.2rem,5vw,3.6rem)' }}>
              Transformez vos ambitions en{' '}
              <span style={{ color:GREEN }}>performance durable</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color:'rgba(255,255,255,0.70)' }}>
              Conseil stratégique, accompagnement à la certification ISO, développement des compétences et amélioration des performances pour les organisations qui souhaitent atteindre un niveau supérieur d'excellence.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-14">
              <a href="#assistant"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
                style={{ background:GREEN, boxShadow:'0 4px 22px rgba(136,196,64,0.45)' }}>
                Demander un diagnostic <ChevronRight size={15} />
              </a>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white border transition-all hover:-translate-y-0.5 hover:bg-white/10"
                style={{ borderColor:'rgba(255,255,255,0.35)' }}>
                Parler à un expert
              </Link>
            </div>

            {/* mini KPIs */}
            <div className="flex flex-wrap justify-center gap-4">
              {[['100+','Organisations'],['50+','Certifications'],['96 %','Satisfaction'],['20+','Ans d\'exp.']].map(([v,l]) => (
                <div key={l} className="px-5 py-3 rounded-xl"
                  style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.10)' }}>
                  <p className="font-extrabold text-white leading-none" style={{ fontSize:'1.5rem', color:GREEN }}>{v}</p>
                  <p className="text-xs mt-1" style={{ color:'rgba(255,255,255,0.50)' }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height:60, overflow:'hidden' }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width:'100%', height:'100%', display:'block' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ══ ASSISTANT CONSEIL INTELLIGENT ════════════════════════════ */}
      <section id="assistant" className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Assistant conseil</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3">
              Quel est votre besoin aujourd'hui ?
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color:'#6b7280' }}>
              Sélectionnez votre besoin et obtenez instantanément une proposition personnalisée.
            </p>
          </div>

          <div className="rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* header */}
            <div className="flex items-center justify-between px-7 py-4"
              style={{ background: DARK_BG, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-2">
                <span style={{ width:10, height:10, borderRadius:'50%', background:GREEN, boxShadow:'0 0 6px rgba(136,196,64,0.7)', display:'inline-block' }} />
                <span className="text-sm font-semibold text-white">Spirit Conseil Intelligent</span>
              </div>
              {step !== 'select' && (
                <button onClick={reset} className="text-xs font-medium flex items-center gap-1 hover:text-white transition-colors" style={{ color:'rgba(255,255,255,0.45)', background:'none', border:'none', cursor:'pointer' }}>
                  <X size={12} /> Recommencer
                </button>
              )}
            </div>

            <div className="p-7 lg:p-10">
              {/* ── step 1: select category ── */}
              {step === 'select' && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {CATEGORIES.map(c => {
                    const Icon = c.Icon;
                    return (
                      <button key={c.id} onClick={() => selectCat(c)}
                        className="flex flex-col items-start gap-3 p-5 rounded-2xl text-left border border-gray-100 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                        style={{ cursor:'pointer' }}>
                        <div className="flex items-center justify-center"
                          style={{ width:46, height:46, borderRadius:13, background:`${c.color}18` }}>
                          <Icon size={21} style={{ color:c.color }} />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm leading-snug mb-1">{c.title}</p>
                          <p style={{ fontSize:12, color:'#9ca3af' }}>{c.desc}</p>
                        </div>
                        <ArrowRight size={14} style={{ color:c.color, marginTop:'auto' }} />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* ── step 2: questions ── */}
              {step === 'questions' && cat && (
                <div>
                  <div className="flex items-center gap-3 mb-8 pb-6" style={{ borderBottom:'1px solid #f3f4f6' }}>
                    <div className="flex items-center justify-center flex-shrink-0"
                      style={{ width:44, height:44, borderRadius:12, background:`${cat.color}18` }}>
                      <cat.Icon size={20} style={{ color:cat.color }} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{cat.title}</p>
                      <p className="text-xs" style={{ color:'#9ca3af' }}>Répondez aux questions pour obtenir votre proposition personnalisée</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-7">
                    {cat.questions.map((q, qi) => (
                      <div key={q.id}>
                        <p className="font-semibold text-gray-800 text-sm mb-3">
                          <span style={{ color:cat.color, marginRight:6 }}>{qi + 1}.</span>{q.label}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {q.options.map(opt => (
                            <button key={opt} onClick={() => setAns(q.id, opt)}
                              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150"
                              style={{
                                background: answers[q.id] === opt ? cat.color : '#f8f9fa',
                                color:      answers[q.id] === opt ? '#fff' : '#374151',
                                border:     answers[q.id] === opt ? `1px solid ${cat.color}` : '1px solid #e5e7eb',
                                cursor:'pointer',
                              }}>
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3">
                    {/* WhatsApp */}
                    <button
                      onClick={() => allDone && setShowConfirm(true)}
                      disabled={!allDone}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
                      style={{ background: allDone ? '#25D366' : '#d1d5db', cursor: allDone ? 'pointer' : 'not-allowed', boxShadow: allDone ? '0 4px 18px rgba(37,211,102,0.40)' : 'none' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Envoyer sur WhatsApp
                    </button>

                    {/* Email */}
                    <a
                      href={allDone ? buildMailUrl() : undefined}
                      onClick={e => { if (!allDone) { e.preventDefault(); return; } setSent(true); setShowConfirm(true); }}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
                      style={{ background: allDone ? '#2563eb' : '#d1d5db', cursor: allDone ? 'pointer' : 'not-allowed', boxShadow: allDone ? '0 4px 14px rgba(37,99,235,0.35)' : 'none', pointerEvents: allDone ? 'auto' : 'none', textDecoration:'none' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      Envoyer par Email
                    </a>
                  </div>
                </div>
              )}

              {/* progress bar */}
              {step === 'questions' && cat && (
                <div className="mt-6 pt-5" style={{ borderTop:'1px solid #f3f4f6' }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span style={{ fontSize:11, color:'#9ca3af' }}>Progression</span>
                    <span style={{ fontSize:11, fontWeight:700, color:GREEN }}>
                      {cat.questions.filter(q => answers[q.id]).length} / {cat.questions.length}
                    </span>
                  </div>
                  <div style={{ height:4, borderRadius:4, background:'#f3f4f6', overflow:'hidden' }}>
                    <div style={{ height:'100%', borderRadius:4, background:GREEN, width:`${(cat.questions.filter(q=>answers[q.id]).length/cat.questions.length)*100}%`, transition:'width 0.3s ease' }} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══ EXPERTISE ════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 overflow-hidden" style={{ background:'#f8f9fa' }}>

        <style>{`
          @keyframes carouselScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <SectionLabel>Nos domaines d'expertise</SectionLabel>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                Expertises pour une performance globale
              </h2>
            </div>
            <div className="flex items-center gap-2 pb-1 flex-shrink-0">
              <span style={{ fontSize:12, color:'#9ca3af' }}>
                {carouselPaused ? '⏸ En pause' : '▶ Défilement auto'}
              </span>
              <button onClick={() => setCarouselPaused(p => !p)}
                className="flex items-center justify-center rounded-xl border border-gray-200 bg-white hover:border-green-400 hover:shadow-md transition-all"
                style={{ width:42, height:42, cursor:'pointer' }}>
                {carouselPaused
                  ? <ChevronRight size={18} style={{ color:GREEN }} />
                  : <span style={{ fontSize:16 }}>⏸</span>
                }
              </button>
            </div>
          </div>
        </div>

        {/* track — double les cartes pour boucle infinie */}
        <div style={{ overflow:'hidden' }}>
          <div style={{
            display:'flex', gap:16,
            width:'max-content',
            animation:'carouselScroll 40s linear infinite',
            animationPlayState: carouselPaused ? 'paused' : 'running',
          }}>
            {[...EXPERTISE, ...EXPERTISE].map((card, i) => {
              const Icon = card.Icon;
              return (
                <button key={`${card.title}-${i}`}
                  onClick={() => openModal(card)}
                  className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
                  style={{ width:240, flexShrink:0, borderTop:`3px solid ${card.color}` }}>
                  <div className="flex items-center justify-center mb-4"
                    style={{ width:46, height:46, borderRadius:13, background:`${card.color}18` }}>
                    <Icon size={21} style={{ color:card.color }} />
                  </div>
                  <p className="font-bold text-gray-900 text-sm mb-2 leading-snug">{card.title}</p>
                  <p className="text-xs leading-relaxed flex-1" style={{ color:'#9ca3af' }}>{card.enjeux.slice(0,65)}…</p>
                  <div className="flex items-center gap-1 mt-4" style={{ color:card.color, fontSize:11, fontWeight:600 }}>
                    En savoir plus <ArrowRight size={11} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </section>

      {/* ── MODAL ─────────────────────────────────────────────────── */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background:'rgba(0,0,0,0.55)', backdropFilter:'blur(6px)' }}
          onClick={() => closeModal()}>
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}>
            <button onClick={() => closeModal()}
              className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors"
              style={{ background:'none', border:'none', cursor:'pointer' }}>
              <X size={18} style={{ color:'#6b7280' }} />
            </button>

            <div className="flex items-center gap-4 mb-6 pb-6" style={{ borderBottom:'1px solid #f3f4f6' }}>
              <div className="flex items-center justify-center flex-shrink-0"
                style={{ width:54, height:54, borderRadius:15, background:`${modal.color}18` }}>
                <modal.Icon size={26} style={{ color:modal.color }} />
              </div>
              <h3 className="font-extrabold text-gray-900 text-xl">{modal.title}</h3>
            </div>

            {[
              { label:'Enjeux',            text:modal.enjeux },
              { label:'Bénéfices',         text:modal.benefices },
              { label:'Méthodologie',      text:modal.methodo },
              { label:'Résultats attendus',text:modal.resultats },
            ].map(({ label, text }) => (
              <div key={label} className="mb-5">
                <p className="font-bold text-xs uppercase tracking-widest mb-2" style={{ color:modal.color }}>{label}</p>
                <p className="text-sm leading-relaxed text-gray-700">{text}</p>
              </div>
            ))}

            <Link href="/contact"
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white w-full justify-center transition-all hover:-translate-y-0.5"
              style={{ background:GREEN, boxShadow:'0 4px 18px rgba(136,196,64,0.35)' }}
              onClick={() => closeModal()}>
              Demander un accompagnement <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      )}

      {/* ── MODALE CONFIRMATION WHATSAPP ─────────────────────────── */}
      {showConfirm && cat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background:'rgba(0,0,0,0.60)', backdropFilter:'blur(6px)' }}
          onClick={() => !sent && setShowConfirm(false)}>
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={e => e.stopPropagation()}>

            {/* header */}
            <div className="flex items-center gap-3 px-7 py-5" style={{ background: DARK_BG }}>
              <div className="flex items-center justify-center flex-shrink-0"
                style={{ width:36, height:36, borderRadius:10, background:'rgba(136,196,64,0.22)' }}>
                <CheckCircle size={18} style={{ color:'#a8e063' }} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-white text-sm">Envoyer votre demande</p>
                <p style={{ fontSize:11, color:'rgba(255,255,255,0.55)' }}>WhatsApp · Email · Spirit Engineering</p>
              </div>
              {!sent && (
                <button onClick={() => setShowConfirm(false)}
                  style={{ background:'none', border:'none', cursor:'pointer', color:'rgba(255,255,255,0.55)' }}>
                  <X size={18} />
                </button>
              )}
            </div>

            <div className="p-7">
              {!sent ? (
                <>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color:'#9ca3af' }}>Aperçu du message</p>
                  <div className="rounded-2xl p-4 mb-6 text-sm leading-relaxed"
                    style={{ background:'#f0fdf4', border:'1px solid rgba(37,211,102,0.25)', color:'#374151', whiteSpace:'pre-line', maxHeight:200, overflowY:'auto' }}>
                    {[
                      '👋 Bonjour Spirit Engineering,',
                      '',
                      `Je souhaite : ${cat.title}`,
                      '',
                      ...cat.questions.map(q => `• ${q.label}\n  ➜ ${answers[q.id] || '—'}`),
                      '',
                      'Merci de me contacter pour une proposition personnalisée.',
                    ].join('\n')}
                  </div>

                  {/* boutons d'envoi */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer"
                      onClick={() => setSent(true)}
                      className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5"
                      style={{ background:'#25D366', boxShadow:'0 4px 14px rgba(37,211,102,0.40)' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      WhatsApp
                    </a>
                    <a href={buildMailUrl()}
                      onClick={() => setSent(true)}
                      className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5"
                      style={{ background:'#2563eb', boxShadow:'0 4px 14px rgba(37,99,235,0.35)' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      Email
                    </a>
                  </div>

                  <button onClick={() => setShowConfirm(false)}
                    className="w-full py-3 rounded-xl font-semibold text-sm border transition-all"
                    style={{ borderColor:'#e5e7eb', color:'#6b7280', background:'none', cursor:'pointer' }}>
                    Modifier mes réponses
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-center text-center py-4">
                  <div className="flex items-center justify-center mb-4"
                    style={{ width:64, height:64, borderRadius:'50%', background:'rgba(136,196,64,0.12)' }}>
                    <CheckCircle size={32} style={{ color:GREEN }} />
                  </div>
                  <p className="font-bold text-gray-900 text-lg mb-2">Demande envoyée !</p>
                  <p className="text-sm mb-6" style={{ color:'#6b7280' }}>
                    Votre demande a été transmise.<br/>Notre équipe vous répond sous 24h.
                  </p>
                  <button onClick={reset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white"
                    style={{ background:GREEN, cursor:'pointer', border:'none' }}>
                    Nouvelle demande
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ══ MÉTHODOLOGIE ═════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: DARK_BG }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel light>Notre méthodologie</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-xl mx-auto">
              Un processus structuré, du diagnostic aux résultats
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODO.map(({ Icon, num, title, desc }) => (
              <div key={num} className="flex flex-col p-7 rounded-2xl"
                style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.10)' }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center"
                    style={{ width:50, height:50, borderRadius:14, background:'rgba(136,196,64,0.15)', border:'1px solid rgba(136,196,64,0.3)' }}>
                    <Icon size={22} style={{ color:GREEN }} />
                  </div>
                  <span className="font-black" style={{ fontSize:'2.4rem', color:'rgba(136,196,64,0.14)', lineHeight:1 }}>{num}</span>
                </div>
                <h3 className="font-bold text-white mb-3">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color:'rgba(255,255,255,0.55)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* ══ TÉMOIGNAGES ══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background:'#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Témoignages</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Ce que disent nos clients</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="flex flex-col p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} fill={GREEN} style={{ color:GREEN }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-6 italic" style={{ color:'#374151' }}>"{t.text}"</p>
                <div className="flex items-center gap-3 pt-5" style={{ borderTop:'1px solid #f3f4f6' }}>
                  <div className="flex items-center justify-center flex-shrink-0 font-bold text-white text-sm"
                    style={{ width:40, height:40, borderRadius:'50%', background: DARK_BG }}>
                    {t.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p style={{ fontSize:11, color:'#9ca3af' }}>{t.role} — {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: DARK_BG }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:'radial-gradient(ellipse at 60% 50%,rgba(136,196,64,0.18) 0%,transparent 65%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ opacity:0.05, backgroundImage:'radial-gradient(circle,#88C440 1px,transparent 1px)', backgroundSize:'32px 32px' }} />
        <div className="relative max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">Parlons de vos enjeux</h2>
          <p className="text-lg mb-10" style={{ color:'#c6f0b8' }}>
            Chaque organisation est unique. Échangez avec nos experts et construisons ensemble votre prochaine réussite.
          </p>
          <div className="flex justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
              style={{ background:GREEN, boxShadow:'0 6px 20px rgba(136,196,64,0.30)' }}>
              Réserver un rendez-vous <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
