const {getAllArticle} = require('../services/artikel.service')
const express = require('express');
const router = express.Router();
//const artikelController = require('../controllers/artikel.controller')
router.get('/', async (req, res) => {
    const artikel = await getAllArticle();
    res.status(200).json(artikel)
});
module.exports = router;