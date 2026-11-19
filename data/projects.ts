export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type Project = {
  number: string;
  slug: string;
  name: string;
  image?: string;
  title: string;
  summary: string;
  tags: string[];
  concepts: string[];
  github: string;
  liveUrl?: string;
  imageHref?: string;
  sections: CaseStudySection[];
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "disburse",
    name: "DISBURSE",
    image: "/disburse-dashboard.png",
    title: "DISBURSE: NEAR PAYOUT ACCOUNTING FOUNDATION",
    summary:
      "A development foundation for teams that need campaign spending controls and a clear record of each payout. It combines a NEAR contract, a read-only TypeScript service foundation, PostgreSQL persistence, and a demo dashboard.",
    tags: ["RUST", "NEAR", "TYPESCRIPT", "POSTGRESQL", "NEXT.JS"],
    concepts: [
      "NEP-141 campaign funding",
      "Budget caps and payout reservations",
      "Role-based approval and execution controls",
      "Finalized event discovery",
      "Durable jobs and lease coordination",
      "Dry-run exact-output quote validation",
    ],
    github: "https://github.com/Sharon-dev-create/disburse",
    liveUrl: "/projects/disburse",
    sections: [
      {
        heading: "The problem",
        body: [
          "Teams running payout campaigns need to control what they spend and understand what happened to each payout. Disburse explores those controls across a NEAR contract, an execution-service foundation, and a dashboard.",
        ],
      },
      {
        heading: "Contract accounting",
        body: [
          "The Rust contract uses near-sdk to model campaign funding, budget caps, payout reservations, access roles, pause controls, and payout lifecycle records. NEP-141 funding and finalized contract events are part of the implemented contract and discovery work.",
        ],
      },
      {
        heading: "Service and data",
        body: [
          "The TypeScript service reads contract views and finalized events, with PostgreSQL schemas and migrations for durable execution jobs. The repository implements idempotency, lease-based coordination, and reconciliation components. Current security review evidence identifies unresolved legacy lease-write defects, so the overall review verdict is FAIL.",
        ],
      },
      {
        heading: "Dashboard",
        body: [
          "The Next.js dashboard presents campaign, payout, and recipient information using demo-oriented flows. Its displayed records are illustrative. The current workspace is read-only, and campaign creation, funding, and payout initiation are unavailable.",
        ],
      },
      {
        heading: "NEAR Intents quote preview",
        body: [
          "A 1Click adapter requests EXACT_OUTPUT quotes with dry: true and validates returned quote fields against the payout request and input budget. The adapter is tested with deterministic mock responses. A dry quote does not reserve liquidity or execute a payout, and the live quote route has not been tested.",
        ],
      },
      {
        heading: "Verification and status",
        body: [
          "The repository records passing local Rust contract, service, and PostgreSQL regression runs, alongside a failing independent security review of legacy job lease paths. No production deployment, live cross-chain payout, or completed end-to-end settlement is established. Testnet execution remains blocked in the latest readiness assessment.",
        ],
      },
    ],
  },
  {
    number: "01",
    slug: "nextkey",
    name: "NEXTKEY",
    image: "/nextkey-homepage.png",
    title: "NEXTKEY: NON-CUSTODIAL CRYPTO INHERITANCE",
    summary:
      "A dead-man's-switch protocol for trustless digital asset inheritance. Ensures secure transfer of funds to beneficiaries after a predefined period of inactivity.",
    tags: ["SOLIDITY", "HARDHAT", "ERC-20"],
    liveUrl: "/projects/nextkey",
    imageHref: "https://nextkey-dapp.vercel.app/",
    concepts: [
      "VaultFactory",
      "Beneficiaries",
      "Guardian controls",
      "ERC-20 assets",
      "Check-in intervals",
      "Grace periods",
      "Claim delays",
      "Time-based state transitions",
    ],
    github: "https://github.com/Sharon-dev-create/nextkey",
    sections: [
      {
        heading: "Overview",
        body: [
          "NextKey is a non-custodial inheritance protocol for Ethereum assets. An owner deposits ETH or ERC-20 tokens into their own vault and designates beneficiaries who can claim those assets only after the owner stops checking in for an extended period.",
        ],
      },
      {
        heading: "VaultFactory architecture",
        body: [
          "A VaultFactory contract deploys an individual vault per owner, keeping each user's assets and configuration isolated from every other vault rather than pooling funds in a single shared contract.",
        ],
      },
      {
        heading: "Beneficiaries",
        body: [
          "Each vault owner defines one or more beneficiary addresses ahead of time. Beneficiaries have no access to the vault while the owner is active — their claim right only becomes exercisable once the vault has entered its inactivity state.",
        ],
      },
      {
        heading: "Guardian controls",
        body: [
          "An optional guardian role can be assigned by the owner to add a layer of oversight over sensitive changes — for example, pausing a claim in progress — without giving the guardian custody of the underlying assets.",
        ],
      },
      {
        heading: "Time-based claims",
        body: [
          "The vault owner performs periodic check-ins to signal they're still active. If a check-in interval is missed, the vault enters a grace period before beneficiaries are able to initiate a claim, and a further claim delay applies once a claim is initiated — giving the owner multiple windows to reassert control before assets move.",
        ],
      },
      {
        heading: "ERC-20 assets",
        body: [
          "Vaults support both native ETH and ERC-20 tokens, so an owner can configure inheritance for a mixed portfolio of assets within the same vault.",
        ],
      },
      {
        heading: "Frontend",
        body: [
          "The interface walks an owner through vault setup, beneficiary configuration, and check-ins, and gives beneficiaries visibility into a vault's current state once they're eligible to interact with it.",
        ],
      },
      {
        heading: "Testing",
        body: [
          "Vault lifecycle logic — check-ins, grace periods, claim delays, and the transitions between them — is tested with Hardhat.",
        ],
      },
      {
        heading: "Deployment",
        body: [
          "Vaults and the VaultFactory are deployed via Hardhat scripts to Ethereum testnets during development.",
        ],
      },
    ],
  },
  {
    number: "02",
    slug: "crowdfunding",
    name: "CROWDFUNDING DAPP",
    image: "/Crowdfunding-dapp.png",
    title: "CROWDFUNDING DAPP: FULL-STACK CROWDFUNDING PROTOCOL",
    summary:
      "A full-stack decentralized crowdfunding application supporting campaign creation, ETH contributions, deadlines, and withdrawals with direct wallet integration.",
    tags: ["SOLIDITY", "FOUNDRY", "REACT"],
    concepts: [
      "Campaign creation",
      "ETH contributions",
      "Deadlines",
      "Withdrawals",
      "Wallet integration",
    ],
    github: "https://github.com/Sharon-dev-create/crowdfunding-d-app",
    liveUrl: "https://crowdfunding-d-app-omega.vercel.app/",
    sections: [
      {
        heading: "Overview",
        body: [
          "A crowdfunding dApp where anyone can create a campaign with a funding goal and deadline, and contributors send ETH directly to the campaign contract to back it.",
        ],
      },
      {
        heading: "Smart Contract Design",
        body: [
          "Each campaign tracks its creator, funding goal, deadline, and total contributions on-chain. Once the deadline passes, the campaign's outcome determines whether the creator can withdraw the funds raised.",
        ],
      },
      {
        heading: "Frontend",
        body: [
          "Built with React and Vite, the interface lets a user browse active campaigns, connect a wallet, and contribute ETH or, as a campaign creator, trigger a withdrawal once the campaign has concluded.",
        ],
      },
      {
        heading: "Testing",
        body: [
          "Campaign creation, contribution accounting, and the deadline-gated withdrawal logic are tested with Foundry.",
        ],
      },
      {
        heading: "Deployment",
        body: [
          "The contract is deployed to an Ethereum testnet, with the React/Vite frontend configured to point at the deployed address.",
        ],
      },
    ],
  },
  {
    number: "03",
    slug: "nexus",
    name: "NEXUS DEFI STAKING",
    image: "/nexus-homepage.png",
    title: "NEXUS: DEFI TOKEN STAKING PROTOCOL",
    summary:
      "A decentralized token staking protocol supporting ERC-20 staking, reward accumulation, reward claims, and withdrawals with a TypeScript frontend.",
    tags: ["SOLIDITY", "ERC-20", "TYPESCRIPT"],
    concepts: [
      "ERC-20 staking",
      "Reward accumulation",
      "Reward claims",
      "Withdrawals",
      "TypeScript frontend",
    ],
    github: "https://github.com/Sharon-dev-create/nexus-defi-staking-dapp",
    liveUrl: "https://nexus-defi-staking-dapp-jg2cb7nxm.vercel.app/",
    sections: [
      {
        heading: "Overview",
        body: [
          "Nexus is a staking protocol where users deposit an ERC-20 token into the staking contract and accrue rewards over time, which they can claim independently of withdrawing their staked balance.",
        ],
      },
      {
        heading: "Smart Contract Design",
        body: [
          "The contract tracks each staker's deposited balance and accumulated rewards separately, so claiming rewards and withdrawing staked tokens are two distinct actions rather than a single all-or-nothing exit.",
        ],
      },
      {
        heading: "Frontend",
        body: [
          "A TypeScript frontend surfaces a user's staked balance, accrued rewards, and the actions available to them — stake, claim, or withdraw — reading contract state directly.",
        ],
      },
      {
        heading: "Testing",
        body: [
          "Staking, reward accumulation, claim, and withdrawal flows are covered by the project's test suite.",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
