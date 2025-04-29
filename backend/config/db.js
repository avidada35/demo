const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connect to the MongoDB database using the URI from the .env file
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    // Exit the process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
