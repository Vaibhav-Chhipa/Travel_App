const { Schema, model } = require('mongoose');

const packageSchema = new Schema(
  {
    title: { type: String, required: true },
    slug:  { type: String, required: true, unique: true },
    imageUrl: String,
    price: Number,
    days: Number,
    sold: { type: Number, default: 0 }, 
  },
  { timestamps: true }
);

module.exports = model('Package', packageSchema);
