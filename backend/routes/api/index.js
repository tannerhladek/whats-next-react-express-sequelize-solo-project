const express = require('express')
const usersRouter = require('./users.js');
const sessionRouter = require('./session');
const activityRouter = require('./activities');
const reviewsRouter = require('./reviews');

const router = express.Router();

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/activities', activityRouter);
router.use('/reviews', reviewsRouter);

// // POST test route
// router.post('/test', function (req, res) {
//    res.json({ requestBody: req.body });
// });


module.exports = router;
