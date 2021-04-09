const { DataTypes } = require('sequelize');
const db = require('../../config/db.config');

const Payment = db.define('payments', {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    txnId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    total: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Payment;