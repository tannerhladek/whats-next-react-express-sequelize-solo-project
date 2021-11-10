const express = require('express');
const asyncHandler = require('express-async-handler');
const { Activity, Activity_image } = require('../../db/models')

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


// single activity POST route - creating new activity
router.post('/', requireAuth, asyncHandler(async (req, res) => {
   // const { name, description, address, city, state, country } = req.body;
   // const user_id = req.session.user.id;
   // console.log('-------------------');
   // console.log(user_id);
   // console.log('-------------------');
   // return;
}));


// single activity GET route - get the page for a single activity
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
   const activityId = req.params.id;
   const activity = await Activity.findByPk(activityId);
   return res.json({ activity });
}));


module.exports = router;



// console.log('-------------------');
// console.log(activity);
// console.log('-------------------');
