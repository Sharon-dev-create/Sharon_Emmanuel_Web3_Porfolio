import { social } from "@/data/social";

export default function Footer() {
  return (
    <footer className="w-full border-t border-editorial-border mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-page-mobile md:px-page-desktop py-12 max-w-screen-2xl mx-auto gap-element">
        <div className="font-mono text-label uppercase tracking-widest text-foreground">
          © 2024 {social.name.toUpperCase()} / SOLIDITY DEVELOPER
        </div>
        <div className="flex flex-wrap gap-8 font-mono text-label uppercase">
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-variant hover:text-foreground transition-colors duration-300 underline-offset-4 hover:underline"
          >
            GitHub
          </a>
          <a
            href={`mailto:${social.email}`}
            className="text-muted-variant hover:text-foreground transition-colors duration-300 underline-offset-4 hover:underline"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
