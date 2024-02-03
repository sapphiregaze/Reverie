import express, { NextFunction } from "express";
import sequelize from "./database/connection";

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