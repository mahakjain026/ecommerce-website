const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Please add a name"],
    unique: true,
  },
  imageUrl:{
    type:String,
    required: [true, "Please add an image URL"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Category = mongoose.model('Category',categorySchema);
module.exports = Category
