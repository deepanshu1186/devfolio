"use client";

import { useEffect, useState } from "react";

interface AboutData {
  name: string;
  role: string;
  experience: string;
  skills: string[];
  message: string;
}

export default function AboutPage(): JSX.Element {
  const [about, setAbout] = useState<AboutData | null>(null);

  useEffect(() => {
    async function fetchAbout() {
      const res = await fetch("/api/about");
      const data = await res.json();
      setAbout(data);
    }

    fetchAbout();
  }, []);

  if (!about) return <p className="text-center">Loading...</p>;

  return (
    <main className="max-w-4xl mx-auto px-6 md:px-8 py-12">
      <h1 className="text-3xl font-semibold mb-6">About Me</h1>

      <p className="text-slate-700 mb-3">
        Hi, I’m <strong>{about.name}</strong> — a {about.role} with{" "}
        {about.experience} of experience.
      </p>

      <p className="text-slate-700 mb-3">{about.message}</p>

      <h2 className="mt-6 mb-2 text-xl font-semibold">Skills</h2>
      <ul className="list-disc list-inside text-slate-700">
        {about.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </main>
  );
}
