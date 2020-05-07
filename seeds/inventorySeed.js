'use strict';

const inventorySeed = [
  {
    productName: `Romaine Lettuce`,
    quantity: 36,
    vendorName: `Charlie's Produce`,
    vendorContactName: `Tom`,
    vendorPhoneNumber: `206-625-1412`,
    vendorEmail: `charliesproduce@gmail.com`,
    productCost: `3.85`
  },
  {
    productName: `Potatoes`,
    quantity: 25,
    vendorName: `Charlie's Produce`,
    vendorContactName: `Tom`,
    vendorPhoneNumber: `206-625-1412`,
    vendorEmail: `charliesproduce@gmail.com`,
    productCost: `2.25`
  },
  {
    productName: `Baby Red Potatoes`,
    quantity: 25,
    vendorName: `Charlie's Produce`,
    vendorContactName: `Tom`,
    vendorPhoneNumber: `206-625-1412`,
    vendorEmail: `charliesproduce@gmail.com`,
    productCost: `2.25`
  },
  {
    productName: `Asparagus`,
    quantity: 25,
    vendorName: `Charlie's Produce`,
    vendorContactName: `Tom`,
    vendorPhoneNumber: `206-625-1412`,
    vendorEmail: `charliesproduce@gmail.com`,
    productCost: `2.25`
  },
  {
    productName: `Broccoli`,
    quantity: 30,
    vendorName: `Charlie's Produce`,
    vendorContactName: `Tom`,
    vendorPhoneNumber: `206-625-1412`,
    vendorEmail: `charliesproduce@gmail.com`,
    productCost: `1.00`
  },
  {
    productName: `Carrots`,
    quantity: 20,
    vendorName: `Charlie's Produce`,
    vendorContactName: `Tom`,
    vendorPhoneNumber: `206-625-1412`,
    vendorEmail: `charliesproduce@gmail.com`,
    productCost: `0.50`
  },
  {
    productName: `Onions`,
    quantity: 30,
    vendorName: `Charlie's Produce`,
    vendorContactName: `Tom`,
    vendorPhoneNumber: `206-625-1412`,
    vendorEmail: `charliesproduce@gmail.com`,
    productCost: `1.50`
  },
  {
    productName: `Mushrooms`,
    quantity: 50,
    vendorName: `Charlie's Produce`,
    vendorContactName: `Tom`,
    vendorPhoneNumber: `206-625-1412`,
    vendorEmail: `charliesproduce@gmail.com`,
    productCost: `0.75`
  },
  {
    productName: `Feta`,
    quantity: 30,
    vendorName: `Tillamook`,
    vendorContactName: `John Dairy`,
    vendorPhoneNumber: `208-667-1212`,
    vendorEmail: `john@tillamook.com`,
    productCost: `1.35`
  },
  {
    productName: `Pepper Jack`,
    quantity: 30,
    vendorName: `Tillamook`,
    vendorContactName: `John Dairy`,
    vendorPhoneNumber: `208-667-1212`,
    vendorEmail: `john@tillamook.com`,
    productCost: `1.25`
  },
  {
    productName: `Spinach`,
    quantity: 35,
    vendorName: `Charlie's Produce`,
    vendorContactName: `Tom`,
    vendorPhoneNumber: `206-625-1412`,
    vendorEmail: `charliesproduce@gmail.com`,
    productCost: `0.25`
  },
  {
    productName: `Oysters`,
    quantity: 18,
    vendorName: `Seattle Fish Co`,
    vendorContactName: `Jake`,
    vendorPhoneNumber: `202-925-1212`,
    vendorEmail: `jake@seattlefishco.com`,
    productCost: `2.00`
  },
  {
    productName: `Tomato`,
    quantity: 15,
    vendorName: `Charlie's Produce`,
    vendorContactName: `Tom`,
    vendorPhoneNumber: `206-763-1488`,
    vendorEmail: `charliesproduce@gmail.com`,
    productCost: `7.25`
  },
  {
    productName: `Grapes`,
    quantity: 15,
    vendorName: `Charlie's Produce`,
    vendorContactName: `Tom`,
    vendorPhoneNumber: `206-763-1488`,
    vendorEmail: `charliesproduce@gmail.com`,
    productCost: `4.35`
  },
  {
    productName: `Flour Tortilla`,
    quantity: 60,
    vendorName: `La Mexicana`,
    vendorContactName: `José Cifuentes`,
    vendorPhoneNumber: `206-625-1412`,
    vendorEmail: `josecifuen@gmail.com`,
    productCost: `4.25`
  },
  {
    productName: `Como Bread`,
    quantity: 12,
    vendorName: `Grand Central Bakery`,
    vendorContactName: `Gabrielle Moorhead`,
    vendorPhoneNumber: `206-768-0320`,
    vendorEmail: `gabby@grandcentralbakery.com`,
    productCost: `3.25`
  },
  {
    productName: `Multigrain Bread`,
    quantity: 10,
    vendorName: `Grand Central Bakery`,
    vendorContactName: `Gabrielle Moorhead`,
    vendorPhoneNumber: `206-768-0320`,
    vendorEmail: `gabby@grandcentralbakery.com`,
    productCost: `5.25`
  },
  {
    productName: `Beecher's Flagship Cheddar`,
    quantity: 16,
    vendorName: `Merlino Foods`,
    vendorContactName: `Jennifer Markham`,
    vendorPhoneNumber: `206-723-4700`,
    vendorEmail: `sales@merlino.com`,
    productCost: `8.95`
  },
  {
    productName: `Salted Butter`,
    quantity: 24,
    vendorName: `Merlino Foods`,
    vendorContactName: `Jennifer Markham`,
    vendorPhoneNumber: `206-723-4700`,
    vendorEmail: `sales@merlino.com`,
    productCost: `3.95`
  },
  {
    productName: `Gossner Sliced Natural Swiss`,
    quantity: 16,
    vendorName: `Merlino Foods`,
    vendorContactName: `Jennifer Markham`,
    vendorPhoneNumber: `206-723-4700`,
    vendorEmail: `sales@merlino.com`,
    productCost: `6.50`
  },
  {
    productName: `Heinz Ketchup Can`,
    quantity: 14,
    vendorName: `Merlino Foods`,
    vendorContactName: `Jennifer Markham`,
    vendorPhoneNumber: `206-723-4700`,
    vendorEmail: `sales@merlino.com`,
    productCost: `12.45`
  },
  {
    productName: `Prosciutto`,
    quantity: 20,
    vendorName: `Salumi`,
    vendorContactName: `Connie Draft`,
    vendorPhoneNumber: `206-770-8780`,
    vendorEmail: `sales@salumi.com`,
    productCost: `8.00`
  },
  {
    productName: `Tim's Chips`,
    quantity: 36,
    vendorName: `Merlino Foods`,
    vendorContactName: `Jennifer Markham`,
    vendorPhoneNumber: `206-723-4700`,
    vendorEmail: `sales@merlino.com`,
    productCost: `7.95`
  },
  {
    productName: `Ground Beef`,
    quantity: 50,
    vendorName: `Rain Shadow Meats`,
    vendorContactName: `Rita Perry`,
    vendorPhoneNumber: `206-789-4747`,
    vendorEmail: `rita@rainshadowmeats.com`,
    productCost: `4.85`
  },
  {
    productName: `Chicken`,
    quantity: 50,
    vendorName: `Rain Shadow Meats`,
    vendorContactName: `Rita Perry`,
    vendorPhoneNumber: `206-789-4747`,
    vendorEmail: `rita@rainshadowmeats.com`,
    productCost: `5.95`
  },
  {
    productName: `NY Strip`,
    quantity: 40,
    vendorName: `Rain Shadow Meats`,
    vendorContactName: `Rita Perry`,
    vendorPhoneNumber: `206-789-4747`,
    vendorEmail: `rita@rainshadowmeats.com`,
    productCost: `9.50`
  },
  {
    productName: `Pinot Grigio`,
    quantity: 20,
    vendorName: `American Northwest Distributors`,
    vendorContactName: `Troy Miller`,
    vendorPhoneNumber: `206-886-9696`,
    vendorEmail: `troy@americannorthwestdistributors.com`,
    productCost: `9.50`
  },
  {
    productName: `Malbec`,
    quantity: 20,
    vendorName: `American Northwest Distributors`,
    vendorContactName: `Troy Miller`,
    vendorPhoneNumber: `206-886-9696`,
    vendorEmail: `troy@americannorthwestdistributors.com`,
    productCost: `9.50`
  },
  {
    productName: `Pilsner`,
    quantity: 20,
    vendorName: `American Northwest Distributors`,
    vendorContactName: `Troy Miller`,
    vendorPhoneNumber: `206-886-9696`,
    vendorEmail: `troy@americannorthwestdistributors.com`,
    productCost: `3.50`
  },
  {
    productName: `Amber`,
    quantity: 20,
    vendorName: `American Northwest Distributors`,
    vendorContactName: `Troy Miller`,
    vendorPhoneNumber: `206-886-9696`,
    vendorEmail: `troy@americannorthwestdistributors.com`,
    productCost: `3.50`
  },
  {
    productName: `IPA`,
    quantity: 20,
    vendorName: `American Northwest Distributors`,
    vendorContactName: `Troy Miller`,
    vendorPhoneNumber: `206-886-9696`,
    vendorEmail: `troy@americannorthwestdistributors.com`,
    productCost: `3.50`
  }
];

module.exports = {
  inventorySeed
};
