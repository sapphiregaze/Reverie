import express from "express";

import User from "../database/models/user.model";
import Dream from "../database/models/dream.model";

const UserRouter: express.Router = express.Router();
UserRouter.use(express.json());

UserRouter.get("/:id", async (req: express.Request, res: express.Response) => {
  try {
    const id: number = Number(req.params.id);

    const user: any = await User.findOne({ where: { id: id } });
    const dreams: any = await Dream.findAll({ where: { user_id: id } });

    res.status(200).json({
      username: user.username,
      noctara_points: user.noctara_points,
      streaks: user.streak,
      dreams: dreams,
    });
  } catch (err) {
    res.status(501).json({ message: (err as Error).message });
    console.error(err);
  }
});

export default UserRouter;
