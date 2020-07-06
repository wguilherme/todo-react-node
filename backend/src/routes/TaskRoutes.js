const express = require("express");
const router = express.Router();

const TaskController = require("../controller/TaskController");
const TaskValidation = require("../middleware/TaskValidation");
const MacAddressValidation = require("../middleware/MacAddressValidation");

router.post("/", TaskValidation, TaskController.create);
router.get("/:id", TaskController.show);
router.put("/:id", TaskController.update);
router.delete("/:id", TaskController.delete);

router.get("/filter/all", MacAddressValidation, TaskController.all);

module.exports = router;
