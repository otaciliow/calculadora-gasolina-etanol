import { useState } from "react";
import './App.css';

import logoImg from './assets/logo.png';

export default function App() {
  return (
    <div>
      <main className="container">

        <img className="logo" src={logoImg} alt="imagem de um tanque de combustível" />

        <h1 className="title">Qual é a melhor opção?</h1>
        
        <form className="form">

          <label htmlFor="precoAlcool">Álcool (preço por litro):</label>
          <input id="precoAlcool" type="number" className="input" placeholder="4,90" min="0.1" step="0.1" required />

          <label htmlFor="precoGasolina">Gasolina (preço por litro):</label>
          <input id="precoGasolina" type="number" className="input" placeholder="4,90" min="0.1" step="0.1" required />

          <button className="button">Calcular</button>

        </form>
      </main>
    </div>
  )
}