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
  title: "Best Barbershop",
  description: "Barbershop",
  openGraph: {}
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
