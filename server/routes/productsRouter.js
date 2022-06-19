const express = require("express");
const products = require("../controllers/productsController");
const router = express.Router();

router.route("/").get(products.getAllProducts).post(products.createProduct);
router.route("/:id").delete(products.deleteProduct);
router.route("/:id/like").patch(products.updateLike);
module.exports = router;
