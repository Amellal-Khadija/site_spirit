'use client';

import { useState } from 'react';
import {
  MapPin, Mail, Phone, Globe, Send, CheckCircle2,
  Clock, MessageSquare, User, Briefcase, ChevronRight,
} from 'lucide-react';
import { useT } from '@/lib/useT';

const DARK_BG          = 'linear-gradient(135deg,#0f1f0e 0%,#1a3016 60%,#243d1e 100%)';
const GREEN            = '#88C440';
const WHATSAPP_NUMBER  = '212607721274';
const EMAIL_TO         = 'info@spirit.engineering';

interface Form { name: string; email: string; phone: string; company: string; subject: string; message: string; }
const EMPTY: Form = { name:'', email:'', phone:'', company:'', subject:'', message:'' };

/* ── input styles (shared) ─────────────────────────────────────── */
const inputStyle: React.CSSProperties = {
  width:'100%', background:'white', border:'1.5px solid #e5e7eb',
  borderRadius:12, padding:'11px 16px', fontSize:14, color:'#111827',
  outline:'none', fontFamily:"'Century Gothic','CenturyGothic','AppleGothic',sans-serif",
};
const inputFocusCls = 'focus:outline-none focus:ring-2 focus:ring-[#88C440]/30 focus:border-[#88C440] transition-all';

function SectionLabel({ children, light }: { children: string; light?: boolean }) {
  const c = light ? '#a8e063' : GREEN;
  return (
    <div className="mb-5">
      <span style={{ fontSize:13, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:c }}>{children}</span>
      <div style={{ width:48, height:3, marginTop:8, borderRadius:2, background:`linear-gradient(90deg,${c},transparent)` }} />
    </div>
  );
}

