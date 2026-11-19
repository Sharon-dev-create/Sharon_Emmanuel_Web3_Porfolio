import Eyebrow from "@/components/ui/Eyebrow";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#eeede5] px-page-mobile md:px-page-desktop py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-2">
          <Eyebrow>03/ EXPERIENCE</Eyebrow>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display text-headline-mobile md:text-headline-lg">Building products independently.</h2>
          <div className="mt-8 border-t border-editorial-border">
            <div className="grid gap-4 py-8 md:grid-cols-4">
              <span className="font-mono text-label uppercase text-muted">Independent</span>
              <div className="md:col-span-3">
                <h3 className="font-display text-headline-md">Full-stack and Web3 product development</h3>
                <p className="mt-5 max-w-2xl font-body text-body-md text-foreground/75">
                  I build and test personal products across Ethereum and NEAR, connecting smart contract behavior to backend services, persistent data, and user interfaces.
                </p>
              </div>
            </div>
            <div className="grid gap-4 border-t border-editorial-border py-8 md:grid-cols-4">
              <span className="font-mono text-label uppercase text-muted">2024 — Present</span>
              <div className="md:col-span-3">
                <h3 className="font-display text-headline-md">Software Engineering Foundations Instructor</h3>
                <p className="mt-2 font-body text-body-md text-muted-variant">Blockfuse Labs</p>
                <p className="mt-5 max-w-2xl font-body text-body-md text-foreground/75">
                  Teach web fundamentals, Linux and Bash, Git and GitHub, semantic HTML, responsive CSS, and JavaScript. Guide learners through practical portfolio work and collaborative development workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
