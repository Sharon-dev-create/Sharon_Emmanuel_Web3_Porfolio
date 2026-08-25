import { social } from "@/data/social";
import ArrowLink from "@/components/ui/ArrowLink";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Hero() {
  return (
    <section className="px-page-mobile md:px-page-desktop pt-32 md:pt-48 pb-section">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-2">
          <Eyebrow>01/ INTRO</Eyebrow>
        </div>
        <div className="md:col-span-8 flex flex-col gap-12">
          <h1 className="font-display text-headline-mobile md:text-display">
            SOLIDITY / SMART CONTRACT / DEVELOPER
          </h1>
          <p className="font-body text-body-lg max-w-2xl text-foreground/80">
            {social.positioning} Specializing in robust architectural design
            and rigorous protocol testing.
          </p>
          <div className="flex gap-8 mt-8">
            <ArrowLink href="#work">VIEW WORK</ArrowLink>
            <ArrowLink href={social.github} external>
              GITHUB
            </ArrowLink>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mt-32 md:mt-48 pt-8 border-t border-editorial-border">
        <div className="md:col-start-3 md:col-span-3">
          <Eyebrow>LOCATION</Eyebrow>
          <p className="font-mono text-label mt-2 uppercase">
            {social.location}
          </p>
        </div>
        <div className="md:col-span-3 mt-6 md:mt-0">
          <Eyebrow>STACK</Eyebrow>
          <p className="font-mono text-label mt-2">
            SOLIDITY / ETHEREUM / WEB3
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
