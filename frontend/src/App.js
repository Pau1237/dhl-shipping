import React, { useState } from 'react';
import PackageType from './components/PackageType';
import Weight from './components/Weight';
import Dimensions from './components/Dimensions';
import Location from './components/Location';
import QuoteButton from './components/QuoteButton';

function App() {
  const [packageType, setPackageType] = useState(null);
  const [weight, setWeight] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, depth: 0 });
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [totalCost, setTotalCost] = useState(null);

  const calculateQuote = () => {
    let cost = 0;

    // Cálculo de costo por tipo de paquete
    if (packageType === 'Sobre') cost = 20;
    if (packageType === 'Caja') cost = 100;
    if (packageType === 'Tarima') cost = 500;
    if (packageType === 'Contenedor') cost = 600 + Math.floor(weight / 50) * 600;

    // Cálculo de costo por peso
    if (weight) cost += weight * 10;

    // Cálculo de costo por dimensiones
    const volume = dimensions.width * dimensions.height * dimensions.depth;
    cost += volume * 1;

    // Cálculo de costo por distancia
    if (origin && destination) {
      // Suponiendo que la distancia es calculada por un API de Google Maps
      const distance = calculateDistance(origin, destination); // Implementar función de distancia
      cost += distance * 10;
    }

    setTotalCost(cost);
  };

  return (
    <div className="App">
      <h1>DHL - Cotizador de Paquetería</h1>
      <PackageType setPackageType={setPackageType} />
      <Weight setWeight={setWeight} />
      <Dimensions setDimensions={setDimensions} />
      <Location setOrigin={setOrigin} setDestination={setDestination} />
      <QuoteButton calculateQuote={calculateQuote} />
      
      {totalCost !== null && (
        <div>
          <h2>Cotización Total: ${totalCost}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
