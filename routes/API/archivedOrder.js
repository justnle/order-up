'use strict';

const router = require(`express`).Router();
const archivedOrderController = require(`../../controllers/archivedOrderController`);

router
  .route(`/`)
  .get(archivedOrderController.findAll)
  .post(archivedOrderController.create);

router
  .route(`/:id`)
  .get(archivedOrderController.findById)
  .put(archivedOrderController.update)
  .delete(archivedOrderController.remove);

module.exports = router;
