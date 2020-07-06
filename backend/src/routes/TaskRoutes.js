const express = require("express");
const router = express.Router();

const TaskController = require("../controller/TaskController");
const TaskValidation = require("../middleware/TaskValidation");
const MacAddressValidation = require("../middleware/MacAddressValidation");

router.post("/", TaskValidation, TaskController.create);
router.put("/:id", TaskController.update);
router.get("/:id", TaskController.show);

router.get("/filter/all", MacAddressValidation, TaskController.all);

module.exports = router;
