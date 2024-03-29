const express = require('express');
const asyncHandler = require('express-async-handler');
const { Activity, Activity_image, Review, User } = require('../../db/models');
const { check } = require('express-validator');
const { Op } = require('sequelize');

const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation')

const router = express.Router();

// activities GET route for splash page
router.get('/', asyncHandler(async (req, res) => {
   const activities = await Activity.findAll({
      include: Activity_image
   });
   return res.json({ activities })
}));

// single activity GET route - get the page for a single activity
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
   const activityId = req.params.id;
   const activity = await Activity.findByPk(activityId, {
      include: [Activity_image, {
         model: Review,
         include: User
      }]
   });
   return res.json({ activity });
}));

// name, description, address, city, url
//activity creation validators validators
const validateActivityCreation = [
   check('name')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a first name.'),
   check('description')
      .exists({ checkFalsy: true })
      .isLength({ min: 5 })
      .withMessage('Please provide a valid description.'),
   check('address')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a valid address.'),
   check('city')
      .exists({ checkFalsy: true })
      .isLength({ min: 2 })
      .withMessage('Please provide a valid city name.'),
   check('state')
      .matches('CA')
      .withMessage('Activity must be in CA (California).'),
   check('country')
      .exists({ checkFalsy: true })
      .matches('United States')
      .withMessage('Activity must be in the United States.'),
   check('url')
      .exists({ checkFalsy: true })
      .isURL()
      .withMessage('Image URL must be a URL.'),
   handleValidationErrors,
];

// single activity POST route - creating new activity
router.post('/', requireAuth, validateActivityCreation, asyncHandler(async (req, res) => {
   const { name, description, address, city, state, country, url } = req.body;
   const user_id = req.user.id

   const activity = await Activity.create({
      name,
      description,
      address,
      city,
      state,
      country,
      user_id
   });

   const activityImage = await Activity_image.create({
      activity_id: activity.id,
      url
   });

   return res.json({ activity, activityImage })
}));

// activity PUT route - activity editing
router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
   const userId = req.user.id;
   const activityId = req.params.id;

   const { name, description, address, city, state, country, url } = req.body;

   const activity = await Activity.findByPk(activityId);
   const activityImage = await Activity_image.findOne({
      where: {
         activity_id: {
            [Op.eq]: activity.id
         }
      }
   });

   if (activity && activity.user_id === userId) {
      activity.name = name;
      activity.description = description;
      activity.address = address;
      activity.city = city;
      activity.state = state;
      activity.country = country;
      await activity.save();
   }

   if (activityImage && activityImage.activity_id === activity.id) {
      activityImage.url = url;
      await activityImage.save();
   };

   return res.json({ activity, activityImage });
}))


// activity not found error function
const activityNotFoundError = () => {
   return new Error('Activity not found...')
}

// activity DELETE route
router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
   const userId = req.user.id;
   const activityId = req.params.id

   const activity = await Activity.findByPk(activityId);

   if (activity && activity.user_id === userId) {
      await activity.destroy();
      return res.json({ message: `Activity ${activityId} has been destoyed` })
   } else {
      const error = activityNotFoundError();
      next(error);
   }
}));


// activity search route
router.get('/search/:searchString', asyncHandler(async (req, res) => {
   const { searchString } = req.params
   console.log('HERE!!!!!!')
   const activities = await Activity.findAll({
      where: {
         name: {
            [Op.iLike]: `%${searchString}%`
         }
      },
      include: Activity_image
   });

   return res.json(activities)
}));



module.exports = router;


// For testing in the browser (browser testing) :)
// console.log('-------------------');
// console.log(activity);
// console.log('-------------------');


// window.csrfFetch('/api/activities', {
//    method: "POST",
//    headers: { "Content-Type": "application/json" },
//    body: JSON.stringify({
//       name: "Test",
//       description: "Testing this out",
//       address: "123 Test",
//       city: "Test City",
//       state: "CA",
//       country: "USA",
//       url: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_640.png'
//    })
// })

// window.csrfFetch('/api/activities/35', {
//    method: "PUT",
//    headers: { "Content-Type": "application/json" },
//    body: JSON.stringify({
//       name: "Test 35",
//       description: "Testing out the PUT route handler",
//       address: "123 Test",
//       city: "Test City",
//       state: "CA",
//       country: "USA",
//       url: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_640.png'
//    })
// });


// window.csrfFetch('/api/activities/1/reviews', {
//    method: "POST",
//    headers: { "Content-Type": "application/json" },
//    body: JSON.stringify({
//       content: 'test review'
//    })
// });

// window.csrfFetch('/api/activities/search/in');
