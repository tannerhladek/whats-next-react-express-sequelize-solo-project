'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Activity_images', [
      {
        url: "https://res.cloudinary.com/duaoperia/image/upload/v1636842159/depositphotos_6492381-stock-illustration-tropical-sunset_xtfww5.jpg",
        activity_id: 1
      },
      {
        url: "https://res.cloudinary.com/duaoperia/image/upload/v1636842184/vector-riding-on-a-zipline_tc70bb.jpg",
        activity_id: 2
      },
      {
        url: "https://res.cloudinary.com/duaoperia/image/upload/v1636842203/hollywood-vector-id519936089_kqjx4w.jpg",
        activity_id: 3
      },
      {
        url: "https://res.cloudinary.com/duaoperia/image/upload/v1636842217/girl-riding-bicycle-on-beach-free-vector_ei7qck.jpg",
        activity_id: 4
      },
      {
        url: "https://res.cloudinary.com/duaoperia/image/upload/v1636842232/celebration-of-beer-background-free-vector_cesyms.jpg",
        activity_id: 5
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Activity_images', {
      activity_id: {[Op.in]: [1, 2, 3, 4, 5]}
    }, {});

  }
};
