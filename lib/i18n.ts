// Locales supported
export const LOCALES = ['fr', 'en'] as const;
export type Locale = typeof LOCALES[number];
export const DEFAULT_LOCALE: Locale = 'fr';

// ─── Translation shape ────────────────────────────────────────────────────
export interface ServiceItem  { num: string; title: string; desc: string; tags: string[]; }
export interface StatItem     { value: string; label: string; }
export interface FigureItem   { value: string; sub: string; note: string; }
export interface WhyItem      { title: string; desc: string; }
export interface TestimonialItem { name: string; role: string; company: string; text: string; stars: number; }
export interface CertItem     { code: string; benefit: string; title: string; desc: string; }
export interface TeamMember   { name: string; role: string; initials: string; }
export interface HourItem     { day: string; h: string; }
export interface CourseItem   {
  id: number; title: string; category: string; instructor: string;
  level: string; lessons: number; qcm: number; exams: number;
  description: string; price: string; hasCertificate: boolean; accentColor: string;
}

// ─── French ───────────────────────────────────────────────────────────────
export const FR = {
  nav: {
    home: 'Accueil',
    formations: 'Academy',
    consultant: 'Conseil',
    about: 'À propos',
    contact: 'Contact',
    getQuote: 'Obtenir un devis',
  },

  hero: {
    badge: 'Besoin de conseil ?',
    h1: ['Conseil', 'Audit', 'Formation'],
    subtitle: 'Des solutions complètes de conseil, d\'accompagnement et de formation, portées par des consultants seniors experts. Nous mettons un haut niveau d\'exigence au service de la performance de vos équipes.',
    ctaFormations: 'Voir les formations',
    ctaContact: 'Nous contacter',
    heroStats: [
      { value: '28',   label: 'Formations' },
      { value: '156+', label: 'Leçons vidéo' },
      { value: '5',    label: 'Domaines' },
    ] as StatItem[],
    domainsTitle: "Domaines d'intervention",
    certs: [
      { code: 'Loi 52-05', name: 'Code de la route' },
      { code: 'ADR',       name: 'Matières dangereuses' },
      { code: 'ISO 39001', name: 'Sécurité routière' },
      { code: 'Objectif',  name: 'Zéro accident' },
    ],
  },

  companyStats: {
    label: 'Partenaires de votre réussite — Présents au Maroc et à l\'international',
    items: [
      { value: '100+', label: 'Clients satisfaits' },
      { value: '30+',  label: 'Projets réalisés' },
      { value: '20+',  label: "Ans d'expérience" },
      { value: '10+',  label: "Membres d'équipe" },
      { value: '90%',  label: 'Taux de réussite' },
    ] as StatItem[],
  },

  narsa: {
    label: 'Pourquoi agir maintenant — Bilan NARSA 2025',
    items: [
      { value: '4 160',    sub: 'décès sur les routes du Maroc',  note: 'sur les 11 premiers mois 2025 (NARSA)' },
      { value: '+25,7%',   sub: 'hausse des accidents mortels',   note: 'vs. même période 2024' },
      { value: '2026–2030',sub: 'Stratégie nationale NARSA',      note: 'Spirit Engineering aligne vos équipes' },
      { value: '3–5 %',    sub: 'du Produit Intérieur Brut (PIB)', note: 'Coût économique des accidents routiers au Maroc' },
    ] as FigureItem[],
  },

  energy: {
    label: 'Transition énergétique — Enjeux 2030',
    items: [
      { value: '38 %',  sub: 'Secteur Transport — Maroc',        note: 'de la consommation énergétique nationale' },
      { value: '52 %',  sub: 'Stratégie nationale',              note: 'énergies renouvelables visées d\'ici 2030' },
      { value: '−15 %', sub: 'Gain certifié — Flottes Pro',      note: 'de carburant économisé en éco-conduite' },
      { value: '2030',  sub: 'Horizon neutralité carbone',       note: 'Objectif stratégique du Maroc' },
    ] as FigureItem[],
    challengesLabel: 'Enjeux auxquels vous faites face',
    challenges: [
      { title: 'Volatilité du pétrole',  desc: 'Le baril dépasse 100 $. Chaque litre économisé devient un levier de compétitivité directe pour votre flotte.',                                                     tag: 'Coût & rentabilité' },
      { title: 'Mécanisme MACF',         desc: 'La taxe carbone aux frontières européennes pèse sur vos exports. Réduire votre empreinte, c\'est protéger vos marchés.',                                           tag: 'Accès marchés UE' },
      { title: 'Enjeux RSE',             desc: 'Reporting carbone, engagement fournisseurs, attentes clients — la performance RSE est devenue un critère de sélection.',                                           tag: 'Réputation & conformité' },
    ] as { title: string; desc: string; tag: string }[],
  },

  services: {
    label: 'Notre expertise',
    title: "Nos domaines d'intervention",
    subtitle: 'Des interventions concrètes, adaptées aux réalités des entreprises de transport et de logistique au Maroc.',
    items: [
      { num: '01', title: 'Conseil & Conformité réglementaire',      desc: 'Accompagnement des entreprises de transport dans le respect du code de la route marocain (loi 52-05), des normes de sécurité et de la réglementation du transport de marchandises.', tags: ['Loi 52-05', 'Transport', 'Audit'] },
      { num: '02', title: 'Formation des conducteurs professionnels', desc: "Programmes complets pour chauffeurs poids lourds : conduite sécurisée, éco-conduite, gestion de la fatigue, transport ADR et premiers secours.", tags: ['ADR', 'Éco-conduite', 'Sécurité'] },
      { num: '03', title: 'Évaluation & Audit des trajets',          desc: "Analyse des itinéraires pour identifier les zones à risque, recommandation des routes les plus sûres et évaluation des conditions de transport.", tags: ['Itinéraires', 'Analyse', 'Risques'] },
      { num: '04', title: 'Coaching conduite professionnelle',       desc: "Accompagnement terrain des chauffeurs : conduite défensive, dépassement sécurisé, conduite de nuit et gestion des montées et descentes.", tags: ['Terrain', 'Défensive', 'Coaching'] },
      { num: '05', title: 'Chargement & Logistique sécurisée',      desc: "Formation aux procédures de chargement, déchargement et arrimage des marchandises selon les normes en vigueur.", tags: ['Arrimage', 'Manutention', 'Normes'] },
    ] as ServiceItem[],
  },

  whatWeDo: {
    label: 'Ce que nous faisons',
    title: 'Quatre piliers pour renforcer la sécurité et la performance de votre organisation',
    items: [
      { title: 'Conseil',                  desc: 'Un accompagnement stratégique pour transformer vos enjeux HSE, environnement et énergie en leviers de performance et de conformité réglementaire.' },
      { title: 'Formation',                desc: 'Des programmes terrain en HSE, sécurité routière et efficacité énergétique pour développer les compétences de vos équipes et ancrer durablement une culture sécurité.' },
      { title: 'Audits & Évaluations',     desc: 'Des audits HSE rigoureux, revues énergétiques et bilans carbone pour identifier vos risques et piloter l\'amélioration continue de votre organisation.' },
      { title: 'Support à la Certification',desc: 'Un accompagnement complet de l\'audit initial à la certification — obtenez et maintenez vos certifications ISO 39001, 14001 et 45001.' },
    ] as { title: string; desc: string }[],
  },

  whyUs: {
    label: 'Pourquoi nous choisir',
    title: 'Pourquoi les entreprises marocaines nous font confiance',
    items: [
      { title: 'Expertise prouvée',       desc: "Une expertise terrain reconnue en HSE, sécurité routière et transport durable, forgée au Maroc et à l'international." },
      { title: 'Impact mesurable',        desc: 'Nos programmes génèrent des résultats tangibles : réduction des accidents, baisse des coûts et amélioration mesurable de vos performances.' },
      { title: 'Solutions sur mesure',    desc: "Chaque intervention est conçue sur mesure pour s'adapter à votre secteur, votre structure et votre niveau de maturité en sécurité." },
      { title: 'Partenariat de confiance',desc: "Un engagement dans la durée : suivi personnalisé, communication transparente et accompagnement continu jusqu'aux résultats souhaités." },
    ] as WhyItem[],
  },

  testimonials: {
    label: 'Témoignages',
    title: 'Ce que disent nos clients',
    items: [
      { name: 'Isabella Hart', role: 'Directrice Marketing', company: 'NovaTech Inc.',       text: "Une équipe professionnelle avec une livraison rapide et un excellent support tout au long du projet. Je recommande vivement Spirit Engineering Academy.", stars: 5 },
      { name: 'Liam Bennett',  role: 'PDG',                  company: 'Bennett Solutions',   text: "Des formations d'une qualité exceptionnelle. Notre équipe a vu une amélioration significative de ses pratiques sécurité après les programmes Spirit.", stars: 5 },
    ] as TestimonialItem[],
  },

  cta: {
    title: 'Prêt à renforcer la sécurité et la performance de vos équipes ?',
    subtitle: 'Obtenez une proposition technique et financière sous 24h ou explorez notre catalogue de formations alignées sur les standards internationaux.',
    formations: 'Voir les formations',
    contact: 'Nous contacter',
  },

  about: {
    badge: 'Spirit Engineering Academy',
    h1: ['Former, certifier,', 'faire progresser.'],
    subtitle: "Nous accompagnons les professionnels et les entreprises avec des formations ciblées en sécurité, énergie et performance opérationnelle. Des contenus concrets, directement applicables sur le terrain.",
    stats: [
      { value: '5',  label: "Domaines d'expertise" },
      { value: '4',  label: 'Certifications ISO' },
      { value: '28', label: 'Formations' },
    ] as StatItem[],
    context: {
      label: "Pourquoi c'est urgent",
      items: [
        { value: '4 160',    sub: 'décès sur les routes du Maroc',  note: '11 premiers mois 2025 — Source NARSA' },
        { value: '+25,7%',   sub: 'hausse des accidents mortels',   note: 'par rapport à la même période 2024' },
        { value: '2030',     sub: 'Objectif stratégie NARSA 2026–2030', note: 'Réduire de 50% les accidents graves' },
      ],
    },
    mission: {
      label: 'Notre mission',
      title: 'Pourquoi Spirit Engineering Academy a été créée',
      subtitle: "Face à la hausse alarmante des accidents de la route au Maroc (+25,7% en 2025), Spirit Engineering Academy est née pour répondre aux besoins concrets des entreprises de transport qui cherchent à protéger leurs équipes, respecter la réglementation et réduire leurs risques opérationnels.",
      items: [
        'Des contenus adaptés aux réalités métier',
        'Des certifications reconnues par les entreprises',
        'Un accompagnement humain et personnalisé',
        'Une approche orientée résultats mesurables',
      ],
      valueCards: [
        { title: 'Prévenir les risques',         desc: 'Réduire les incidents et renforcer la culture sécurité grâce à des contenus pratiques et contextualisés.' },
        { title: 'Valider les compétences',      desc: "Donner de la valeur aux acquis avec des certifications alignées sur les exigences professionnelles." },
        { title: 'Accompagner les entreprises',  desc: "Aider les organisations à structurer la montée en compétences de leurs équipes avec des solutions adaptées." },
      ] as WhyItem[],
    },
    expertise: {
      label: 'Nos domaines',
      title: 'Trois expertises au service de la sécurité et de la performance',
      subtitle: "Nos programmes s'articulent autour de domaines clés pour les entreprises industrielles, logistiques et de mobilité.",
      cards: [
        { title: 'Sécurité routière',      desc: "Formations pratiques pour prévenir les risques routiers : conduite défensive, réduction des comportements à risque et bonnes pratiques terrain." },
        { title: 'Mobilité durable',       desc: "Parcours axés sur l'éco-conduite et l'optimisation des consommations pour réduire l'empreinte carbone et les coûts opérationnels." },
        { title: 'Manutention & sécurité', desc: "Modules pratiques sur la manutention, l'arrimage, l'utilisation des équipements de levage et la prévention des accidents en zone logistique." },
      ] as WhyItem[],
    },
    founder: {
      label: 'Le fondateur',
      name: 'Zakaria KARTOUBI',
      role: 'Fondateur & Pédagogue',
      bio1: "Professionnel de la formation et de l'accompagnement terrain, Zakaria KARTOUBI conçoit des parcours orientés résultats pour les entreprises et les apprenants en activité. Son approche relie sécurité, performance opérationnelle et montée en compétences durable.",
      bio2: "Il accompagne les professionnels avec une approche centrée sur les usages réels, l'efficacité opérationnelle et la sécurité des pratiques.",
      specialty: 'Spécialités',
      specialtyValue: 'Sécurité, énergie, mobilité durable',
      audience: 'Public visé',
      audienceValue: 'Professionnels, entreprises, équipes terrain',
      commercial: {
        title: 'Accompagnement commercial',
        desc: "Un interlocuteur dédié est disponible pour les demandes d'équipes, les besoins multi-utilisateurs, les dispositifs d'accompagnement RH et les parcours sur mesure.",
        cta: 'Nous contacter',
      },
    },
    team: {
      label: 'Notre équipe',
      title: 'Rencontrez notre équipe',
      subtitle: 'Des professionnels expérimentés dédiés à votre réussite',
      members: [
        { name: 'Zakaria KARTOUBI',   role: 'CEO & Fondateur',               initials: 'ZK' },
        { name: 'Mme A. BEN BOUJI',   role: 'Team Manager',                  initials: 'AB' },
        { name: 'Mme S. HOUDAJ',      role: 'Ingénieure Projet HSE',         initials: 'SH' },
        { name: 'Yahya KARIM',        role: 'Auditeur',                      initials: 'YK' },
        { name: 'Mme A. BELABDI',     role: 'Auditrice',                     initials: 'AL' },
        { name: 'Zaid ABKARI',        role: 'Auditeur',                      initials: 'ZA' },
      ] as TeamMember[],
    },
    certifications: {
      label: 'Certifications',
      title: 'Des parcours qui valorisent les compétences acquises',
      items: [
        { code: 'ISO 39001',    benefit: 'Réduction des accidents', title: 'Sécurité Routière',             desc: "Système de management de la sécurité du trafic routier. Réduit les accidents mortels et graves, aligne votre organisation sur la stratégie nationale NARSA 2026–2030." },
        { code: 'ISO 50001',    benefit: 'Réduction des coûts',    title: 'Performance Énergétique',        desc: "Optimisation des consommations d'énergie de votre flotte. Réduction des coûts opérationnels, diminution de l'empreinte carbone et accès aux marchés exigeants." },
        { code: 'ISO 45001 / 14001', benefit: 'HSE & conformité',  title: 'Santé, Sécurité & Environnement',desc: "Prévention des risques professionnels (45001) et management environnemental (14001). Protège vos collaborateurs et renforce votre image." },
      ] as CertItem[],
    },
    partners: {
      label: 'Ils nous font confiance',
      title: 'Nos partenaires & clients',
      subtitle: "Spirit Engineering Academy intervient auprès de grands groupes industriels, d'opérateurs logistiques et d'entreprises de transport à travers tout le Maroc.",
      list: ['VIVO ENERGY', 'OCP', 'Entreprises industrielles', 'Professionnels du transport', 'Structures HSE'],
      cta: {
        badge: 'Prêt à commencer ?',
        title1: 'Formez vos équipes,',
        title2: 'réduisez vos risques.',
        desc: "Demandez un devis personnalisé ou explorez notre catalogue de formations alignées sur la réglementation marocaine et les normes ISO.",
        formations: 'Voir les formations →',
        contact: 'Nous contacter',
      },
    },
  },

  contactPage: {
    label: 'Contact',
    h1: ['Parlons de votre projet', 'de formation.'],
    subtitle: "Formation, audit, certification ISO ou partenariat ? Notre équipe vous répond rapidement.",
    addressLabel: 'Adresse',
    addressValue: '5 étg, Espace A2, 357 Bd Mohammed\nCasablanca 20000',
    emailLabel: 'Email',
    phoneLabel: 'Téléphone',
    siteLabel: 'Site web',
    hours: {
      title: "Horaires d'ouverture",
      days: [
        { day: 'Lundi',    h: '9:30 am – 6:00 pm' },
        { day: 'Mardi',    h: '9:30 am – 6:00 pm' },
        { day: 'Mercredi', h: '9:30 am – 6:00 pm' },
        { day: 'Jeudi',    h: '9:30 am – 6:00 pm' },
        { day: 'Vendredi', h: '9:30 am – 5:00 pm' },
        { day: 'Samedi',   h: 'Fermé' },
        { day: 'Dimanche', h: 'Fermé' },
      ] as HourItem[],
    },
    responseTime: {
      title: 'Temps de réponse',
      text: 'Réponse garantie sous **24 à 48h ouvrées**. Pour les urgences, appelez le **+212 6 07 72 12 74**.',
    },
    form: {
      title: 'Envoyez-nous un message',
      subtitle: 'Le message sera envoyé directement sur **WhatsApp** et par **email**. Les champs * sont obligatoires.',
      nameLabel: 'Nom complet *',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Email *',
      emailPlaceholder: 'vous@exemple.com',
      phoneLabel: 'Téléphone',
      phonePlaceholder: '+212 6 XX XX XX XX',
      companyLabel: 'Entreprise',
      companyPlaceholder: 'Nom de votre société',
      subjectLabel: 'Sujet *',
      subjectPlaceholder: 'Sélectionnez un sujet',
      messageLabel: 'Message *',
      messagePlaceholder: 'Décrivez votre besoin, vos objectifs ou vos questions...',
      subjects: ['Formation individuelle', 'Formation entreprise / équipe', 'Certification ISO', 'Audit & Conseil', 'Partenariat', 'Autre'],
      sendButton: 'Envoyer le message',
      sendInfo: 'Envoi automatique sur WhatsApp **+212 6 07 72 12 74** + email **info@spirit.engineering**',
      successTitle: 'Message envoyé !',
      successText: 'WhatsApp et votre messagerie ont été ouverts avec le message pré-rempli.\nMerci, notre équipe vous répond sous 24 à 48h.',
      openWhatsApp: 'Ouvrir WhatsApp',
      openEmail: "Ouvrir l'email",
      sendAnother: 'Envoyer un autre message →',
    },
    directContacts: { label: 'Contacts directs', title: 'Parlez à la bonne personne' },
    location: { label: 'Localisation', title: '357 Bd Mohammed V, Casablanca' },
    zakaria: {
      title: 'Zakaria KARTOUBI',
      role: 'Pédagogue & Fondateur',
      desc: 'Questions pédagogiques, contenu de formation, certifications ISO (39001, 50001, 14001, 45001) et expertise technique.',
      skype: 'PedagogueSPIRIT',
    },
    commercial: {
      title: 'Conseil Commercial',
      role: 'Accompagnement entreprises',
      desc: "Devis entreprise, formations d'équipes, parcours multi-utilisateurs et dispositifs RH sur mesure.",
      skype: 'ConseilCommercial',
    },
    closed: 'Fermé',
  },

  formationsPage: {
    catalogLabel: 'Catalogue',
    title: ['Nos', 'Formations Professionnelles'],
    subtitle: "Formations en sécurité routière, éco-conduite et logistique professionnelle pour les entreprises de transport.",
    availableLabel: 'formations disponibles',
    noneTitle: 'Aucune formation pour le moment',
    noneSubtitle: 'Les formations seront publiées prochainement.',
    noneCta: 'Nous contacter',
    certifiedInstructor: 'Formateur certifié',
    enrollButton: "S'inscrire / Prévisualiser",
    viewCourse: 'Voir le cours',
    membersOnly: 'Réservé aux membres',
    modal: {
      title: "Demande d'inscription",
      subtitle: 'Vérifiez vos coordonnées et ajoutez un message.',
      nameLabel: 'Nom complet *',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Email *',
      emailPlaceholder: 'email@entreprise.ma',
      phoneLabel: 'Téléphone *',
      phonePlaceholder: '+212 6XX XXX XXX',
      messageLabel: 'Message (optionnel)',
      messagePlaceholder: 'Questions ou informations supplémentaires...',
      cancel: 'Annuler',
      submit: 'Envoyer la demande',
      successTitle: 'Demande envoyée !',
      successText: "Votre demande d'inscription a bien été reçue. Un administrateur va l'examiner et vous donnera accès à la formation très prochainement.",
      close: 'Fermer',
    },
    courses: [
      { id: 1, title: 'Conduite Sécurisée et Défensive', category: 'Sécurité', instructor: 'Z. Kartoubi', level: 'Intermédiaire', lessons: 12, qcm: 8, exams: 2, description: "Maîtrisez les techniques de conduite défensive pour réduire les risques d'accidents en conditions réelles de transport professionnel.", price: '2 500 MAD', hasCertificate: true, accentColor: '#88C440' },
      { id: 2, title: 'Transport de Matières Dangereuses (ADR)', category: 'ADR', instructor: 'Z. Kartoubi', level: 'Avancé', lessons: 20, qcm: 15, exams: 3, description: 'Formation complète sur la réglementation ADR pour le transport de marchandises dangereuses par route selon les normes européennes.', price: '4 200 MAD', hasCertificate: true, accentColor: '#e85d04' },
      { id: 3, title: 'Conformité Loi 52-05', category: 'Réglementation', instructor: 'Z. Kartoubi', level: 'Débutant', lessons: 8, qcm: 6, exams: 1, description: "Comprenez et appliquez le code de la route marocain (Loi 52-05) pour une conformité totale de votre flotte.", price: '1 800 MAD', hasCertificate: true, accentColor: '#3b82f6' },
      { id: 4, title: 'Éco-conduite et Gestion de Carburant', category: 'Performance', instructor: 'Z. Kartoubi', level: 'Débutant', lessons: 10, qcm: 7, exams: 1, description: "Réduisez la consommation de carburant et l'empreinte écologique de votre flotte grâce aux techniques d'éco-conduite certifiées.", price: '1 500 MAD', hasCertificate: false, accentColor: '#88C440' },
      { id: 5, title: 'Premiers Secours & Gestion des Accidents', category: 'Sécurité', instructor: 'Z. Kartoubi', level: 'Intermédiaire', lessons: 6, qcm: 4, exams: 1, description: 'Formez vos conducteurs aux gestes de premiers secours et à la gestion des situations urgence sur la route.', price: '1 200 MAD', hasCertificate: true, accentColor: '#ef4444' },
      { id: 6, title: 'Arrimage et Chargement des Marchandises', category: 'Logistique', instructor: 'Z. Kartoubi', level: 'Intermédiaire', lessons: 9, qcm: 5, exams: 1, description: "Maîtrisez les procédures de chargement, d'arrimage et de déchargement conformes aux normes de sécurité en vigueur.", price: '2 000 MAD', hasCertificate: true, accentColor: '#f59e0b' },
    ] as CourseItem[],
  },

  footer: {
    tagline: 'Conseil | Audit | Formation ',
    description: "Expert international en sécurité routière, efficacité énergétique et performance opérationnelle. Intervenant au Maroc, en Afrique et à l'international.",
    navLabel: 'Navigation',
    formationsLabel: 'Formations',
    formationLinks: ['Conformité réglementaire', 'Conducteurs professionnels', 'Audit des trajets', 'Coaching conduite', 'Logistique sécurisée'],
    contactLabel: 'Contact',
    copyright: (year: number) => `© ${year} Spirit Engineering Academy — Tous droits réservés.`,
  },
};

