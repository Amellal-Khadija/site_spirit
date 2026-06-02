// Proxy disabled — no URL-based locale routing.
// Language switching is handled client-side via LangContext.
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(_request: NextRequest) {
  return NextResponse.next();
}

export const config = { matcher: [] };
