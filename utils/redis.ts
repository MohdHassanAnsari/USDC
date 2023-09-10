import Redis from "ioredis";

require("dotenv").configure();

const redisClient = () => {
  if (process.env.REDIS_URL) {
    console.log("Redis client connected");
    return process.env.REDIS_URL;
  }
  throw new Error("Redis client not connected");
};

export const redisConfig = new Redis(redisClient());
