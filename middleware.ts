import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const role = req.cookies.get("role")?.value;

  const { pathname } = req.nextUrl;

  // 🚫 If not logged in, block dashboards
  if (!token) {
    if (pathname.startsWith("/oem/dashboard") || pathname.startsWith("/dms/dashboard")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }

  // ✅ Role-based protection
  if (pathname.startsWith("/oem") && role !== "OEM") {
    return NextResponse.redirect(new URL("/dms", req.url));
  }

  if (pathname.startsWith("/dms") && role !== "DMS") {
    return NextResponse.redirect(new URL("/oem", req.url));
  }

  return NextResponse.next();
}

// Apply to dashboard paths only
export const config = {
  matcher: ["/oem/:path*", "/dms/:path*"],
};
