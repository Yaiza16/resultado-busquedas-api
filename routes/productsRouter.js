const express = require("express");
const products = require("../controllers/productsController");
const router = express.Router();

router.route("/").get(products.getAllProducts).post(products.createProduct);
module.exports = router;
