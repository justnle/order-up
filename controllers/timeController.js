/* eslint-disable object-shorthand */
/* eslint-disable arrow-parens */
/* eslint-disable no-magic-numbers */

'use strict';

const db = require(`../models`);

module.exports = {
  findAll: function (req, res) {
    db.Time.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Time.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Time.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Time.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateMany: function (req, res) {
    db.Time.updateMany(
      {
        _id: { $in: req.body.idArr }
      },
      {
        $set: req.body.updateData
      }
    )
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => res.json(err));
  },
  remove: function (req, res) {
    db.Time.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeMany: function (req, res) {
    db.Time.deleteMany({
      _id: {
        $in: req.body.arr
      }
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  }
};
