const { Schema, model } = require('mongoose');

const destinationSchema = new Schema(
  {
    name: { type: String, required: true },
    state: String,
    imageUrl: String,
    priceFrom: Number,
  },
  { timestamps: true }
);

module.exports = model('Destination', destinationSchema);
