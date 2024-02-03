import express from "express";

import { authenticate } from "../lib/auth";
import upload from "../lib/upload";

const UploadRouter: express.Router = express.Router();
UploadRouter.use(express.json());

UploadRouter.post(
  "/",
  upload.single("file"),
  async (req: express.Request, res: express.Response) => {
    try {
      const token: string =
        (req.headers.authorization &&
          req.headers.authorization.split(" ")[1]) ||
        "";

      const id: number | null = await authenticate(token);
    } catch (err) {}
  }
);

export default UploadRouter;
