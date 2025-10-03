// src/components/ProjectCard.tsx
import type { JSX } from "react";

export interface ProjectCardProps {
  title: string;
  short: string;
  tech?: string[];
  href?: string;      // optional external / demo / repo link
  slug?: string;      // optional slug for internal dynamic route
}

export default function ProjectCard({
  title,
  short,
  tech = [],
  href,
  slug,
}: Readonly<ProjectCardProps>): JSX.Element {
  const link = href ?? (slug ? `/projects/${slug}` : undefined);

  return (
    <article className="bg-white border rounded-lg p-4 hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <div className="text-xs text-slate-500">{tech?.slice(0,2).join(" • ")}</div>
      </div>

      <p className="text-sm text-slate-700 mt-2">{short}</p>

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">
              {t}
            </span>
          ))}
        </div>
      )}

      {link && (
        <a
          href={link}
          className="inline-block mt-4 text-sm text-blue-600"
          {...(link.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          View
        </a>
      )}
    </article>
  );
}
