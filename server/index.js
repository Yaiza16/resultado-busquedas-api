const express = require("express");
var bodyParser = require("body-parser");

require("dotenv").config();
const connectDb = require("./config/db");
const productRouter = require("./routes/productsRouter");
var cors = require("cors");

let app = express();
// CONNECT DATABASE
connectDb();

// MIDDLEWARES
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
app.use("/api/products", productRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
