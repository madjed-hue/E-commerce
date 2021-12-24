const express = require("express");
const {
  getAllProduct,
  createPoduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteProductReviews,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewear/auth");

const router = express.Router();

//getAll Products Route
router.route("/products").get(getAllProduct);

// Create Product Route
router
  .route("/admin/products/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createPoduct);

//Update Delete and get Details Product
router
  .route("/admin/products/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteProductReviews);

module.exports = router;
