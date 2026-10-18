import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://marcello-orla-web.marcellodosamba021.workers.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
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
    url: "/",
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
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
