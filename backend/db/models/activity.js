'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // lat: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // lng: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Activity.associate = function(models) {
    Activity.belongsTo(models.User, { foreignKey: 'user_id' });
    Activity.hasMany(models.Activity_image, { foreignKey: 'activity_id', onDelete: 'CASCADE', hooks: true });
    Activity.hasMany(models.Booking, { foreignKey: 'activity_id', onDelete: 'CASCADE', hooks: true });
  };
  return Activity;
};
