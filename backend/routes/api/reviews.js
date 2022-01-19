const express = require('express');
const asyncHandler = require('express-async-handler');
const {check} = require('express-validator');
const { Review, User } = require('../../db/models');

const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// review creation validator
const validateReviewCreation = [
   check('content')
      .exists({ checkFalsy: true })
      .isLength({ min: 10 })
      .withMessage('Please provide a valid review (min length 10 char).'),
   handleValidationErrors,
];


// activity review creation
router.post('/', requireAuth, validateReviewCreation, asyncHandler(async (req, res) => {
   const user_id = req.user.id;
   const { content, activityId } = req.body;

   const new_review = await Review.create({
      user_id,
      activity_id: activityId,
      content
   });
   const review = await Review.findByPk(new_review.id, {
      include: User
   })
   return res.json({ review })
}));

// activity review edit route
router.put('/:id(\\d+)', requireAuth, validateReviewCreation, asyncHandler(async (req, res) => {
   const user_id = req.user.id;
   const reviewId = req.params.id;
   const { content, activitId } = req.body;

   const review = await Review.findByPk(reviewId, {
      include: User
   });
   if (review.user_id === user_id) {
      review.content = content;
      await review.save();
      return res.json({ review })
   }
}));


// activity not found error function
const reviewNotFoundError = () => {
   return new Error('Review not found...')
}

// review DELETE route
router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
   const userId = req.user.id;
   const reviewId = req.params.id;

   const review = await Review.findByPk(reviewId);

   if (review && review.user_id === userId) {
      let activity_id = review.activity_id
      await review.destroy();
      return res.json({ message: `Review ${review.id} has been destoyred`, activity_id })
   } else {
      const error = reviewNotFoundError();
      next(error);
   }
}));



module.exports = router;


// For testing in the browser (browser testing) :)
// console.log('-------------------');
// console.log(review);
// console.log('-------------------');

// window.csrfFetch('/api/reviews/17', {
//    method: "DELETE"
// });

// window.csrfFetch('/api/reviews/', {
//    method: "POST",
//    headers: { "Content-Type": "application/json" },
//    body: JSON.stringify({
//       content: 'test review creation in the reviews router',
//       activity_id: 1
//    })
// });


// window.csrfFetch('/api/reviews/', {
//    method: "PUT",
//    headers: { "Content-Type": "application/json" },
//    body: JSON.stringify({
//       content: 'test review editing in the reviews router - EDITED!!!!',
//       activity_id: 1
//    })
// });
