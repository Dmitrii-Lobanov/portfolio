import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dmitrii Lobanov | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 6+ years of experience specializing in React, Next.js, and high-performance architecture. Ex-Tinkoff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
    >
      <body className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-zinc-300 dark:selection:bg-zinc-800 selection:text-zinc-900 dark:selection:text-zinc-50">
        {/* Background glow effects */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-zinc-50 dark:bg-zinc-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <Header />
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">{children}</div>
      </body>
    </html>
  );
}
