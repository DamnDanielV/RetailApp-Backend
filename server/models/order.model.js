const { DataTypes } = require('sequelize')
const db = require('../../config/db.config')


const Order = db.define('orders', {
    total: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    subtotal: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    taxes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    paid: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    }
})

module.exports = Order;