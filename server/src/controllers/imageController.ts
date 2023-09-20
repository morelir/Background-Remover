import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import path from "path";
import { NextFunction, Request, Response } from "express";


export const uploadImageNoBg = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const inputPath = req.file!.path;
  const formData = new FormData();
  formData.append("size", "auto");
  formData.append(
    "image_file",
    fs.createReadStream(inputPath),
    path.basename(inputPath)
  );
  const filename = req.file!.filename;
  const filenameNoBg = filename.replace("image", "image_no_bg");

  try {
    const response = await axios({
      method: "post",
      url: "https://api.remove.bg/v1.0/removebg",
      data: formData,
      responseType: "arraybuffer",
      headers: {
        ...formData.getHeaders(),
        "X-Api-Key": process.env.Bg_Remove_Api_Key,
      },
    });

    fs.writeFileSync(`public/upload_img_no_bg/${filenameNoBg}`, response.data);

    res.status(200).json({
      status: "success",
      data: {
        uploadedImage: filename,
        uploadedImageNoBg: filenameNoBg,
      },
    });
  } catch (error: any) {
    res
      .status(error.response.status || 400)
      .json({ message: "Request Failed: Payment Required" });
  }
};

export const uploadImageBgColor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const filename = req.body.filename;
  const color = req.body.color;

  const extractedFilename = filename.split("-").pop();
  const filenameBgColor = "image_bg_color-" + extractedFilename;

  const inputPath = `public/upload_img_no_bg/image_no_bg-${extractedFilename}`;
  const formData = new FormData();
  formData.append("size", "auto");
  formData.append(
    "image_file",
    fs.createReadStream(inputPath),
    path.basename(inputPath)
  );
  formData.append("bg_color", color);

  try {
    const response = await axios({
      method: "post",
      url: "https://api.remove.bg/v1.0/removebg",
      data: formData,
      responseType: "arraybuffer",
      headers: {
        ...formData.getHeaders(),
        "X-Api-Key": process.env.Bg_Remove_Api_Key,
      },
    });

    fs.writeFileSync(
      `public/upload_img_bg_color/${filenameBgColor}`,
      response.data
    );

    res.status(200).json({
      status: "success",
      data: {
        uploadedImageBgColor: filenameBgColor,
      },
    });
  } catch (error: any) {
    res
      .status(error.response.status || 400)
      .json({ message: "Request Failed: Payment Required" });
  }
};
