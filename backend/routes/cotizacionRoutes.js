const express = require('express');
const router = express.Router();
const cotizacionController = require('../controllers/cotizacionController');

router.post('/cotizar', cotizacionController.crearCotizacion);

module.exports = router;
