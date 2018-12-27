module.exports = (sequelize, DataTypes) => {
  const Cocktail = sequelize.define('Cocktail', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    ingredient: DataTypes.STRING,
    alcoholic: DataTypes.STRING,
    category: DataTypes.STRING,
    glass: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
  });

  Cocktail.associate = () => {
  };

  return Cocktail;
};
