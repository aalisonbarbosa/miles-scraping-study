import { Promotion } from "../promotion.model.js";
import { scrapeLiveloPromotions } from "./sources/livelo.scraper.js";

interface ScrapedPromotion {
  fingerprint?: string;
  partnerName?: string;
  image?: string;
  link?: string;
  pointsPerReal: number;
  source: string;
  sourceUrl?: string;
  expiresAt?: Date;
}

export const scrapePromotions = async () => {
  const promotions = await scrapeLiveloPromotions();

  for (const promotion of promotions) {
    if (!promotion.partnerName) {
      console.log("Promotion without partner name. Skipping...");
      continue;
    }

    promotion.fingerprint = generateFingerprint(
      promotion.source,
      promotion.partnerName,
    );

    await savePromotion(promotion);
  }
};

export const savePromotion = async (promotion: ScrapedPromotion) => {
  return await Promotion.findOneAndUpdate(
    {
      fingerprint: promotion.fingerprint,
    },
    {
      $set: promotion,
    },
    {
      returnDocument: "after",
      upsert: true,
    },
  );
};

const generateFingerprint = (source: string, partnerName: string) => {
  return `${source}-${partnerName}`;
};
