const Sequelize = require("sequelize");

module.exports = new Sequelize("todo_api_demo", "root", "10047", {
  dialect: "mysql",
  host: "localhost"
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
});
