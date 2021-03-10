const Sequelize = require("sequelize");
const { configuration } = require("../config/index.config");

const dbConfiguration = configuration.db;

const dbConnection = new Sequelize(
  dbConfiguration.database,
  dbConfiguration.username,
  dbConfiguration.password,
  {
    host: dbConfiguration.host,
    dialect: "postgres",
    timezone: "-05:00",
    pool: {
      max: 5,
      min: 0,
      idle: 30000,
    },
  }
);

module.exports = { dbConnection };
