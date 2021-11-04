const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');


const router = express.Router();

// POST test route
router.post('/test', function (req, res) {
   res.json({ requestBody: req.body });
});


// set token cookie test route
router.get('/set-token-cookie', asyncHandler(async (req, res) => {
   const user = await User.findOne({
      where: {
         username: 'Demo-lition'
      },
   })
   setTokenCookie(res, user);
   return res.json({ user });
}));

// testing restore user middleware
// GET /api/restore-user
router.get(
   '/restore-user',
   restoreUser,
   (req, res) => {
      return res.json(req.user);
   }
);

// testing require auth middleware
// GET /api/require-auth
router.get(
   '/require-auth',
   requireAuth,
   (req, res) => {
      return res.json(req.user);
   }
);

module.exports = router;
