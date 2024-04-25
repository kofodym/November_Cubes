// models/FoodItem.js
const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true }
  //createdAt :{type:date, required:true}
});

module.exports = mongoose.model('FoodItem', foodItemSchema);