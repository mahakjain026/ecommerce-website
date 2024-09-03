const express = require("express");
const router = express.Router();
const reviewController = require("../controller/review.controller");

router.post("/reviews", reviewController.createReview);
router.get("/reviews/productId", reviewController.getReview);
router.post("/reviews/edit-review", reviewController.updateReviews);
router.delete("/reviews/delete-review", reviewController.deleteReviews);

module.exports = router;
