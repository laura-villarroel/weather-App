import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router';
import Nav from './componentes/navbar/navbar.jsx';

import About from './componentes/about/about.jsx';
import Ciudad from './componentes/ciudad/ciudad.jsx';
import Cards from './componentes/allCards/allCards.jsx';
import './style/custom.css';

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/about" element={<About />} />

        <Route path="/ciudad/:ciudadId" element={<Ciudad />} />
      </Routes>
    </div>
  );
}

export default App;
