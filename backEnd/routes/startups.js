const express = require('express');
const router = express.Router();
const startupController = require('../controllers/startupController');

router.get('/', startupController.listarStartups);
router.post('/', startupController.criarStartup);
router.put('/:id', startupController.atualizarStartup);
router.delete('/:id', startupController.deletarStartup);

router.get('/relatorios/performance', startupController.listarPorPerformance);

module.exports = router;