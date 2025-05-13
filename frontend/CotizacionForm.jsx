import { useState } from 'react';

function CotizacionForm() {
  const [tipo, setTipo] = useState('');
  const [peso, setPeso] = useState(0);
  const [ancho, setAncho] = useState(0);
  const [alto, setAlto] = useState(0);
  const [fondo, setFondo] = useState(0);
  const [km, setKm] = useState(0);
  const [precio, setPrecio] = useState(null);

  const cotizar = () => {
    let precioBase = 0;

    if (tipo === 'sobre') precioBase = 20;
    else if (tipo === 'caja') precioBase = 100;
    else if (tipo === 'tarima') precioBase = 500;
    else if (tipo === 'contenedor') {
      const bloques = Math.ceil(peso / 50);
      precioBase = bloques * 600;
    }

    const cmCubicos = ancho * alto * fondo;
    const precioVolumen = cmCubicos * 1;
    const precioDistancia = km * 10;

    const total = precioBase + precioVolumen + precioDistancia;
    setPrecio(total);
  };

  return (
    <div>
      <label>Tipo de Paquete:</label>
      <select onChange={e => setTipo(e.target.value)}>
        <option value="sobre">Sobre (10gr - 500gr) - $20</option>
        <option value="caja">Caja (501gr - 20kg) - $100</option>
        <option value="tarima">Tarima (21kg - 50kg) - $500</option>
        <option value="contenedor">Contenedor (51kg - 5,000kg) - $600 c/50kg</option>
      </select>

      <div>
        <label>Peso (kg):</label>
        <input type="number" onChange={e => setPeso(Number(e.target.value))} />
      </div>

      <div>
        <label>Ancho (cm):</label>
        <input type="number" onChange={e => setAncho(Number(e.target.value))} />
      </div>
      <div>
        <label>Alto (cm):</label>
        <input type="number" onChange={e => setAlto(Number(e.target.value))} />
      </div>
      <div>
        <label>Fondo (cm):</label>
        <input type="number" onChange={e => setFondo(Number(e.target.value))} />
      </div>

      <div>
        <label>Distancia (km):</label>
        <input type="number" onChange={e => setKm(Number(e.target.value))} />
      </div>

      <button onClick={cotizar}>Cotizar</button>

      {precio !== null && <h2>Total: ${precio}</h2>}
    </div>
  );
}

export default CotizacionForm;
