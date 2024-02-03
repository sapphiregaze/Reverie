import express from "express";
import multer from "multer";

const upload: multer.Multer = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024,
  },
  fileFilter: (
    req: express.Request,
    file: Express.Multer.File,
    callback: multer.FileFilterCallback
  ) => {
    const allowedImageTypes = ["image/jpeg", "image/png"];

    if (allowedImageTypes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Only image files are allowed"));
    }
  },
});

export default upload;
