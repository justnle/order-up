'use strict';

const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const InventorySchema = new Schema({
  productName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  vendorName: {
    type: String,
    required: true
  },
  vendorContactName: {
    type: String,
    required: true
  },
  vendorPhoneNumber: {
    type: String,
    required: true
  },
  vendorEmail: {
    type: String,
    required: true
  },
  productCost: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model(`Inventory`, InventorySchema);
