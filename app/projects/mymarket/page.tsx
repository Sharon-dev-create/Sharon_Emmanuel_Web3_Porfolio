import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/projects/CaseStudy";
import { getProject } from "@/data/projects";

const SLUG = "mymarket";

export function generateMetadata(): Metadata {
  const project = getProject(SLUG);
  return { title: project ? `${project.name} — Sharon Emmanuel` : "Project" };
}

export default function ProjectPage() {
  const project = getProject(SLUG);
  if (!project) return notFound();
  return <CaseStudy project={project} />;
}
