const Sequelize = require("sequelize");
const database = require("../config/db");
const Todo = database.define("todos", {
  //id automatic genarate by sequelize(so no need to add id on model)[pk,nn,ai]
  todo: {
    type: Sequelize.STRING,
    Required: true
  },
   extodo: {
    type: Sequelize.STRING,
    Required: true
  }
});

module.exports = Todo;
