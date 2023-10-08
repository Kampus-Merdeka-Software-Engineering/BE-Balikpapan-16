const {getAllArticle} = require('../services/artikel.service')

let controller;

controller.getArticle = async (req, res) => {
    const artikel = await getAllArticle();
    res.status(200).json(artikel)
}

module.exports = controller