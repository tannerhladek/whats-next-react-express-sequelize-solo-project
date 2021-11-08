'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity_image = sequelize.define('Activity_image', {
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activity_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Activity_image.associate = function (models) {
    Activity_image.belongsTo(models.Activity, { foreignKey: 'activity_id' });
  };
  return Activity_image;
};
