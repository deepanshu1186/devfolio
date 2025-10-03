// src/app/projects/page.tsx
import type { JSX } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
export const metadata = {
  title: "Projects - Devfolio",
  description: "Learn more about Deepanshu",
};

export default function ProjectsPage(): JSX.Element {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-8 py-12">
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>
      <p className="text-slate-700 mb-6">A selection of projects and case studies. Click each project to see details.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            title={p.title}
            short={p.short}
            tech={p.tech}
            slug={p.slug}
            href={p.demo ?? p.repo}
          />
        ))}
      </div>
    </main>
  );
}
