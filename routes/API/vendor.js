'use strict';
const router = require(`express`).Router();
const vendorController = require(`../../controllers/vendorController`);

router.route(`/`).get(vendorController.findAll).post(vendorController.create);
router
  .route(`/:id`)
  .get(vendorController.findById)
  .put(vendorController.update)
  .delete(vendorController.remove);

module.exports = router;
