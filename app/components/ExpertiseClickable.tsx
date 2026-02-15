"use client";

import { ReactNode, useState } from "react";
import ExpertiseModal from "./ExpertiseModal";

type LinkItem = { label: string; url: string };

type Props = {
  title: string;
  year?: string | number;
  // legacy single link
  link?: string;
  // optional multiple links
  links?: LinkItem[];
  // optional subtitles list
  subtitles?: string[];
  description?: string;
  className?: string;
  children: ReactNode;
};

export default function ExpertiseClickable({ title, year, link, links, subtitles, description, className, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={className}
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setOpen(true);
        }}
      >
        {children}
      </div>

      <ExpertiseModal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        year={year}
        link={link}
        links={links}
        subtitles={subtitles}
        description={description}
      />
    </>
  );
}
