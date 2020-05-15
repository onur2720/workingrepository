'use strict';
module.exports = (sequelize, DataTypes) => {
    var Loan = sequelize.define('Loan', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,

            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false

        },

        text: {
            type: DataTypes.STRING,
            allowNull: false

        },

        number1: {
            type: DataTypes.STRING,
            allowNull: false

        },

        number2: {
            type: DataTypes.STRING,
            allowNull: false

        },
    });
    return Loan;
};