// tailwind.config.ts
const config = {
    darkMode: "class",  // ✅ this is required
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: { extend: {} },
    plugins: [],
  };
  export default config;