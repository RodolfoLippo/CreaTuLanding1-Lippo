import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a CasAnt, la mejor tienda para tus hormigas!" />
    </div>
  );
}

export default App;
