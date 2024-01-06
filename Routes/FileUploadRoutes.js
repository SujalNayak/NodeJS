const router = require('express').Router();
const fileUploadController = require('../controller/FileUploadController');
router.post('/upload',fileUploadController.uploadfile);
module.exports = router;