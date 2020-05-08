/* eslint-disable no-magic-numbers */
'use strict';

const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const MenuSchema = new Schema(
  {
    category: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    pairing: {
      type: String,
      required: false
    },
    prepareTime: {
      type: Number,
      required: false
    },
    ingredients: {
      productName: {
        type: String
      },
      quantity: {
        type: Number
      }
    }
  },
  {
    collection: `menu`
  }
);

module.exports = mongoose.model(`Menu`, MenuSchema);
