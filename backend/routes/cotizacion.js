const express = require('express');
const router = express.Router();
const { crearCotizacion } = require('../controllers/cotizacionController');

router.post('/', crearCotizacion);

module.exports = router;
