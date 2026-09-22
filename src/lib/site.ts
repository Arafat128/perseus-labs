export const SITE = {
  name: "Perseus Labs",
  title: "Perseus Labs — research studio",
  description:
    "Perseus Labs publishes on-chain research products. Live: Alpha Skill Calls. Open for requests: Airdrop Alpha Terminal.",
  email: "BusinessLabGrok@gmail.com",
  xUrl: "https://x.com/labs_perseus",
  xHandle: "@labs_perseus",
  footerNote:
    "Not financial advice. No price targets. No eligibility guarantee. Terminal site requests return a text brief only. HertzFlow and Surf supply data for Alpha Skill Calls. Data can be wrong. DYOR.",
} as const;

export const NAV = [
  { to: "/products", label: "Products" },
  { to: "/calls", label: "Calls" },
  { to: "/terminal", label: "Terminal" },
  { to: "/research", label: "Research" },
  { to: "/method", label: "Method" },
  { to: "/contact", label: "Contact" },
] as const;

export const CALLS = [
  {
    ticker: "$R2",
    name: "R2 Protocol",
    chain: "BSC",
    ca: "0x223a20e1b83aa3832e78d4b7b132df022e739222",
    kind: "vesting-concentration",
    flag: "Risk" as const,
    facts: [
      "Aligned: HertzFlow risk 8/10 (HIGH supply + liquidity)",
      "Vesting proxy holds 82.34%; circ ~104M of 1B",
      "Thin float; gate book ~6% spread",
    ],
    finding:
      "Correction from the 0/10 CLEAN read. Risk 8/10. Vesting concentration and a shallow book.",
    url: "https://x.com/labs_perseus/status/2102142206286897266",
    publishedAt: "2026-09-21T21:05:32Z",
  },
  {
    ticker: "$BR",
    name: "Bedrock",
    chain: "BSC",
    ca: "0xff7d6a96ae471bbcd7713af9cb1feeb16cf56b41",
    kind: "thin-depth",
    flag: "Structure" as const,
    facts: [
      "HertzFlow risk 0/10; 0 large transfers in 72h",
      "Chip structure MISSING this run",
      "~5% depth ~$108 vs LP $5.66M",
    ],
    finding:
      "$BR reads clean on-chain this run. Chip structure isn’t populated. Alpha depth is thin.",
    url: "https://x.com/labs_perseus/status/2101782429392323070",
    publishedAt: "2026-09-20T21:15:55Z",
  },
  {
    ticker: "$AKE",
    name: "AKE",
    chain: "BSC",
    ca: "0x2c3a8Ee94dDD97244a93Bc48298f97d2C412F7Db",
    kind: "recent-distribution",
    flag: "Risk" as const,
    facts: [
      "93.4% operator-controlled chips",
      "98 large transfers in 72h",
      "Volume not treated as clean demand",
    ],
    finding:
      "93.4% operator-controlled chips; 98 large transfers in 72h; volume not treated as clean demand.",
    url: "https://x.com/labs_perseus/status/2101753090755981423",
    publishedAt: "2026-09-20T19:19:22Z",
  },
] as const;

export const LATEST_CALL = CALLS[0];

export const HERTZFLOW = {
  name: "HertzFlow Alpha Skill",
  url: "https://skill.hertzflow.xyz/",
  github: "https://github.com/HertzFlow/hertzflow-skills",
  handle: "@Hertzflow_xyz",
  handleUrl: "https://x.com/Hertzflow_xyz",
  role: "Runs the forensic.",
} as const;

export const SURF = {
  name: "Surf",
  handle: "@Surfdeveloper",
  handleUrl: "https://x.com/Surfdeveloper",
  role: "On-chain index the skill reads.",
} as const;

export const CREDIT =
  "Perseus Labs is not HertzFlow and not Surf. They supply data and method for Alpha Skill Calls only.";

export const ALPHA_SKILL_CALLS = {
  name: "Alpha Skill Calls",
  status: "Live" as const,
  summary: "Binance Alpha forensic threads.",
  input: "$TICKER + CA",
  outputs: [
    "state tier",
    "72h transfers",
    "chip split",
    "realization",
    "volume quality",
    "LP / 5% depth",
  ],
  rules: "No price target. UNKNOWN if missing.",
  chains: ["BSC", "ETH", "Base", "Arb", "Polygon", "OP"],
  mailtoSubject: "Alpha Skill Calls — request",
} as const;

export const AIRDROP_TERMINAL = {
  name: "Airdrop Alpha Terminal",
  status: "Open for requests" as const,
  summary:
    "Name a project. If accepted, you get a written brief by email.",
  detail:
    "Diligence brief on a project, airdrop, or points program. Request on the site. If we accept, the requester gets a written brief by email.",
  notIncluded:
    "A site request does not include a designed PDF, charts, or an X thread.",
  extras: "Those extras only happen if the studio takes the job further.",
  limits:
    "Not financial advice. Not an eligibility guarantee. Not a farm guide. Jobs are queued. Requests may be declined. Not instant.",
  mailtoSubject: "Airdrop Alpha Terminal — request",
} as const;

export const TERMINAL_BRIEFS = [
  {
    name: "4DLabs",
    kind: "pre-token incubation",
    flag: "Forensic" as const,
    facts: [
      "YZi Labs EASY Residency S2 — announced 2026-09-11",
      "Token / chain / CA: UNKNOWN",
      "Airdrop not announced; role ≠ allocation",
    ],
    site: "https://4dlabs.space/",
    handle: "@4Dlabs_Official",
    url: "https://x.com/labs_perseus/status/2102285055205019665",
    publishedAt: "2026-09-22T06:33:10Z",
  },
] as const;

export const DESK_03 = {
  name: "Desk 03",
  status: "Coming soon" as const,
} as const;

export const PAGE_PATHS = [
  "/",
  "/products",
  "/calls",
  "/terminal",
  "/research",
  "/method",
  "/contact",
] as const;

export function requestOrigin(request: Request): string {
  const url = new URL(request.url);
  const proto = (request.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "")).split(
    ",",
    1,
  )[0]?.trim() || "https";
  const host =
    (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? url.host)
      .split(",", 1)[0]
      ?.trim() || url.host;
  return `${proto}://${host}`;
}
