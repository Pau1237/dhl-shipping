import React, { useState } from 'react';

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-yellow-400 p-4 rounded shadow-md text-center text-3xl font-bold">
        DHL Cotizador
      </header>

      <main className="mt-6 bg-white p-6 rounded shadow-md">
        {/* Aquí pondremos los formularios e inputs */}
        <FormularioCotizacion />
      </main>
    </div>
  );
}

function FormularioCotizacion() {
  // Estados para tipo de paquete, peso, dimensiones, etc.
  const [tipoPaquete, setTipoPaquete] = useState('');
  const [peso, setPeso] = useState('');
  const [ancho, setAncho] = useState('');
  const [alto, setAlto] = useState('');
  const [fondo, setFondo] = useState('');
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [distanciaKm, setDistanciaKm] = useState('');
  const [total, setTotal] = useState(null);

  const calcularCosto = () => {
    let costoPaquete = 0;

    switch (tipoPaquete) {
      case 'sobre':
        costoPaquete = 20;
        break;
      case 'caja':
        costoPaquete = 100;
        break;
      case 'tarima':
        costoPaquete = 500;
        break;
      case 'contenedor':
        // $600 por cada 50kg
        costoPaquete = 600 * Math.ceil(peso / 50);
        break;
      default:
        costoPaquete = 0;
    }

    const volumen = ancho * alto * fondo;
    const costoVolumen = volumen;
    const costoDistancia = distanciaKm * 10;

    const totalCotizacion = costoPaquete + costoVolumen + costoDistancia;

    setTotal(totalCotizacion);
  };

  return (
    <div className="space-y-4">
      <div>
        <label>Tipo de Paquete:</label>
        <select
          value={tipoPaquete}
          onChange={(e) => setTipoPaquete(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Seleccione</option>
          <option value="sobre">Sobre (10g - 500g) $20</option>
          <option value="caja">Caja (501g - 20kg) $100</option>
          <option value="tarima">Tarima (21kg - 50kg) $500</option>
          <option value="contenedor">Contenedor (51kg - 5000kg) $600 cada 50kg</option>
        </select>
      </div>

      <div>
        <label>Peso (kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <input
          type="number"
          placeholder="Ancho (cm)"
          value={ancho}
          onChange={(e) => setAncho(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Alto (cm)"
          value={alto}
          onChange={(e) => setAlto(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Fondo (cm)"
          value={fondo}
          onChange={(e) => setFondo(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <div>
        <label>Origen:</label>
        <input
          type="text"
          value={origen}
          onChange={(e) => setOrigen(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label>Destino:</label>
        <input
          type="text"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label>Distancia (km):</label>
        <input
          type="number"
          value={distanciaKm}
          onChange={(e) => setDistanciaKm(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <button
        onClick={calcularCosto}
        className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Cotizar
      </button>

      {total !== null && (
        <div className="mt-4 text-xl">
          Total: <strong>${total}</strong> MXN
        </div>
      )}
    </div>
  );
}

export default App;
