const router = require(`express`).Router();
const menuController = require("../../controllers/menuController");

router.route("/menu").get(menuController.findAll).post(menuController.create);

router
  .route("/menu/:id")
  .get(menuController.findById)
  .put(menuController.update)
  .delete(menuController.remove);

module.exports = router;
