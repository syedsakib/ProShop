const express = require('express');
const authMiddleware = require('../middleWare/authMiddleware');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.route('/').post(authMiddleware.protect, orderController.addOrderItems);

module.exports = router;
