'use strict';

const { inventorySeed } = require(`./inventorySeed`);
const { employeeSeed } = require(`./employeeSeed`);
const { menuSeed } = require(`./menuSeed`);

const mongoose = require(`mongoose`);
const db = require(`../models`);

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/orderup`, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

db.Inventory.deleteMany({})
  .then(() => db.Inventory.collection.insertMany(inventorySeed))
  .then(data => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Employee.deleteMany({})
  .then(() => db.Employee.collection.insertMany(employeeSeed))
  .then(data => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Menu.deleteMany({})
  .then(() => db.Menu.collection.insertMany(menuSeed))
  .then(data => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