// ─── English ──────────────────────────────────────────────────────────────
export const EN: typeof FR = {
  nav: {
    home: 'Home',
    formations: 'Academy',
    consultant: 'Consultant',
    about: 'About',
    contact: 'Contact',
    getQuote: 'Get A Quote',
  },

  hero: {
    badge: 'Need consulting?',
    h1: ['Road Safety', '& Professional', 'Training'],
    subtitle: 'Comprehensive consulting, coaching and training solutions, delivered by senior consultants expert in road safety, HSE and transport. We bring the highest standards of excellence to serve your teams\' performance.',
    ctaFormations: 'View Training',
    ctaContact: 'Contact Us',
    heroStats: [
      { value: '28',   label: 'Programs' },
      { value: '156+', label: 'Video Lessons' },
      { value: '5',    label: 'Areas' },
    ],
    domainsTitle: 'Areas of Expertise',
    certs: [
      { code: 'Law 52-05', name: 'Highway Code' },
      { code: 'ADR',       name: 'Dangerous Goods' },
      { code: 'ISO 39001', name: 'Road Safety' },
      { code: 'Target',    name: 'Zero Accident' },
    ],
  },

  companyStats: {
    label: 'Partners in your success — Present in Morocco and internationally',
    items: [
      { value: '100+', label: 'Happy Customers' },
      { value: '30+',  label: 'Complete Projects' },
      { value: '20+',  label: 'Years of Experience' },
      { value: '10+',  label: 'Professional Team' },
      { value: '90%',  label: 'Success Rate' },
    ],
  },

  narsa: {
    label: 'Why Act Now — 2025 NARSA Report',
    items: [
      { value: '4,160',    sub: 'deaths on Morocco roads',    note: 'first 11 months 2025 (NARSA)' },
      { value: '+25.7%',   sub: 'rise in fatal accidents',    note: 'vs. same period 2024' },
      { value: '2026–2030',sub: 'NARSA National Strategy',   note: 'Spirit Engineering aligns your teams' },
      { value: '3–5 %',    sub: 'of Gross Domestic Product (GDP)', note: 'Economic cost of road accidents in Morocco' },
    ],
  },

  energy: {
    label: 'Energy Transition — 2030 Challenges',
    items: [
      { value: '38 %',  sub: 'Transport Sector — Morocco',      note: 'of national energy consumption' },
      { value: '52 %',  sub: 'National Strategy',               note: 'renewable energy targeted by 2030' },
      { value: '−15 %', sub: 'Certified Gain — Pro Fleets',     note: 'fuel saved through eco-driving' },
      { value: '2030',  sub: 'Carbon Neutrality Horizon',       note: 'Strategic target for Morocco' },
    ] as FigureItem[],
    challengesLabel: 'Challenges you are facing',
    challenges: [
      { title: 'Oil Price Volatility', desc: 'The barrel exceeds $100. Every litre saved becomes a direct competitiveness lever for your fleet.',                                                      tag: 'Cost & profitability' },
      { title: 'CBAM Mechanism',       desc: 'The EU carbon border tax weighs on your exports. Reducing your footprint means protecting your markets.',                                               tag: 'EU market access' },
      { title: 'CSR Challenges',       desc: 'Carbon reporting, supplier commitments, client expectations — CSR performance has become a selection criterion.',                                       tag: 'Reputation & compliance' },
    ] as { title: string; desc: string; tag: string }[],
  },

  services: {
    label: 'Our Expertise',
    title: 'Our Areas of Expertise',
    subtitle: 'Concrete interventions tailored to the realities of transport and logistics companies in Morocco.',
    items: [
      { num: '01', title: 'Consulting & Regulatory Compliance',  desc: 'Supporting transport companies in complying with Moroccan traffic law (Law 52-05), safety standards and freight transport regulations.', tags: ['Law 52-05', 'Transport', 'Audit'] },
      { num: '02', title: 'Professional Driver Training',        desc: 'Comprehensive programs for heavy vehicle drivers: safe driving, eco-driving, fatigue management, ADR transport and first aid.', tags: ['ADR', 'Eco-driving', 'Safety'] },
      { num: '03', title: 'Route Assessment & Audit',           desc: 'Route analysis to identify risk areas, recommendation of safest routes and transport condition assessment.', tags: ['Routes', 'Analysis', 'Risks'] },
      { num: '04', title: 'Professional Driving Coaching',      desc: 'On-site driver coaching: defensive driving, safe overtaking, night driving and hill management.', tags: ['On-site', 'Defensive', 'Coaching'] },
      { num: '05', title: 'Loading & Safe Logistics',          desc: 'Training on loading, unloading and cargo securing procedures according to applicable standards.', tags: ['Securing', 'Handling', 'Standards'] },
    ],
  },

  whatWeDo: {
    label: 'What We Do',
    title: 'Four pillars to strengthen your organization\'s safety and performance',
    items: [
      { title: 'Consulting',            desc: 'Strategic guidance to turn your HSE, environmental and energy challenges into drivers of performance and regulatory compliance.' },
      { title: 'Training',              desc: 'Hands-on programs in HSE, road safety and energy efficiency to build your teams\' skills and embed a lasting safety culture.' },
      { title: 'Audits & Assessments',  desc: 'Rigorous HSE audits, energy reviews and carbon assessments to identify your risks and steer continuous improvement.' },
      { title: 'Certification Support', desc: 'Full support from initial audit to certification — obtain and maintain your ISO 39001, 14001 and 45001 certifications.' },
    ] as { title: string; desc: string }[],
  },

  whyUs: {
    label: 'Why Choose Us',
    title: 'Why Moroccan companies trust Spirit Engineering Academy',
    items: [
      { title: 'Proven Expertise',    desc: 'Recognized field expertise in HSE, road safety and sustainable transport, built across Morocco and internationally.' },
      { title: 'Measurable Impact',   desc: 'Our programs deliver tangible results: fewer accidents, reduced costs and measurable improvement in your operations.' },
      { title: 'Tailored Solutions',  desc: 'Every intervention is designed to fit your industry, your organization and your specific safety maturity level.' },
      { title: 'Trusted Partnership', desc: 'A long-term commitment: personalized follow-up, transparent communication and ongoing support until you reach your goals.' },
    ],
  },

  testimonials: {
    label: 'Testimonials',
    title: 'What our clients say',
    items: [
      { name: 'Isabella Hart', role: 'Marketing Director', company: 'NovaTech Inc.',     text: 'A professional team with quick delivery and excellent support throughout the entire project. I highly recommend Spirit Engineering Academy.', stars: 5 },
      { name: 'Liam Bennett',  role: 'CEO',               company: 'Bennett Solutions', text: 'Outstanding quality training. Our team saw a significant improvement in its safety practices after Spirit Engineering programs.', stars: 5 },
    ],
  },

  cta: {
    title: 'Ready to strengthen the safety and performance of your teams?',
    subtitle: 'Get a technical and financial proposal within 24 hours or explore our training catalog aligned with international standards.',
    formations: 'View Training',
    contact: 'Contact Us',
  },

  about: {
    badge: 'Spirit Engineering Academy',
    h1: ['Train, certify,', 'make progress.'],
    subtitle: 'We support professionals and companies with targeted training in safety, energy and operational performance. Practical content, directly applicable in the field.',
    stats: [
      { value: '5',  label: 'Areas of Expertise' },
      { value: '4',  label: 'ISO Certifications' },
      { value: '28', label: 'Training Programs' },
    ],
    context: {
      label: "Why It's Urgent",
      items: [
        { value: '4,160',    sub: 'deaths on Morocco roads',        note: 'First 11 months 2025 — NARSA' },
        { value: '+25.7%',   sub: 'rise in fatal accidents',        note: 'compared to the same period 2024' },
        { value: '2030',     sub: 'NARSA 2026–2030 Strategy target',note: 'Reduce serious accidents by 50%' },
      ],
    },
    mission: {
      label: 'Our Mission',
      title: 'Why Spirit Engineering Academy was created',
      subtitle: "Faced with the alarming rise in road accidents in Morocco (+25.7% in 2025), Spirit Engineering Academy was created to meet the concrete needs of transport companies seeking to protect their teams, comply with regulations and reduce their operational risks.",
      items: [
        'Content tailored to real business needs',
        'Certifications recognized by companies',
        'Human and personalized support',
        'A results-oriented approach',
      ],
      valueCards: [
        { title: 'Prevent risks',          desc: 'Reduce incidents and strengthen safety culture through practical, contextualized content.' },
        { title: 'Validate competencies',  desc: 'Add value to skills with certifications aligned to professional requirements.' },
        { title: 'Support companies',      desc: 'Help organizations structure their teams\' skill development with tailored solutions.' },
      ],
    },
    expertise: {
      label: 'Our Areas',
      title: 'Three areas of expertise for safety and performance',
      subtitle: 'Our programs focus on key areas for industrial, logistics and mobility companies.',
      cards: [
        { title: 'Road Safety',          desc: 'Practical training to prevent road hazards: defensive driving, reducing risky behavior and best field practices.' },
        { title: 'Sustainable Mobility', desc: 'Programs focused on eco-driving and consumption optimization to reduce carbon footprint and operational costs.' },
        { title: 'Handling & Safety',    desc: 'Practical modules on cargo handling, securing, use of lifting equipment and accident prevention in logistics areas.' },
      ],
    },
    founder: {
      label: 'The Founder',
      name: 'Zakaria KARTOUBI',
      role: 'Founder & Educator',
      bio1: 'A professional in training and field coaching, Zakaria KARTOUBI designs results-oriented programs for companies and active learners. His approach connects safety, operational performance and sustainable skill development.',
      bio2: 'He supports professionals with an approach centered on real use cases, operational efficiency and safety of practices.',
      specialty: 'Specialties',
      specialtyValue: 'Safety, energy, sustainable mobility',
      audience: 'Target audience',
      audienceValue: 'Professionals, companies, field teams',
      commercial: {
        title: 'Commercial Support',
        desc: 'A dedicated contact is available for team requests, multi-user needs, HR support programs and tailor-made courses.',
        cta: 'Contact Us',
      },
    },
    team: {
      label: 'Our Team',
      title: 'Meet Our Team',
      subtitle: 'Experienced professionals dedicated to your success',
      members: [
        { name: 'Zakaria KARTOUBI',   role: 'CEO & Founder',            initials: 'ZK' },
        { name: 'Mme A. BEN BOUJI',   role: 'Team Manager',             initials: 'AB' },
        { name: 'Mme S. HOUDAJ',      role: 'HSE Project Engineer',     initials: 'SH' },
        { name: 'Yahya KARIM',        role: 'Auditor',                  initials: 'YK' },
        { name: 'Mme A. BELABDI',     role: 'Auditor',                  initials: 'AL' },
        { name: 'Zaid ABKARI',        role: 'Auditor',                  initials: 'ZA' },
      ],
    },
    certifications: {
      label: 'Certifications',
      title: 'Programs that validate acquired skills',
      items: [
        { code: 'ISO 39001',      benefit: 'Accident reduction', title: 'Road Safety',                   desc: 'Road traffic safety management system. Reduces fatal and serious accidents, aligns your organization with the NARSA 2026–2030 national strategy.' },
        { code: 'ISO 50001',      benefit: 'Cost reduction',     title: 'Energy Performance',             desc: 'Optimization of your fleet energy consumption. Reduces operational costs, lowers carbon footprint and opens access to demanding markets.' },
        { code: 'ISO 45001 / 14001', benefit: 'HSE & compliance', title: 'Health, Safety & Environment', desc: 'Prevention of occupational risks (45001) and environmental management (14001). Protects your workforce and strengthens your image.' },
      ],
    },
    partners: {
      label: 'They Trust Us',
      title: 'Our Partners & Clients',
      subtitle: 'Spirit Engineering Academy works with major industrial groups, logistics operators and transport companies across Morocco.',
      list: ['VIVO ENERGY', 'OCP', 'Industrial Companies', 'Transport Professionals', 'HSE Structures'],
      cta: {
        badge: 'Ready to start?',
        title1: 'Train your teams,',
        title2: 'reduce your risks.',
        desc: 'Request a personalized quote or explore our training catalog aligned with Moroccan regulations and ISO standards.',
        formations: 'View Training →',
        contact: 'Contact Us',
      },
    },
  },

  contactPage: {
    label: 'Contact',
    h1: ["Let's talk about your", 'training project.'],
    subtitle: 'Training, audit, ISO certification or partnership? Our team responds quickly.',
    addressLabel: 'Address',
    addressValue: '5th floor, Espace A2, 357 Bd Mohammed\nCasablanca 20000',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    siteLabel: 'Website',
    hours: {
      title: 'Opening Hours',
      days: [
        { day: 'Monday',    h: '9:30 am – 6:00 pm' },
        { day: 'Tuesday',   h: '9:30 am – 6:00 pm' },
        { day: 'Wednesday', h: '9:30 am – 6:00 pm' },
        { day: 'Thursday',  h: '9:30 am – 6:00 pm' },
        { day: 'Friday',    h: '9:30 am – 5:00 pm' },
        { day: 'Saturday',  h: 'Closed' },
        { day: 'Sunday',    h: 'Closed' },
      ],
    },
    responseTime: {
      title: 'Response Time',
      text: 'Guaranteed response within **24 to 48 business hours**. For urgent matters, call **+212 6 07 72 12 74**.',
    },
    form: {
      title: 'Send Us a Message',
      subtitle: 'The message will be sent directly via **WhatsApp** and **email**. Fields marked * are required.',
      nameLabel: 'Full name *',
      namePlaceholder: 'Your name',
      emailLabel: 'Email *',
      emailPlaceholder: 'you@example.com',
      phoneLabel: 'Phone',
      phonePlaceholder: '+212 6 XX XX XX XX',
      companyLabel: 'Company',
      companyPlaceholder: 'Your company name',
      subjectLabel: 'Subject *',
      subjectPlaceholder: 'Select a subject',
      messageLabel: 'Message *',
      messagePlaceholder: 'Describe your needs, objectives or questions...',
      subjects: ['Individual Training', 'Company / Team Training', 'ISO Certification', 'Audit & Consulting', 'Partnership', 'Other'],
      sendButton: 'Send Message',
      sendInfo: 'Auto-sent via WhatsApp **+212 6 07 72 12 74** + email **info@spirit.engineering**',
      successTitle: 'Message sent!',
      successText: 'WhatsApp and your email client have been opened with the pre-filled message.\nThank you, our team will respond within 24 to 48 hours.',
      openWhatsApp: 'Open WhatsApp',
      openEmail: 'Open Email',
      sendAnother: 'Send another message →',
    },
    directContacts: { label: 'Direct Contacts', title: 'Talk to the Right Person' },
    location: { label: 'Location', title: '357 Bd Mohammed V, Casablanca' },
    zakaria: {
      title: 'Zakaria KARTOUBI',
      role: 'Educator & Founder',
      desc: 'Training content questions, ISO certifications (39001, 50001, 14001, 45001) and technical expertise.',
      skype: 'PedagogueSPIRIT',
    },
    commercial: {
      title: 'Commercial Support',
      role: 'Business support',
      desc: 'Company quotes, team training, multi-user programs and custom HR solutions.',
      skype: 'ConseilCommercial',
    },
    closed: 'Closed',
  },

  formationsPage: {
    catalogLabel: 'Catalog',
    title: ['Our Professional', 'Training Programs'],
    subtitle: 'Training in road safety, eco-driving and professional logistics for transport companies.',
    availableLabel: 'training programs available',
    noneTitle: 'No training available yet',
    noneSubtitle: 'Training programs will be published soon.',
    noneCta: 'Contact Us',
    certifiedInstructor: 'Certified Instructor',
    enrollButton: 'Enroll / Preview',
    viewCourse: 'View Course',
    membersOnly: 'Members only',
    modal: {
      title: 'Enrollment Request',
      subtitle: 'Check your details and add a message.',
      nameLabel: 'Full name *',
      namePlaceholder: 'Your name',
      emailLabel: 'Email *',
      emailPlaceholder: 'email@company.com',
      phoneLabel: 'Phone *',
      phonePlaceholder: '+212 6XX XXX XXX',
      messageLabel: 'Message (optional)',
      messagePlaceholder: 'Questions or additional information...',
      cancel: 'Cancel',
      submit: 'Submit Request',
      successTitle: 'Request submitted!',
      successText: 'Your enrollment request has been received. An administrator will review it and give you access to the training very soon.',
      close: 'Close',
    },
    courses: [
      { id: 1, title: 'Safe and Defensive Driving',       category: 'Safety',      instructor: 'Z. Kartoubi', level: 'Intermediate', lessons: 12, qcm: 8,  exams: 2, description: 'Master defensive driving techniques to reduce accident risk in real professional transport conditions.', price: '2,500 MAD', hasCertificate: true,  accentColor: '#88C440' },
      { id: 2, title: 'Dangerous Goods Transport (ADR)',   category: 'ADR',         instructor: 'Z. Kartoubi', level: 'Advanced',     lessons: 20, qcm: 15, exams: 3, description: 'Complete ADR training on dangerous goods transport regulations by road according to European standards.', price: '4,200 MAD', hasCertificate: true,  accentColor: '#e85d04' },
      { id: 3, title: 'Law 52-05 Compliance',              category: 'Regulation',  instructor: 'Z. Kartoubi', level: 'Beginner',     lessons: 8,  qcm: 6,  exams: 1, description: 'Understand and apply the Moroccan Highway Code (Law 52-05) for full fleet compliance.',              price: '1,800 MAD', hasCertificate: true,  accentColor: '#3b82f6' },
      { id: 4, title: 'Eco-driving & Fuel Management',     category: 'Performance', instructor: 'Z. Kartoubi', level: 'Beginner',     lessons: 10, qcm: 7,  exams: 1, description: "Reduce your fleet's fuel consumption and carbon footprint with certified eco-driving techniques.",    price: '1,500 MAD', hasCertificate: false, accentColor: '#88C440' },
      { id: 5, title: 'First Aid & Accident Management',   category: 'Safety',      instructor: 'Z. Kartoubi', level: 'Intermediate', lessons: 6,  qcm: 4,  exams: 1, description: 'Train your drivers in first aid and emergency management on the road.',                             price: '1,200 MAD', hasCertificate: true,  accentColor: '#ef4444' },
      { id: 6, title: 'Cargo Loading & Securing',          category: 'Logistics',   instructor: 'Z. Kartoubi', level: 'Intermediate', lessons: 9,  qcm: 5,  exams: 1, description: 'Master loading, securing and unloading procedures compliant with applicable safety standards.',      price: '2,000 MAD', hasCertificate: true,  accentColor: '#f59e0b' },
    ],
  },

  footer: {
    tagline: 'Training • Audit • Consulting',
    description: 'International expert in road safety, energy efficiency and operational performance. Operating in Morocco, Africa and internationally.',
    navLabel: 'Navigation',
    formationsLabel: 'Training',
    formationLinks: ['Regulatory Compliance', 'Professional Drivers', 'Route Assessment', 'Driving Coaching', 'Safe Logistics'],
    contactLabel: 'Contact',
    copyright: (year: number) => `© ${year} Spirit Engineering Academy — All rights reserved.`,
  },
};

export const translations: Record<Locale, typeof FR> = { fr: FR, en: EN };
