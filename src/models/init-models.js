const DataTypes = require("sequelize").DataTypes;
const _Persons = require("./Persons");
const _users = require("./users");

function initModels(sequelize) {
  const Persons = _Persons(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);


  return {
    Persons,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
