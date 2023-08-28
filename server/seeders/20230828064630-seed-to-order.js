'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let order = require('../order.json')
    order.map(el => {
      el.createdAt = el.updatedAt = new Date()
      return el
    })
    await queryInterface.bulkInsert('Orders', order)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders')
  }
};
