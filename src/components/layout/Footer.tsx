"use client";
// Client footer component synced with active Indonesian/English language context and mobile bottom bar spacing.

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquareText } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { waLink, waText } from "@/lib/whatsapp";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <footer className="w-full bg-[#F2F3FF] border-t border-[#E2E8F0] pt-10 pb-24 md:pb-6 px-4 sm:px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Main Footer Grid: Brand top + 2 side-by-side info columns on phones, 3 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-6 sm:gap-8 pb-8 border-b border-[#E2E8F0]">
          {/* Col 1: Brand & Kontak */}
          <div className="col-span-2 md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/brand/logo-jaya-ac.png"
                alt="Jaya AC Batam"
                width={120}
                height={32}
                unoptimized
                style={{ width: "auto" }}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p className="text-[13.5px] leading-relaxed text-[#475569] max-w-[360px]">
              {isEn
                ? "Trusted residential, shophouse, and office AC servicing & maintenance in Batam."
                : site.tagline}
            </p>

            <div className="text-[13.5px] text-[#334155]">
              <span>WhatsApp: </span>
              <a
                href={waLink(waText.general(lang))}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_whatsapp"
                data-track-location="footer"
                className="font-semibold text-[#0070C0] hover:underline"
              >
                {site.phoneDisplay}
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={waLink(waText.general(lang))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Jaya AC"
                className="flex size-8 items-center justify-center rounded-full bg-[#E8ECF8] text-[#334155] transition-colors hover:bg-[#D5DFF5] hover:text-[#0070C0]"
              >
                <MessageSquareText className="size-4" />
              </a>

              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Jaya AC"
                className="flex size-8 items-center justify-center rounded-full bg-[#E8ECF8] text-[#334155] transition-colors hover:bg-[#D5DFF5] hover:text-[#0070C0]"
              >
                <InstagramIcon className="size-4" />
              </a>

              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Jaya AC"
                className="flex size-8 items-center justify-center rounded-full bg-[#E8ECF8] text-[#334155] transition-colors hover:bg-[#D5DFF5] hover:text-[#0070C0]"
              >
                <FacebookIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigasi */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
              {isEn ? "NAVIGATION" : "NAVIGASI"}
            </h4>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link
                  href="/"
                  className="text-[#334155] hover:text-[#0070C0] transition-colors"
                >
                  {isEn ? "Home" : "Beranda"}
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="text-[#334155] hover:text-[#0070C0] transition-colors"
                >
                  {isEn ? "Services" : "Layanan"}
                </Link>
              </li>
              <li>
                <Link
                  href="/harga"
                  className="text-[#334155] hover:text-[#0070C0] transition-colors"
                >
                  {isEn ? "Pricing" : "Harga"}
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-[#334155] hover:text-[#0070C0] transition-colors"
                >
                  {isEn ? "Contact" : "Kontak"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Workshop & Jam Layanan */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
              {isEn ? "WORKSHOP & HOURS" : "WORKSHOP & JAM LAYANAN"}
            </h4>
            <div className="space-y-2 text-[13.5px] text-[#475569] leading-relaxed">
              <p>
                {site.address.street}, {site.address.locality}
              </p>
              <p>
                {isEn ? "Mon – Sun: 08.00 – 20.00 WIB" : site.hours.label}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-[#64748B]">
          <p>
            © {currentYear} {site.brandLong}.{" "}
            {isEn ? "All Rights Reserved." : "Hak Cipta Dilindungi."}
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/syarat-ketentuan"
              className="hover:text-[#0070C0] transition-colors"
            >
              {isEn ? "Terms & Conditions" : "Syarat & Ketentuan"}
            </Link>
            <Link
              href="/kebijakan-privasi"
              className="hover:text-[#0070C0] transition-colors"
            >
              {isEn ? "Privacy Policy" : "Kebijakan Privasi"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
