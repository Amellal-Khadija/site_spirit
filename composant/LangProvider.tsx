'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import type { Locale } from '@/lib/i18n';
import { DEFAULT_LOCALE, LOCALES } from '@/lib/i18n';

interface LangCtx { lang: Locale; setLang: (l: Locale) => void; }

export const LangContext = createContext<LangCtx>({ lang: DEFAULT_LOCALE, setLang: () => {} });

export function useLang() {
  return useContext(LangContext);
}

export default function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang') as Locale | null;
      if (saved && (LOCALES as readonly string[]).includes(saved)) setLangState(saved);
    } catch {}
  }, []);

  function setLang(l: Locale) {
    setLangState(l);
    try { localStorage.setItem('lang', l); } catch {}
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}
