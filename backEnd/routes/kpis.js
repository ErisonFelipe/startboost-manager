const express = require('express');
const router = express.Router();
const kpiController = require('../controllers/kpiController');

router.get('/relatorios/atrasadas', kpiController.listarAtrasadas);

module.exports = router;