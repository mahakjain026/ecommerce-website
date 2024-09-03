const Cart = require("../models/cart.model");

const addToCart = async (req, res) => {
  try {
    const { productId, userId, cartQuantity } = req.body;
    if (!productId || !userId || !cartQuantity) {
      return res.status(400).json({ message: "All fields are required" });
    }
    let cart = await Cart.findOne({ userId, productId });
    if (cart) {
      cart.quantity += parseInt(cartQuantity);
    } else {
      cart = new Cart({ userId, productId, cartQuantity });
    }

    const savedCart = await cart.save();
    return res.status(200).json({ message: "Added to cart" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const getCartByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }
    const cart = await Cart.findOne({ userId }).populate("productId");
    res.status(200).json({ cart });
  } catch (error) {
    return res.status(500).json({ message: "Something went Wrong" });
  }
};

const deleteCartByUserId = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Cart ID is required" });
    }
    const cart = await Cart.findByIdAndDelete({ _id: id });
    console.log("cart", cart);
    if (!cart) {
      return res.status(404).json({ message: "cart not found" });
    }
    res.status(200).json({ message: "Cart is deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Something went Wrong" });
  }
};

const deleteAllCartsById = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("userId", userId);
    const result = await Cart.deleteMany({ userId });
    res
      .status(200)
      .json({
        message: `${result.deletedCount} carts are Deleted Successfully!`,
      });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Something went Wrong" });
  }
};

module.exports = {
  addToCart,
  getCartByUserId,
  deleteAllCartsById,
  deleteCartByUserId,
};
