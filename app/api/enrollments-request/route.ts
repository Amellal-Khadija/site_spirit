import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { formationTitle, fullName, email, phone } = await req.json() as {
    formationTitle: string;
    fullName: string;
    email: string;
    phone: string;
  };

  if (!fullName || !email || !phone) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
  }

  /* ── Notification WhatsApp admin ── */
  const waText = encodeURIComponent(
    `📋 Nouvelle demande d'inscription\n\n` +
    `Formation : ${formationTitle}\n` +
    `Nom : ${fullName}\n` +
    `Email : ${email}\n` +
    `Téléphone : ${phone}`,
  );
  const waUrl = `https://wa.me/212607721274?text=${waText}`;

  return NextResponse.json({ success: true, waUrl });
}
