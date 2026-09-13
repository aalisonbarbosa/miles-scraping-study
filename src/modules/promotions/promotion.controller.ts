import type { Request, Response } from "express";
import * as promotionService from "./promotion.service.js";

export const getPromotions = async (req: Request, res: Response) => {
  try {
    const promotions = await promotionService.getPromotions();
    res.json(promotions);
  } catch (error) {
    console.error("Error fetching promotions:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
