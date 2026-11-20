import { social } from "@/data/social";
import ArrowLink from "@/components/ui/ArrowLink";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-page-mobile md:px-page-desktop pt-10 md:pt-14 pb-14 md:pb-16">
      <div className="grid grid-cols-1 gap-8">
        <div className="max-w-6xl">
          <div className="mb-5 flex items-center gap-3">
            <Eyebrow>SOFTWARE ENGINEER</Eyebrow>
            <span className="hidden h-px w-12 bg-accent-green sm:block" />
            <span className="hidden font-mono text-label uppercase text-muted-variant sm:inline">FULL-STACK / WEB3</span>
          </div>
          <p className="mb-3 font-mono text-label uppercase tracking-[0.16em] text-muted-variant">SHARON EMMANUEL</p>
          <h1 className="max-w-6xl font-display text-[clamp(2.7rem,8vw,8rem)] leading-[0.92] tracking-[-0.07em]">
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
