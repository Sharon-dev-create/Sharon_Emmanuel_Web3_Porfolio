"use client";

import { useState } from "react";
import { social } from "@/data/social";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${name || "your site"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`
    );
    window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`;
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
          htmlFor="message"
        >
          Project Topic
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe the protocol or smart contract requirements..."
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
