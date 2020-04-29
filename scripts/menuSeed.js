"use strict";

const mongoose = require(`mongoose`);
const db = require(`../models`);

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/orderup`, {
  useNewUrlParser: true,
});
const menuSeed = [
  {
    category: `Food`,
    name: `Charcuterie Board`,
    price: 18,
    description: `Beechers Flagship Cheddar, Prosciutto, Grapes, and Grand Central Bakery Multigrain Bread`,
    pairing: `Pinot Grigio`,
    prepTime: 10,
  },
  {
    category: `Food`,
    name: `Hand Cut Fries doused in Cheddar Sauce`,
    price: 6,
    description: `Shoestring fries seasoned with salt and pepper with a drizzling of cheddar sauce for extra oomph`,
    pairing: `IPA`,
    prepTime: 10,
  },
  {
    category: `Food`,
    name: `Oysters 6`,
    price: 18,
    description: `Fresh Hama Hama oysters served with sides of cocktail sauce and mignonette`,
    pairing: `Pilsner`,
    prepTime: 15,
  },
  {
    category: `Food`,
    name: `Grilled Veggie Sandwich`,
    price: 12,
    description: `Grilled broccoli, carrots, spinach and feta on toasty naan`,
    pairing: `Pilsner`,
    prepTime: 20,
  },
  {
    category: `Food`,
    name: `The Burger to End all Burgers`,
    price: 14,
    description: `1/2 lb burger on toasted Grand Central Bakery Como bread. Toppings include fried onions, mushrooms, and pepperjack cheese.`,
    pairing: `Amber`,
    prepTime: 20,
  },
  {
    category: `Food`,
    name: `Roasted Lemon Garlic Chicken`,
    price: 20,
    description: `Served with charred broccoli and roasted baby red potatoes. `,
    pairing: `Pilsner`,
    prepTime: 25,
  },
  {
    category: `Food`,
    name: `NY Strip Steak Frites`,
    price: 30,
    description: `Served with asparagus, basil butter, garlic aioli and hand cut fries`,
    pairing: `Malbec`,
    prepTime: 25,
  },
  {
    category: `Beverage`,
    name: `Pinot Grigio`,
    price: 7,
    description: `Dry white wine that has a punchy acidity with flavors of lemons, limes, green apples and honeysuckle`,
    pairing: `Charcuterie`,
    prepTime: 5,
  },
  {
    category: `Beverage`,
    name: `Malbec`,
    price: 7,
    description: `Dark, inky purple color profiles and ripe flavors of plums, black cherry, and blackberry can give this wine a decidedly jammy character`,
    pairing: `NY Strip Steak Frites`,
    prepTime: 5,
  },
  {
    category: `Beverage`,
    name: `Pilsner`,
    price: 6,
    description: `Light straw color with spicy floral and strong hop flavors`,
    pairing: `Roasted Lemon Garlic Chicken`,
    prepTime: 5,
  },
  {
    category: `Beverage`,
    name: `Amber`,
    price: 6,
    description: `Quite malty but not heavily caramelized in flavor`,
    pairing: `The Burger to End All Burgers`,
    prepTime: 5,
  },
  {
    category: `Beverage`,
    name: `IPA`,
    price: 6,
    description: `Bitter, floral, earthy, citrusy, piney, fruity`,
    pairing: `Hand Cut Fries`,
    prepTime: 5,
  },
];
