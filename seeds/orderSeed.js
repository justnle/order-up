'use strict';

const orderSeed = [
  {
    tableNumber: 1,
    order: [
      {
        itemSeat: 1,
        itemName: `some food`,
        itemPrepareTime: 100
      }
    ]
  },
  {
    tableNumber: 2,
    order: [
      {
        itemSeat: 1,
        itemName: `some stuff`,
        itemPrepareTime: 1
      },
      {
        itemSeat: 2,
        itemName: `some chow`,
        itemPrepareTime: 2
      },
      {
        itemSeat: 3,
        itemName: `some food`,
        itemPrepareTime: 3
      }
    ]
  },
  {
    tableNumber: 3,
    order: [
      {
        itemSeat: 4,
        itemName: `food`,
        itemPrepareTime: 10
      },
      {
        itemSeat: 6,
        itemName: `things`,
        itemPrepareTime: 11
      }
    ]
  },
  {
    tableNumber: 4,
    order: [
      {
        itemSeat: 10,
        itemName: `whatever`,
        itemPrepareTime: 100
      },
      {
        itemSeat: 11,
        itemName: `water`,
        itemPrepareTime: 60
      },
      {
        itemSeat: 2,
        itemName: `some food`,
        itemPrepareTime: 120
      }
    ]
  }
];

module.exports = {
  orderSeed
};
