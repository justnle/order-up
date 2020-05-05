'use strict';

const router = require(`express`).Router();
const employeesController = require(`../../controllers/employeesController`);

router
  .route(`/`)
  .get(employeesController.findAll)
  .post(employeesController.create);

router
  .route(`/deleteMany`)
  .delete(employeesController.removeMany);

router
  .route(`/updateMany`)
  .put(employeesController.updateMany);

router
  .route(`/:id`)
  .get(employeesController.findById)
  .put(employeesController.update)
  .delete(employeesController.remove);

module.exports = router;
