const express = require("express");
const router = express.Router();
const orderController = require("../controller/order.controller");

router.post("/orders",orderController.createOrder)
router.get("/orders/:userId",orderController.getOrderByUserId)
router.get("/orders/:id",orderController.getOrderById);
router.post("/orders/update-order/:id",orderController.updateOrder);
router.delete("/orders/delete-order/:id",orderController.deleteOrder);
 
module.exports = router;