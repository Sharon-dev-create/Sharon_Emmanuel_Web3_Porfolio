export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Smart contracts & Web3",
    skills: [
      "Solidity, Ethereum & EVM",
      "Rust & NEAR near-sdk",
      "Foundry, Anvil & Hardhat",
      "ERC-20, NEP-141 & token integrations",
      "Escrow, staking & time-based claims",
      "Access control, pause controls & payout accounting",
      "wagmi, viem, Ethers.js & wallet integration",
    ],
  },
  {
    title: "Frontend & dApps",
    skills: [
      "HTML, CSS, JavaScript & TypeScript",
      "React, Next.js & Vite",
      "Tailwind CSS & responsive layouts",
      "Semantic HTML, Flexbox & CSS Grid",
      "Wallet-connected dApps and dashboards",
      "REST API integration",
    ],
  },
  {
    title: "Backend & data",
    skills: [
      "Node.js & TypeScript services",
      "REST APIs & JSON-RPC clients",
      "PostgreSQL, SQL schemas & migrations",
      "Idempotent jobs & lease-based coordination",
      "Event indexing, reconciliation & provider adapters",
    ],
  },
  {
    title: "Testing & tools",
    skills: [
      "Rust and TypeScript unit and integration tests",
      "Foundry local EVM testing",
      "PostgreSQL integration testing",
      "Git, GitHub, Linux & Bash",
      "NEAR CLI & cargo-near",
      "Cross-stack debugging",
    ],
  },
];
