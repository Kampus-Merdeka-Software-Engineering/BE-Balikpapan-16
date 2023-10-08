const {createContactController} = require('../controllers/contact.controller')
const express = require("express");
const contactRoutes = express.Router();

contactRoutes.post('/', createContactController)

module.exports = contactRoutes