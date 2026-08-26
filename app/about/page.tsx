import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import Tag from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "About — Sharon Emmanuel",
};

const timeline = [
  { year: "2024", label: "BLOCKCHAIN DEVELOPMENT" },
  { year: "2025", label: "SMART CONTRACT ENGINEERING" },
  { year: "2026", label: "PROTOCOL DEVELOPMENT" },
];

export default function AboutPage() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full px-page-mobile md:px-page-desktop pt-24 pb-section">
      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section">
        <div className="md:col-span-7 md:col-start-6">
          <Eyebrow className="mb-4 block">01/ ABOUT</Eyebrow>
          <h1 className="font-display text-headline-mobile md:text-display mb-8">
            I BUILD AT THE PROTOCOL LAYER
          </h1>
        </div>
      </section>

      {/* Portrait & Bio */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section items-start">
        <div className="md:col-span-5 relative mb-12 md:mb-0">
          <div className="border-t border-editorial-border pt-4 mb-4">
            <Eyebrow>FIG. 1 / PORTRAIT</Eyebrow>
          </div>
          <div className="w-full aspect-[3/4] border border-editorial-border bg-surface flex items-center justify-center">
            <span className="font-mono text-label uppercase tracking-widest text-foreground/40 text-center px-6">
              Portrait placeholder — replace with photo
            </span>
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="border-t border-editorial-border pt-4 mb-8">
            <Eyebrow>02/ BIO</Eyebrow>
          </div>
          <div className="font-body text-body-lg text-foreground max-w-2xl space-y-6">
            <p>
              Sharon Emmanuel is a Solidity Smart Contract Developer and
              recent NYSC graduate with a background in geophysics
              engineering, focused on Ethereum protocol development and
              full-stack Web3 applications.
            </p>
            <p>
              Sharon works across the stack — from contract architecture and
              testing in Solidity, Foundry, and Hardhat, to the frontends
              that connect people to them with Next.js, Wagmi, and Viem.
            </p>
          </div>
          <div className="mt-16 border-t border-editorial-border pt-8">
            <Eyebrow className="mb-6 block">METADATA</Eyebrow>
            <div className="flex flex-wrap gap-4">
              <Tag>SOLIDITY</Tag>
              <Tag>ETHEREUM</Tag>
              <Tag>GEOPHYSICS</Tag>
              <Tag>WEB3</Tag>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-12 border-t border-editorial-border pt-4 mb-12">
          <Eyebrow>03/ TIMELINE</Eyebrow>
        </div>
        <div className="md:col-span-8 md:col-start-3">
          <ul>
            {timeline.map((item) => (
              <li
                key={item.year}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 border-b border-editorial-border group"
              >
                <div className="font-mono text-label text-muted">
                  {item.year}
                </div>
                <div className="md:col-span-3 font-display text-headline-md transition-transform duration-300 group-hover:translate-x-2">
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
