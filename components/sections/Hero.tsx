import { social } from "@/data/social";
import ArrowLink from "@/components/ui/ArrowLink";
import Eyebrow from "@/components/ui/Eyebrow";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-page-mobile md:px-page-desktop pt-14 md:pt-20 pb-20 md:pb-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center md:gap-gutter">
        <div className="md:col-span-7">
          <div className="mb-8 flex items-center gap-3">
            <Eyebrow>SOFTWARE ENGINEER</Eyebrow>
            <span className="h-px w-12 bg-accent-green" />
            <span className="font-mono text-label uppercase text-muted-variant">FULL-STACK / WEB3</span>
          </div>
          <p className="mb-5 font-mono text-label uppercase tracking-widest text-muted-variant">SHARON EMMANUEL · PRODUCT BUILDER</p>
          <h1 className="max-w-4xl font-display text-[clamp(3rem,7.7vw,7.25rem)] leading-[0.91] tracking-[-0.07em]">
            I build software that moves <span className="text-accent-green">ideas into reality.</span>
          </h1>
          <p className="mt-8 max-w-xl font-body text-body-lg text-foreground/75">
            I engineer digital products from interface to infrastructure, spanning modern web applications, blockchain systems, and the services that connect them.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ArrowLink href="#work" className="border-foreground bg-foreground px-6 py-4 text-background hover:bg-accent-green hover:border-accent-green">EXPLORE MY WORK</ArrowLink>
            <ArrowLink href="#contact" className="border-editorial-border px-6 py-4">GET IN TOUCH</ArrowLink>
          </div>
          <div className="mt-6 flex flex-wrap gap-6 font-mono text-label uppercase">
            <a href={social.github} target="_blank" rel="noreferrer" className="link-underline">GitHub ↗</a>
            <a href={`mailto:${social.email}`} className="link-underline">Email ↗</a>
          </div>
        </div>
        <div className="relative md:col-span-5 md:col-start-8">
          <div className="absolute -inset-5 -rotate-3 border border-editorial-border md:-inset-7" aria-hidden="true" />
          <div className="relative overflow-hidden border border-editorial-border bg-[#e7e6dc] p-2 shadow-[0_28px_80px_rgba(32,33,30,0.12)] md:p-3">
            <Image
              src="/disburse-dashboard.png"
              alt="Disburse read-only demo dashboard preview"
              width={1600}
              height={900}
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="aspect-[1.25/1] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.025]"
            />
            <div className="flex items-center justify-between px-3 py-4 md:px-5">
              <span className="font-mono text-label uppercase tracking-widest">01 / Disburse</span>
              <span className="font-mono text-label text-muted-variant">NEAR · PAYOUT SYSTEMS</span>
            </div>
          </div>
          <span className="absolute -bottom-7 -left-3 font-display text-5xl tracking-[-0.06em] text-accent-green/20 md:-left-10 md:text-7xl" aria-hidden="true">BUILD / SHIP</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mt-20 md:mt-28 pt-8 border-t border-editorial-border">
        <div className="md:col-start-3 md:col-span-3">
          <Eyebrow>LOCATION</Eyebrow>
          <p className="font-mono text-label mt-2 uppercase">
            {social.location}
          </p>
        </div>
        <div className="md:col-span-3 mt-6 md:mt-0">
          <Eyebrow>STACK</Eyebrow>
          <p className="font-mono text-label mt-2">
            SOFTWARE / WEB3 / PRODUCT
          </p>
        </div>
        <div className="md:col-span-4 mt-6 md:mt-0 text-left md:text-right">
          <Eyebrow>STATUS</Eyebrow>
          <p className="font-mono text-label mt-2 flex items-center gap-2 md:justify-end">
            <span className="w-2 h-2 bg-status rounded-full block" />
            AVAILABLE FOR OPPORTUNITIES
          </p>
        </div>
      </div>
    </section>
  );
}
