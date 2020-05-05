'use strict';

const orderSeed = [
  {
    tableNumber: 1,
    seatOrders: [
      {
        seatNumber: 1,
        menuItems: [
          {
            itemName: `Charcuterie Board`,
            itemPrepareTime: 10,
            itemPrice: `10.00`
          }
        ]
      }
    ],
    employeeName: `Wyatt Ventura`
  },
  {
    tableNumber: 2,
    seatOrders: [
      {
        seatNumber: 1,
        menuItems: [
          {
            itemName: `Oysters 6`,
            itemPrepareTime: 15,
            itemPrice: `18.00`
          }
        ]
      },
      {
        seatNumber: 2,
        menuItems: [
          {
            itemName: `Grilled Veggie Sandwich`,
            itemPrepareTime: 20,
            itemPrice: `12.00`
          },
          {
            itemName: `Pinot Grigio`,
            itemPrepareTime: 5,
            itemPrice: `7.00`
          }
        ]
      },
      {
        seatNumber: 3,
        menuItems: [
          {
            itemName: `Malbec`,
            itemPrepareTime: 5,
            itemPrice: `7.00`
          }
        ]
      }
    ],
    employeeName: `Paris Molloy`
  },
  {
    tableNumber: 3,
    seatOrders: [
      {
        seatNumber: 4,
        menuItems: [
          {
            itemName: `Pinot Grigio`,
            itemPrepareTime: 5,
            itemPrice: `7.00`
          }
        ]
      },
      {
        seatNumber: 6,
        menuItems: [
          {
            itemName: `Pilsner`,
            itemPrepareTime: 5,
            itemPrice: `6.00`
          }
        ]
      }
    ],
    employeeName: `Wyatt Ventura`
  },
  {
    tableNumber: 3,
    seatOrders: [
      {
        seatNumber: 4,
        menuItems: [
          {
            itemName: `Pinot Grigio`,
            itemPrepareTime: 5,
            itemPrice: `7.00`
          }
        ]
      },
      {
        seatNumber: 6,
        menuItems: [
          {
            itemName: `Pilsner`,
            itemPrepareTime: 5,
            itemPrice: `6.00`
          }
        ]
      }
    ],
    employeeName: `Fahima Ayers`
  }
];

module.exports = {
  orderSeed
};
