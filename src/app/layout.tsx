import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { MotionEffects } from "@/components/motion-effects";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-ten-wine-92.vercel.app"),
  title: "Dmitrii Lobanov — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 6+ years building React, TypeScript, and Next.js products for fintech and SaaS. Performance, reliability, and ownership through production.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Dmitrii Lobanov — Senior Frontend Engineer",
    description:
      "React, TypeScript, and Next.js product engineering with measured improvements to performance, reliability, and delivery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <MotionEffects />
        {children}
      </body>
    </html>
  );
}
