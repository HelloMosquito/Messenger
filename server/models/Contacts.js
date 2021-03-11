const Sequelize = require("sequelize");
const { dbConnection } = require("../dal/db.connection");

const Contacts = dbConnection
  .define(
    "contact",
    {
      id: {
        field: "id",
        type: Sequelize.STRING,
        primaryKey: true,
      },
      userid: {
        field: "user_id",
        type: Sequelize.STRING,
        allowNull: false,
      },
      contactid: {
        field: "contact_user_id",
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        field: "contact_status",
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        field: "createdat",
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: "updatedat",
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: true,
    }
  )
  .schema("users");

module.exports = { Contacts };
