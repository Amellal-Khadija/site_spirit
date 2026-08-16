'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const GREEN = '#88C440';
const DARK_BG = 'linear-gradient(135deg,#0f1f0e 0%,#1a3016 60%,#243d1e 100%)';

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "Quelles formations proposez-vous ?",
    answer: "Spirit Engineering Academy propose 12+ formations en sécurité routière, éco-conduite, transport ADR (matières dangereuses), HSE, ISO 39001, coaching conduite défensive et logistique professionnelle. Elles sont disponibles en présentiel à Casablanca ou en ligne sur notre plateforme LMS.",
  },
  {
    question: "Comment puis-je m'inscrire à une formation ?",
    answer: "Pour les formations en ligne, inscrivez-vous directement sur notre plateforme LMS (learn.spirit.engineering). Pour les formations présentielles, contactez-nous via WhatsApp au +212 6 07 72 12 74 ou par email à info@spirit.engineering.",
  },
  {
    question: "Vos formations sont-elles certifiantes ?",
    answer: "Oui, la majorité de nos formations débouchent sur une attestation de formation. Certaines préparent à des certifications ISO reconnues : ISO 39001 (sécurité routière), ISO 50001 (performance énergétique) et ISO 45001 / 14001 (HSE & environnement).",
  },
  {
    question: "Proposez-vous des formations pour les entreprises et les équipes ?",
    answer: "Oui, nous concevons des programmes sur mesure pour les entreprises : sessions intra-entreprise, parcours multi-collaborateurs et dispositifs RH adaptés. Contactez notre conseil commercial pour obtenir un devis personnalisé sous 24h.",
  },
  {
    question: "Où se déroulent les formations présentielles ?",
    answer: "Nos formations ont lieu dans nos locaux au 5ème étage, Espace A2, 357 Boulevard Mohammed V, Casablanca. Nous pouvons également intervenir directement dans vos locaux sur tout le territoire marocain.",
  },
  {
    question: "Quelle est la différence entre formation présentielle et en ligne ?",
    answer: "La formation présentielle se déroule avec un formateur certifié en salle ou sur le terrain — idéale pour les exercices pratiques. La formation en ligne est accessible 24h/24 via notre plateforme LMS depuis n'importe quel appareil, à votre propre rythme.",
  },
  {
    question: "Proposez-vous des services de conseil et d'audit ?",
    answer: "Oui, Spirit Engineering Academy accompagne les entreprises de transport dans leur conformité réglementaire (Loi 52-05), l'audit de leurs systèmes de management ISO (39001, 14001, 45001), et l'évaluation des risques routiers sur leurs trajets.",
  },
  {
    question: "Intervenez-vous en dehors de Casablanca ?",
    answer: "Oui, nous intervenons dans tout le Maroc et à l'international, auprès de grandes entreprises industrielles (VIVO ENERGY, OCP…), d'opérateurs logistiques et de sociétés de transport.",
  },
  {
    question: "Quel est le délai de réponse après une demande de devis ?",
    answer: "Nous garantissons une réponse sous 24 à 48h ouvrées. Pour les urgences, appelez directement le +212 6 07 72 12 74 — notre équipe est disponible du lundi au vendredi de 9h30 à 18h00.",
  },
  {
    question: "Comment démarrer une certification ISO avec Spirit Engineering ?",
    answer: "Nous vous accompagnons de l'audit initial jusqu'à l'obtention de la certification ISO (39001, 50001, 14001 ou 45001). Contactez-nous pour évaluer votre niveau de maturité actuel et définir votre parcours de certification sur mesure.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

        {/* header */}
        <div className="text-center mb-14">
          <span style={{
            display: 'inline-block',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: GREEN,
            marginBottom: 12,
          }}>
            Questions fréquentes
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            Tout ce que vous devez savoir
          </h2>
          <p className="text-base" style={{ color: '#6b7280', maxWidth: 480, margin: '0 auto' }}>
            Retrouvez les réponses aux questions les plus posées sur nos formations, nos services et notre accompagnement.
          </p>
        </div>

        {/* accordion */}
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  border: `1px solid ${isOpen ? GREEN + '40' : '#e5e7eb'}`,
                  boxShadow: isOpen ? `0 4px 20px ${GREEN}15` : 'none',
                }}>
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
                  style={{
                    background: isOpen ? `${GREEN}08` : 'white',
                    border: 'none',
                    cursor: 'pointer',
                  }}>
                  <span className="font-semibold text-gray-900 text-sm pr-4 leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: isOpen ? GREEN : '#9ca3af',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5" style={{ background: `${GREEN}08` }}>
                    <div style={{ width: 32, height: 2, background: GREEN, borderRadius: 2, marginBottom: 12 }} />
                    <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA bas */}
        <div className="mt-14 rounded-3xl p-8 text-center" style={{ background: DARK_BG }}>
          <p className="font-bold text-white text-lg mb-2">Vous avez une autre question ?</p>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Notre équipe vous répond sous 24h.
          </p>
          <a
            href="https://wa.me/212607721274?text=Bonjour%20Spirit%20Engineering%2C%20j%27ai%20une%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
            style={{ background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.4)' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Poser ma question sur WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
