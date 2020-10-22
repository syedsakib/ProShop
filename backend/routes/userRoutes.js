const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleWare/authMiddleware');

const router = express.Router();

router.post('/login', userController.authUser);

router
  .route('/')
  .post(userController.registerUser)
  .get(authMiddleware.protect, authMiddleware.admin, userController.getUsers);

router
  .route('/profile')
  .get(authMiddleware.protect, userController.getUserProfile)
  .put(authMiddleware.protect, userController.updateUserProfile);

router
  .route('/:id')
  .get(authMiddleware.protect, authMiddleware.admin, userController.getUserById)
  .put(authMiddleware.protect, authMiddleware.admin, userController.updateUser)
  .delete(
    authMiddleware.protect,
    authMiddleware.admin,
    userController.deleteUser
  );
module.exports = router;
