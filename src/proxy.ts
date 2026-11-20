import { type NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set(
    "x-portfolio-locale",
    request.nextUrl.pathname === "/ru" ? "ru" : "en",
  );
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!_next/|.*\\.).*)"],
};
