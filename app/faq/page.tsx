import type { Metadata } from "next";
import FaqAccordion from "@/components/faq/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ — Sharon Emmanuel",
};

export default function FAQPage() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-page-mobile py-6 md:px-page-desktop md:py-10">
      <main className="pt-8 md:pt-12">
        <section className="grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start">
          <div className="max-w-[520px]">
            <div className="font-mono text-label uppercase tracking-[0.08em] text-foreground/70">
              06 - FAQS
            </div>

            <h1 className="mt-6 font-display text-[2.8rem] leading-[0.95] tracking-[-0.06em] text-foreground md:text-[4.2rem] xl:text-[4rem]">
              Have questions?
              <br />
              i have answered a
              <br />
              few
            </h1>
          </div>

          <FaqAccordion />
        </section>
      </main>
    </div>
  );
}
