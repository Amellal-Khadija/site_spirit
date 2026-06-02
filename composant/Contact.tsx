'use client';

import { useState } from 'react';
import {
  MapPin, Mail, Phone, Globe, Send,
  CheckCircle2, Clock, MessageSquare, User, Briefcase,
} from 'lucide-react';
import { useT } from '@/lib/useT';

const WHATSAPP_NUMBER = '212607721274';
const EMAIL_TO = 'info@spirit.engineering';

interface Form { name: string; email: string; phone: string; company: string; subject: string; message: string; }
const empty: Form = { name: '', email: '', phone: '', company: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<Form>(empty);
  const [submitted, setSubmitted] = useState(false);
  const t = useT();
  const cp = t.contactPage;

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const waMsg =
      `*✉ Nouveau message — Spirit Engineering Academy*\n\n` +
      `👤 *Nom :* ${form.name}\n` +
      `📧 *Email :* ${form.email}\n` +
      `📞 *Téléphone :* ${form.phone || '—'}\n` +
      `🏢 *Entreprise :* ${form.company || '—'}\n` +
      `📌 *Sujet :* ${form.subject}\n\n` +
      `💬 *Message :*\n${form.message}`;
    const emailSubject = `[Spirit Academy] ${form.subject} — ${form.name}`;
    const emailBody = `Nom : ${form.name}\nEmail : ${form.email}\nTéléphone : ${form.phone || '—'}\nEntreprise : ${form.company || '—'}\nSujet : ${form.subject}\n\nMessage :\n${form.message}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`, '_blank', 'noopener,noreferrer');
    setTimeout(() => {
      window.open(`mailto:${EMAIL_TO}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`, '_blank');
    }, 400);
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        .sf  { font-family: var(--font-inter, ui-sans-serif, system-ui, sans-serif); }
        .slabel  { font-size:11px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:#88C440; margin-bottom:12px; display:block; }
        .sdivider{ width:48px; height:3px; background:linear-gradient(90deg,#88C440,transparent); border-radius:2px; margin-top:16px; }
        .ssep    { height:1px; background:linear-gradient(90deg,transparent,#e8eaed 20%,#e8eaed 80%,transparent); margin:0; }
        label.lbl{ font-size:12px; font-weight:600; letter-spacing:.05em; color:#374151; display:block; margin-bottom:6px; }
        .inp  { width:100%; background:white; border:1.5px solid #e5e7eb; border-radius:12px; padding:11px 16px; font-size:14px; color:#111827; outline:none; transition:border-color .2s,box-shadow .2s; }
        .inp::placeholder { color:#9ca3af; }
        .inp:focus{ border-color:#88C440; box-shadow:0 0 0 3px rgba(136,196,64,.12); }
        .sel  { width:100%; background:white; border:1.5px solid #e5e7eb; border-radius:12px; padding:11px 16px; font-size:14px; color:#111827; outline:none; appearance:none; cursor:pointer;
                background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
                background-repeat:no-repeat; background-position:right 14px center; transition:border-color .2s; }
        .sel:focus{ border-color:#88C440; box-shadow:0 0 0 3px rgba(136,196,64,.12); }
        .txta { width:100%; background:white; border:1.5px solid #e5e7eb; border-radius:12px; padding:11px 16px; font-size:14px; color:#111827; outline:none; resize:vertical; min-height:130px; transition:border-color .2s; }
        .txta::placeholder{ color:#9ca3af; }
        .txta:focus{ border-color:#88C440; box-shadow:0 0 0 3px rgba(136,196,64,.12); }
        .sbtn { display:inline-flex; align-items:center; gap:8px; background:#88C440; color:white; font-size:14px; font-weight:700; padding:13px 28px; border-radius:12px; border:none; cursor:pointer; transition:all .2s; width:100%; justify-content:center; }
        .sbtn:hover{ background:#77b033; transform:translateY(-1px); box-shadow:0 6px 20px rgba(136,196,64,.3); }
        .cinfo{ display:flex; align-items:flex-start; gap:14px; padding:18px 20px; border-radius:16px; border:1px solid #e8eaed; background:white; transition:all .2s; text-decoration:none; color:inherit; }
        .cinfo:hover{ border-color:#88C440; box-shadow:0 4px 16px rgba(136,196,64,.1); transform:translateY(-1px); }
        .ibox { display:flex; align-items:center; justify-content:center; width:44px; height:44px; border-radius:12px; background:rgba(136,196,64,.10); flex-shrink:0; }
        .hrow { display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #f3f4f6; font-size:14px; }
        .hrow:last-child{ border-bottom:none; }
        .pcard{ border-radius:20px; border:1px solid #e8eaed; background:white; padding:24px; transition:all .2s; }
        .pcard:hover{ box-shadow:0 6px 24px rgba(0,0,0,.07); transform:translateY(-2px); }
      `}</style>

      <div className="min-h-screen bg-white text-gray-900 sf">

        {/* ── HERO ── */}
        <section className="border-b border-gray-100 relative overflow-hidden"
          style={{ background: 'linear-gradient(150deg, #f5fef0 0%, #ffffff 55%, #f8faff 100%)' }}>
          <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(136,196,64,0.15) 0%, transparent 65%)' }} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-20">
            <span className="slabel">{cp.label}</span>
            <h1 className="mt-6 font-extrabold tracking-tight text-gray-900 leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}>
              {cp.h1[0]}<br />
              <span style={{ color: '#88C440' }}>{cp.h1[1]}</span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-500 max-w-xl">{cp.subtitle}</p>
            <div className="sdivider" />
          </div>
        </section>

        {/* ── MAIN ── */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] items-start">

            {/* LEFT */}
            <div className="space-y-4">
              {([
                { Icon: MapPin, label: cp.addressLabel, value: cp.addressValue,  href: 'https://maps.google.com/?q=357+Boulevard+Mohammed+Casablanca' },
                { Icon: Mail,   label: cp.emailLabel,   value: 'info@spirit.engineering', href: 'mailto:info@spirit.engineering' },
                { Icon: Phone,  label: cp.phoneLabel,   value: '+212 6 07 72 12 74',       href: 'tel:+212607721274' },
                { Icon: Globe,  label: cp.siteLabel,    value: 'www.spirit.engineering',   href: 'https://www.spirit.engineering' },
              ] as const).map(({ Icon, label, value, href }) => (
                <a key={label} href={href} className="cinfo"
                  target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <div className="ibox"><Icon className="h-5 w-5" style={{ color: '#88C440' }} /></div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af' }}>{label}</p>
                    <p className="mt-0.5 text-sm font-medium text-gray-800 whitespace-pre-line">{value}</p>
                  </div>
                </a>
              ))}

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4" style={{ color: '#88C440' }} />
                  <span className="sf text-sm font-semibold text-gray-800">{cp.hours.title}</span>
                </div>
                {cp.hours.days.map(r => (
                  <div key={r.day} className="hrow">
                    <span className="text-gray-600">{r.day}</span>
                    <span className="sf font-semibold" style={{ fontSize: 13, color: (r.h === 'Fermé' || r.h === 'Closed') ? '#f87171' : '#111827' }}>{r.h}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="h-4 w-4" style={{ color: '#88C440' }} />
                  <span className="sf text-sm font-semibold text-gray-800">{cp.responseTime.title}</span>
                </div>
                <p className="text-sm text-gray-500 leading-6" dangerouslySetInnerHTML={{
                  __html: cp.responseTime.text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-800">$1</strong>'),
                }} />
              </div>
            </div>

            {/* RIGHT — formulaire */}
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(136,196,64,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle2 className="h-9 w-9" style={{ color: '#88C440' }} />
                  </div>
                  <h3 className="sf text-2xl font-bold text-gray-900">{cp.form.successTitle}</h3>
                  <p className="text-gray-500 max-w-sm text-sm leading-relaxed whitespace-pre-line">{cp.form.successText}</p>
                  <div className="flex gap-3 flex-wrap justify-center mt-2">
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white"
                      style={{ background: '#25D366' }}>
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                      {cp.form.openWhatsApp}
                    </a>
                    <a href={`mailto:${EMAIL_TO}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                      <Mail className="h-4 w-4" /> {cp.form.openEmail}
                    </a>
                  </div>
                  <button onClick={() => { setForm(empty); setSubmitted(false); }}
                    className="sf text-sm font-semibold hover:underline mt-1" style={{ color: '#88C440' }}>
                    {cp.form.sendAnother}
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="sf text-2xl font-bold text-gray-900">{cp.form.title}</h2>
                  <p className="mt-1 text-sm text-gray-500" dangerouslySetInnerHTML={{
                    __html: cp.form.subtitle.replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-700">$1</strong>'),
                  }} />
                  <form onSubmit={submit} className="mt-7 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="ct-name" className="lbl">{cp.form.nameLabel}</label>
                        <input id="ct-name" name="name" value={form.name} onChange={handle} className="inp" placeholder={cp.form.namePlaceholder} required />
                      </div>
                      <div>
                        <label htmlFor="ct-email" className="lbl">{cp.form.emailLabel}</label>
                        <input id="ct-email" type="email" name="email" value={form.email} onChange={handle} className="inp" placeholder={cp.form.emailPlaceholder} required />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="ct-phone" className="lbl">{cp.form.phoneLabel}</label>
                        <input id="ct-phone" name="phone" value={form.phone} onChange={handle} className="inp" placeholder={cp.form.phonePlaceholder} />
                      </div>
                      <div>
                        <label htmlFor="ct-company" className="lbl">{cp.form.companyLabel}</label>
                        <input id="ct-company" name="company" value={form.company} onChange={handle} className="inp" placeholder={cp.form.companyPlaceholder} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="ct-subject" className="lbl">{cp.form.subjectLabel}</label>
                      <select id="ct-subject" name="subject" value={form.subject} onChange={handle} className="sel" required>
                        <option value="">{cp.form.subjectPlaceholder}</option>
                        {cp.form.subjects.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="ct-message" className="lbl">{cp.form.messageLabel}</label>
                      <textarea id="ct-message" name="message" value={form.message} onChange={handle} className="txta" placeholder={cp.form.messagePlaceholder} required />
                    </div>
                    <p className="text-xs text-gray-400 flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-shrink-0 fill-current" style={{ color: '#25D366' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                      <span dangerouslySetInnerHTML={{
                        __html: cp.form.sendInfo.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'),
                      }} />
                    </p>
                    <button type="submit" className="sbtn">
                      <Send className="h-4 w-4" /> {cp.form.sendButton}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        <div className="ssep" />

        {/* ── CONTACTS DIRECTS ── */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="slabel">{cp.directContacts.label}</span>
            <h2 className="sf text-2xl font-bold text-gray-900 mb-8">{cp.directContacts.title}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="pcard">
                <div className="flex items-center gap-4 mb-4">
                  <div className="ibox" style={{ width: 52, height: 52, borderRadius: 14 }}>
                    <User className="h-6 w-6" style={{ color: '#88C440' }} />
                  </div>
                  <div>
                    <h3 className="sf font-bold text-gray-900">{cp.zakaria.title}</h3>
                    <p className="text-sm font-medium" style={{ color: '#88C440' }}>{cp.zakaria.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-6 mb-5">{cp.zakaria.desc}</p>
                <div className="space-y-2">
                  {[
                    { href: 'tel:+212607721274',              text: '+212 6 07 72 12 74',       Icon: Phone },
                    { href: 'mailto:info@spirit.engineering',  text: 'info@spirit.engineering',  Icon: Mail },
                    { href: `skype:${cp.zakaria.skype}?chat`,  text: `Skype : ${cp.zakaria.skype}`, Icon: MessageSquare },
                  ].map(({ href, text, Icon }) => (
                    <a key={text} href={href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#88C440] transition-colors">
                      <Icon className="h-4 w-4" style={{ color: '#88C440' }} />{text}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pcard">
                <div className="flex items-center gap-4 mb-4">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: 14, background: 'rgba(59,130,246,0.10)', flexShrink: 0 }}>
                    <Briefcase className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="sf font-bold text-gray-900">{cp.commercial.title}</h3>
                    <p className="text-sm font-medium text-blue-500">{cp.commercial.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-6 mb-5">{cp.commercial.desc}</p>
                <div className="space-y-2">
                  {[
                    { href: 'tel:+212660705515',              text: '+212 6 60 70 55 15',      Icon: Phone },
                    { href: 'mailto:info@spirit.engineering',  text: 'info@spirit.engineering', Icon: Mail },
                    { href: `skype:${cp.commercial.skype}?chat`, text: `Skype : ${cp.commercial.skype}`, Icon: MessageSquare },
                  ].map(({ href, text, Icon }) => (
                    <a key={text} href={href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-500 transition-colors">
                      <Icon className="h-4 w-4 text-blue-500" />{text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ssep" />

        {/* ── CARTE ── */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="slabel">{cp.location.label}</span>
            <h2 className="sf text-2xl font-bold text-gray-900 mb-6">{cp.location.title}</h2>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: 360 }}>
              <iframe
                title="Spirit Engineering Academy"
                width="100%" height="100%" style={{ border: 0 }}
                loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.84!2d-7.6326!3d33.5897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d282b28f2aa9%3A0x9b9e2c0d25f2ef2!2s357%20Bd%20Mohammed%20V%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1700000000000"
              />
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
