import express, { NextFunction } from "express";

import sequelize from "./database/connection";

import AuthRouter from "./router/auth.router";
import TaskRouter from "./router/task.router";
import UserRouter from "./router/user.router";
import UploadRouter from "./router/upload.router";

require("dotenv").config();
const port: number = Number(process.env.PORT) || 8000;

const app: express.Express = express();

app.use(express.json());

// set up cross origin resource sharing
app.use((req: express.Request, res: express.Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", [
    "Content-Type",
    "Authorization",
  ]);
  next();
});

app.use("/api/auth", AuthRouter);
app.use("/api/task", TaskRouter);
app.use("/api/user", UserRouter);
app.use("/api/upload", UploadRouter);

app.listen(port, () => {
  console.log(`Reverie backend is now listening on port ${port}`);
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.log("Unable to connect to the database:", err);
    });
});