export default function Contact() {
  const [form, setForm]           = useState<Form>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const t  = useT();
  const cp = t.contactPage;

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const waMsg =
      `*✉ Nouveau message — Spirit Engineering*\n\n` +
      `👤 *Nom :* ${form.name}\n` +
      `📧 *Email :* ${form.email}\n` +
      `📞 *Téléphone :* ${form.phone || '—'}\n` +
      `🏢 *Entreprise :* ${form.company || '—'}\n` +
      `📌 *Sujet :* ${form.subject}\n\n` +
      `💬 *Message :*\n${form.message}`;
    const emailSubject = `[Spirit Engineering] ${form.subject} — ${form.name}`;
    const emailBody    = `Nom : ${form.name}\nEmail : ${form.email}\nTéléphone : ${form.phone || '—'}\nEntreprise : ${form.company || '—'}\nSujet : ${form.subject}\n\nMessage :\n${form.message}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`, '_blank', 'noopener,noreferrer');
    setTimeout(() => {
      window.open(`mailto:${EMAIL_TO}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`, '_blank');
    }, 400);
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily:"'Century Gothic','CenturyGothic','AppleGothic',sans-serif", color:'#111827' }}>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: DARK_BG }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:'radial-gradient(ellipse at 70% 40%,rgba(136,196,64,0.18) 0%,transparent 60%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ opacity:0.05, backgroundImage:'radial-gradient(circle,#88C440 1px,transparent 1px)', backgroundSize:'32px 32px' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-28 lg:pt-24 lg:pb-32">
          <div className="max-w-2xl">
            <SectionLabel light>{cp.label}</SectionLabel>
            <h1 className="font-extrabold leading-tight tracking-tight text-white mb-5"
              style={{ fontSize:'clamp(2rem,4.5vw,3.25rem)' }}>
              {cp.h1[0]}<br />
              <span style={{ color:GREEN }}>{cp.h1[1]}</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color:'rgba(255,255,255,0.65)' }}>{cp.subtitle}</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height:60, overflow:'hidden' }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width:'100%', height:'100%', display:'block' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── MAIN GRID ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.55fr] items-start">

            {/* ── LEFT : infos + horaires ── */}
            <div className="space-y-4">

              {/* coordonnées */}
              {([
                { Icon:MapPin, label:cp.addressLabel, value:cp.addressValue, href:'https://maps.google.com/?q=357+Boulevard+Mohammed+Casablanca', color:GREEN },
                { Icon:Mail,   label:cp.emailLabel,   value:'info@spirit.engineering',  href:'mailto:info@spirit.engineering', color:GREEN },
                { Icon:Phone,  label:cp.phoneLabel,   value:'+212 6 07 72 12 74',        href:'tel:+212607721274',             color:GREEN },
                { Icon:Globe,  label:cp.siteLabel,    value:'www.spirit.engineering',    href:'https://www.spirit.engineering', color:GREEN },
              ] as const).map(({ Icon, label, value, href, color }) => (
                <a key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:border-[#88C440] hover:shadow-[0_4px_16px_rgba(136,196,64,0.12)] hover:-translate-y-0.5 transition-all"
                  style={{ textDecoration:'none', color:'inherit' }}>
                  <div className="flex items-center justify-center flex-shrink-0"
                    style={{ width:44, height:44, borderRadius:12, background:`${color}12` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p style={{ fontSize:10, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'#9ca3af' }}>{label}</p>
                    <p className="mt-0.5 text-sm font-semibold text-gray-800 whitespace-pre-line">{value}</p>
                  </div>
                </a>
              ))}

              {/* horaires */}
              <div className="rounded-2xl border border-gray-100 p-5" style={{ background:'#f8faf5' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={15} style={{ color:GREEN }} />
                  <span className="text-sm font-bold text-gray-800">{cp.hours.title}</span>
                </div>
                {cp.hours.days.map(r => (
                  <div key={r.day} className="flex justify-between items-center py-2 text-sm"
                    style={{ borderBottom:'1px solid #f3f4f6' }}>
                    <span style={{ color:'#6b7280' }}>{r.day}</span>
                    <span className="font-semibold" style={{ color:(r.h === 'Fermé' || r.h === 'Closed') ? '#f87171' : '#111827' }}>
                      {r.h}
                    </span>
                  </div>
                ))}
              </div>

              {/* temps de réponse */}
              <div className="rounded-2xl border p-5 flex items-start gap-3"
                style={{ background:'rgba(136,196,64,0.06)', borderColor:'rgba(136,196,64,0.22)' }}>
                <MessageSquare size={16} className="flex-shrink-0 mt-0.5" style={{ color:GREEN }} />
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-1">{cp.responseTime.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color:'#6b7280' }}
                    dangerouslySetInnerHTML={{
                      __html: cp.responseTime.text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-800">$1</strong>'),
                    }} />
                </div>
              </div>
            </div>

            {/* ── RIGHT : formulaire ── */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-10">
              {submitted ? (
                /* succès */
                <div className="flex flex-col items-center text-center py-12 gap-5">
                  <div className="flex items-center justify-center"
                    style={{ width:72, height:72, borderRadius:'50%', background:'rgba(136,196,64,0.12)' }}>
                    <CheckCircle2 size={36} style={{ color:GREEN }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{cp.form.successTitle}</h3>
                  <p className="text-sm leading-relaxed whitespace-pre-line max-w-sm" style={{ color:'#6b7280' }}>
                    {cp.form.successText}
                  </p>
                  <div className="flex gap-3 flex-wrap justify-center mt-1">
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5"
                      style={{ background:'#25D366', boxShadow:'0 4px 14px rgba(37,211,102,0.35)' }}>
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                      {cp.form.openWhatsApp}
                    </a>
                    <a href={`mailto:${EMAIL_TO}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border transition-all hover:-translate-y-0.5"
                      style={{ borderColor:'#e5e7eb', color:'#374151', textDecoration:'none' }}>
                      <Mail size={14} /> {cp.form.openEmail}
                    </a>
                  </div>
                  <button onClick={() => { setForm(EMPTY); setSubmitted(false); }}
                    className="text-sm font-semibold mt-1 hover:underline" style={{ color:GREEN, background:'none', border:'none', cursor:'pointer' }}>
                    {cp.form.sendAnother}
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{cp.form.title}</h2>
                  <p className="text-sm mb-7" style={{ color:'#6b7280' }}
                    dangerouslySetInnerHTML={{ __html: cp.form.subtitle.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#374151">$1</strong>') }} />

                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="ct-name" className="block text-xs font-bold mb-1.5 tracking-wide" style={{ color:'#374151' }}>
                          {cp.form.nameLabel}
                        </label>
                        <input id="ct-name" name="name" value={form.name} onChange={handle}
                          className={inputFocusCls} style={inputStyle}
                          placeholder={cp.form.namePlaceholder} required />
                      </div>
                      <div>
                        <label htmlFor="ct-email" className="block text-xs font-bold mb-1.5 tracking-wide" style={{ color:'#374151' }}>
                          {cp.form.emailLabel}
                        </label>
                        <input id="ct-email" type="email" name="email" value={form.email} onChange={handle}
                          className={inputFocusCls} style={inputStyle}
                          placeholder={cp.form.emailPlaceholder} required />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="ct-phone" className="block text-xs font-bold mb-1.5 tracking-wide" style={{ color:'#374151' }}>
                          {cp.form.phoneLabel}
                        </label>
                        <input id="ct-phone" name="phone" value={form.phone} onChange={handle}
                          className={inputFocusCls} style={inputStyle}
                          placeholder={cp.form.phonePlaceholder} />
                      </div>
                      <div>
                        <label htmlFor="ct-company" className="block text-xs font-bold mb-1.5 tracking-wide" style={{ color:'#374151' }}>
                          {cp.form.companyLabel}
                        </label>
                        <input id="ct-company" name="company" value={form.company} onChange={handle}
                          className={inputFocusCls} style={inputStyle}
                          placeholder={cp.form.companyPlaceholder} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="ct-subject" className="block text-xs font-bold mb-1.5 tracking-wide" style={{ color:'#374151' }}>
                        {cp.form.subjectLabel}
                      </label>
                      <select id="ct-subject" name="subject" value={form.subject} onChange={handle}
                        required className={inputFocusCls}
                        style={{ ...inputStyle, cursor:'pointer', appearance:'none',
                          backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                          backgroundRepeat:'no-repeat', backgroundPosition:'right 14px center' }}>
                        <option value="">{cp.form.subjectPlaceholder}</option>
                        {cp.form.subjects.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="ct-message" className="block text-xs font-bold mb-1.5 tracking-wide" style={{ color:'#374151' }}>
                        {cp.form.messageLabel}
                      </label>
                      <textarea id="ct-message" name="message" value={form.message} onChange={handle}
                        className={inputFocusCls} style={{ ...inputStyle, resize:'vertical', minHeight:130 }}
                        placeholder={cp.form.messagePlaceholder} required />
                    </div>

                    {/* note d'envoi */}
                    <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl"
                      style={{ background:'rgba(37,211,102,0.06)', border:'1px solid rgba(37,211,102,0.18)' }}>
                      <svg viewBox="0 0 24 24" width="14" height="14" className="flex-shrink-0 mt-0.5" fill="#25D366">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <p className="text-xs leading-relaxed" style={{ color:'#4b5563' }}
                        dangerouslySetInnerHTML={{ __html: cp.form.sendInfo.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
                    </div>

                    <button type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5"
                      style={{ background:GREEN, boxShadow:`0 4px 18px ${GREEN}35`, border:'none', cursor:'pointer' }}>
                      <Send size={15} /> {cp.form.sendButton}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTS DIRECTS ───────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 lg:py-20" style={{ background: DARK_BG }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:'radial-gradient(ellipse at 30% 60%,rgba(136,196,64,0.14) 0%,transparent 65%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <SectionLabel light>{cp.directContacts.label}</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">{cp.directContacts.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Zakaria */}
            <div className="rounded-2xl p-6"
              style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.10)', backdropFilter:'blur(8px)' }}>
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center justify-center"
                  style={{ width:52, height:52, borderRadius:14, background:'rgba(136,196,64,0.18)', flexShrink:0 }}>
                  <User size={22} style={{ color:GREEN }} />
                </div>
                <div>
                  <h3 className="font-bold text-white">{cp.zakaria.title}</h3>
                  <p className="text-sm font-semibold" style={{ color:'#a8e063' }}>{cp.zakaria.role}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color:'rgba(255,255,255,0.60)' }}>{cp.zakaria.desc}</p>
              <div className="space-y-2.5">
                {([
                  { href:'tel:+212607721274',              text:'+212 6 07 72 12 74',      Icon:Phone },
                  { href:'mailto:info@spirit.engineering',  text:'info@spirit.engineering', Icon:Mail  },
                  { href:`skype:${cp.zakaria.skype}?chat`,  text:`Skype : ${cp.zakaria.skype}`, Icon:MessageSquare },
                ] as const).map(({ href, text, Icon }) => (
                  <a key={text} href={href}
                    className="flex items-center gap-2.5 text-sm font-medium transition-colors hover:text-[#a8e063]"
                    style={{ color:'rgba(255,255,255,0.70)', textDecoration:'none' }}>
                    <Icon size={14} style={{ color:GREEN, flexShrink:0 }} /> {text}
                  </a>
                ))}
              </div>
            </div>

            {/* Commercial */}
            <div className="rounded-2xl p-6"
              style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.10)', backdropFilter:'blur(8px)' }}>
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center justify-center"
                  style={{ width:52, height:52, borderRadius:14, background:'rgba(59,130,246,0.22)', flexShrink:0 }}>
                  <Briefcase size={22} style={{ color:'#93c5fd' }} />
                </div>
                <div>
                  <h3 className="font-bold text-white">{cp.commercial.title}</h3>
                  <p className="text-sm font-semibold" style={{ color:'#93c5fd' }}>{cp.commercial.role}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color:'rgba(255,255,255,0.60)' }}>{cp.commercial.desc}</p>
              <div className="space-y-2.5">
                {([
                  { href:'tel:+212660705515',              text:'+212 6 60 70 55 15',     Icon:Phone },
                  { href:'mailto:info@spirit.engineering',  text:'info@spirit.engineering',Icon:Mail  },
                  { href:`skype:${cp.commercial.skype}?chat`, text:`Skype : ${cp.commercial.skype}`, Icon:MessageSquare },
                ] as const).map(({ href, text, Icon }) => (
                  <a key={text} href={href}
                    className="flex items-center gap-2.5 text-sm font-medium transition-colors hover:text-[#93c5fd]"
                    style={{ color:'rgba(255,255,255,0.70)', textDecoration:'none' }}>
                    <Icon size={14} style={{ color:'#93c5fd', flexShrink:0 }} /> {text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA WhatsApp rapide */}
          <div className="mt-8 flex flex-wrap gap-3 items-center justify-center">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5"
              style={{ background:'#25D366', boxShadow:'0 4px 18px rgba(37,211,102,0.40)', textDecoration:'none' }}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Démarrer une conversation
            </a>
            <a href={`mailto:${EMAIL_TO}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
              style={{ background:'rgba(255,255,255,0.10)', border:'1px solid rgba(255,255,255,0.22)', color:'white', textDecoration:'none' }}>
              <Mail size={14} /> {EMAIL_TO} <ChevronRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ── CARTE ──────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>{cp.location.label}</SectionLabel>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{cp.location.title}</h2>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm" style={{ height:380 }}>
            <iframe
              title="Spirit Engineering"
              width="100%" height="100%" style={{ border:0, display:'block' }}
              loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.84!2d-7.6326!3d33.5897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d282b28f2aa9%3A0x9b9e2c0d25f2ef2!2s357%20Bd%20Mohammed%20V%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1700000000000"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
