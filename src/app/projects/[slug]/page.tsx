// src/app/projects/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";

// ✅ 1. Use simple explicit return type here
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return projects.map((p) => ({ slug: p.slug }));
}

// ✅ 2. Explicit params typing, no custom type alias
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: `${project.title} — Projects`,
    description: project.short,
    openGraph: {
      title: project.title,
      description: project.short,
      images: project.heroImage ? [project.heroImage] : undefined,
    },
  };
}

// ✅ 3. Same inline type here, avoid `Params` alias
export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug) as Project | undefined;

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-6 md:px-8 py-12">
      <h1 className="text-3xl font-semibold mb-4">{project!.title}</h1>
      <p className="text-slate-700 mb-6">{project!.short}</p>

      {project!.heroImage && (
        <div className="mb-6">
          <Image
            src={project!.heroImage}
            alt={`${project!.title} screenshot`}
            width={1200}
            height={600}
            className="w-full rounded-lg shadow object-cover"
            priority
          />
        </div>
      )}

      <section className="bg-white border rounded p-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-slate-700 mb-4">{project!.description ?? "No description yet."}</p>

        <div className="mb-4">
          <h3 className="font-semibold">Tech stack</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project!.tech?.map((t) => (
              <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {project!.repo && (
            <a href={project!.repo} target="_blank" rel="noreferrer" className="text-blue-600">
              View repo
            </a>
          )}
          {project!.demo && (
            <a href={project!.demo} target="_blank" rel="noreferrer" className="text-blue-600">
              Live demo
            </a>
          )}
        </div>
      </section>
    </main>
  );
}