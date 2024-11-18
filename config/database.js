const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'Ganesh@123', // Your MySQL password
  database: 'rkexim', // Your database name
});

module.exports = sequelize;
