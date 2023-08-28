'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let memo = require('../memo.json')
    memo.map(el => {
      el.createdAt = el.updatedAt = new Date()
      return el
    })
    await queryInterface.bulkInsert('Memos', memo)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Memos')
  }
};
