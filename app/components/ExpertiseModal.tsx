"use client";

import React, { useEffect, useRef } from "react";

type LinkItem = { label: string; url: string };

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  year?: string | number;
  // single legacy link
  link?: string;
  // multiple links with labels
  links?: LinkItem[];
  // optional subtitles / small tags shown under title
  subtitles?: string[];
  description?: string;
};

export default function ExpertiseModal({ open, onClose, title, year, link, links, subtitles, description }: Props) {
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
      // move focus to close button when opened
      closeBtnRef.current?.focus();
    }
  }, [open]);

  if (!open) return null;

  const allLinks: LinkItem[] = [];
  if (links && links.length) allLinks.push(...links);
  if (link) allLinks.push({ label: "Learn more", url: link });

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
        aria-labelledby="expertise-title"
        className="relative z-10 w-full max-w-2xl mx-4 bg-white rounded-lg shadow-lg overflow-auto max-h-[90vh]"
      >
        <header className="flex items-start justify-between p-4 border-b border-black/10">
          <div>
            <h2 id="expertise-title" className="text-lg font-semibold text-[#0d9488]">
              {title}
            </h2>
            {year && <p className="text-sm text-gray-600">{year}</p>}
            {subtitles && subtitles.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-2">
                {subtitles.map((s, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-700">
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="ml-4 flex-shrink-0">
            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close modal"
              className="text-black hover:text-black transition"
            >
              ✕
            </button>
          </div>
        </header>

        <section className="p-4 text-sm text-black space-y-4">
          {description ? (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          ) : (
            <p className="text-gray-600">No description provided.</p>
          )}

          {allLinks.length > 0 && (
            <div className="space-y-2">
              {allLinks.map((l, i) => (
                <p key={i}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                    {l.label}
                  </a>
                </p>
              ))}
            </div>
          )}
        </section>

        <footer className="p-4 border-t border-black/10 text-right">
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 transition text-teal-600"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  );
}
