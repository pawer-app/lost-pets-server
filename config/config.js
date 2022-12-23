require("dotenv").config();
let environment = process.env.APP_ENVIROMENT;
let isUsingSSL = (process.env.POSTGRES_SSL == 'true');

console.log(`is usging SSL > ${isUsingSSL}`)

module.exports = {
  [environment]: {
    dialect: "postgres",
    username: "doadmin",
    password: process.env.SEQ_DATABASE_PASSWORD,
    database: "pawerorg_db",
    port: 25060,
    host: "pawer-postgres-do-user-10028346-0.b.db.ondigitalocean.com",
    dialectOptions: {
      ssl:
        isUsingSSL ? 
          {
            rejectUnauthorized: false
          }   : false
    },
    migrationStorage: "sequelize",
    seederStorage: "sequelize",
  },
};
