const Category = require("../models/category.model");

const CreateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(404).json({ message: "Name is required" });
    }
    const newCategory = new Category({ name });
    await newCategory.save();
    return res
      .status(201)
      .json({
        message: "Category created successfully",
        category: newCategory,
      });
  } catch (error) {
    return res.status(500).json({ message: "Something went Wrong" });
  }
};

const getAllCategories = async(req,res)=>{
  try {
    const categories = await Category.find({});
    return res.status(200).json(categories)
  } catch (error) {
    return res.status(500).json({ message: "Something went Wrong" });
  }
}

const getCategoryById = async (req, res) => {
  try {
    const Id = req.params.Id;
    const category = await Category.findById({ _id: Id });
    return res.status(200).json({ category: category });
  } catch (error) {
    return res.status(500).json({ message: "Something went Wrong" });
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const Id = req.params.Id;
    const category = await Category.findByIdAndDelete({_id:Id});
    return res.status(200).json({ message: "Category is deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Something went Wrong" });
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const Id = req.params.Id;
    const updates = req.body;
    options = { new: true };
    const category = await Category.findByIdAndUpdate(Id, updates, options);
    return res
      .status(200)
      .json({ message: "category is updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Something went Wrong" });
  }
};

module.exports = {
  CreateCategory,
  getCategoryById,
  deleteCategoryById,
  updateCategoryById,
  getAllCategories
};
