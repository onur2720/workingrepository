'use strict';


const columnAndTypes = [{
    name: 'is_admin',
    type: (Sequelize) => {
        return {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }
    }
}];


