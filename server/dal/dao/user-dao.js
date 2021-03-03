const { User } = require('../../models/user');

let addUser = (username, email, passwd) => {
    return User.create({
        username: username,
        email: email,
        passwd: passwd
    }).then(() => {
        console.log("insert user successfully");
    }).catch((err) => {
        console.log("inser user failed: " + err.message);
    });
};

module.exports = { addUser }