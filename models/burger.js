module.exports = function(sequelize, DataTypes) {
  var Tasks = sequelize.define("Tasks", {
    task: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  });
  return Tasks;
};


// var Tasks = sequelize.define("Tasks", {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     body: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//       len: [1]
//     }
//   }