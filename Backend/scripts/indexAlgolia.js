// const mongoose = require('mongoose');
// const algoliasearch = require('algoliasearch');
// const Product = require('../src/models/product.model.js'); // Path to your Product model
// const dotenv = require('dotenv');
// const connectDB = require('../mongoConnection.js'); // Assuming you have a connection module
// // const { getReview } = require('../src/controller/review.controller.js');
// const Reviews = require('../src/models/review.model.js');

// dotenv.config({ path: '../.env' });

// const client = algoliasearch(process.env.Algolia_ApplicationID, process.env.Algolia_APIKey);
// const index = client.initIndex('Products');


// // Function to push products to Algolia
// const indexAlgolia = async () => {
//   try {
//     await connectDB(); // Make sure to connect to the database
//     const products = await Product.find().lean().exec();

//     // Index products to Algolia
//     await index.saveObjects(products.map(async(product) => {

//       // addReview(product._id);
//       const review = await Reviews.findOne({ productId: product._id });
//       // algoliaReview.push(review); 
//       console.log("####algoliaReview", review);


//       return({
//       ...product,
//       objectID: product._id.toString(),
//       // reviews: review ? review : 'No Reviews',
//     })}), { autoGenerateObjectIDIfNotExist: true });

//     console.log('Data imported into Algolia');
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   } finally {
//     if (mongoose.connection.readyState !== 1) {
//       await mongoose.connection.close(); // Close connection if not already closed
//     }
//   }
// };

// module.exports = indexAlgolia;



const mongoose = require('mongoose');
const algoliasearch = require('algoliasearch');
const Product = require('../src/models/product.model.js');
const dotenv = require('dotenv');
const connectDB = require('../mongoConnection.js');
const Reviews = require('../src/models/review.model.js');

dotenv.config({ path: '../.env' });

const client = algoliasearch(process.env.Algolia_ApplicationID, process.env.Algolia_APIKey);
const index = client.initIndex('Products');

// Function to push products to Algolia
const indexAlgolia = async () => {
  try {
    await connectDB(); // Make sure to connect to the database
    const products = await Product.find().lean().exec(); // Get products

    // Fetch reviews and index products to Algolia
    const productWithReviews = await Promise.all(products.map(async (product) => {
      const reviews = await Reviews.find({ productId: product._id });
      const ratings = reviews
      const reviewslength = reviews?.length;
      let averageReviews;
      const comment = reviews.map((review)=>review.comment);
      console.log("@@@@@@@@@@@@@@review",comment)
      if (reviewslength) {
        averageReviews = ratings.map((rating) => parseFloat(rating.rating)).reduce(
          (accumulator, currentValue) => (accumulator + currentValue), 0) / reviewslength;
        return {
          ...product,
          objectID: product._id.toString(),
          rating: averageReviews, // Include reviews if available
          reviews: comment ? comment : "no reviews",
        };
      }

      return {
        ...product,
        objectID: product._id.toString(),
        reviews: comment? comment : "no reviews",
      };

    }));

    // Index products into Algolia
    await index.saveObjects(productWithReviews, { autoGenerateObjectIDIfNotExist: true });

    console.log('Data imported into Algolia');
  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close(); // Ensure proper closure of DB connection
    }
  }
};

module.exports = indexAlgolia;

