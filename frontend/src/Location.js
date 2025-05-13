// Location.js
import React from 'react';

const Location = ({ setOrigin, setDestination }) => {
  return (
    <div>
      <label>Origen:</label>
      <input type="text" onChange={(e) => setOrigin(e.target.value)} />
      <label>Destino:</label>
      <input type="text" onChange={(e) => setDestination(e.target.value)} />
    </div>
  );
};

export default Location;
