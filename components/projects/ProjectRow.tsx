import Link from "next/link";
import Tag from "@/components/ui/Tag";
import ImagePlaceholder from "./ImagePlaceholder";
import type { Project } from "@/data/projects";

export default function ProjectRow({
  project,
  border = "top",
}: {
  project: Project;
  border?: "top" | "top-bottom";
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`block border-editorial-border ${
        border === "top-bottom" ? "border-t border-b" : "border-t"
      } pt-12 pb-24 grid grid-cols-1 md:grid-cols-12 gap-gutter group hover:bg-black/5 transition-colors duration-500 -mx-page-mobile md:-mx-page-desktop px-page-mobile md:px-page-desktop cursor-pointer`}
    >
      <div className="md:col-span-2">
        <span className="font-mono text-label">{project.number}</span>
      </div>
      <div className="md:col-span-5 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-headline-md mb-4">{project.title}</h3>
          <p className="font-body text-body-md text-foreground/80 mb-8 max-w-md">
            {project.summary}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <span className="font-mono text-label uppercase tracking-widest flex items-center gap-2 w-fit group-hover:text-foreground transition-colors">
            VIEW PROJECT{" "}
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </span>
        </div>
      </div>
      <ImagePlaceholder
        label={`FIG. ${project.number} / ${project.name}`}
        image={project.image}
        className="md:col-span-5 mt-12 md:mt-0 h-64 md:h-auto"
      />
    </Link>
  );
}
