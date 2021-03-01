const Sequelize = require('sequelize');
const { sequelize } = require('../database/sequelize');

const User = sequelize.define('users', {
    id: {
        field: 'id',
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement:true
    },
    username: {
        field: 'username',
        type: Sequelize.STRING
    },
    email: {
        field: 'email',
        type: Sequelize.STRING
    },
    passwd: {
        field: 'passwd',
        type: Sequelize.STRING
    },
    createdAt: {
        field: 'createdat',
        type: Sequelize.DATE
    }, 
    updatedAt: {
        field: 'updatedat',
        type: Sequelize.DATE
    }
}, {
    timestamps: true
});

module.exports = { User };