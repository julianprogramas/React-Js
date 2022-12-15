/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
  );
}

export default App; */
import Navbar from "../public/index.html";
import React from "react";
import "./App.css";
import Navbar from "./componentes/NavBar/NavBar";
import ItemListContainer from "../src/componentes/ItemListContainer/ItemListContainer";

function App() {
  return (
    
    <>
      <Navbar />
      <ItemListContainer message='Bienvenido a RacingStore.' name='Academico!' />  

        <div>
            <h1>Bienvenido a RacingStore</h1>
             <p>sitio oficial de racing</p>
        </div>
    
    </>
   
    
  );
}

export default App;