//Onur - Opretter loan i database
'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Loans', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING
            },
            number: {
                allowNull: false,
                type: Sequelize.STRING
            },

            text: {
                allowNull: false,
                type: Sequelize.TEXT
            },

            number1: {
                allowNull: false,
                type: Sequelize.STRING
            },

            number2: {
                allowNull: false,
                type: Sequelize.STRING
            },

        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Loans');
    }
};