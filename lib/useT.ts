'use client';
import { useLang } from '@/composant/LangProvider';
import { translations } from './i18n';

export function useT() {
  const { lang } = useLang();
  return translations[lang];
}
