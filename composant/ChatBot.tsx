'use client';

import { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, Send } from 'lucide-react';

const GREEN = '#88C440';
const DARK_BG = '#0f1f0e';

const FAQ: { question: string; answer: string }[] = [
  {
    question: "Quelles formations proposez-vous ?",
    answer: "Nous proposons 12+ formations : sécurité routière, éco-conduite, transport ADR, HSE, ISO 39001, conduite défensive et logistique. Disponibles en présentiel à Casablanca ou en ligne sur notre plateforme LMS.",
  },
  {
    question: "Comment s'inscrire à une formation ?",
    answer: "Pour les formations en ligne, inscrivez-vous sur learn.spirit.engineering. Pour les formations présentielles, contactez-nous via WhatsApp au +212 6 07 72 12 74 ou à info@spirit.engineering.",
  },
  {
    question: "Vos formations sont-elles certifiantes ?",
    answer: "Oui ! La majorité de nos formations donnent une attestation. Certaines préparent aux certifications ISO 39001 (sécurité routière), ISO 50001 (énergie) et ISO 45001/14001 (HSE).",
  },
  {
    question: "Proposez-vous des formations pour les entreprises ?",
    answer: "Oui, nous concevons des programmes sur mesure : sessions intra-entreprise, parcours multi-collaborateurs et dispositifs RH adaptés. Contactez-nous pour un devis sous 24h.",
  },
  {
    question: "Où se déroulent les formations présentielles ?",
    answer: "Dans nos locaux au 5ème étage, Espace A2, 357 Bd Mohammed V, Casablanca — ou directement dans vos locaux, partout au Maroc.",
  },
  {
    question: "Proposez-vous du conseil et de l'audit ?",
    answer: "Oui, nous accompagnons les entreprises : conformité Loi 52-05, audit ISO, évaluation des risques routiers et conseil HSE.",
  },
  {
    question: "Intervenez-vous hors de Casablanca ?",
    answer: "Oui, nous intervenons dans tout le Maroc et à l'international, auprès de grandes entreprises industrielles et de transport.",
  },
  {
    question: "Quel est votre délai de réponse ?",
    answer: "Réponse garantie sous 24 à 48h ouvrées. Pour les urgences : +212 6 07 72 12 74, disponible du lundi au vendredi 9h30–18h.",
  },
  {
    question: "Comment démarrer une certification ISO ?",
    answer: "Nous vous accompagnons de l'audit initial jusqu'à la certification ISO (39001, 50001, 14001, 45001). Contactez-nous pour évaluer votre niveau et définir votre parcours.",
  },
];

type Message = { from: 'bot' | 'user'; text: string };

const WELCOME: Message = {
  from: 'bot',
  text: "👋 Bonjour ! Je suis l'assistant Spirit Engineering. Cliquez sur une question ci-dessous pour obtenir une réponse instantanée.",
};

