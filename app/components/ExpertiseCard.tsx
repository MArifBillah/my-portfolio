"use client";

import { useState } from "react";
import ExpertiseModal from "./ExpertiseModal";

type Props = {
  title: string;
  year?: string | number;
  link?: string;
  description?: string;
};

export default function ExpertiseCard({ title, year, link, description }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        className="cursor-pointer p-4 border rounded shadow-sm hover:shadow-md transition"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setOpen(true);
        }}
      >
        <h3 className="font-semibold">{title}</h3>
        {year && <p className="text-sm text-gray-600">{year}</p>}
      </article>

      <ExpertiseModal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        year={year}
        link={link}
        description={description}
      />
    </>
  );
}
