import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

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
          <div className="border-b border-white/40 bg-white/95 text-xs text-slate-700">
            <div className="page-shell flex flex-col gap-2 py-2 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-semibold text-midnight">Address:</span>
                <span>Samakhusi-3, Kathmandu, Nepal</span>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-semibold text-midnight">Call us:</span>
                <a href="tel:+97714950000" className="text-midnight underline">
                  +977-1-4950000
                </a>
                <span className="font-semibold text-midnight">Email:</span>
                <a href="mailto:info@middleorbit.com" className="text-midnight underline">
                  info@middleorbit.com
                </a>
              </div>
            </div>
          </div>
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

