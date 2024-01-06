const express = require("express");
const authutil  = require("../util/AuthUtil");
const router = express.Router();
const userController = require("../controller/UserController");
router.get('/user',authutil,userController.getUsers);
const zodmiddleware = require("../Middleware/Zodmiddleware");
const userValidationSchema = require("../util/UserValidationSchema");
router.post('/user',zodmiddleware.validationSchema(userValidationSchema),userController.addUserwithEnc);
router.post('/login',userController.loginWithEcn) 
module.exports = router;