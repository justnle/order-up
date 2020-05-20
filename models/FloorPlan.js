'use strict';

const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const FloorPlanSchema = new Schema({
  tableNumber: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model(`FloorPlan`, FloorPlanSchema);
