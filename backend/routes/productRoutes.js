const express = require('express');
const productController = require('../controllers/productController');
const authMiddleware = require('../middleWare/authMiddleware');

const router = express.Router();

router
  .route('/')
  .get(productController.getProducts)
  .post(
    authMiddleware.protect,
    authMiddleware.admin,
    productController.createProduct
  );
router
  .route('/:id')
  .get(productController.getProductById)
  .delete(
    authMiddleware.protect,
    authMiddleware.admin,
    productController.deleteProduct
  )
  .put(
    authMiddleware.protect,
    authMiddleware.admin,
    productController.updateProduct
  );

router
  .route('/:id/reviews')
  .post(authMiddleware.protect, productController.createProductReview);

module.exports = router;
