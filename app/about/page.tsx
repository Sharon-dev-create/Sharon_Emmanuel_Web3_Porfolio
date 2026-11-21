import type { Metadata } from "next";
import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import Tag from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "About — Sharon Emmanuel",
};

const timeline = [
  { year: "2024–2026", label: "ETHEREUM DAPPS & SMART CONTRACTS" },
  { year: "2026", label: "NEAR PROTOCOL DEVELOPMENT" },
];

export default function AboutPage() {
  return (
    <div id="about" className="max-w-screen-2xl mx-auto w-full px-page-mobile md:px-page-desktop pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section">
        <div className="md:col-span-7 md:col-start-6">
          <Eyebrow className="mb-4 block">01/ ABOUT</Eyebrow>
          <h1 className="font-display text-headline-mobile md:text-display mb-8 tracking-[-0.055em]">
            I BUILD AT THE PROTOCOL LAYER
          </h1>
        </div>
      </section>

      {/* Portrait & Bio */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section items-start">
        <div className="md:col-span-5 relative mb-12 md:mb-0">
          <div className="border-t border-editorial-border pt-4 mb-4">
            <Eyebrow>FIG. 1 / PORTRAIT</Eyebrow>
          </div>
          <div className="w-full aspect-[3/4] border border-editorial-border bg-surface flex items-center justify-center overflow-hidden">
            <Image
              src="/Portfolio-Img2.png"
              alt="Sharon Emmanuel"
              width={1086}
              height={1448}
              sizes="(min-width: 1536px) 555px, (min-width: 768px) 40vw, 100vw"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="border-t border-editorial-border pt-4 mb-8">
            <Eyebrow>02/ BIO</Eyebrow>
          </div>
          <div className="font-body text-body-lg text-foreground max-w-2xl space-y-6">
            <h2 className="font-display text-headline-md tracking-[-0.035em]">The story behind the code</h2>
            <p>
              I&apos;m a software and blockchain engineer passionate about building secure, scalable, and impactful digital products. My expertise spans full-stack web development, smart contract engineering, and blockchain infrastructure.
            </p>
            <p>
              With a strong foundation in <strong>React, Next.js, TypeScript, and JavaScript</strong> for frontend development, alongside <strong>Node.js, Rust, and PostgreSQL</strong> for backend systems, I build applications that combine intuitive user experiences with reliable engineering.
            </p>
            <p>
              I specialize in <strong>Solidity smart contract development</strong>, using <strong>Foundry, Hardhat, and EVM-compatible networks like Ethereum and Base</strong> to build secure decentralized applications. My experience also extends to <strong>Rust and NEAR Protocol</strong>, where I develop blockchain infrastructure and financial transaction systems.
            </p>
            <p>
              From <strong>ERC-20 token management and escrow systems to crowdfunding platforms and blockchain payment infrastructure</strong>, I focus on designing solutions that prioritize security, transparency, and reliability.
            </p>
            <p>
              Beyond building products, I work as a <strong>Blockchain Engineer and Software Engineering Instructor at Blockfuse Labs</strong>, developing blockchain solutions while mentoring the next generation of software engineers.
            </p>
            <p>
              <strong>My goal is to transform complex ideas into secure, reliable, and meaningful products that solve real-world problems.</strong>
            </p>
          </div>
          <div className="mt-16 border-t border-editorial-border pt-8">
            <Eyebrow className="mb-6 block">METADATA</Eyebrow>
            <div className="flex flex-wrap gap-4">
              <Tag>FULL-STACK WEB3</Tag>
              <Tag>FRONTEND ENGINEERING</Tag>
              <Tag>SMART CONTRACTS</Tag>
              <Tag>REACT / NEXT.JS</Tag>
              <Tag>ETHEREUM / EVM</Tag>
              <Tag>SOLIDITY</Tag>
              <Tag>FOUNDRY</Tag>
              <Tag>RUST / NEAR</Tag>
              <Tag>NODE.JS / POSTGRESQL</Tag>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-12 border-t border-editorial-border pt-4 mb-12">
          <Eyebrow>03/ TIMELINE</Eyebrow>
        </div>
        <div className="md:col-span-8 md:col-start-3">
          <ul>
            {timeline.map((item) => (
              <li
                key={item.year}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 border-b border-editorial-border group"
              >
                <div className="font-mono text-label text-muted">
                  {item.year}
                </div>
                <div className="md:col-span-3 font-display text-headline-md transition-transform duration-300 group-hover:translate-x-2">
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
