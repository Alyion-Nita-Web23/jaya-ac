"use client";
// Client component for active navigation state, mobile navbar language switcher, mobile menu drawer, and scroll shadow.

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, MessageSquareText, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { waLink, waText } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "/", id: "Beranda", en: "Home" },
  { href: "/layanan", id: "Layanan", en: "Services" },
  { href: "/harga", id: "Harga", en: "Pricing" },
  { href: "/kontak", id: "Kontak", en: "Contact" },
] as const;

function LangToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label={lang === "en" ? "Select language" : "Pilih bahasa"}
      className="inline-flex items-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-0.5"
    >
      {(["id", "en"] as const).map((code) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            className={`rounded-md font-bold uppercase transition-colors ${
              compact ? "h-7 px-2 text-[11px]" : "h-7 px-2.5 text-[11.5px]"
            } ${
              isActive
                ? "bg-white text-[#0070C0] shadow-xs"
                : "text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}

export function Header() {
  const pathname = usePathname() || "/";
  const { lang } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ctaLabel = lang === "en" ? "Book via WA" : "Booking via WA";

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-white transition-shadow duration-150 ${
        isScrolled ? "shadow-xs" : ""
      }`}
    >
      <div className="mx-auto flex h-[64px] md:h-[68px] w-full max-w-[1200px] items-center justify-between gap-2 px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <Link
            href="/"
            prefetch={true}
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center"
          >
            <Image
              src="/brand/logo-jaya-ac.png"
              alt="Jaya AC Batam"
              width={132}
              height={36}
              priority
              unoptimized
              style={{ width: "auto" }}
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav
          aria-label={lang === "en" ? "Main Navigation" : "Navigasi Utama"}
          className="hidden md:flex items-center gap-7"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={`text-[14.5px] transition-colors ${
                  isActive
                    ? "font-semibold text-[#0070C0]"
                    : "font-medium text-[#334155] hover:text-[#0070C0]"
                }`}
              >
                {lang === "en" ? link.en : link.id}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Actions: Language Toggle + WA CTA */}
        <div className="hidden md:flex items-center justify-end gap-2.5 shrink-0">
          <LangToggle />

          <a
            href={waLink(waText.general(lang))}
            target="_blank"
            rel="noopener noreferrer"
            data-track="click_whatsapp"
            data-track-location="header"
            className="inline-flex h-9 px-4 items-center justify-center gap-2 rounded-lg bg-[#0070C0] text-[13px] font-semibold text-white shadow-xs transition-colors hover:bg-[#004B87]"
          >
            <MessageSquareText className="size-4" aria-hidden="true" />
            <span>{ctaLabel}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle (clean single button on mobile top bar) */}
        <div className="flex md:hidden items-center shrink-0">
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={
              mobileOpen
                ? lang === "en"
                  ? "Close menu"
                  : "Tutup menu"
                : lang === "en"
                  ? "Open menu"
                  : "Buka menu"
            }
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] transition-colors hover:bg-slate-50"
          >
            {mobileOpen ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label={lang === "en" ? "Mobile Navigation" : "Navigasi Mobile"}
          className="md:hidden border-t border-[#E2E8F0] bg-white px-4 py-3 shadow-md"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    onClick={() => {
                      if (isActive) setMobileOpen(false);
                    }}
                    className={`flex h-11 items-center rounded-lg px-3 text-[14.5px] transition-colors ${
                      isActive
                        ? "bg-[#EFF6FF] font-semibold text-[#0070C0]"
                        : "font-medium text-[#334155] hover:bg-slate-50"
                    }`}
                  >
                    {lang === "en" ? link.en : link.id}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-2.5 pt-2.5 border-t border-[#E2E8F0] flex items-center justify-between px-3 py-1.5">
            <span className="text-[13.5px] font-medium text-[#475569]">
              {lang === "en" ? "Language" : "Bahasa"}
            </span>
            <LangToggle compact />
          </div>

          <div className="mt-2.5 pt-2.5 border-t border-[#E2E8F0]">
            <a
              href={waLink(waText.general(lang))}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              data-track="click_whatsapp"
              data-track-location="header"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#15803D] text-[14px] font-bold text-white shadow-xs transition-colors hover:bg-[#166534]"
            >
              <MessageSquareText className="size-4" aria-hidden="true" />
              <span>{ctaLabel}</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
