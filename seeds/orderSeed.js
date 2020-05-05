'use strict';

const orderSeed = [
  {
    tableNumber: 1,
    order: [
      {
        itemSeat: 1,
        itemName: `Charcuterie Board`,
        itemPrepareTime: 10,
        itemPrice: `10.00`,
        itemCount: 1
      }
    ],
    employeeName: `Wyatt Ventura`
  },
  {
    tableNumber: 2,
    order: [
      {
        itemSeat: 1,
        itemName: `Oysters 6`,
        itemPrepareTime: 15,
        itemPrice: `18.00`,
        itemCount: 1
      },
      {
        itemSeat: 2,
        itemName: `Grilled Veggie Sandwich`,
        itemPrepareTime: 20,
        itemPrice: `12.00`, 
        itemCount: 1
      },
      {
        itemSeat: 3,
        itemName: `Malbec`,
        itemPrepareTime: 5,
        itemPrice: `7.00`,
        itemCount: 1 
      }
    ],
    employeeName: `Paris Molloy`
  },
  {
    tableNumber: 3,
    order: [
      {
        itemSeat: 4,
        itemName: `Pinot Grigio`,
        itemPrepareTime: 5,
        itemPrice: `7.00`,
        itemCount: 1
      },
      {
        itemSeat: 6,
        itemName: `Pilsner`,
        itemPrepareTime: 5,
        itemPrice: `6.00`,
        itemCount: 1
      }
    ],
    employeeName: `Wyatt Ventura`
  },
  {
    tableNumber: 4,
    order: [
      {
        itemSeat: 10,
        itemName: `NY Strip Steak Frites`,
        itemPrepareTime: 25,
        itemPrice: `30.00`,
        itemCount: 1
      },
      {
        itemSeat: 11,
        itemName: `Roasted Lemon Garlic Chicken`,
        itemPrepareTime: 25,
        itemPrice: `20.00`,
        itemCount: 1
      },
      {
        itemSeat: 2,
        itemName: `Amber`,
        itemPrepareTime: 5,
        itemPrice: `6.00`,
        itemCount: 1
      }
    ],
    employeeName: `Fahima Ayers`
  }
];

module.exports = {
  orderSeed
};
