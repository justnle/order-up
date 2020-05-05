'use strict';

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const VendorSchema = new Schema(
  {
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
    vendorEmailAddress: {
      type: String,
      required: true
    }
  },
  {
    collection: `Vendor`
  }
);
module.exports = mongoose.model(`Vendor`, VendorSchema);
