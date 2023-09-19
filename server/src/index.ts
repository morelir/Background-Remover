import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import multer, { FileFilterCallback } from "multer";
import { AppError } from "./utils/appError";
import uploadImageRouter from "./routers/imageRouter";

const app = express();

app.use(cors());
app.use(express.json()); //limiting data size

app.use(express.static("public/upload_img")); // path.join will take care of unneccessary delimiters, that may occur if the given pathes come from unknown sources
app.use(express.static("public/upload_img_no_bg"));
app.use(express.static("public/upload_img_bg_color"));

app.use("/", uploadImageRouter);

app.use((error: AppError, req: Request, res: Response, next: NextFunction) => {
  // if (res.headerSent) {
  //   return next(error);
  // }
  res.status(error.statusCode || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(5000);
