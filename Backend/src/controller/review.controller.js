const Reviews = require("../models/review.model");
const Product = require("../models/product.model");
const indexAlgolia = require('../../scripts/indexAlgolia')

const createReview = async (req, res) => {
  try {
    const { productId, rating, comment, userId } = req.body;
    const review = new Reviews({ productId, rating, comment, userId });
    const savedReview = await review.save();
    await Product.findByIdAndUpdate(
      productId,
      { $push: { reviews: savedReview._id } }, // Push review ID to the product's reviews array
      { new: true }
    );
    const newReview = await Reviews.findById(savedReview._id).populate(
      "userId"
    );
    // await indexAlgolia();
    return res.status(201).json(newReview);
  } catch (error) {
    console.log("reviews",error)
    return res.status(500).json({ message: "Something went Wrong" });
  }
};

const getReview = async (req, res) => {
  try {
    const productId = req.query.productId;
    const reviews = await Reviews.find({ productId }).populate("userId");
    return res.status(200).json({ reviews });
  } catch (error) {
    console.log("reviews",error)
    return res.status(500).json({ message: "Something went Wrong" });
  }
};

const updateReviews = async (req, res) => {
  try {
    const reviewId = req.query.id;
    const { rating, comment } = req.body;
    const updateReviews = await Reviews.findByIdAndUpdate(
      { _id: reviewId },
      { rating, comment },
      {
        new: true,
      }
    );
    if (!updateReviews) {
      return res.status(404).json({ message: "review not found" });
    }
    // await indexAlgolia();
    return res.status(200).json({ updateReviews });
  } catch (error) {
    console.log("reviews",error)
    return res.status(500).json({ message: "Something went Wrong" });
  }
};

const deleteReviews = async (req, res) => {
  try {
    const reviewId = req.query.id;
    const review = await Reviews.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Delete the review
    await review.remove();

    // Update the product to remove this review
    await Product.findByIdAndUpdate(
      review.productId,
      { $pull: { reviews: reviewId } } // Pull the review ID from the product's reviews array
    );
    // await indexAlgolia();
    return res.status(200).json({ message: "Review is Deleted Successfully" });
  } catch (error) {
    console.log("reviews",error)
    return res.status(500).json({ message: "Something went Wrong" });
  }
};

module.exports = { createReview, getReview, updateReviews, deleteReviews };
