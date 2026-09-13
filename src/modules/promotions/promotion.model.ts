import { Schema, model } from "mongoose";

export interface IPromotion {
  fingerprint: string;

  partnerName: string;
  image?: string;
  link?: string;

  pointsPerReal: number;
  source: string;
  sourceUrl?: string;

  expiresAt?: Date;

  createdAt: Date;
  updatedAt: Date;
}

const promotionSchema = new Schema<IPromotion>(
  {
    fingerprint: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    partnerName: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
    },

    link: {
      type: String,
    },

    pointsPerReal: {
      type: Number,
      required: true,
      min: 0,
    },

    source: {
      type: String,
      required: true,
      trim: true,
    },

    sourceUrl: {
      type: String,
    },

    expiresAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

export const Promotion = model<IPromotion>("Promotion", promotionSchema);
