const express = require('express');
const router = express.Router();
const { validatePayload } = require('../middleware/validatePayload');
const {
    shorten,
    redirect,
    update,
    remove,
    stats,
} = require('../controllers/url.controller');

// Crear URL corta
router.post('/shorten', validatePayload, shorten);
// Redirección
router.get('/:code', redirect);
// Actualizar URL
router.put('/:code', validatePayload, update);
// Eliminar URL
router.delete('/:code', remove);
// Estadísticas
router.get('/:code/stats', stats);

module.exports = router;