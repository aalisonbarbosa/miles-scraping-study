import { Promotion } from "./promotion.model.js";

export const getPromotions = async () => {
  return await Promotion.find().sort({ createdAt: -1 }).exec();
};
