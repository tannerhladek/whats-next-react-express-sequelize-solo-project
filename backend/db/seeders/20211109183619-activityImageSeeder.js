'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Activity_images', [
      {
        url: "https://cms.accuweather.com/wp-content/uploads/2018/06/surf-4.jpg",
        activity_id: 1
      },
      {
        url: "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.newyorkupstate.com/home/nyup-media/width2048/img/outdoors/photo/2015/06/13/zip-lining-at-hunter-mountain-in-the-catskills-7d227ecd15cd18be.jpg",
        activity_id: 2
      },
      {
        url: "https://www.tripsavvy.com/thmb/phOul56zcAOkYantKcVT1aVFbNs=/1883x1412/smart/filters:no_upscale()/GettyImages-623466206-5c915c14c9e77c00010e977b.jpg",
        activity_id: 3
      },
      {
        url: "https://www.tripsavvy.com/thmb/ukBokIqq8NMFPuB3nvW2GIRvcds=/2576x2576/smart/filters:no_upscale()/young-woman-cycling-at-beach-looking-out-to-sea--venice-beach--california--usa-650173627-5b6260324cedfd0050938262.jpg",
        activity_id: 4
      },
      {
        url: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2018_33/2093536/170803-oktoberfest-beer-friends-ed-1040a.jpg",
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
