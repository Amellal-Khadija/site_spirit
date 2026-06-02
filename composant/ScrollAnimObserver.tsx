'use client';
import { useEffect } from 'react';

export default function ScrollAnimObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    // Observe all anim-* elements already in DOM
    document.querySelectorAll('[class*="anim-"]').forEach((el) => observer.observe(el));

    // Also observe new elements added dynamically
    const mutation = new MutationObserver(() => {
      document.querySelectorAll('[class*="anim-"]:not(.in)').forEach((el) => observer.observe(el));
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => { observer.disconnect(); mutation.disconnect(); };
  }, []);

  return null;
}
