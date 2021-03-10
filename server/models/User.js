const Sequelize = require("sequelize");
const { dbConnection } = require("../dal/db.connection");

const User = dbConnection
  .define(
    "user",
    {
      id: {
        field: "id",
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        field: "username",
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        field: "email",
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "This email has been registered.",
        },
        validate: {
          isEmail: {
            args: true,
            msg: "Invalid email format",
          },
        },
      },
      passwd: {
        field: "passwd",
        type: Sequelize.STRING,
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

module.exports = { User };
