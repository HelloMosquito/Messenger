const Sequelize = require('sequelize');
const config = require('../config/database-config');

const {config:{dev}} = config;

let sequelize = new Sequelize(dev.database, dev.username, dev.password, {
    host: dev.host,
    dialect: 'postgres',
    timezone: '-05:00',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

module.exports = {sequelize};