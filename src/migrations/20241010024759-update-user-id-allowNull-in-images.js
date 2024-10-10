'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('images', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: true,  // Cambiamos allowNull a true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('images', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,  // En caso de hacer un rollback, volvemos a false
    });
  }
};

