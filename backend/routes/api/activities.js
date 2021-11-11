const express = require('express');
const asyncHandler = require('express-async-handler');
const { Activity, Activity_image } = require('../../db/models')

const { requireAuth, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation')

const router = express.Router();

// activities GET route for splash page
router.get('/', asyncHandler(async (req, res) => {
   const activities = await Activity.findAll({
      include: Activity_image
   });
   return res.json({ activities })
}));

// TO DO - make activity creation validators
// name, description, address, city, state, country, url

// single activity POST route - creating new activity
router.post('/', requireAuth, asyncHandler(async (req, res) => {
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


// single activity GET route - get the page for a single activity
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
   const activityId = req.params.id;
   const activity = await Activity.findByPk(activityId, {
      include: Activity_image
   });
   return res.json({ activity });
}));



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
}))


module.exports = router;



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
