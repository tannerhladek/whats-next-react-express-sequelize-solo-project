'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aactivity_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Activity, { foreignKey: 'activity_id' });
    Review.belongsTo(models.User, { foreignKey: 'user_id' });
  };
  return Review;
};
