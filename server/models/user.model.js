const { DataTypes } = require('sequelize');
const db = require('../../config/db.config');

const User = db.define('user', {
    name: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    govId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = User;