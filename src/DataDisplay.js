import React, { useEffect, useState } from 'react';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://db-esi.vercel.app/') /// http://localhost:3001/api/data
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error agarrando datos:', error));
  }, []);

  return (
    <div>
      <h1>Data de base de datos</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.nombre}</li> 
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
