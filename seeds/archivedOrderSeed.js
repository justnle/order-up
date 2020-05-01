'use strict';

const archivedOrderSeed = [
  {
    tableNumber: 1,
    order: [
      {
        itemSeat: 1,
        itemName: `some food`
      }
    ]
  },
  {
    tableNumber: 2,
    order: [
      {
        itemSeat: 1,
        itemName: `some stuff`
      },
      {
        itemSeat: 2,
        itemName: `some chow`
      },
      {
        itemSeat: 3,
        itemName: `some food`
      }
    ]
  },
  {
    tableNumber: 3,
    order: [
      {
        itemSeat: 4,
        itemName: `food`
      },
      {
        itemSeat: 6,
        itemName: `things`
      }
    ]
  },
  {
    tableNumber: 4,
    order: [
      {
        itemSeat: 10,
        itemName: `whatever`
      },
      {
        itemSeat: 11,
        itemName: `water`
      },
      {
        itemSeat: 2,
        itemName: `some food`
      }
    ]
  }
];

module.exports = {
  archivedOrderSeed
};
