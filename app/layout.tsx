import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Marcello Orla — Samba carioca contemporâneo",
    template: "%s — Marcello Orla",
  },
  description:
    "Conheça Marcello Orla, sua música e o universo do samba carioca contemporâneo.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Marcello Orla",
    title: "Marcello Orla — Samba carioca contemporâneo",
    description:
      "Conheça Marcello Orla, sua música e o universo do samba carioca contemporâneo.",
  },
  twitter: {
    card: "summary",
    title: "Marcello Orla — Samba carioca contemporâneo",
    description:
      "Conheça Marcello Orla, sua música e o universo do samba carioca contemporâneo.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
