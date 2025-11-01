
const ROOT_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const minikitConfig = {
  accountAssociation: {
    header: "",
    payload: "",
    signature: ""
  },
  miniapp: {
    version: "1",
    name: "BM",
    subtitle: "Register your presence onchain",
    description: "A Farcaster Mini App to register your presence by sending a transaction.",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`, // Placeholder icon
    splashImageUrl: `${ROOT_URL}/splash.png`, // Placeholder splash
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`, // Placeholder webhook
    primaryCategory: "social",
    tags: ["onchain", "presence", "farcaster"],
    heroImageUrl: `${ROOT_URL}/splash.png`, // Placeholder hero
    ogTitle: "BM - Register your presence",
    ogDescription: "A Farcaster Mini App to register your presence onchain.",
    ogImageUrl: `${ROOT_URL}/splash.png`,
  },
} as const;
