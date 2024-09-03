const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./mongoConnection.js");
const userRoutes = require("./src/routes/user.route");
const productRoutes = require("./src/routes/product.route");
const reviewRoutes = require("./src/routes/review.route");
const cartRoutes = require("./src/routes/cart.route");
const orderRoutes = require("./src/routes/order.route");
const categoryRoutes = require("./src/routes/category.route");

dotenv.config();

const app = express();

connectDB().then(() => {
  app.use(cors());
  app.use(express.json());

  app.use("/api", userRoutes);
  app.use("/api", productRoutes);
  app.use("/api", reviewRoutes);
  app.use("/api", cartRoutes);
  app.use("/api", orderRoutes);
  app.use("/api", categoryRoutes);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Failed to start server:', error);
});
