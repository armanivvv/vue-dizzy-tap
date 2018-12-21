module.exports = (sequelize, DataTypes) => sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    unqiue: true,
  },
  password: DataTypes.STRING,
});
