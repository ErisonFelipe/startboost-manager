const express = require('express');
const router = express.Router();
const startupController = require('../controllers/startupController');
const verificarToken = require('../middlewares/authMiddleware');

router.get('/', startupController.listarStartups);
router.post('/', verificarToken, startupController.criarStartup);
router.put('/:id', verificarToken, startupController.atualizarStartup);
router.delete('/:id', verificarToken, startupController.deletarStartup);

router.get('/relatorios/performance', startupController.listarPorPerformance);

module.exports = router;