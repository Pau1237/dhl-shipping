// Weight.js
import React from 'react';

const Weight = ({ setWeight }) => {
  return (
    <div>
      <label>Peso (kg):</label>
      <input type="number" onChange={(e) => setWeight(e.target.value)} />
    </div>
  );
};

export default Weight;
