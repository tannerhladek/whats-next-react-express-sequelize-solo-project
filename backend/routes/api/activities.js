const express = require('express');
const asyncHandler = require('express-async-handler');
const { Activity } = require('../../db/models')

const { requireAuth } = require('../../utils/auth');

const router = express.Router();

// // TO DO: activities GET route handler for splash page
// router.get('/', asyncHandler(async (req, res) => {
//    const res = await Activity.findAll
// }));



module.exports = router;
