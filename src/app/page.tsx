// src/app/page.tsx
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

const sampleProjects = [
  {
    title: "E-commerce Demo",
    short: "Full-stack demo store with product listing, cart and admin panel.",
    tech: ["Next.js", "NestJS", "Postgres"],
    slug: "ecommerce-demo",
  },
  {
    title: "Admin Dashboard",
    short: "Role-based admin console with charts and data export.",
    tech: ["React", "Tailwind", "Node.js"],
    slug: "admin-dashboard",
  },
  {
    title: "Legacy Migration",
    short: "Migrated a monolith PHP app to API-first architecture and modern frontend.",
    tech: ["PHP", "MySQL", "APIs"],
    slug: "legacy-migration",
  },
];

export default function Home(): JSX.Element {
  return (
    <>
      <Hero
        name="Deepanshu"
        role="Full-Stack Web Developer — 15+ years of experience"
        short="Currently upgrading my skills with Next.js, TypeScript and cloud-native architectures. I enjoy building reliable backends and modern, SEO-friendly frontends."
        githubUrl="https://github.com/yourgithub"
        cvUrl="/cv.pdf"
        profileSrc="/avatar-placeholder.png"
      />

      <section className="max-w-5xl mx-auto px-6 md:px-8 mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          <a href="/projects" className="text-sm text-blue-600">View all →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleProjects.map((p) => (
            <ProjectCard
              key={p.slug}
              title={p.title}
              short={p.short}
              tech={p.tech}
              slug={p.slug}
            />
          ))}
        </div>
      </section>
    </>
  );
}
