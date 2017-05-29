// note that sequelize will automatically pluralize the variable name
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burgers: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
    }
  });
  return Burger;
};


