import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest) {
  const { secret, path } = await req.json() as { secret: string; path?: string };

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret.' }, { status: 401 });
  }

  const target = path ?? '/formations';
  revalidatePath(target);
  return NextResponse.json({ revalidated: true, path: target });
}
