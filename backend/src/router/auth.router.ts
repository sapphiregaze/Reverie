import express from "express";
import { authenticate, login, register } from "../lib/auth";

const AuthRouter: express.Router = express.Router();
AuthRouter.use(express.json());

AuthRouter.get(
  "/authenticate",
  async (req: express.Request, res: express.Response) => {
    try {
      const token: string =
        (req.headers.authorization &&
          req.headers.authorization.split(" ")[1]) ||
        "";

      const id: number | null = await authenticate(token);

      res.status(200).json({ id: id });
    } catch (err) {
      res.status(501).json({ message: (err as Error).message });
      console.error(err);
    }
  }
);

AuthRouter.post(
  "/login",
  async (req: express.Request, res: express.Response) => {
    try {
      const { username, password } = req.body;

      const token: string = await login(username, password);

      res.status(200).json({ token: token });
    } catch (err) {
      res.status(501).json({ message: (err as Error).message });
      console.error(err);
    }
  }
);

AuthRouter.post(
  "/register",
  async (req: express.Request, res: express.Response) => {
    try {
      const { email, username, password } = req.body;

      await register(email, username, password);
      const token: string = await login(username, password);

      res.status(200).json({ token: token });
    } catch (err) {
      res.status(501).json({ message: (err as Error).message });
      console.error(err);
    }
  }
);

export default AuthRouter;
