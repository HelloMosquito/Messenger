const jwt = require('jsonwebtoken');
const secret = process.env.ACCESS_TOKEN_SECRET;

let createToken = (payload) => {
    return jwt.sign(payload, secret);
};

let checkToken = (token) => {
    return new Promise((resolve, reject)=>{
        jwt.verify(token, secret, (err, data)=>{
            if(err){reject('invalid token')}
            resolve(data);
        })
    });
};

module.exports = {
    createToken,
    checkToken,
}
