/* eslint-disable max-len */
'use strict';

const mongoose = require(`mongoose`);
const db = require(`../models`);

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/orderup`, {
  useNewUrlParser: true
});

const employeeSeed = [
  {
    id: 123456,
    name: `Zahra Merrill`,
    position: `Manager`,
    permission: 1
  },
  {
    id: 452885,
    name: `Anish Mcgowan`,
    position: `Manager`,
    permission: 1
  },
  {
    id: 154156,
    name: `Wyatt Ventura`,
    position: `Waiter`,
    permission: 2
  },
  {
    id: 369979,
    name: `Salahuddin Haas`,
    position: `Waiter`,
    permission: 2
  },
  {
    id: 667475,
    name: `Fahima Ayers`,
    position: `Waitress`,
    permission: 2
  },
  {
    id: 953852,
    name: `Paris Molloy`,
    position: `Waitress`,
    permission: 2
  },
  {
    id: 961527,
    name: `Leyla Barr`,
    position: `Host`,
    permission: 2
  },
  {
    id: 302095,
    name: `Mea Hoover`,
    position: `Head Chef`,
    permission: 3
  },
  {
    id: 782914,
    name: `Nadia Huber`,
    position: `Cook`,
    permission: 4
  },
  {
    id: 120246,
    name: `Kendra Melendez`,
    position: `Cook`,
    permission: 4
  }
];

db.Employees.remove({})
  .then(() => db.Employees.collection.insertMany(employeeSeed))
  .then(data => {
    console.log(`${data.result.n } records inserted!`);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

