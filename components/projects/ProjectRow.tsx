import Link from "next/link";
import Tag from "@/components/ui/Tag";
import ImagePlaceholder from "./ImagePlaceholder";
import type { Project } from "@/data/projects";

export default function ProjectRow({
  project,
  border = "top",
  featured = false,
}: {
  project: Project;
  border?: "top" | "top-bottom";
  featured?: boolean;
}) {
  return (
    <div
      className={`project-row block border-editorial-border ${
        border === "top-bottom" ? "border-t border-b" : "border-t"
      } ${featured ? "bg-[#eeede5] py-8 md:py-10" : "py-10 md:py-14"} grid grid-cols-1 md:grid-cols-12 gap-gutter group transition-colors duration-500 -mx-page-mobile md:-mx-page-desktop px-page-mobile md:px-page-desktop`}
    >
      <div className="flex items-start justify-between md:col-span-2 md:flex-col md:justify-start md:gap-4">
        <span className="font-mono text-label text-muted">{project.number} / 04</span>
        {featured && <span className="font-mono text-label uppercase tracking-widest text-accent-green">FLAGSHIP</span>}
      </div>
      <Link href={`/projects/${project.slug}`} className={`project-copy md:col-span-5 flex flex-col justify-between ${featured ? "md:col-span-4" : ""}`}>
        <div className="pb-8">
          <h3 className={`font-display mb-4 tracking-[-0.045em] ${featured ? "text-3xl md:text-4xl" : "text-headline-md"}`}>{project.title}</h3>
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
            READ CASE STUDY{" "}
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </span>
        </div>
      </Link>
      <ImagePlaceholder
        label={`FIG. ${project.number} / ${project.name}`}
        image={project.image}
        href={project.imageHref ?? project.liveUrl}
        className={`project-preview mt-8 h-64 md:mt-0 md:h-72 ${featured ? "md:col-span-6 md:h-[430px]" : "md:col-span-5"}`}
      />
    </div>
  );
}
