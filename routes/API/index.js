'use strict';

const router = require(`express`).Router();
const employeeRoutes = require(`./employee`);
const inventoryRoutes = require(`./inventory`);
const menuRoutes = require(`./menu`);
const timeRoutes = require(`./time`);
const activeOrderRoutes = require(`./activeOrder`);
const archivedOrderRoutes = require(`./archivedOrder`);
const floorPlanRoutes = require(`./floorPlan`);

router.use(`/employee`, employeeRoutes);
router.use(`/inventory`, inventoryRoutes);
router.use(`/menu`, menuRoutes);
router.use(`/time`, timeRoutes);
router.use(`/activeorder`, activeOrderRoutes);
router.use(`/archivedorder`, archivedOrderRoutes);
router.use(`/floorplan`, floorPlanRoutes);

module.exports = router;
