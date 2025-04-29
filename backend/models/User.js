const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,         // Email is required
    unique: true,           // Ensure the email is unique
    lowercase: true,        // Convert email to lowercase automatically
  },
  password: {
    type: String,
    required: true,         // Password is required
  },
});

// Export the User model based on the schema
module.exports = mongoose.model("User", UserSchema);
