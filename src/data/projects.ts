// src/data/projects.ts
export type Project = {
    title: string;
    short: string;
    description?: string;
    tech?: string[];
    slug: string;
    repo?: string;
    demo?: string;
    heroImage?: string; // path under /public, e.g. /projects/ecommerce-demo/hero.png
  };
  
  export const projects: Project[] = [
    {
      title: "E-commerce Demo",
      short: "Full-stack demo store with product listing, cart and admin panel.",
      description:
        "A demo e-commerce application demonstrating product catalog, cart, checkout flows and a small admin panel for product management. Built to show full-stack architecture and deployment patterns.",
      tech: ["Next.js", "NestJS", "Postgres"],
      slug: "ecommerce-demo",
      repo: "https://github.com/yourgithub/ecommerce-demo",
      demo: "#",
      heroImage: "/projects/ecommerce-demo/hero.png",
    },
    {
      title: "Admin Dashboard",
      short: "Role-based admin console with charts and data export.",
      description:
        "An admin dashboard built for monitoring metrics, exporting reports and role-based access. Includes charting components, filters, and CSV export integration.",
      tech: ["React", "Tailwind", "Node.js"],
      slug: "admin-dashboard",
      repo: "https://github.com/yourgithub/admin-dashboard",
      demo: "#",
      heroImage: "/projects/admin-dashboard/hero.png",
    },
    {
      title: "Legacy Migration",
      short: "Migrated a monolith PHP app to API-first architecture and modern frontend.",
      description:
        "Case study of migrating a legacy PHP+MySQL application to an API-first backend with a modern React/Next frontend, including database migration strategy and backward-compatible APIs.",
      tech: ["PHP", "MySQL", "APIs"],
      slug: "legacy-migration",
      repo: "https://github.com/yourgithub/legacy-migration",
      demo: "#",
      heroImage: "/projects/legacy-migration/hero.png",
    },
  ];
  