const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

let isConnected;

const connectDB = async () => {
  // console.log("process.env.Mongo_username",process.env.Mongo_username,process.env.Mongo_password)
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.Mongo_username}:${process.env.Mongo_password}@ecommerce.i88gej5.mongodb.net/${process.env.Mongo_DATABASE}?retryWrites=true&w=majority`
    );
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

module.exports = connectDB;
