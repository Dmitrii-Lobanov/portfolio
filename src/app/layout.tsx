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
    "Senior Frontend Engineer focused on performance, architecture, and system design. Ex-Tinkoff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-bg-base text-text-primary antialiased">
        <Header />
        <div className="max-w-[1100px] mx-auto px-6 py-24 md:py-32">
          {children}
        </div>
      </body>
    </html>
  );
}
