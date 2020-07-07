const express = require("express");
const router = express.Router();

const TaskController = require("../controller/TaskController");
const TaskValidation = require("../middleware/TaskValidation");
const MacAddressValidation = require("../middleware/MacAddressValidation");

//create
router.post("/", TaskValidation, TaskController.create);
//show
router.get("/:id", TaskController.show);
//update
router.put("/:id", TaskController.update);
//delete
router.delete("/:id", TaskController.delete);
//status
router.put("/:id/:done", TaskController.done);

router.get("/filter/all", MacAddressValidation, TaskController.all);
//tasks date filter
router.get("/filter/late", MacAddressValidation, TaskController.late);
router.get("/filter/today", MacAddressValidation, TaskController.today);
router.get("/filter/week", MacAddressValidation, TaskController.week);
router.get("/filter/month", MacAddressValidation, TaskController.month);
router.get("/filter/year", MacAddressValidation, TaskController.year);

module.exports = router;
