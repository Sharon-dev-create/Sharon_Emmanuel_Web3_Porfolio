export type Service = {
  number: string;
  icon: "security" | "web" | "terminal" | "architecture";
  title: string;
  description: string;
  tags: string[];
};

export type TechnologyGroup = {
  title: string;
  technologies: string[];
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

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Frontend",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Responsive Web Design",
    ],
  },
  {
    title: "Blockchain",
    technologies: [
      "Solidity",
      "Ethereum",
      "EVM",
      "Foundry",
      "Hardhat",
      "Chainlink",
      "Uniswap",
    ],
  },
  {
    title: "Web3 Integration",
    technologies: [
      "wagmi",
      "viem",
      "ethers.js",
      "RainbowKit",
      "WalletConnect",
      "React Query",
      "Contract Interaction",
      "Network Switching",
    ],
  },
  {
    title: "Testing & Tools",
    technologies: [
      "Foundry Tests",
      "Forge",
      "Vitest",
      "Git",
      "GitHub",
      "Node.js",
      "pnpm",
      "Linux",
    ],
  },
];
