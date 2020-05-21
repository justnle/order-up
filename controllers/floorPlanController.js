/* eslint-disable no-magic-numbers */
'use strict';

const db = require(`../models`);

module.exports = {
  findAll (req, res) {
    db.FloorPlan.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById (req, res) {
    db.FloorPlan.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create (req, res) {
    db.FloorPlan.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update (req, res) {
    db.FloorPlan.findOneAndUpdate({_id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove (req, res) {
    db.FloorPlan.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
