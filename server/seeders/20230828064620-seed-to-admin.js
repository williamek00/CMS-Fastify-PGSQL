'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let admin = require('../admin.json')
    admin.map(el => {
      el.createdAt = el.updatedAt = new Date()
      return el
    })
    await queryInterface.bulkInsert('Admins', admin)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Admins')
  }
};
