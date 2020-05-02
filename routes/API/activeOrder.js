'use strict';

const router = require(`express`).Router();
const activeOrderController = require(`../../controllers/activeOrderController`);

router
  .route(`/`)
  .get(activeOrderController.findAll)
  .post(activeOrderController.create);

router
  .route(`/:id`)
  .get(activeOrderController.findById)
  .put(activeOrderController.update)
  .delete(activeOrderController.remove);

module.exports = router;
