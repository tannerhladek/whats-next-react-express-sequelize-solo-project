const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User } = require('../../db/models');

const router = express.Router();


// RESTORE SESSION USER - allows us to refresh page and maintain user logged in status
router.get('/', restoreUser, (req, res) => {
   const { user } = req;
   if (user) {
      return res.json({
         user: user.toSafeObject()
      });
   } else return res.json({});
});


// LOG IN
//log in validators
const validateLogin = [
   check('credential')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Please provide a valid email or username.'),
   check('password')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a password.'),
   handleValidationErrors,
];

// log in POST route
router.post('/', validateLogin, asyncHandler(async (req, res, next) => {
   const { credential, password } = req.body;

   const user = await User.login({ credential, password });

   if (!user) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return next(err);
   }

   await setTokenCookie(res, user);

   return res.json({
      user
   });
}));


// LOG OUT
router.delete('/', (_req, res) => {
   res.clearCookie('token');
   return res.json({ message: 'success' });
});



module.exports = router;
