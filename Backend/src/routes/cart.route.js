const express = require("express");
const router = express.Router();
const cartController = require("../controller/cart.controller");

router.post("/cart",cartController.addToCart);
router.get("/cart/user/:userId",cartController.getCartByUserId)
router.delete("/cart/:id",cartController.deleteCartByUserId)
router.delete("/carts/user/:userId",cartController.deleteAllCartsById);

module.exports = router;