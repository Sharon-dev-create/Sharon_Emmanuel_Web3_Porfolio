"use client";

import { useState } from "react";
import { social } from "@/data/social";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(subject || `Hire inquiry from ${name || "a potential client"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${details}`
    );
    window.location.href = `mailto:${social.email}?subject=${encodedSubject}&body=${body}`;
  }

  return (
    <form className="space-y-12" onSubmit={handleSubmit}>
      <div className="relative">
        <label
          className="block font-mono text-label text-foreground mb-2 uppercase tracking-widest"
          htmlFor="name"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Satoshi Nakamoto"
          className="w-full bg-transparent border-0 border-b border-editorial-border px-0 py-4 font-body text-body-md text-foreground placeholder:text-muted focus:outline-none focus:border-b-accent-green"
        />
      </div>

      <div className="relative">
        <label
          className="block font-mono text-label text-foreground mb-2 uppercase tracking-widest"
          htmlFor="subject"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g. Smart contract development opportunity"
          className="w-full bg-transparent border-0 border-b border-editorial-border px-0 py-4 font-body text-body-md text-foreground placeholder:text-muted focus:outline-none focus:border-b-accent-green"
        />
      </div>

      <div className="relative">
        <label
          className="block font-mono text-label text-foreground mb-2 uppercase tracking-widest"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="satoshi@bitcoin.org"
          className="w-full bg-transparent border-0 border-b border-editorial-border px-0 py-4 font-body text-body-md text-foreground placeholder:text-muted focus:outline-none focus:border-b-accent-green"
        />
      </div>

      <div className="relative">
        <label
          className="block font-mono text-label text-foreground mb-2 uppercase tracking-widest"
          htmlFor="details"
        >
          Details
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={6}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Tell me about the project, timeline, scope, and what you need built..."
          className="w-full bg-transparent border-0 border-b border-editorial-border px-0 py-4 font-body text-body-md text-foreground placeholder:text-muted focus:outline-none focus:border-b-accent-green resize-none"
        />
      </div>

      <div className="pt-8 flex justify-start">
        <button
          type="submit"
          className="border border-foreground px-8 py-4 flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:bg-foreground hover:text-background"
        >
          <span className="font-mono text-label uppercase tracking-widest">
            SEND MESSAGE
          </span>
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </button>
      </div>
    </form>
  );
}
