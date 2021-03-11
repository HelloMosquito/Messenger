const Sequelize = require("sequelize");
const { dbConnection } = require("../dal/db.connection");

const Messages = dbConnection
  .define(
    "message",
    {
      id: {
        field: "id",
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fromid: {
        field: "from_user_id",
        type: Sequelize.INTEGER,
        allowNull: flase,
      },
      toid: {
        field: "to_user_id",
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      messagetype: {
        field: "message_type",
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      content: {
        field: "content",
        type: Sequelize.TEXT,
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
  .schema("messages");

module.exports = { Messages };
