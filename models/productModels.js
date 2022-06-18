const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: [true, "Product must have a displayName"],
    unique: true,
  },
  image: {
    type: String,
    // required: true,
  },
  price: {
    type: String,
    required: [true, "Product must have a price"],
  },
  like: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
