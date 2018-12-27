module.exports = (sequelize) => {
  const History = sequelize.define('History', {});

  History.associate = (models) => {
    History.belongsTo(models.User);
    History.belongsTo(models.Cocktail);
  };

  return History;
};
