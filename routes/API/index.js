const router = require("express").Router();
const employeeRoutes = require("./employee");
const inventoryRoutes = require("./inventory");
const menuRoutes = require("./menu");
const timeRoutes = require("./time");
// Book routes
router.use("/employee", employeeRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/menu", menuRoutes);
router.use("/time", timeRoutes);

module.exports = router;
