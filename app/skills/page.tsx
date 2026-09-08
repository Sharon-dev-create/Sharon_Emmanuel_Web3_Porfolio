import type { Metadata } from "next";
import { skillCards } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills — Sharon Emmanuel",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-page-mobile py-6 md:px-page-desktop md:py-10">
      <header className="border-b border-editorial-border pb-5">
        <div className="flex items-center justify-between">
          <div className="font-display text-[2.5rem] leading-none tracking-[-0.06em] text-foreground md:text-[3rem]">
            0xbash
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-editorial-border bg-white/40 transition hover:bg-white/80"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-4 bg-foreground" />
              <span className="block h-0.5 w-4 bg-foreground" />
              <span className="block h-0.5 w-4 bg-foreground" />
            </span>
          </button>
        </div>
      </header>

      <main className="pt-8 md:pt-12">
        <section className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:items-end">
          <div className="font-mono text-label uppercase tracking-[0.08em] text-foreground/70">
            04 - MY TECH STACK &amp; TOOLS
          </div>

          <div className="max-w-[780px]">
            <h1 className="font-display text-[2.8rem] leading-[0.95] tracking-[-0.06em] text-foreground md:text-[4.2rem] xl:text-[5.25rem]">
              Technologies, frameworks,
              <br />
              and tools i work with
            </h1>
          </div>
        </section>

        <section className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skillCards.map((skill) => (
            <div
              key={skill.name}
              className="flex min-h-[122px] items-center gap-4 rounded-[22px] border border-editorial-border bg-white/40 px-5 py-4 shadow-[0_1px_0_rgba(17,17,17,0.03)] transition duration-200 hover:-translate-y-0.5 hover:bg-white/70"
            >
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-xl font-semibold ${skill.badgeClass}`}
              >
                {skill.badge}
              </div>

              <div className="min-w-0">
                <span className="block text-[1.05rem] font-medium tracking-[-0.03em] text-foreground md:text-[1.2rem]">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
