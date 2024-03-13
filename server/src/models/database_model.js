const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database/database');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    sku: {
        type: DataTypes.BIGINT
    },
    name: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.FLOAT
    }
}, {
    tableName: 'products',
    timestamps: false
});

module.exports = Product;