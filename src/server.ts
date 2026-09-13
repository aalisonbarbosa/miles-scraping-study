import express from "express";
import { connectDatabase } from "./config/db.js";
import promotionsRouter from "./modules/promotions/promotion.routes.js";
import { startScrapingJob } from "./jobs/scraping.job.js";
import cors from "cors";
import "dotenv/config.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/promotions", promotionsRouter);

const startServer = async () => {
  await connectDatabase();

  startScrapingJob();

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
};

startServer();
