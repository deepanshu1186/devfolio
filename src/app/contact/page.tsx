// src/app/contact/page.tsx
"use client";

import type { JSX } from "react";
import { useState } from "react";

export default function ContactPage(): JSX.Element {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been submitted.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="max-w-2xl mx-auto px-6 md:px-8 py-12">
      <h1 className="text-3xl font-semibold mb-6">Contact Me</h1>
      <p className="text-slate-700 mb-8">
        Want to collaborate or have a question? Fill the form below or reach out via my social
        profiles.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-lg shadow-sm p-6 flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className="border rounded px-3 py-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
