let sq = require('sequelize');
let sequelize = new sq.Sequelize({
  dialect: 'sqlite',
  storage: './companies_database.sqlite',
});

module.exports = { DataTypes: sq.DataTypes, sequelize };
