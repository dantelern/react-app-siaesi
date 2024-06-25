import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import DataDisplay from './DataDisplay.js';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenido a la aplicación React</h1>
        <p>
          Vengo de <code>src/App.js</code>
        </p>
        <Link className="App-link" to="/api/data">
          Ver datos del Backend
        </Link>
      </header>
    </div>
  );
}

function Data() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Realizando fetch a la API...');
    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Datos recibidos:', data);
        setData(data);
      })
      .catch(error => console.error('Error en fetch:', error.message));
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/data" element={<DataDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
