import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luke Lussier - Medical Physics Innovation",
  description: "Senior Medical Physics Resident developing innovative educational and clinical tools for the medical physics community.",
  keywords: "medical physics, education, clinical tools, residency, AAPM, Rogue Resident, QuickWrite",
  authors: [{ name: "Luke Lussier" }],
  openGraph: {
    title: "Luke Lussier - Medical Physics Innovation",
    description: "Senior Medical Physics Resident developing innovative educational and clinical tools for the medical physics community.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Lussier - Medical Physics Innovation",
    description: "Senior Medical Physics Resident developing innovative educational and clinical tools for the medical physics community.",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
