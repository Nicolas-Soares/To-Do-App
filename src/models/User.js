'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');


class User extends Model {
  static init(sequelize) {
    super.init({
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Task, { foreignKey: 'user_id', as: 'tasks' })
  }
}

module.exports = User