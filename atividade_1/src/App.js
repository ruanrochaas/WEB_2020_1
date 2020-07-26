import React from 'react';
import './App.css';

import Questao1Func from "./components/questao1/Questao1";
import Questao1Class from "./components/questao2/Questao2";
import PaiFunc from "./components/questao3/Pai";
import PaiClass from "./components/questao4/Pai";

function App() {
  return (
    <div className="App">
      <Questao1Func/>
      <Questao1Class/>
      <PaiFunc/>
      <PaiClass/>
    </div>
  );
}

export default App;
