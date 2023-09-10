import express from "express";
require("dotenv").configure();
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(cors({ origin: process.env.ORIGIN }));
