/* eslint-disable max-nested-callbacks */
'use strict';

const router = require(`express`).Router();
const bcrypt = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);
const keys = require(`../../config/keys`);

const validateLoginInput = require(`../../validation/login`);

const User = require(`../../models/User`);

router.post(`/addemployee`, (req, res) => {
  User.findOne({ pin: req.body.password }).then(user => {
    if (user) {
      return res.status(400).json({ password: `PIN already exists` });
    } else {
      const newEmployee = new User({
        name: req.body.name,
        password: req.body.password
      });

      bcrypt.getSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) { throw err; }
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post(`/home`, (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const pin = req.body.password;

  User.findOne({ pin }).then(user => {
    if (!user) {
      return res.status(404).json({ pinnotfound: `PIN not found`});
    }

    bcrypt.compare(pin, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926
          },
          (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`
            });
          }
        );
      } else {
        return res.status(400).json({ pinincorrect: `PIN incorrect `});
      }
    });
  });
});

module.exports = router;
