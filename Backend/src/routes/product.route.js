const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");

router.post("/products", productController.createProduct);
router.get("/products/productId", productController.getProductById);
router.post("/products/edit-product",productController.updateProduct);
router.get("/products",productController.getAllProducts)
router.delete("/product/delete-product",productController.deleteProduct)

module.exports = router;
