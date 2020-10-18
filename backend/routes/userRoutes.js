const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleWare/authMiddleware');

const router = express.Router();

router.post('/login', userController.authUser);

router.route('/').post(userController.registerUser);

router
  .route('/profile')
  .get(authMiddleware.protect, userController.getUserProfile)
  .put(authMiddleware.protect, userController.updateUserProfile);

module.exports = router;
