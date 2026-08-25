"use client";

import Link from "next/link";
import { social } from "@/data/social";

const links = [
  { number: "01", label: "WORK", href: "/projects" },
  { number: "02", label: "ABOUT", href: "/about" },
  { number: "03", label: "SKILLS", href: "/skills" },
  { number: "04", label: "CONTACT", href: "/contact" },
];

export default function NavOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      id="nav-overlay"
      className={`fixed inset-0 z-50 bg-background flex flex-col px-page-mobile md:px-page-desktop py-8 transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div className="flex justify-between items-center w-full max-w-screen-2xl mx-auto">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-4"
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
          onClick={onClose}
          className="font-display text-headline-md uppercase tracking-tight text-muted-variant hover:text-foreground transition-colors duration-300 flex items-center gap-2 cursor-pointer"
        >
          CLOSE <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <nav className="flex-grow flex flex-col justify-center max-w-screen-2xl w-full mx-auto">
        <ul className="flex flex-col gap-8 md:gap-12">
          {links.map((link, i) => (
            <li
              key={link.href}
              className={`group flex items-baseline gap-6 ${
                i > 0 ? "border-t border-editorial-border pt-8" : ""
              }`}
            >
              <span className="font-mono text-label text-foreground/40">
                {link.number}
              </span>
              <Link
                href={link.href}
                onClick={onClose}
                className="font-display text-headline-mobile md:text-display uppercase tracking-tighter hover:translate-x-4 transition-transform duration-500 inline-block"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-screen-2xl mx-auto pt-8 border-t border-editorial-border">
        <div className="font-mono text-label text-muted-variant mb-4 md:mb-0">
          CONNECT
        </div>
        <div className="flex flex-wrap gap-8 font-mono text-label uppercase">
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-variant hover:text-foreground transition-colors duration-300 underline-offset-4 hover:underline"
          >
            GITHUB
          </a>
          <a
            href={`mailto:${social.email}`}
            className="text-muted-variant hover:text-foreground transition-colors duration-300 underline-offset-4 hover:underline"
          >
            EMAIL
          </a>
        </div>
      </div>
    </div>
  );
}
