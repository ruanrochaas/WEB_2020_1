import React from 'react';
import './App.css';
import Arena from "./components/Questão 1/Arena";
import World from "./components/Questão 3/World";

import joker from './assets/joker.png';
import batman from './assets/batman.png';


import Enemy from "./components/Questão 1/Enemy";
import Hero from "./components/Questão 1/Hero";


function App() {
  return (
    <div className="App">
      <World>
        <Arena arena="Arena 1">
          <Hero name="Batman" img={batman}/>
          <Enemy name="Joker" img={joker}/>
        </Arena>
        <Arena arena="Arena 2">
          <Hero name="Batman" img={batman}/>
          <Enemy name="Joker" img={joker}/>
        </Arena>
        <Arena arena="Arena 3">
          <Hero name="Batman" img={batman}/>
          <Enemy name="Joker" img={joker}/>
        </Arena>
      </World>
    </div>
  );
}

export default App;
