import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/header/Header';
import Graph2D from './components/graph2D/Graph2D';
import Calculator from './components/calculator/Calculator';
import Graph3D from './components/graph3D/Graph3D';

import './App.css';

window.requestAnimFrame = (() => {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

function App() {
  const [activePage, setActiveButton] = useState('graph2D');

  return (
    <div className="App">
      <Header
        activePage={activePage}
        setActiveButton={setActiveButton}
      ></Header>
      {
        activePage === 'calculator' ? <Calculator></Calculator> :
          activePage === 'graph2D' ? <Graph2D></Graph2D> :
            activePage === 'graph3D' ? <Graph3D></Graph3D> : ''
      }
    </div>
  );
}

export default App;
