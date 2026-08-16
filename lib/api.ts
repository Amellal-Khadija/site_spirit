import type { CourseItem } from '@/lib/i18n';

export const LMS_URL = process.env.NEXT_PUBLIC_LMS_URL ?? 'https://learn.spirit.engineering';

/* ─── Types bruts renvoyés par le LMS Laravel ───────────────────── */
interface LmsCourse {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail?: string;
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  duration?: number;
  category: { id: string; name: string };
  instructor: { first_name: string; last_name: string };
  sections_count?: number;
  mode?: 'online' | 'presentiel';
  price?: string;
  accent_color?: string;
}

/* ─── Mapping niveau LMS → label FR ─────────────────────────────── */
const LEVEL_MAP: Record<string, string> = {
  BEGINNER:     'Débutant',
  INTERMEDIATE: 'Intermédiaire',
  ADVANCED:     'Avancé',
};

/* ─── Couleur par catégorie si accent_color absent ───────────────── */
const CATEGORY_COLORS: Record<string, string> = {
  default:             '#88C440',
  'mobilité':          '#88C440',
  'sécurité':          '#88C440',
  'hse':               '#ef4444',
  'prévention':        '#f97316',
  'iso':               '#3b82f6',
  'audit':             '#f59e0b',
  'conformité':        '#f59e0b',
  'leadership':        '#8b5cf6',
  'transport':         '#0ea5e9',
  'logistique':        '#0ea5e9',
  'esg':               '#10b981',
  'durabilité':        '#10b981',
};

function categoryColor(name: string): string {
  const key = name.toLowerCase();
  const match = Object.keys(CATEGORY_COLORS).find(k => k !== 'default' && key.includes(k));
  return match ? CATEGORY_COLORS[match] : CATEGORY_COLORS.default;
}

/* ─── Mapping LmsCourse → CourseItem ────────────────────────────── */
function mapCourse(c: LmsCourse): CourseItem & { slug: string; thumbnail?: string } {
  return {
    id:             parseInt(c.id, 10) || Math.floor(Math.random() * 9000 + 1000),
    title:          c.title,
    category:       c.category.name,
    instructor:     `${c.instructor.first_name} ${c.instructor.last_name}`,
    level:          LEVEL_MAP[c.level] ?? c.level,
    description:    c.description,
    price:          c.price ?? 'Sur devis',
    hasCertificate: false,
    accentColor:    c.accent_color ?? categoryColor(c.category.name),
    mode:           c.mode ?? 'presentiel',
    lessons:        c.sections_count ?? 0,
    qcm:            0,
    exams:          0,
    slug:           c.slug,
    thumbnail:      c.thumbnail ? `${LMS_URL}${c.thumbnail}` : undefined,
  };
}

/* ─── Fetch formations depuis le LMS ────────────────────────────── */
export async function fetchCourses(): Promise<Array<CourseItem & { slug: string; thumbnail?: string }>> {
  const res = await fetch(`${LMS_URL}/api/public/courses`, {
    next: { revalidate: 60 },
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) throw new Error(`LMS API error: ${res.status}`);
  const data: LmsCourse[] | { data: LmsCourse[] } = await res.json();
  const list = Array.isArray(data) ? data : (data.data ?? []);
  return list.map(mapCourse);
}

/* ─── Fetch détail d'une formation ──────────────────────────────── */
export async function fetchCourse(slug: string): Promise<(CourseItem & { slug: string; thumbnail?: string }) | null> {
  const res = await fetch(`${LMS_URL}/api/public/courses/${slug}`, {
    next: { revalidate: 60 },
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) return null;
  const c: LmsCourse = await res.json();
  return mapCourse(c);
}
