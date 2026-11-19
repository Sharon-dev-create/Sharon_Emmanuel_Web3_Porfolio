import { social } from "@/data/social";
import ArrowLink from "@/components/ui/ArrowLink";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-page-mobile md:px-page-desktop pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-2 flex flex-col gap-4">
          <Eyebrow>SOFTWARE ENGINEER</Eyebrow>
          <span className="font-mono text-label uppercase text-muted-variant">FULL-STACK / WEB3 / PRODUCT</span>
        </div>
        <div className="md:col-span-9 flex flex-col items-start gap-8">
          <p className="font-mono text-label uppercase tracking-widest text-muted-variant">SHARON EMMANUEL · BUILDING ACROSS THE STACK</p>
          <h1 className="max-w-5xl font-display text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.94] tracking-[-0.065em]">
            I build software that moves <span className="text-accent-green">ideas into reality.</span>
          </h1>
          <p className="max-w-2xl font-body text-body-lg text-foreground/75">
            I engineer digital products from interface to infrastructure, spanning modern web applications, blockchain systems, and the services that connect them.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <ArrowLink href="#work" className="border-foreground bg-foreground px-6 py-4 text-background hover:bg-transparent hover:text-foreground">EXPLORE MY WORK</ArrowLink>
            <ArrowLink href="#contact" className="border-editorial-border px-6 py-4">GET IN TOUCH</ArrowLink>
          </div>
          <div className="flex flex-wrap gap-6 pt-2 font-mono text-label uppercase">
            <a href={social.github} target="_blank" rel="noreferrer" className="underline underline-offset-4">GitHub ↗</a>
            <a href={`mailto:${social.email}`} className="underline underline-offset-4">Email ↗</a>
          </div>
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
