'use strict';

const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const TimeSchema = new Schema(
  {
    employeeId: {
      type: String,
      required: true
    },
    employeeName: {
      type: String,
      required: true
    },
    clockIn: {
      type: String,
      require: true
    },
    clockOut: {
      type: String
    },
    onTheClock: {
      type: Boolean,
      default: null
    }
  },
  {
    collection: `time`
  }
);

module.exports = mongoose.model(`Time`, TimeSchema);
