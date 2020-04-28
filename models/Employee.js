'use strict';

const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  id: {
    type: Number,
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
    min: 1
  }
});

module.exports = mongoose.model(`Employee`, EmployeeSchema);
