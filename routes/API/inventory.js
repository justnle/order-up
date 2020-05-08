'use strict';

const router = require(`express`).Router();
const inventoryController = require(`../../controllers/inventoryController`);


router.route(`/`).get(inventoryController.findAll).post(inventoryController.create);
router.route(`/deleteMany`).delete(inventoryController.removeMany);
router.route(`/updateMany`).put(inventoryController.updateMany);

router
  .route(`/`)
  .get(inventoryController.findAll)
  .post(inventoryController.create);
router
  .route(`/updateManyDecrement`)
  .put(inventoryController.updateManyQuantity);


router
  .route(`/:id`)
  .get(inventoryController.findById)
  .put(inventoryController.update)
  .delete(inventoryController.remove);

module.exports = router;
