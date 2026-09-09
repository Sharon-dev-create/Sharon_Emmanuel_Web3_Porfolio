import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Sharon Emmanuel",
};

const faqs = [
  {
    question: "What do you specialize in?",
    answer:
      "I specialize in frontend development and Web3. I build polished web experiences with React, Next.js, TypeScript, and Tailwind CSS, alongside decentralized applications and smart contracts using Solidity, Foundry, and Ethereum tooling.",
  },
  {
    question: "What makes your development approach different?",
    answer:
      "I care about both how a product works and how it feels to use. I focus on clean, maintainable code, thoughtful interfaces, reliable smart contracts, and making complex Web3 functionality easier for users to understand.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "My core stack includes React, Next.js, TypeScript, Tailwind CSS, Vite, Solidity, Foundry, Hardhat, Viem, Wagmi, ethers.js, and Git. I also work with tools and protocols such as Chainlink, Merkle Trees, and Uniswap.",
  },
  {
    question: "Can you build a complete Web3 application?",
    answer:
      "Yes. I can work across the frontend and blockchain layers, from designing the user interface and connecting wallets to integrating smart contracts and blockchain functionality.",
  },
  {
    question: "Can you work with an existing team or project?",
    answer:
      "Absolutely. I can contribute to an existing codebase, work with other developers, implement features, fix issues, write tests, and collaborate through Git and GitHub.",
  },
  {
    question: "Can you improve an existing product?",
    answer:
      "Yes. I can review an existing application, improve its interface and user experience, integrate new Web3 functionality, fix frontend issues, and improve code quality and testing.",
  },
  {
    question: "Do you write tests for your applications?",
    answer:
      "Yes. Testing is an important part of my development process. I work with tools such as Foundry for smart contract testing and Vitest for frontend JavaScript testing.",
  },
  {
    question: "What kind of projects have you built?",
    answer:
      "I’ve worked on DApps, crowdfunding platforms, token marketplaces, escrow systems, staking platforms, lotteries, voting systems, e-learning platforms, DeFi projects, and other blockchain-focused applications.",
  },
  {
    question: "What if I’m not sure what I need yet?",
    answer:
      "That’s fine. We can start by defining the problem, identifying what the product needs, and deciding on the most practical technical approach before development begins.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send me a message with an overview of what you’re building, what you need help with, and where the project currently stands. From there, we can discuss the next step.",
  },
];

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

          <div className="rounded-[28px] border border-editorial-border bg-white/35 p-2 shadow-[0_1px_0_rgba(17,17,17,0.03)] backdrop-blur-sm md:p-3">
            <div className="rounded-[22px] border border-editorial-border bg-white/20">
              {faqs.map((item, index) => (
                <details
                  key={item.question}
                  className="group border-b border-editorial-border last:border-b-0"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left text-[1rem] font-medium tracking-[-0.02em] text-foreground md:px-6 md:text-[1.1rem]">
                    <span className="flex items-center gap-4">
                      <span className="h-6 w-[2px] shrink-0 rounded-full bg-foreground/40 group-open:bg-foreground" />
                      {item.question}
                    </span>
                    <span className="material-symbols-outlined text-xl text-foreground/50 transition-transform duration-200 group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>

                  <div className="px-4 pb-5 pt-2 text-[0.98rem] leading-relaxed text-foreground/80 md:px-6 md:text-[1.02rem]">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
