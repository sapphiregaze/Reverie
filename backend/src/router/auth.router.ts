import express from "express";

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
    } catch (err) {
      res.status(501).json({ message: (err as Error).message });
      console.error(err);
    }
  }
);
