const Product = require("../models/productModels");
// const multer = require("multer");
// const upload = multer({ dest: "/uploads/" });

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    console.log(req.body);
    // console.log(req.file);
    const product = await Product.create({ ...req.body });

    res.status(201).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateLike = async (req, res) => {
  try {
    const isLiked = req.body.isLiked;
    const product = await Product.findById(req.params.id);
    product.like = isLiked;
    await product.save();
    res.status(200);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
