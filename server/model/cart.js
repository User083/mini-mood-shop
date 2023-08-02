const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  item: String,
  quantity: Number,
});

module.exports = mongoose.model("Cart", cartSchema);
