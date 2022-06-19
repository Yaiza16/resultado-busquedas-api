const mongoose = require("mongoose");

const DB = process.env.DATABASE_NAME.replace("<password>", process.env.DATABASE_PASSWORD);

const connectDb = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDb;
