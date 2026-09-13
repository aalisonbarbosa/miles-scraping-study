import { Schema, model, Types } from "mongoose";

export interface IPromotionSnapshot {
  promotionId: Types.ObjectId;

  pointsPerReal: number;
  expiresAt?: Date;

  scrapedAt: Date;
}

const promotionSnapshotSchema = new Schema<IPromotionSnapshot>({
  promotionId: {
    type: Schema.Types.ObjectId,
    ref: "Promotion",
    required: true,
    index: true,
  },

  pointsPerReal: {
    type: Number,
    required: true,
    min: 0,
  },

  expiresAt: {
    type: Date,
  },

  scrapedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const PromotionSnapshot = model<IPromotionSnapshot>(
  "PromotionSnapshot",
  promotionSnapshotSchema,
);
