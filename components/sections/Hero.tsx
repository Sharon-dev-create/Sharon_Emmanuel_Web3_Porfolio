import { social } from "@/data/social";
import ArrowLink from "@/components/ui/ArrowLink";
import Eyebrow from "@/components/ui/Eyebrow";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-page-mobile md:px-page-desktop pt-10 md:pt-14 pb-14 md:pb-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-6">
        <div className="md:col-span-7">
          <div className="mb-5 flex items-center gap-3">
            <Eyebrow>SOFTWARE ENGINEER</Eyebrow>
            <span className="hidden h-px w-12 bg-accent-green sm:block" />
            <span className="hidden font-mono text-label uppercase text-muted-variant sm:inline">FULL-STACK / WEB3</span>
          </div>
          <p className="mb-3 font-mono text-label uppercase tracking-[0.16em] text-muted-variant">SHARON EMMANUEL</p>
          <h1 className="max-w-4xl font-display text-[clamp(2.7rem,7vw,7rem)] leading-[0.92] tracking-[-0.07em]">
            I build software that moves <span className="text-accent-green">ideas into reality.</span>
          </h1>
          <p className="mt-6 max-w-xl font-body text-body-lg text-foreground/75">
            I engineer digital products from interface to infrastructure, spanning modern web applications, blockchain systems, and the services that connect them.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ArrowLink href="#work" className="border-foreground bg-foreground px-5 py-4 text-background hover:bg-accent-green hover:border-accent-green">EXPLORE MY WORK</ArrowLink>
            <ArrowLink href="#contact" className="border-editorial-border px-5 py-4">GET IN TOUCH</ArrowLink>
          </div>
          <div className="mt-4 flex flex-wrap gap-5 font-mono text-label uppercase text-muted">
            <a href={social.github} target="_blank" rel="noreferrer" className="link-underline">GitHub ↗</a>
            <a href={`mailto:${social.email}`} className="link-underline">Email ↗</a>
          </div>
        </div>
        <div className="relative mt-2 min-w-0 md:col-span-5 md:col-start-8 md:mt-0">
          <div className="relative overflow-hidden rounded-sm border border-[#353a35] bg-[#20241f] p-1.5 shadow-[0_24px_64px_rgba(32,33,30,0.2)] md:p-2">
            <div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-2.5 md:h-9">
              <span className="h-2 w-2 rounded-full bg-[#a86b5a]" />
              <span className="h-2 w-2 rounded-full bg-[#b89c5a]" />
              <span className="h-2 w-2 rounded-full bg-[#628367]" />
              <span className="ml-3 min-w-0 flex-1 truncate rounded-sm bg-white/10 px-3 py-1 font-mono text-[9px] text-white/55">disburse · dashboard preview</span>
            </div>
            <Image
              src="/disburse-dashboard.png"
              alt="Disburse read-only demo dashboard preview"
              width={1600}
              height={900}
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="hero-preview-image aspect-[1.65/1] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.02] md:aspect-[1.28/1]"
            />
            <div className="flex items-center justify-between gap-2 px-2 py-3 md:px-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/85">Disburse</span>
              <span className="font-mono text-[9px] uppercase tracking-wide text-white/55">Read-only demo · NEAR</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-12 md:grid-cols-12 md:gap-gutter md:mt-14 pt-6 md:pt-7 border-t border-editorial-border">
        <div className="md:col-start-2 md:col-span-3">
          <Eyebrow>LOCATION</Eyebrow>
          <p className="font-mono text-label mt-2 uppercase">
            {social.location}
          </p>
        </div>
        <div className="md:col-span-3">
          <Eyebrow>STACK</Eyebrow>
          <p className="font-mono text-label mt-2">
            SOFTWARE / WEB3 / PRODUCT
          </p>
        </div>
        <div className="md:col-span-4 text-left md:text-right">
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
