import logo from './logo.svg';
import './App.css';
import { ReactKeycloackIdProvider } from 'react-keycloak-id';
import React from 'react';

const init = {
  url: "http:localhost:8080/auth",
  realm: "sunbird-rc",
  clientId: "registry-frontend",
}

function App() {
  return (
    <ReactKeycloackIdProvider init={init} initOptions={{
      onLoad: 'check-sso', 
    }}>
      <React.StrictMode>        
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
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
      </React.StrictMode>
  </ReactKeycloackIdProvider>

  );
}

export default App;
