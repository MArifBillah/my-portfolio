"use client";

import { createContext, useContext, ReactNode, useState } from "react";

type ContactModalContextType = {
  isContactModalOpen: boolean;
  setIsContactModalOpen: (value: boolean) => void;
};

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <ContactModalContext.Provider value={{ isContactModalOpen, setIsContactModalOpen }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
}
