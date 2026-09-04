import Eyebrow from "@/components/ui/Eyebrow";
import Tag from "@/components/ui/Tag";
import ArrowLink from "@/components/ui/ArrowLink";
import ImagePlaceholder from "./ImagePlaceholder";
import type { Project } from "@/data/projects";

export default function CaseStudy({ project }: { project: Project }) {
  return (
    <div className="max-w-screen-2xl mx-auto w-full px-page-mobile md:px-page-desktop pt-24 pb-section">
      {/* Header */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24">
        <div className="md:col-span-2">
          <Eyebrow>{project.number}/ PROJECT</Eyebrow>
        </div>
        <div className="md:col-span-8">
          <h1 className="font-display text-headline-mobile md:text-headline-lg mb-8">
            {project.title}
          </h1>
          <p className="font-body text-body-lg text-foreground/80 max-w-2xl mb-8">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className="flex flex-wrap gap-6">
            <ArrowLink href={project.github} external>
              VIEW ON GITHUB
            </ArrowLink>
            {project.liveUrl && (
              <ArrowLink href={project.liveUrl} external>
                VIEW LIVE PROJECT
              </ArrowLink>
            )}
          </div>
        </div>
      </section>

      <ImagePlaceholder
        label={`FIG. ${project.number} / ${project.name}`}
        image={project.image}
        href={project.liveUrl}
        className="h-72 md:h-[420px] mb-section"
      />

      {/* Concepts */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section border-t border-editorial-border pt-12">
        <div className="md:col-span-2">
          <Eyebrow>KEY CONCEPTS</Eyebrow>
        </div>
        <div className="md:col-span-10">
          <div className="flex flex-wrap gap-3">
            {project.concepts.map((concept) => (
              <Tag key={concept}>{concept.toUpperCase()}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      {project.sections.map((section, i) => (
        <section
          key={section.heading}
          className={`grid grid-cols-1 md:grid-cols-12 gap-gutter py-12 border-editorial-border ${
            i === 0 ? "border-t" : "border-t"
          }`}
        >
          <div className="md:col-span-2">
            <Eyebrow>{String(i + 1).padStart(2, "0")}/</Eyebrow>
            <h2 className="font-display text-headline-md mt-2">
              {section.heading}
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-6">
            {section.body.map((para, j) => (
              <p
                key={j}
                className="font-body text-body-md text-foreground/80 max-w-2xl"
              >
                {para}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
