const bcrypt = require("bcrypt");

const encrypt = (content) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  let hash = bcrypt.hashSync(content, salt);
  return hash;
};

module.exports = { encrypt };
