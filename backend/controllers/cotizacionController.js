const db = require('../config/db');

exports.crearCotizacion = (req, res) => {
  const {
    tipo_paquete,
    peso,
    ancho,
    alto,
    fondo,
    origen,
    destino,
    cp,
    distancia_km
  } = req.body;

  const volumen = ancho * alto * fondo;
  const precio_volumen = volumen * 1;
  let precio_peso = 0;

  // Calcular precio por tipo de paquete
  if (tipo_paquete === 'sobre') {
    precio_peso = 20;
  } else if (tipo_paquete === 'caja') {
    precio_peso = 100;
  } else if (tipo_paquete === 'tarima') {
    precio_peso = 500;
  } else if (tipo_paquete === 'contenedor') {
    const bloques_50kg = Math.ceil(peso / 50);
    precio_peso = bloques_50kg * 600;
  }

  const precio_distancia = distancia_km * 10;
  const precio_total = precio_peso + precio_volumen + precio_distancia;

  const query = `
    INSERT INTO cotizaciones 
    (tipo_paquete, peso, ancho, alto, fondo, origen, destino, cp, distancia_km, precio_total)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [
    tipo_paquete, peso, ancho, alto, fondo, origen, destino, cp, distancia_km, precio_total
  ], (err, result) => {
    if (err) {
      console.error('Error al insertar cotización:', err);
      return res.status(500).json({ error: 'Error al guardar cotización' });
    }

    res.json({
      message: 'Cotización creada con éxito',
      precio_total
    });
  });
};
