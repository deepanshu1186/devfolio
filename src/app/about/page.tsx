// src/app/about/page.tsx
import type { JSX } from "react";

export const metadata = {
  title: "About - Devfolio",
  description: "Learn more about Deepanshu",
};

export default function AboutPage(): JSX.Element {
  return (
    <main className="max-w-4xl mx-auto px-6 md:px-8 py-12">
      <h1 className="text-3xl font-semibold mb-6">About Me</h1>

      <p className="text-slate-700 leading-relaxed mb-6">
        Hello, I’m <span className="font-semibold">Deepanshu</span>. I’ve been working in web
        application development for over 15 years, starting with PHP and MySQL and now exploring
        modern technologies like Next.js, TypeScript, and cloud-native architectures.
      </p>

      <p className="text-slate-700 leading-relaxed mb-6">
        I enjoy solving complex problems, designing clean systems, and mentoring other developers.
        My goal now is to grow into roles where I can combine my development expertise with
        leadership and training.
      </p>

      <p className="text-slate-700 leading-relaxed">
        Outside of coding, I love learning new tools, sketching with my family, and exploring
        technology trends like AI and system design.
      </p>
    </main>
  );
}
