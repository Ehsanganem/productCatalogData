import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectMongo } from "./db/mongo.js";
import { connectRedis } from "./db/redis.js";

const PORT = Number(process.env.PORT || 3000);

async function start() {
  await connectMongo(process.env.MONGO_URL!);
  await connectRedis();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

start();
