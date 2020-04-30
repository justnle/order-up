'use strict';
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const ArchivedOrder = new Schema({
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
