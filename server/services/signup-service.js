// const pool = require('../config/database-config');
const {addUser} = require('../dal/dao/user-dao');

let signup = async (username, email, passwd) => {
    try {
        await addUser(username, email, passwd);
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = {signup};