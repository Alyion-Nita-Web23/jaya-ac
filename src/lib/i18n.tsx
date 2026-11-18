"use client";
// Client context provider for dynamic Indonesian/English language switching across the static exported site.

import React, { createContext, useContext, useEffect, useState } from "react";

export type Lang = "id" | "en";

interface LanguageContextValue {
  lang: Lang;
  setLang: (next: Lang) => void;
}

const STORAGE_KEY = "jaya_ac_lang";

const LanguageContext = createContext<LanguageContextValue>({
  lang: "id",
  setLang: () => {},
});

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "id" || saved === "en") {
        setLangState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // Ignore storage access restrictions
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage access restrictions
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  return useContext(LanguageContext);
}
