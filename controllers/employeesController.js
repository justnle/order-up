/* eslint-disable object-shorthand */
/* eslint-disable arrow-parens */
/* eslint-disable no-magic-numbers */

'use strict';

const db = require(`../models`);

module.exports = {
  findAll: function (req, res) {
    db.Employee.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Employee.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Employee.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Employee.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Employee.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeMany: function (req, res) {
    console.log(`From controller:`);
    console.log(req);
    db.Employee.deleteMany({
      _id: {
        $in: req.body.arr
      }
    })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  }
};
