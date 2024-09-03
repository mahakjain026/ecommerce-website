const Reviews = require("../models/review.model");
const createReview = async (req, res) => {
  try {
    const { productId, rating, comment, userId } = req.body;
    const review = new Reviews({ productId, rating, comment, userId });
    const savedReview = await review.save();
    const newReview = await Reviews.findById(savedReview._id).populate(
      "userId"
    );
    return res.status(201).json(newReview);
  } catch (error) {
    return res.status(500).json({ message: "Something went Wrong" });
  }
};

const getReview = async (req, res) => {
  try {
    const productId = req.query.productId;
    const reviews = await Reviews.find({ productId }).populate("userId");
    return res.status(200).json({ reviews });
  } catch (error) {
    return res.status(500).json({ message: "Something went Wrong" });
  }
};

const updateReviews = async (req, res) => {
  try {
    const reviewId = req.query.id;
    const { rating, comment } = req.body;
    const updateReviews = await Reviews.findByIdAndUpdate(
      { _id:reviewId },
      { rating, comment },
      {
        new: true,
      }
    );
    if (!updateReviews) {
      return res.status(404).json({ message: "review not found" });
    }

    return res.status(200).json({ updateReviews });
  } catch (error) {
    return res.status(500).json({ message: "Something went Wrong" });
  }
};

const deleteReviews = async (req, res) => {
  try {
    const reviewId = req.query.id;
    const deleteReviews = await Reviews.findByIdAndDelete({_id:reviewId });
    if (!deleteReviews) {
      return res.status(404).json({ message: "review not found" });
    }
    return res.status(200).json({ message: "Review is Deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Something went Wrong" });
  }
};

module.exports = { createReview, getReview, updateReviews, deleteReviews };
