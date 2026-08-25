import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import ProjectRow from "@/components/projects/ProjectRow";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Sharon Emmanuel",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full px-page-mobile md:px-page-desktop pt-24 pb-section">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24">
        <div className="md:col-span-2">
          <Eyebrow>00/ INDEX</Eyebrow>
        </div>
        <div className="md:col-span-10">
          <h1 className="font-display text-headline-mobile md:text-headline-lg">
            SELECTED WORK
          </h1>
        </div>
      </div>

      {projects.map((project, i) => (
        <ProjectRow
          key={project.slug}
          project={project}
          border={i === projects.length - 1 ? "top-bottom" : "top"}
        />
      ))}
    </div>
  );
}
