const mongoose = require('mongoose');
const algoliasearch = require('algoliasearch');
const dotenv = require('dotenv');
const connectDB = require('../mongoConnection.js'); // Import the connectDB function
const Product = require('../src/models/product.model.js'); 

dotenv.config({ path: '../.env' }); 
// Algolia credentials
const client = algoliasearch(process.env.Algolia_ApplicationID, process.env.Algolia_APIKey);
const index = client.initIndex('Products');

const main = async () => {
  try {
    await connectDB(); 
    const products = await Product.find().lean().exec();
    
    // Push data to Algolia
    await index.saveObjects(products.map(product => ({
      ...product,
      objectID: product._id.toString()
    })), { autoGenerateObjectIDIfNotExist: true });

    console.log('Data imported into Algolia');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connection.close();
    }
  }
};

main().catch(console.error);
