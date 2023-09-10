import mongoose from "mongoose";

require("dotenv").config();

const mongodbURL: string = process.env.MONGODB_URL || "";

export const connectMDB = async () => {
  try {
    await mongoose.connect(mongodbURL).then((data: any) => {
      console.log(`Connected to MongoDB with Mongo ID : ${data}`);
    });
  } catch (e: any) {
    console.log(e.message);
    setTimeout(connectMDB, 5000);
  }
};
