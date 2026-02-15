"use client";

import React, { useEffect, useRef } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // lock body scroll
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      closeBtnRef.current?.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="relative z-10 w-full max-w-md mx-4 bg-white rounded-lg shadow-lg overflow-auto max-h-[90vh]"
      >
        <header className="flex items-start justify-between p-6 border-b border-black/10">
          <h2 id="contact-title" className="text-2xl font-semibold text-teal-600">
            Get in Touch
          </h2>

          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close modal"
            className="text-black hover:text-black transition"
          >
            ✕
          </button>
        </header>

        <section className="p-6 space-y-6">
          {/* Email */}
          <a
            href="mailto:arifbillahbill@gmail.com"
            className="flex items-center gap-4 p-4 rounded-lg border border-black/10 hover:border-teal-600 hover:bg-teal-50 transition group"
          >
            <Mail className="w-6 h-6 text-teal-600 flex-shrink-0" />
            <div>
              <p className="text-sm text-black/60 group-hover:text-black/70">Email</p>
              <p className="text-lg font-semibold text-black group-hover:text-teal-600 transition">
                arifbillahbill@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          {/* <a
            href="tel:+62123456789"
            className="flex items-center gap-4 p-4 rounded-lg border border-black/10 hover:border-teal-600 hover:bg-teal-50 transition group"
          >
            <Phone className="w-6 h-6 text-teal-600 flex-shrink-0" />
            <div>
              <p className="text-sm text-black/60 group-hover:text-black/70">Phone 1 (WA)</p>
              <p className="text-lg font-semibold text-black group-hover:text-teal-600 transition">
                +62 831-3130-8722
              </p>
            </div>
          </a> */}

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-arif-billah-b08250237/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg border border-black/10 hover:border-teal-600 hover:bg-teal-50 transition group"
          >
            <Linkedin className="w-6 h-6 text-teal-600 flex-shrink-0" />
            <div>
              <p className="text-sm text-black/60 group-hover:text-black/70">LinkedIn</p>
              <p className="text-lg font-semibold text-black group-hover:text-teal-600 transition">
                Muhammad Arif Billah
              </p>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
}
