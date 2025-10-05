 import { NextResponse } from "next/server";

// Handle GET requests (e.g. fetching data)
export async function GET() {
  const aboutData = {
    name: "Deepanshu",
    role: "Full-Stack Web Developer",
    experience: "15+ years",
    skills: ["PHP", "MySQL", "Next.js", "TypeScript", "Node.js"],
    message:
      "I love building reliable, scalable, and modern web applications. Currently focusing on mastering Next.js and modern TypeScript-driven architectures.",
  };

  // Return JSON response
  return NextResponse.json(aboutData);
}

// Handle POST requests (e.g. saving visitor feedback)
export async function POST(request: Request) {
  const data = await request.json();

  console.log("Received from client:", data);

  return NextResponse.json(
    { success: true, message: "Data received successfully!", received: data },
    { status: 201 }
  );
}