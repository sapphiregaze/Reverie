import express from "express";
import aws, { Credentials } from "aws-sdk";

import { authenticate } from "../lib/auth";
import upload from "../lib/upload";
import Dream from "../database/models/dream.model";

require("dotenv").config();

const UploadRouter: express.Router = express.Router();
UploadRouter.use(express.json());

aws.config.update({
  credentials: new Credentials({
    accessKeyId: process.env.AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  }),
  region: process.env.AWS_REGION as string,
});

UploadRouter.post(
  "/",
  upload.single("file"),
  async (req: express.Request, res: express.Response) => {
    try {
      const token: string =
        (req.headers.authorization &&
          req.headers.authorization.split(" ")[1]) ||
        "";
      const { dream } = req.body;

      const id: number | null = await authenticate(token);

      if (!req.file) {
        throw new Error("Cannot have empty image.");
      }

      const s3: aws.S3 = new aws.S3();
      const bucketName: string = process.env.AWS_BUCKET as string;

      const params = {
        Bucket: bucketName,
        Key: req.file?.originalname,
        Body: req.file?.buffer,
      };

      s3.upload(params, async (err: any, data: any) => {
        if (err) {
          throw new Error(err);
        }

        await Dream.create({
          user_id: id,
          dream_prompt: dream,
          url: data.Location,
        });

        res.status(200).json({ message: "File uploaded successfully!" });
      });
    } catch (err) {
      res.status(501).json({ message: (err as Error).message });
      console.error(err);
    }
  }
);

export default UploadRouter;
