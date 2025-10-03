import Hero from "@/components/Hero";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero
        name="Deepanshu"
        role="Full-Stack Web Developer — 15+ years of experience"
        short="Currently upgrading my skills with Next.js, TypeScript and cloud-native architectures. I enjoy building reliable backends and modern, SEO-friendly frontends."
        githubUrl="https://github.com/yourgithub"  // replace
        cvUrl="/cv.pdf"                            // place cv.pdf in /public/
        profileSrc="/avatar-placeholder.png"      // add an image in /public or change path
      />
      {/* Later: add projects preview below */}
    </>
  );
}