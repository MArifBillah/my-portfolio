"use client";

import Link from "next/link";

import { useState } from "react";
import ContactModal from "./components/ContactModal";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

export default function Footer() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const { language } = useLanguage();
    const t = translations[language];
  
  return (
    <footer className="w-full bg-white border-t border-black/10 mt-32">

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">
          {t.footerCTATitle}
        </h2>

        <p className="mt-4 text-black/70 max-w-xl mx-auto">
          {t.footerCTADesc}
        </p>

        <div className="mt-8">
          <button

           onClick={() => setIsContactModalOpen(true)}
            
            className="inline-flex items-center justify-center
                       rounded-md bg-teal-600 px-8 py-4
                       text-sm font-semibold text-white
                       hover:bg-teal-700 transition"
          >
            {t.footerCTABtn}
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black/10" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between text-sm text-black/60">

        <p>
          {t.footerText}
        </p>

        <div className="flex gap-6 mt-4 sm:mt-0">
          <Link href="/terms" className="hover:text-teal-600 transition">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-teal-600 transition">
            Privacy Policy
          </Link>
        </div>

      </div>

      <ContactModal
              open={isContactModalOpen}
              onClose={() => setIsContactModalOpen(false)}
            />
            
    </footer>
  );
}
