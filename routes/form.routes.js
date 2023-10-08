const express = require('express');
const router = express.Router();
const artikelController = require('../controllers/form.controller');
router.post('/Form', artikelController.postartikel);
module.exports = router;