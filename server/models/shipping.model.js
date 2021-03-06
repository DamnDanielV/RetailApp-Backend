const { DataTypes, BIGINT } = require('sequelize');
const db = require('../../config/db.config');

const Shipping = db.define('shippings', {
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost: {
        type: Datatypes.BIGINT,
        allowNull: false
    }
})

module.exports = Shipping;