import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

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
    fetch('https://db-esi.vercel.app/')
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
        {data ? (
          <div>
            {Object.entries(data).map(([key, value]) => (
              <div key={key}>
                <strong>{key}:</strong> {JSON.stringify(value)}
              </div>
            ))}
          </div>
        ) : (
          <p>Cargando...</p>
        )}
        <Link className="App-link" to="/">
          Volver a la página principal
        </Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/api/data" component={Data} />
      </Switch>
    </Router>
  );
}

export default App;
