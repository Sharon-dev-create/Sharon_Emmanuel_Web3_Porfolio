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
  sections: CaseStudySection[];
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "mymarket",
    name: "MYMARKET",
    title: "MYMARKET: DECENTRALIZED ESCROW MARKETPLACE",
    summary:
      "A secure Ethereum escrow protocol supporting ETH and ERC-20 payments. Built with a focus on trustless arbitration and seamless dispute resolution.",
    tags: ["SOLIDITY", "FOUNDRY", "ERC-20"],
    concepts: [
      "Pull payments",
      "SafeERC20",
      "Balance-delta validation",
      "State-based authorization",
      "Timeout settlement",
      "Foundry testing",
    ],
    github: "https://github.com/Sharon-dev-create",
    sections: [
      {
        heading: "Overview",
        body: [
          "MyMarket is a decentralized escrow marketplace that lets a buyer and seller transact in ETH or any ERC-20 token without trusting each other or a centralized intermediary. Funds are locked in the contract when an order is created and only released once the order reaches an agreed-upon state.",
        ],
      },
      {
        heading: "Architecture",
        body: [
          "The protocol is built around an order lifecycle: created, funded, delivered, and settled or disputed. Each transition is guarded by state-based authorization, so only the party permitted to act at that stage can move the order forward.",
          "Timeout settlement gives either party a way out if the other stops responding — after a configured window, the order can be settled automatically based on its last known state, rather than leaving funds locked indefinitely.",
        ],
      },
      {
        heading: "Smart Contract Design",
        body: [
          "Payments follow the pull-payments pattern: rather than pushing funds to a recipient during a state transition, the contract records what each address is owed and lets them withdraw it themselves. This avoids failure modes tied to unexpected recipient behavior during a transfer.",
          "ERC-20 transfers go through OpenZeppelin's SafeERC20, and every transfer is checked against the contract's own balance delta before and after the call, so the accounting reflects what was actually received rather than what was requested.",
        ],
      },
      {
        heading: "Security Decisions",
        body: [
          "State-based authorization means every external function checks the order's current state before executing, closing off paths where a function could be called out of sequence.",
          "Combining pull payments with balance-delta validation is a deliberate choice to reduce the surface area for reentrancy and for tokens with non-standard transfer behavior (fee-on-transfer, rebasing, etc.).",
        ],
      },
      {
        heading: "Testing",
        body: [
          "The contract logic is exercised with Foundry, covering the order lifecycle, the timeout-settlement path, and ERC-20 edge cases alongside the plain-ETH flow.",
        ],
      },
      {
        heading: "Frontend",
        body: [
          "A React interface surfaces order state, wallet connection, and the actions available at each stage of an order, so a user only sees the transitions that are actually valid for them to take.",
        ],
      },
      {
        heading: "Deployment",
        body: [
          "Contracts are deployed and verified via a Foundry-based scripting workflow, targeting Ethereum testnets during development.",
        ],
      },
    ],
  },
  {
    number: "02",
    slug: "nextkey",
    name: "NEXTKEY",
    title: "NEXTKEY: NON-CUSTODIAL CRYPTO INHERITANCE",
    summary:
      "A dead-man's-switch protocol for trustless digital asset inheritance. Ensures secure transfer of funds to beneficiaries after a predefined period of inactivity.",
    tags: ["SOLIDITY", "HARDHAT", "ERC-20"],
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
    github: "https://github.com/Sharon-dev-create",
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
    number: "03",
    slug: "crowdfunding",
    name: "CROWDFUNDING DAPP",
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
    github: "https://github.com/Sharon-dev-create",
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
    number: "04",
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
    github: "https://github.com/Sharon-dev-create",
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
