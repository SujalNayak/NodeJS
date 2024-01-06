const express = require('express');
const router = express.Router();
const empController = require('../controller/empController');
const { validateCreate, validateUpdate } = require('../util/Validation');
const empModel = require("../model/empModel");

// router.get('/model',empModel);
router.put('/update', validateUpdate, empController.updateEmployee);
router.delete('/delete', empController.deleteEmployee);

router.get('/filter', empController.filterEmployeesBySalary);


module.exports = router;
