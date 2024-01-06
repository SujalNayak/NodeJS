const express = require('express');
const router = express.Router();
const { uploadBookPdf } = require('./BookController');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload', upload.single('pdf'), uploadBookPdf);

module.exports = router;
