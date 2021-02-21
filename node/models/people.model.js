const Sequelize = require('sequelize');
const database = require('../db');
 
const People = database.define('people', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
 
module.exports = People;
