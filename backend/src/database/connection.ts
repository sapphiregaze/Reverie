import { Sequelize } from "sequelize";

require("dotenv").config();

const sequelize: Sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  database: "reverie",
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

export default sequelize;
