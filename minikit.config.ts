
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
    screenshotUrls: [`${ROOT_URL}/screenshot.png`],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["onchain", "presence", "farcaster"],
    heroImageUrl: `${ROOT_URL}/splash.png`,
    ogTitle: "BM - Register your presence",
    ogDescription: "A Farcaster Mini App to register your presence onchain.",
    ogImageUrl: `${ROOT_URL}/splash.png`,
  },
} as const;
