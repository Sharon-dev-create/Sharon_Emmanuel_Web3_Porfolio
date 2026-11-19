import { projects } from "@/data/projects";
import ProjectRow from "@/components/projects/ProjectRow";
import ArrowLink from "@/components/ui/ArrowLink";
import Eyebrow from "@/components/ui/Eyebrow";

export default function SelectedWork() {
  const featured = projects.slice(0, 3);

  return (
    <section className="px-page-mobile md:px-page-desktop pb-section" id="work">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
        <div className="md:col-span-2">
            <Eyebrow>01/ SELECTED WORK</Eyebrow>
        </div>
        <div className="md:col-span-10">
          <h2 className="font-display text-headline-mobile md:text-headline-lg">
            Built across the stack
          </h2>
        </div>
      </div>

      {featured.map((project, i) => (
        <ProjectRow
          key={project.slug}
          project={project}
          border={i === featured.length - 1 ? "top-bottom" : "top"}
        />
      ))}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter pt-12">
        <div className="md:col-start-3 md:col-span-8">
          <ArrowLink href="/projects">VIEW ALL WORK</ArrowLink>
        </div>
      </div>
    </section>
  );
}
