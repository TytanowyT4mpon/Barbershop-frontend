import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import SvgSprite from "./components/SvgSprite";
import { Toaster } from 'sonner'

const geistBarlow = Barlow({
  variable: "--font-geist-barlow",
  subsets:  ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Best Barbershop | Premium Men's Grooming in Lefroy, Ontario",
  description:
    "Experience top-tier haircuts, beard trims, and grooming services at Best Barbershop in Lefroy, Ontario. Open 7 days a week. Book your appointment today.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Best Barbershop",
    title: "Best Barbershop | Premium Men's Grooming in Lefroy, Ontario",
    description:
      "Expert haircuts, beard grooming, and scalp treatments for men and kids. Located at 3696 Lynden Road, Lefroy, Ontario. Walk-ins welcome — Mon–Sat 9AM–8PM, Sun 9AM–6PM.",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Best Barbershop — Premium Men's Grooming in Lefroy, Ontario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Barbershop | Premium Men's Grooming in Lefroy, Ontario",
    description:
      "Expert haircuts, beard grooming, and scalp treatments for men and kids. Located in Lefroy, Ontario. Mon–Sat 9AM–8PM, Sun 9AM–6PM.",
    images: ["/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistBarlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SvgSprite />
        <Toaster richColors position="top-right" />
        {children}
      </body>
    </html>
  );
}
