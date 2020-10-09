import React from 'react';
import './App.css';

import Number1 from './components/Number1';
import Number2 from './components/Number2';
import Sum from './components/Sum';
import Multiplication from './components/Multiplication';
import Greater from './components/Greater';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>REDUX CALC</h1>
      </nav>
      <div className="content">
        <div className="line1">
          <Number1 />
          <Number2 />
        </div>
        <div className="line2">
          <Sum />
          <Multiplication />
          <Greater />
        </div>
      </div>
    </div>
  );
}

export default App;
