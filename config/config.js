require("dotenv").config();
let environment = process.env.APP_ENVIROMENT;
let isUsingSSL = process.env.POSTGRES_SSL == "true";

console.log(`is usging SSL > ${isUsingSSL}`);
console.log(`using url > ${process.env.PSQL_URL}`);

module.exports = {
  development: {
    url: process.env.PSQL_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl:
        process.env.POSTGRES_SSL == "true"
          ? {
              rejectUnauthorized: false,
            }
          : false,
    },
    migrationStorage: "sequelize",
    seederStorage: "sequelize",
  },
  production: {
    url: process.env.PSQL_URL,
    dialect: "postgres",
    logging: true,
    dialectOptions: {
      ssl:
        process.env.POSTGRES_SSL == "true"
          ? {
              rejectUnauthorized: false,
            }
          : false,
    },
    migrationStorage: "sequelize",
    seederStorage: "sequelize",
  },
};
