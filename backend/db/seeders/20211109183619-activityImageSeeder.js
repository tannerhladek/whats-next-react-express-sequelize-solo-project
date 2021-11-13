'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Activity_images', [
      {
        url: "https://static6.depositphotos.com/1165301/649/v/600/depositphotos_6492381-stock-illustration-tropical-sunset.jpg",
        activity_id: 1
      },
      {
        url: "https://static.vecteezy.com/system/resources/previews/000/122/203/original/vector-riding-on-a-zipline.jpg",
        activity_id: 2
      },
      {
        url: "https://media.istockphoto.com/vectors/hollywood-vector-id519936089?k=20&m=519936089&s=612x612&w=0&h=8yOerSr8DtCHcbFOOB7CfbWuCf408kbbJFxVO3qSa4s=",
        activity_id: 3
      },
      {
        url: "https://static.vecteezy.com/system/resources/previews/002/355/581/non_2x/girl-riding-bicycle-on-beach-free-vector.jpg",
        activity_id: 4
      },
      {
        url: "https://static.vecteezy.com/system/resources/thumbnails/002/773/465/small_2x/celebration-of-beer-background-free-vector.jpg",
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
