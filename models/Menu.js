"use strict";

const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pairing: {
    type: String,
    required: true,
  },
  prepareTime: {
    type: Number,
    required: true,
  },
  itemCount: {
    type: Number,
    default: null,
  },
});

module.exports = mongoose.model(`Menu`, MenuSchema);
