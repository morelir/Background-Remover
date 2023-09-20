import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { AppError } from "./utils/appError";
import uploadImageRouter from "./routers/imageRouter";
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public/upload_img"));
app.use(express.static("public/upload_img_no_bg"));
app.use(express.static("public/upload_img_bg_color"));

app.use("/", uploadImageRouter);

app.use((error: AppError, req: Request, res: Response, next: NextFunction) => {
  res.status(error.statusCode || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`App running on port ${process.env.PORT}...`);
});
