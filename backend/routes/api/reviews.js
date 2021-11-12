const express = require('express');
const asyncHandler = require('express-async-handler');

const { Review } = require('../../db/models');

const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


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
