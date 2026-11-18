"use client";
// Client component with original mobile-stacked hero layout (< md) and sticky desktop scroll-zoom/fade hero (md:+), both bilingual.

import { useEffect, useRef } from "react";
import { Calendar, ChevronDown, MessageSquareText } from "lucide-react";
import { HOME_HERO } from "@/lib/home";
import { useLang } from "@/lib/i18n";
import { waLink, waText } from "@/lib/whatsapp";

export function HomeHero() {
  const { lang } = useLang();
  const isEn = lang === "en";
  const sectionRef = useRef<HTMLElement>(null);
  const desktopBgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    let rafId = 0;

    const update = () => {
      rafId = 0;
      const section = sectionRef.current;
      if (!section) return;

      if (window.innerWidth < 768) {
        if (desktopBgRef.current) {
          desktopBgRef.current.style.opacity = "";
          desktopBgRef.current.style.transform = "";
        }
        if (contentRef.current) {
          contentRef.current.style.opacity = "";
          contentRef.current.style.transform = "";
        }
        if (cueRef.current) {
          cueRef.current.style.opacity = "";
        }
        section.style.pointerEvents = "auto";
        return;
      }

      const heroHeight = section.offsetHeight || window.innerHeight;
      const raw = Math.min(Math.max(window.scrollY / heroHeight, 0), 1);
      const fadeEase = Math.pow(raw, 1.5);

      const photoOpacity = Math.max(0.2, 1 - fadeEase * 0.8);
      const photoScale = 1 + raw * 0.12;
      const photoY = raw * 18;
      const photoTransform = `translate3d(0, ${photoY.toFixed(2)}px, 0) scale(${photoScale.toFixed(4)})`;

      if (desktopBgRef.current) {
        desktopBgRef.current.style.opacity = photoOpacity.toFixed(4);
        desktopBgRef.current.style.transform = photoTransform;
      }

      if (contentRef.current) {
        const textOpacity = Math.max(0.1, 1 - fadeEase * 0.9);
        const textScale = (1 - raw * 0.08).toFixed(4);
        const textY = (-raw * 36).toFixed(2);
        contentRef.current.style.opacity = textOpacity.toFixed(4);
        contentRef.current.style.transform = `translate3d(0, ${textY}px, 0) scale(${textScale})`;
      }

      if (cueRef.current) {
        const cueOpacity = Math.max(0, 1 - raw * 4);
        cueRef.current.style.opacity = cueOpacity.toFixed(4);
      }

      section.style.pointerEvents = raw > 0.88 ? "none" : "auto";
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative md:sticky top-0 md:top-[68px] z-10 flex w-full flex-col justify-between overflow-hidden bg-white md:h-[calc(100svh-4.25rem)] md:min-h-[500px] md:max-h-[760px]"
    >
      {/* Desktop Background Image */}
      <div
        ref={desktopBgRef}
        style={{ transformOrigin: "76% 48%" }}
        className="pointer-events-none absolute inset-0 hidden select-none will-change-transform md:block"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HOME_HERO.image}
          alt="Teknisi Jaya AC memeriksa dan merawat unit AC split indoor"
          fetchPriority="high"
          className="h-full w-full object-cover object-right"
        />
        <div className="absolute inset-y-0 left-0 w-[46%] bg-gradient-to-r from-white via-white/85 to-transparent" />
      </div>

      {/* Original Mobile Image above text */}
      <div className="relative h-[230px] sm:h-[300px] w-full overflow-hidden bg-white md:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HOME_HERO.mobileImage}
          alt="Teknisi Jaya AC memeriksa dan merawat unit AC split indoor"
          fetchPriority="high"
          className="h-full w-full object-cover object-[76%_35%]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        style={{ transformOrigin: "left center" }}
        className="relative z-20 mx-auto flex w-full max-w-[1200px] flex-1 items-center px-4 pb-6 pt-3 will-change-transform sm:px-6 md:h-full md:py-8"
      >
        <div className="w-full max-w-[580px] lg:max-w-[620px] md:pb-4">
          <h1 className="text-[28px] font-extrabold leading-[1.14] tracking-tight text-[#0F172A] sm:text-[34px] md:text-[42px] lg:text-[46px]">
            {isEn ? "Cool Air Restored, Hassle-Free." : HOME_HERO.h1}
          </h1>
          <p className="mt-3 sm:mt-4 max-w-[540px] text-[14.5px] leading-relaxed text-[#475569] sm:text-[16px] lg:text-[17px]">
            {isEn
              ? "Home and office AC cleaning, repair, and freon refill services across Batam. On-time technicians with workmanship warranty."
              : HOME_HERO.sub}
          </p>

          <div className="mt-5 sm:mt-6 flex flex-col gap-2.5 sm:flex-row sm:gap-4 md:mt-7">
            <a
              href={waLink(waText.schedule(lang))}
              target="_blank"
              rel="noopener noreferrer"
              data-track="click_whatsapp"
              data-track-location="hero"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-lg bg-[#004B87] px-6 text-[15px] font-semibold text-white shadow-xs transition-colors duration-150 hover:bg-[#032F66]"
            >
              <Calendar className="size-[19px]" aria-hidden="true" />
              <span>{isEn ? "Book Schedule" : HOME_HERO.ctaSchedule}</span>
            </a>

            <a
              href={waLink(waText.general(lang))}
              target="_blank"
              rel="noopener noreferrer"
              data-track="click_whatsapp"
              data-track-location="hero"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-[#15803D] bg-white px-6 text-[15px] font-semibold text-[#15803D] shadow-xs transition-colors duration-150 hover:bg-[#F0FDF4]"
            >
              <MessageSquareText className="size-[19px]" aria-hidden="true" />
              <span>{isEn ? "Chat WhatsApp" : HOME_HERO.ctaWa}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Cue (desktop only) */}
      <div
        ref={cueRef}
        className="pointer-events-auto absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 md:block"
      >
        <a
          href="#keunggulan"
          aria-label={isEn ? "Scroll down to view services" : "Gulir ke bawah melihat layanan"}
          className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1.5 text-xs font-medium text-[#475569] shadow-xs transition-colors hover:border-[#CBD5E1] hover:text-[#004B87]"
        >
          <ChevronDown className="size-3.5" aria-hidden="true" />
          <span>{isEn ? "Scroll to view services" : "Scroll untuk lihat layanan"}</span>
        </a>
      </div>
    </section>
  );
}

export default HomeHero;
