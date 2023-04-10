const mongoose = require("mongoose");

const startupSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Startup Name"],
    trim: true,
  },
  efficiency: {
    type: Number,
    required: [true, "Please Enter product Efficiency as per algo"],
  },
  profit: {
    type: Number,
    required: [true, "Please Enter startup profit"]
  },
  dept: {
    type: Number,
    default: 0,
  },
  services: {
    type: String,
  },
  category: {
    type: String,
  },
  valuation: {
    type: Number,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        // required: true,
      },
      name: {
        type: String,
        // required: true,
      },
      rating: {
        type: Number,
        // required: true,
      },
      comment: {
        type: String,
        // required: true,
      },
    },
  ],

});

module.exports = mongoose.model("startup", startupSchema);
