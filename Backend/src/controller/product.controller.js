const Product = require("../models/product.model");
const reviews = require("../models/review.model");
const indexAlgolia = require('../../scripts/indexAlgolia')

const createProduct = async (req, res) => {
  try {
    const { name, description, quantity, price, imageUrl, category } = req.body;
    const product = new Product({
      name,
      description,
      quantity,
      price,
      imageUrl,
      category,
    });
    await product.save();
    await indexAlgolia();
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})
      .populate("reviews");
    res.status(200).json(products);
  } catch (error) {
    console.log("error",error)
    return res.status(400).json({ message: "Something went wrong" });
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = req.query.id;
    console.log("productId",productId)
    const product = await Product.findOne({ _id: productId }).populate("reviews");
    console.log("product",product)
    if (!product) {
      return res.status(404).json({ message: "Product not Found" });
    }
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.query.id;
    console.log("Id", productId);
    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      req.body,
      {
        new: true,
      }
    );
    if (!product) {
      return res.status(404).json({ message: "Product not Found" });
    }
    await indexAlgolia();
    return res
      .status(201)
      .json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.query.id;
    console.log("productId", productId);
    const deleteProduct = await Product.findByIdAndDelete({ _id: productId });
    if (!deleteProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    await indexAlgolia();
    return res.status(201).json({ message: "Product is deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createProduct,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
