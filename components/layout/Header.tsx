"use client";

import { useEffect, useState } from "react";
import NavOverlay from "./NavOverlay";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-background border-b border-editorial-border">
        <div className="flex justify-between items-center w-full px-page-mobile md:px-page-desktop py-8 max-w-screen-2xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-4 hover:opacity-70 transition-opacity duration-300"
          >
            <span className="material-symbols-outlined text-2xl leading-none">
              terminal
            </span>
            <span className="font-display text-headline-md font-medium tracking-tighter text-foreground">
              SHARON EMMANUEL
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="nav-overlay"
            className="font-display text-headline-md uppercase tracking-tight text-muted-variant hover:opacity-70 transition-opacity duration-300 cursor-pointer"
          >
            MENU
          </button>
        </div>
      </header>
      <NavOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
