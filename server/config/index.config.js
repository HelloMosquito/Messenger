const { dbConfiguration } = require("./database.config");

const curenv = "dev";

const configuration = {
  curenv: curenv,
  db: dbConfiguration[curenv],
};

module.exports = { configuration };
