const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Persons.init(sequelize, DataTypes);
}

class Persons extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    Personid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LastName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    FirstName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Persons',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Personid" },
        ]
      },
    ]
  });
  }
}
