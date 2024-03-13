const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('retrogamer_db','postgres','Progresql24',{
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize;