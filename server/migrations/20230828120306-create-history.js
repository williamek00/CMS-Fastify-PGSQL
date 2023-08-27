'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      OrderId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Orders"
        }
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users"
        }
      },
      AdminId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Admins"
        }
      },
      MemoId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Memos"
        }
      },
      date: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Histories');
  }
};