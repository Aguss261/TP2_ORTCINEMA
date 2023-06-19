import { Sequelize } from "sequelize";
import 'dotenv/config';

const connection = new Sequelize('ortcinema', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

try {
  await connection.authenticate();
  console.log("Connection to DB successful");
} catch (error) {
  console.error("Error connecting to DB:", error);
}

export default connection;
