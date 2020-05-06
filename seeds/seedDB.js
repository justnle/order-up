'use strict';

const { inventorySeed } = require(`./inventorySeed`);
const { employeeSeed } = require(`./employeeSeed`);
const { menuSeed } = require(`./menuSeed`);
const { orderSeed } = require(`./orderSeed`);
const { archivedOrderSeed } = require(`./archivedOrderSeed`);
const { shiftSeed } = require(`./shiftSeed`);
const mongoose = require(`mongoose`);
const db = require(`../models`);

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/orderup`, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

async function seedDB() {
  const models = [
    {
      modelName: db.Inventory,
      data: inventorySeed
    },
    {
      modelName: db.Employee,
      data: employeeSeed
    },
    {
      modelName: db.Menu,
      data: menuSeed
    },
    {
      modelName: db.ActiveOrder,
      data: orderSeed
    },
    {
      modelName: db.ArchivedOrder,
      data: archivedOrderSeed
    },
    {
      modelName: db.Time,
      data: shiftSeed
    }
  ];
  for (const model of models) {
    await model.modelName.collection
      .deleteMany({})
      .then(() =>
        model.modelName.collection
          .insertMany(model.data)
          .then(res =>
            console.log(
              `${res.result.n} ${model.modelName.collection.name} records inserted!`
            )
          )
      )
      .catch(err => {
        console.error(err);
      });
  }
  process.exit(0);
}

seedDB();
