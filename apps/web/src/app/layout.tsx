import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { TopHeader } from "@/components/top-header";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "MiddleOrbit Overseas Manpower",
  description:
    "Government licensed manpower agency from Nepal delivering skilled teams, documentation, and deployment transparency."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-cloud font-body text-charcoal antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(30,214,193,.12),transparent_55%)]">
          <TopHeader />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
        <a
          href="https://wa.me/9779800000000"
          className="fixed bottom-6 right-6 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-glow"
        >
          WhatsApp Inquiry
        </a>
      </body>
    </html>
  );
}

