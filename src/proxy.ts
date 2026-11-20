import { type NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const match = /^\/(en|ru)(?=\/|$)/.exec(pathname);
  const explicitLocale = match?.[1];
  const pagePath = match ? pathname.slice(match[0].length) || "/" : pathname;
  const preference = request.cookies.get("portfolio-language")?.value;
  const locale = explicitLocale ?? (preference === "ru" ? "ru" : "en");
  const hasRussianTranslation =
    pagePath === "/" ||
    pagePath === "/work" ||
    pagePath === "/work/cpa-platform" ||
    pagePath === "/work/reliable-kanban" ||
    pagePath === "/work/frontend-engineering-wiki" ||
    pagePath === "/work/polaris" ||
    pagePath === "/work/wikimasters";

  if (!explicitLocale && locale === "ru" && hasRussianTranslation) {
    const destination = request.nextUrl.clone();
    destination.pathname = pagePath === "/" ? "/ru" : `/ru${pagePath}`;
    const response = NextResponse.redirect(destination);
    response.headers.set("Cache-Control", "private, no-store");
    return response;
  }

  const headers = new Headers(request.headers);
  headers.set(
    "x-portfolio-locale",
    explicitLocale === "ru" && hasRussianTranslation ? "ru" : "en",
  );
  headers.set("x-portfolio-preference", locale);

  const destination = request.nextUrl.clone();
  destination.pathname = pagePath;
  const response =
    explicitLocale && pagePath !== "/"
      ? NextResponse.rewrite(destination, { request: { headers } })
      : NextResponse.next({ request: { headers } });

  if (explicitLocale && request.headers.get("sec-fetch-mode") === "navigate") {
    response.cookies.set("portfolio-language", locale, {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/|.*\\.).*)"],
};
