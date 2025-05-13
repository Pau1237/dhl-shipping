// Dimensions.js
import React from 'react';

const Dimensions = ({ setDimensions }) => {
  return (
    <div>
      <label>Ancho (cm):</label>
      <input type="number" onChange={(e) => setDimensions((prev) => ({ ...prev, width: e.target.value }))} />
      <label>Alto (cm):</label>
      <input type="number" onChange={(e) => setDimensions((prev) => ({ ...prev, height: e.target.value }))} />
      <label>Fondo (cm):</label>
      <input type="number" onChange={(e) => setDimensions((prev) => ({ ...prev, depth: e.target.value }))} />
    </div>
  );
};

export default Dimensions;
