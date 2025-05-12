import React, { useState } from 'react';
import Button from './Button';

const CotizacionForm = () => {
  const [tipoPaquete, setTipoPaquete] = useState('');
  const [peso, setPeso] = useState('');
  const [dimensiones, setDimensiones] = useState({ ancho: 0, alto: 0, fondo: 0 });
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [cp, setCp] = useState('');
  const [distancia, setDistancia] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);

  // Función para calcular el precio total
  const calcularPrecio = () => {
    let precio = 0;
    // Cálculo por tipo de paquete
    if (tipoPaquete === 'sobre') precio += 20;
    if (tipoPaquete === 'caja') precio += 100;
    if (tipoPaquete === 'tarima') precio += 500;
    if (tipoPaquete === 'contenedor') precio += 600 * Math.ceil(peso / 50);

    // Cálculo por dimensiones
    const volumen = dimensiones.ancho * dimensiones.alto * dimensiones.fondo;
    precio += volumen;

    // Cálculo por distancia
    precio += distancia * 10;

    setPrecioTotal(precio);
  };

  return (
    <div>
      <div>
        <Button label="Sobre (10g-500g) $20" onClick={() => setTipoPaquete('sobre')} />
        <Button label="Caja (501g-20kg) $100" onClick={() => setTipoPaquete('caja')} />
        <Button label="Tarima (21kg-50kg) $500" onClick={() => setTipoPaquete('tarima')} />
        <Button label="Contenedor (51kg-5000kg) $600 cada 50kg" onClick={() => setTipoPaquete('contenedor')} />
      </div>

      <div>
        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>

      <div>
        <label>Dimensiones (cm)</label>
        <input type="number" placeholder="Ancho" value={dimensiones.ancho} onChange={(e) => setDimensiones({ ...dimensiones, ancho: e.target.value })} />
        <input type="number" placeholder="Alto" value={dimensiones.alto} onChange={(e) => setDimensiones({ ...dimensiones, alto: e.target.value })} />
        <input type="number" placeholder="Fondo" value={dimensiones.fondo} onChange={(e) => setDimensiones({ ...dimensiones, fondo: e.target.value })} />
      </div>

      <div>
        <label>Origen:</label>
        <input type="text" value={origen} onChange={(e) => setOrigen(e.target.value)} />
      </div>

      <div>
        <label>Destino:</label>
        <input type="text" value={destino} onChange={(e) => setDestino(e.target.value)} />
      </div>

      <div>
        <label>Código Postal:</label>
        <input type="text" value={cp} onChange={(e) => setCp(e.target.value)} />
      </div>

      <div>
        <label>Distancia (km):</label>
        <input type="number" value={distancia} onChange={(e) => setDistancia(e.target.value)} />
      </div>

      <div>
        <h2>Total a pagar: ${precioTotal}</h2>
      </div>

      <div>
        <button onClick={calcularPrecio}>Cotizar</button>
      </div>
    </div>
  );
};

export default CotizacionForm;
