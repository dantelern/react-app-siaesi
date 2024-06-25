import React, { useEffect, useState } from 'react';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error agarrando datos:', error));
  }, []);

  return (
    <div>
      <h1>Data from Database</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.nombre}</li> // Ajusta esto según tu estructura de datos
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
