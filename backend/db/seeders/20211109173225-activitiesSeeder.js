'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Activities', [
      {
        name: 'Sunet Surfing in Venice',
        description: "How do you describe the feeling of surfing? It's like breathing, the inevitable cycle of in and out, of the coming and the going, the push and the pull, the force and the froth, and the subsequent calm — we can make sense in these moments when we breathe through the turmoil and take off. Just like riding on the back of a bird.",
        address: '1 Washington Blvd',
        city: 'Venice',
        state: 'CA',
        country: 'United States',
        user_id: 4
      },
      {
        name: 'Zip-lining Mt. Baldy',
        description: "Zip lining is a pure rush of adrenaline. The feeling of weightlessness as you quickly glide across the line is something that few experiences can match",
        address: '6777 Mt Baldy Rd',
        city: 'Mt Baldy',
        state: 'CA',
        country: 'United States',
        user_id: 4
      },
      {
        name: 'Walk the walk of Fame - a Hollywood Blvd tour',
        description: "The criteria for receiving a star consists of the following: professional achievement, longevity in the category of five years or more, contributions to the community and the guarantee that the celebrity will attend the dedication ceremony if selected.",
        address: '6437 Sunset Blvd',
        city: 'Los Angeles',
        state: 'CA',
        country: 'United States',
        user_id: 5
      },
      {
        name: 'Bike the famous Santa Monica beach path',
        description: "Easy, efficient day-long bike rentals. This is the perfect place to rent a nice bike around town and along the beach.",
        address: '1428 4th St',
        city: 'Santa Monica',
        state: 'CA',
        country: 'United States',
        user_id: 5
      },
      {
        name: 'Come cheers with us - Santa Monica Brew Works',
        description: "We brew California inspired beers for those who live the beach-brewed lifestyle. Come cheers with us!",
        address: '920 Colorado Ave suite c',
        city: 'Santa Monica',
        state: 'CA',
        country: 'United States',
        user_id: 6
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Activities', {
      user_id: {[Op.in]: [4, 5, 6]}
    }, {});

  }
};
