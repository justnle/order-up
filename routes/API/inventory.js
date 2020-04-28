const router = require(`express`).Router();
const inventoryController = require("../../controllers/inventoryController");

router
  .route("/inventory")
  .get(inventoryController.findAll)
  .post(inventoryController.create);

router
  .route("/inventory/:id")
  .get(inventoryController.findById)
  .put(inventoryController.update)
  .delete(inventoryController.remove);

module.exports = router;
