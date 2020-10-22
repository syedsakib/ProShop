const express = require('express');
const authMiddleware = require('../middleWare/authMiddleware');
const orderController = require('../controllers/orderController');

const router = express.Router();

router
  .route('/')
  .post(authMiddleware.protect, orderController.addOrderItems)
  .get(authMiddleware.protect, authMiddleware.admin, orderController.getOrders);
router
  .route('/myorders')
  .get(authMiddleware.protect, orderController.getMyOrders);

router.route('/:id').get(authMiddleware.protect, orderController.getOrderById);

router
  .route('/:id/pay')
  .put(authMiddleware.protect, orderController.updateOrderToPaid);

router
  .route('/:id/deliver')
  .put(authMiddleware.protect, orderController.updateOrderToDelivered);

module.exports = router;
