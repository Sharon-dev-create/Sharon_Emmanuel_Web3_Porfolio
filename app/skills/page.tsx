import type { Metadata } from "next";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills — Sharon Emmanuel",
};

export default function SkillsPage() {
  return (
    <div id="skills" className="mx-auto w-full max-w-screen-2xl bg-[#eeede5] px-page-mobile py-16 md:px-page-desktop md:py-24">

      <main className="pt-8 md:pt-12">
        <section className="grid gap-4 md:gap-6">
          <div className="font-mono text-label uppercase tracking-[0.08em] text-foreground/70">
            02 / ENGINEERING EXPERTISE
          </div>

          <div className="max-w-[720px]">
            <h1 className="font-display text-[2.8rem] leading-[0.95] tracking-[-0.06em] text-foreground md:text-[4.2rem] xl:text-[4rem]">
              Engineering across the full stack
            </h1>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div key={group.title} className={`border border-editorial-border p-6 md:p-8 ${index === 0 ? "bg-background md:row-span-2" : "bg-white/55"}`}>
              <span className="font-mono text-label text-muted">0{index + 1} / CAPABILITY</span>
              <h2 className="mt-4 font-display text-headline-md tracking-tight text-foreground">
                {group.title}
              </h2>
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="border-b border-editorial-border py-2 font-body text-body-md text-foreground/80">
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
