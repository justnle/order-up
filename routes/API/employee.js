const router = require(`express`).Router();
const employeesController = require("../../controllers/employeesController");

router
  .route("/employees")
  .get(employeesController.findAll)
  .post(employeesController.create);

router
  .route("/employees/:id")
  .get(employeesController.findById)
  .put(employeesController.update)
  .delete(employeesController.remove);

module.exports = router;
