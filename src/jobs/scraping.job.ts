import cron from "node-cron";
import { scrapePromotions } from "../modules/promotions/scraping/scraping.service.js";

export const startScrapingJob = () => {
  cron.schedule("0 */12 * * *", async () => {
    console.log("Starting automatic scraping...");

    try {
      await scrapePromotions();

      console.log("Scraping completed.");
    } catch (error) {
      console.error("Automatic scraping error:", error);
    }
  });

  console.log("Scraping job started.");
};
