import { Response, Request } from "express";
import express from "express";
import { connectMDB } from "./utils/db";

const app = express();

require("dotenv").config();
const port = process.env.PORT || 3000;

app.get("/test/", (request: Request, response: Response) => {
  response.status(200).json({
    status: "Success",
    message: "Application API's Running successfully.",
    result: {},
  });
});

app.listen(port, () => {
  console.table(`
  status: "Success",
  RunningPort: "Application Running on  http://127.0.0.1:${port}/",
  TestPort: "Application Running on     http://127.0.0.1:${port}/test/",
  result: {}`);
  connectMDB();
});
