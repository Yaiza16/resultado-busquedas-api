const express = require("express");
require("dotenv").config();
const connectDb = require("./config/db");
const productRouter = require("./routes/productsRouter");

let app = express();
// CONNECT DATABASE
connectDb();
app.use(express.json({ limit: "50mb" }));

app.use("/api/products", productRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
