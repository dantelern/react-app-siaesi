import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Cambia la URL a la nueva dirección del sitio que deseas consultar
    console.log('Realizando fetch a la API...');
    fetch('https://api.example.com/data')
      .then(response => {
        console.log('Respuesta recibida:', response);
        return response.json();
      })
      .then(data => {
        console.log('Datos recibidos:', data);
        setData(data);
      })
      .catch(error => console.error('Error en fetch:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Datos del Backend</h1>
        {data ? <p>{JSON.stringify(data)}</p> : <p>Cargando...</p>}
        <p>
          Vengo de <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
