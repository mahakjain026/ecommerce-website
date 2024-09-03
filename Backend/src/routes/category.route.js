const express = require("express");
const router = express.Router();
const CategoryController = require("../controller/category.controller")

router.post("/category",CategoryController.CreateCategory)
router.get("/category/:Id",CategoryController.getCategoryById);
router.delete("/category/:Id",CategoryController.deleteCategoryById);
router.patch("/category/:Id",CategoryController.updateCategoryById);
router.get("/category",CategoryController.getAllCategories);

module.exports = router;