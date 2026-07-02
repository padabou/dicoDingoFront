export const ADSENSE_CLIENT_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID ?? "";

export const ADSENSE_ENABLED =
  process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true" &&
  Boolean(ADSENSE_CLIENT_ID);

export const AD_SLOTS = {
  banner: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER ?? "",
  sidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR ?? "",
  inFeed: process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_FEED ?? "",
  inArticle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE ?? ""
};

export function isAdSlotConfigured(slot) {
  return ADSENSE_ENABLED && Boolean(slot);
}
