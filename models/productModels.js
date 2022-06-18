const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: [true, "Product must have a displayName"],
    unique: true,
  },
  image: {
    data: Buffer,
    contentType: String,
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
