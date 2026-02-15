"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

type NavbarProps = {
  onContactClick: () => void;
};

export default function Navbar({ onContactClick }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // lock body scroll when open
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-black/10">
       <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-black hover:text-teal-600 transition"
        >
          {t.navHome}
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-black">
          <li>
            <a
              href="#about"
              className="hover:text-teal-600 transition"
            >
              {t.navAbout}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-teal-600 transition"
            >
              {t.navExpertise}
            </a>
          </li>
          <li>
            <button
              onClick={onContactClick}
              className="hover:text-teal-600 transition cursor-pointer bg-transparent border-none"
            >
              {t.navContact}
            </button>
          </li>
          <li>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-md bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 transition"
              aria-label={`Switch to ${language === "EN" ? "Indonesian" : "English"}`}
            >
              {language === "EN" ? "ID" : "EN"}
            </button>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-black hover:text-teal-600 transition"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-200 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setOpen(false)}
          aria-hidden={!open}
        />

        {/* Right-side drawer (full height) */}
        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-hidden={!open}
          className={`fixed top-0 right-0 h-screen z-50 w-72 bg-white shadow-lg transform transition-transform duration-200 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-4 flex items-center justify-between border-b border-black/10">
            <span className="text-lg font-semibold tracking-tight">{t.navMenu}</span>
            <button
              onClick={() => setOpen(false)}
              className="text-black hover:text-teal-600 transition"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
           

          <nav className="p-4">
            <ul className="flex flex-col gap-2 text-sm font-medium text-black">
              <li>
                <a href="#about" onClick={() => setOpen(false)} className="block px-2 py-2 hover:text-teal-600 transition">
                  {t.navAbout}
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setOpen(false)} className="block px-2 py-2 hover:text-teal-600 transition">
                  {t.navExpertise}
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    setOpen(false);
                    onContactClick();
                  }}
                  className="block w-full text-left px-2 py-2 hover:text-teal-600 transition bg-transparent border-none"
                >
                  {t.navContact}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    toggleLanguage();
                  }}
                  className="block w-full text-left px-2 py-2 rounded-md bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 transition mt-4"
                >
                  {language === "EN" ? "🇮🇩 ID" : "🇬🇧 EN"}
                </button>
              </li>
            </ul>
          </nav>
        </aside>

      </nav>
    </header>
  );
}
