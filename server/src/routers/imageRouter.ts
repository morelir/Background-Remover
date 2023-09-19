import express, { Request } from "express";
import multer, { FileFilterCallback } from "multer";
import { AppError } from "../utils/appError";
import { uploadImageBgColor, uploadImageNoBg } from "../controllers/imageController";
const router = express.Router();

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload_img");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `image-${Date.now()}.${ext}`);
  },
});

const multerFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  console.log(file.mimetype);
  if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please uploade only images", 404));
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

const uploadImage = upload.single("file");

router.post("/upload-img", uploadImage, uploadImageNoBg);
router.post("/upload-img/bg-color", uploadImageBgColor);

export default router;
