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
        <div className="flex justify-between items-center w-full px-page-mobile md:px-page-desktop py-4 max-w-screen-2xl mx-auto">
          <Link
            href="/#home"
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-70"
          >
            <span className="material-symbols-outlined text-2xl leading-none">
              terminal
            </span>
            <span className="font-display text-lg font-medium tracking-[-0.045em] text-foreground md:text-xl">
              SHARON EMMANUEL
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="nav-overlay"
            className="rounded-full border border-editorial-border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-variant transition-colors duration-200 hover:border-foreground hover:bg-[#eeede5] hover:text-foreground"
          >
            MENU
          </button>
        </div>
      </header>
      <NavOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
