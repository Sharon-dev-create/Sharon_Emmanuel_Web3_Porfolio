import type { Metadata } from "next";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills — Sharon Emmanuel",
};

export default function SkillsPage() {
  return (
    <div id="skills" className="mx-auto w-full max-w-screen-2xl px-page-mobile py-6 md:px-page-desktop md:py-10">

      <main className="pt-8 md:pt-12">
        <section className="grid gap-4 md:gap-6">
          <div className="font-mono text-label uppercase tracking-[0.08em] text-foreground/70">
            04 - MY TECH STACK &amp; TOOLS
          </div>

          <div className="max-w-[720px]">
            <h1 className="font-display text-[2.8rem] leading-[0.95] tracking-[-0.06em] text-foreground md:text-[4.2rem] xl:text-[4rem]">
              Tools I use to build
              <br />
              and teach software
            </h1>
          </div>
        </section>

        <section className="mt-16 grid gap-12 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="border-t border-editorial-border pt-5">
              <h2 className="font-mono text-label uppercase tracking-widest text-muted-variant">
                {group.title}
              </h2>
              <ul className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="rounded-full border border-editorial-border px-4 py-3 font-body text-body-md">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
