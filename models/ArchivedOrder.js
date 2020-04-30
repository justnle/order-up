'use strict';
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const ArchivedOrderSchema = new Schema({
  tableNumber: {
    type: Number,
    required: true
  },
  order: [
    {
      itemSeat: {
        type: Number,
        required: true
      },
      itemName: {
        type: String,
        required: true
      }
    }
  ],
  orderTime: {
    type: String,
    required: true,
    default: Date.now()
  }
});
module.exports = mongoose.model(`ArchivedOrder`, ArchivedOrderSchema);
