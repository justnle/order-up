'use strict';

const router = require(`express`).Router();
const floorPlanController = require(`../../controllers/floorPlanController`);

router
  .route(`/`)
  .get(floorPlanController.findAll)
  .post(floorPlanController.create);

router
  .route(`/:id`)
  .get(floorPlanController.findById)
  .put(floorPlanController.update)
  .delete(floorPlanController.remove);

module.exports = router;
