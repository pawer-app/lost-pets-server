import 'dotenv/config';
import { Sequelize } from "sequelize";


export const sequelize = new Sequelize({
  dialect: "postgres",
  username: "doadmin",
  password: process.env.SEQ_DATABASE_PASSWORD,
  database: "pawerorg_db",
  port: 25060,
  host: "pawer-postgres-do-user-10028346-0.b.db.ondigitalocean.com",
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});