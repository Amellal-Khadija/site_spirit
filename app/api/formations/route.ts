import { NextResponse } from 'next/server';
import { fetchCourses } from '@/lib/api';
import { FR } from '@/lib/i18n';

export const revalidate = 60;

export async function GET() {
  try {
    const courses = await fetchCourses();
    return NextResponse.json(courses);
  } catch {
    /* fallback sur les 12 formations statiques si le LMS est inaccessible */
    return NextResponse.json(FR.formationsPage.courses);
  }
}
