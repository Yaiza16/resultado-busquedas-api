const express = require("express");
const products = require("../controllers/productsController");
const router = express.Router();
const multer = require("multer");
const { route } = require("express/lib/router");

// Step 5 - set up multer for storing uploaded files

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

var upload = multer({ storage: storage });

router.route("/").get(products.getAllProducts).post(upload.single("image"), products.createProduct);
router.route("/:id").delete(products.deleteProduct);
router.route("/:id/like").patch(products.updateLike);
module.exports = router;
