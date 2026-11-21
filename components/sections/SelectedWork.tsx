import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Eyebrow from "@/components/ui/Eyebrow";

const filters = ["ALL PROJECTS", "NEAR", "ETHEREUM / EVM", "SMART CONTRACTS"];

function projectCategory(project: (typeof projects)[number]) {
  if (project.tags.includes("NEAR")) return "NEAR";
  if (project.tags.includes("SOLIDITY")) return "ETHEREUM / EVM";
  return "SMART CONTRACTS";
}

export default function SelectedWork() {
  return (
    <section className="px-page-mobile py-20 md:px-page-desktop md:py-28" id="work">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-9 flex flex-col gap-4 md:mb-12">
          <Eyebrow>01 — FEATURED PROJECTS</Eyebrow>
          <h2 className="max-w-3xl font-display text-[clamp(2.3rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.055em]">
            A closer look at my work
          </h2>
          <p className="max-w-xl text-sm leading-6 text-muted-variant md:text-base">
            Product interfaces and on-chain systems, built from the first interaction to the underlying contracts.
          </p>
        </div>

        <div aria-label="Project categories" className="mb-8 flex gap-2 overflow-x-auto pb-2 md:mb-10">
          {filters.map((filter, index) => (
            <span
              key={filter}
              aria-current={index === 0 ? "true" : undefined}
              className={`shrink-0 rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.08em] ${
                index === 0
                  ? "border-foreground bg-foreground text-background"
                  : "border-editorial-border bg-surface text-muted-variant"
              }`}
            >
              {filter}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-7">
          {projects.map((project) => {
            const isFlagship = project.slug === "disburse";
            const hasLiveDemo = project.liveUrl?.startsWith("https://");

            return (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-2xl border border-editorial-border bg-surface transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[0_18px_45px_rgba(32,33,30,0.08)]"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`Read the ${project.name} case study`}
                  className="relative block aspect-[1.55/1] overflow-hidden bg-[#e9e8df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent-green"
                >
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`${project.name} project interface`}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1100px) 50vw, 580px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                  )}
                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-background/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.08em] text-foreground backdrop-blur-sm">
                    {projectCategory(project)}
                  </span>
                  {isFlagship && (
                    <span className="absolute right-4 top-4 rounded-full bg-[#20382b] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.08em] text-white">
                      Flagship
                    </span>
                  )}
                </Link>

                <div className="flex min-h-[230px] flex-col p-5 sm:p-6 md:min-h-[245px] md:p-7">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] tracking-[0.1em] text-muted">{project.number} / 04</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-accent-green">{project.name}</span>
                  </div>
                  <h3 className="mb-3 font-display text-xl font-medium leading-tight tracking-[-0.04em] md:text-2xl">
                    {project.title.split(":")[0]}
                  </h3>
                  <p className="mb-6 max-w-[58ch] text-sm leading-6 text-muted-variant">
                    {project.summary}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-editorial-border pt-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-mono text-[10px] uppercase tracking-[0.09em] text-foreground transition-colors hover:text-accent-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-green"
                    >
                      Case study <span aria-hidden="true">↗</span>
                    </Link>
                    {hasLiveDemo && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] uppercase tracking-[0.09em] text-muted-variant transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-green"
                      >
                        Live demo <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] uppercase tracking-[0.09em] text-muted-variant transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-green"
                    >
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                  {isFlagship && (
                    <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
                      Read-only demo · No live payouts
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
