'use strict';

const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    minlength: 1
  },
  position: {
    type: String,
    required: true
  },
  permission: {
    type: Number,
    min: 0
  },
  rate: {
    type: Number,
    min: 4,
    required: true
  }
});

module.exports = mongoose.model(`Employee`, EmployeeSchema);
