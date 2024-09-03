const mongoose = require("mongoose");
const slugify = require("slugify");
const algoliasearch = require('algoliasearch');
const env = require("dotenv");
env.config({path:"../.env"});
const client = algoliasearch(`${process.env.Algolia_ApplicationID}`, `${process.env.Algolia_APIKey}`);
const index = client.initIndex('Products');

// const reviewSchema = new mongoose.Schema({
//     user: {
//         type: String,
//         required: true
//     },
//     rating: {
//         type: Number,
//         required: true,
//         min: 1,
//         max: 5
//     },
//     comment: {
//         type: String,
//         required: true
//     }
// }, {
//     timestamps: true
// });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  slug: {
    type: String,
    unique: true,
  },
  price: {
    type: String,
    required: [true, "Please add a price"],
  },
  quantity: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  imageUrl: {
    type: String,
    required: [true, "Please add an image URL"],
  },
  category: {
    type: String,
    required: true,
  },
  // reviews:[ {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref:"Reviews"
  // }],
});

productSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("name")) {
      return next();
    }
    this.slug = await slugify(this.name, { lower: true, strict: true });
    next();
  } catch (error) {
    console.log("error", error);
  }
});

// Post-save hook to update Algolia index
productSchema.post('save', function (doc) {
  index.saveObject({
    objectID: doc._id.toString(),
    ...doc.toObject(),
  }).catch(err => console.error('Error indexing document to Algolia', err));
});

// Post-remove hook to delete from Algolia index
productSchema.post('remove', function (doc) {
  index.deleteObject(doc._id.toString()).catch(err => console.error('Error deleting document from Algolia', err));
});


const Product = mongoose.model("Product", productSchema);
module.exports = Product;