export default function ChatBot() {
  const [open, setOpen]       = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [typing, setTyping]   = useState(false);
  const [asked, setAsked]     = useState<Set<number>>(new Set());
  const [pulse, setPulse]     = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  function handleQuestion(idx: number) {
    if (typing) return;
    const q = FAQ[idx];
    setAsked(prev => new Set(prev).add(idx));
    setMessages(prev => [...prev, { from: 'user', text: q.question }]);
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: q.answer }]);
      setTyping(false);
    }, 900);
  }

  function handleReset() {
    setMessages([WELCOME]);
    setAsked(new Set());
    setTyping(false);
  }

  const unanswered = FAQ.filter((_, i) => !asked.has(i));

  return (
    <>
      {/* ── Bouton flottant ── */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Ouvrir le chat"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: GREEN,
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(136,196,64,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>

        {open
          ? <X size={22} color="white" />
          : <MessageCircle size={22} color="white" />}

        {/* badge pulsant */}
        {!open && pulse && (
          <span style={{
            position: 'absolute',
            top: -4, right: -4,
            width: 14, height: 14,
            borderRadius: '50%',
            background: '#ef4444',
            border: '2px solid white',
            animation: 'chatPulse 1.5s ease-in-out infinite',
          }} />
        )}
      </button>

      {/* ── Fenêtre chat ── */}
      {open && (
        <div style={{
          position: 'fixed',
          bottom: 90,
          right: 24,
          zIndex: 999,
          width: 360,
          maxWidth: 'calc(100vw - 32px)',
          maxHeight: '75vh',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
          display: 'flex',
          flexDirection: 'column',
          background: '#f9fafb',
        }}>

          {/* header */}
          <div style={{
            background: DARK_BG,
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            flexShrink: 0,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: GREEN,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <MessageCircle size={17} color="white" />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: 'white', fontWeight: 700, fontSize: 13, margin: 0 }}>
                Spirit Engineering
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, margin: 0 }}>
                Assistant virtuel
              </p>
            </div>
            {asked.size > 0 && (
              <button
                onClick={handleReset}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>
                Réinitialiser
              </button>
            )}
          </div>

          {/* messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '80%',
                  padding: '10px 14px',
                  borderRadius: msg.from === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.from === 'user' ? GREEN : 'white',
                  color: msg.from === 'user' ? 'white' : '#1f2937',
                  fontSize: 13,
                  lineHeight: 1.5,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* indicateur de frappe */}
            {typing && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  padding: '10px 16px',
                  borderRadius: '18px 18px 18px 4px',
                  background: 'white',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                  display: 'flex', gap: 4, alignItems: 'center',
                }}>
                  {[0, 1, 2].map(d => (
                    <span key={d} style={{
                      width: 7, height: 7, borderRadius: '50%',
                      background: '#9ca3af',
                      animation: `typingDot 1.2s ease-in-out ${d * 0.2}s infinite`,
                      display: 'inline-block',
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* questions suggérées */}
          {unanswered.length > 0 && (
            <div style={{
              borderTop: '1px solid #e5e7eb',
              padding: '12px 14px',
              background: 'white',
              flexShrink: 0,
            }}>
              <p style={{ fontSize: 11, color: '#9ca3af', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Questions fréquentes
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 180, overflowY: 'auto' }}>
                {unanswered.map((item, i) => {
                  const realIdx = FAQ.indexOf(item);
                  return (
                    <button
                      key={realIdx}
                      onClick={() => handleQuestion(realIdx)}
                      disabled={typing}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 8,
                        padding: '8px 12px',
                        borderRadius: 10,
                        border: `1px solid #e5e7eb`,
                        background: typing ? '#f9fafb' : 'white',
                        cursor: typing ? 'not-allowed' : 'pointer',
                        textAlign: 'left',
                        fontSize: 12,
                        color: '#374151',
                        transition: 'all 0.15s',
                        opacity: typing ? 0.6 : 1,
                      }}
                      onMouseEnter={e => { if (!typing) { e.currentTarget.style.borderColor = GREEN; e.currentTarget.style.color = GREEN; }}}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#374151'; }}>
                      <span>{item.question}</span>
                      <Send size={12} style={{ flexShrink: 0, color: '#9ca3af' }} />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {unanswered.length === 0 && (
            <div style={{ borderTop: '1px solid #e5e7eb', padding: '14px', background: 'white', textAlign: 'center' }}>
              <p style={{ fontSize: 12, color: '#6b7280', marginBottom: 10 }}>
                Toutes les questions ont été répondues !
              </p>
              <a
                href="https://wa.me/212607721274?text=Bonjour%20Spirit%20Engineering%2C%20j%27ai%20une%20question."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '8px 16px', borderRadius: 10,
                  background: '#25D366', color: 'white',
                  fontSize: 12, fontWeight: 600, textDecoration: 'none',
                }}>
                Contacter un conseiller WhatsApp
              </a>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes chatPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
        @keyframes typingDot {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}
