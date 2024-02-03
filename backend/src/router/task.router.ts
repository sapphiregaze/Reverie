import express from "express";
import { getRandomTasks } from "../lib/task";

const TaskRouter: express.Router = express.Router();
TaskRouter.use(express.json());

// generate new tasks every day
let tasks: string[];
const generateTasks = async () => {
  try {
    tasks = await getRandomTasks("./tasks.txt", 3);
  } catch (err) {
    console.error(err);
  }
};
generateTasks();
setInterval(generateTasks, 1000 * 60 * 60 * 24);

TaskRouter.get("/", async (req: express.Request, res: express.Response) => {
  try {
    res.status(200).json(tasks);
  } catch (err) {
    res.status(501).json({ message: (err as Error).message });
    console.error(err);
  }
});
export default TaskRouter;
