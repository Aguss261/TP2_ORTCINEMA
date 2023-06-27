import { Sequelize } from "sequelize";
import config from "../config/config.js";

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  port: config.port,
});

try {
  await connection.authenticate();
  console.log("Connection to DB successful");
} catch (error) {
  console.error("Error connecting to DB:", error);
}

export default connection;
