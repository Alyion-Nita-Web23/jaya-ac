import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";

export const viewport: Viewport = {
  themeColor: "#004B87",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Jaya AC — Solusi Servis & Perawatan AC di Batam",
  description:
    "Layanan cuci, perbaikan, dan isi freon AC rumah atau kantor di Batam. Teknisi berpengalaman, tarif transparan, dan garansi servis 30–60 hari.",
  icons: {
    icon: "/brand/logo-mark.png",
    apple: "/brand/logo-mark.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen overflow-x-clip bg-white text-ink antialiased flex flex-col">
        <LanguageProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <MobileStickyBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
