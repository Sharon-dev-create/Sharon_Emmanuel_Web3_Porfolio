export type Service = {
  number: string;
  icon: "security" | "web" | "terminal" | "architecture";
  title: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    number: "01",
    icon: "architecture",
    title: "Smart Contract Design",
    description:
      "Architecting Ethereum protocols, custom ERC-20 token implementations, and escrow / DeFi state machines. Designing data structures with gas efficiency and extensibility in mind.",
    tags: ["SOLIDITY", "ERC-20", "SYSTEM DESIGN"],
  },
  {
    number: "02",
    icon: "security",
    title: "Smart Contract Security",
    description:
      "Applying secure-by-design patterns — pull payments, checks-effects-interactions, access control, and balance-delta validation — and testing contract behavior rigorously with Foundry.",
    tags: ["FOUNDRY", "OPENZEPPELIN", "SAFEERC20"],
  },
  {
    number: "03",
    icon: "web",
    title: "Frontend Integration",
    description:
      "Building dApp interfaces with Next.js, React, and TypeScript. Wallet and contract integration using Wagmi, Viem, Ethers.js, and RainbowKit.",
    tags: ["NEXT.JS", "WAGMI", "VIEM", "RAINBOWKIT"],
  },
  {
    number: "04",
    icon: "terminal",
    title: "Protocol Tooling",
    description:
      "Local chain orchestration, deployment scripting, and test automation using Hardhat, Foundry, Git, and Bash — from local development through testnet deployment.",
    tags: ["HARDHAT", "GIT", "BASH", "NODE.JS"],
  },
];

export const technologies = [
  "Solidity",
  "Foundry",
  "Hardhat",
  "Ethereum",
  "ERC-20",
  "OpenZeppelin",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Frontend Development",
  "Animation",
  "Wagmi",
  "Viem",
  "Ethers.js",
  "RainbowKit",
  "Git",
  "GitHub",
  "Bash",
  "Node.js",
];
