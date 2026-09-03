import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import Tag from "@/components/ui/Tag";
import { services, technologyGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills & Services — Sharon Emmanuel",
};

export default function SkillsPage() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full px-page-mobile md:px-page-desktop py-section">
      {/* Header */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section">
        <div className="md:col-span-2 hidden md:block">
          <Eyebrow>01/ EXPERTISE</Eyebrow>
        </div>
        <div className="md:col-span-8 flex flex-col gap-6">
          <Eyebrow className="md:hidden mb-2 block">01/ EXPERTISE</Eyebrow>
          <h1 className="font-display text-headline-mobile md:text-display tracking-tight">
            SKILLS &amp; SERVICES
          </h1>
          <p className="font-body text-body-lg text-foreground/80 max-w-2xl">
            Technical proficiency across Solidity smart contract development
            and the full-stack tooling that ships a Web3 product end to end.
          </p>
        </div>
      </section>

      <hr className="border-t border-editorial-border w-full mb-element" />

      {/* Service grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="hidden md:block md:col-span-2" />
        <div className="md:col-span-10 flex flex-col">
          {services.map((service) => (
            <div
              key={service.number}
              className="py-12 border-b border-editorial-border hover:bg-black/[0.03] transition-colors duration-300 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-start">
                <div className="md:col-span-1">
                  <span className="font-mono text-label text-muted">
                    {service.number}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display text-headline-md text-foreground">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="font-body text-body-md text-foreground/80">
                    {service.description}
                  </p>
                  <div className="flex gap-4 mt-6 flex-wrap">
                    {service.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full tech stack */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mt-section">
        <div className="hidden md:block md:col-span-2">
          <Eyebrow>05/ STACK</Eyebrow>
        </div>
        <div className="md:col-span-10">
          <Eyebrow className="md:hidden mb-6 block">05/ STACK</Eyebrow>
          <h2 className="font-display text-headline-lg mb-8 hidden md:block">
            CORE STACK
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {technologyGroups.map((group, groupIndex) => (
              <div
                key={group.title}
                className="stack-group-reveal"
                style={
                  {
                    "--stack-delay": `${groupIndex * 120}ms`,
                  } as CSSProperties
                }
              >
                <h3 className="font-mono text-label text-muted mb-4">
                  {group.title.toUpperCase()}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.technologies.map((technology, technologyIndex) => (
                    <span
                      key={technology}
                      className="stack-tag-reveal inline-flex"
                      style={{
                        "--stack-tag-delay": `${groupIndex * 120 + technologyIndex * 45 + 250}ms`,
                      } as CSSProperties}
                    >
                      <Tag>{technology.toUpperCase()}</Tag>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
