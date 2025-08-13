import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Allow public routes
  if (path.startsWith('/_next') || path.startsWith('/api') || path === '/login' || path === '/forgot-password') {
    return NextResponse.next();
  }

  // Client-side handles auth (localStorage). Middleware left open for now.
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}
