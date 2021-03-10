const { User } = require("../../models/user");

let addUser = async (username, email, passwd) => {
  try {
    await User.create({
      username: username,
      email: email,
      passwd: passwd,
    });
  } catch (err) {
    throw err;
  }
};

let findUserById = async (userid) => {
  try {
    let user = await User.findOne({
      where: {
        id: userid,
      },
    });
    return user;
  } catch (err) {
    throw err;
  }
};

let findUserByEmail = async (email) => {
  try {
    let user = await User.findOne({
      where: {
        email: email,
      },
    });
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = { addUser, findUserById, findUserByEmail };
