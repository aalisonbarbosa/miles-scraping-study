import { Router } from "express";
import { getPromotions } from "./promotion.controller.js";
import { scrapePromotions } from "./scraping/scraping.service.js";

const promotionRouter = Router();

promotionRouter.get("/", getPromotions);
promotionRouter.post("/scrape", scrapePromotions);

export default promotionRouter;
