import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { MotionEffects } from "@/components/motion-effects";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-ten-wine-92.vercel.app"),
  title: "Dmitrii Lobanov — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer designing high-performance platforms, scalable frontend architecture, and complex product systems.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Dmitrii Lobanov — Senior Frontend Engineer",
    description:
      "Frontend systems, architecture, performance, and production engineering.",
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
