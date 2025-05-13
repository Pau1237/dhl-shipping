import React from 'react';

const PackageType = ({ setPackageType }) => {
  return (
    <div>
      <label>Tipo de Paquete:</label>
      <select onChange={(e) => setPackageType(e.target.value)}>
        <option value="Sobre">Sobre (10gr-500gr $20)</option>
        <option value="Caja">Caja (501gr-20kg $100)</option>
        <option value="Tarima">Tarima (21kg-50kg $500)</option>
        <option value="Contenedor">Contenedor (51kg-5000kg $600 por cada 50kg)</option>
      </select>
    </div>
  );
};

export default PackageType;
