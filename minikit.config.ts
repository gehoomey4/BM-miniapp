
const ROOT_URL = 'https://bm-miniapp.vercel.app';

export const minikitConfig = {
  accountAssociation: {
    header: "",
    payload: "",
    signature: ""
  },
  frame: { // Using 'frame' as per the latest specification
    version: "1",
    name: "BM",
    homeUrl: ROOT_URL,
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    webhookUrl: `${ROOT_URL}/api/webhook`,
    subtitle: "Register your presence onchain",
    description: "A Farcaster Mini App to register your presence by sending a transaction.",
    screenshotUrls: [`${ROOT_URL}/screenshot.png`],
    primaryCategory: "social",
    tags: ["onchain", "presence", "farcaster"],
    heroImageUrl: `${ROOT_URL}/splash.png`,
    ogTitle: "BM - Register your presence",
    ogDescription: "A Farcaster Mini App to register your presence onchain.",
    ogImageUrl: `${ROOT_URL}/splash.png`,
  },
} as const;
