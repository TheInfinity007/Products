var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
	category: String,
	name: String,
	price: Number,
	cover: String
});

module.exports = mongoose.model("Product", productSchema);