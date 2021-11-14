'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    activity_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  Booking.associate = function (models) {
    Booking.belongsTo(models.Activity, { foreignKey: 'activity_id' });
    Booking.belongsTo(models.User, { foreignKey: 'user_id' });

  };
  return Booking;
};
