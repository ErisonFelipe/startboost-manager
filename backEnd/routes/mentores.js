const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

router.get('/busca', mentorController.buscarPorEspecialidade);

module.exports = router;