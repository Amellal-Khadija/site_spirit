'use client';
import { useEffect, useRef } from 'react';

export function useScrollAnim(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add .in to this element and all .anim-* children
          el.classList.add('in');
          el.querySelectorAll<HTMLElement>('[class*="anim-"]').forEach((child) => {
            child.classList.add('in');
          });
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
