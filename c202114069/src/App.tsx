import React from 'react';
import Gutu from './Gutu';
import './App.css';

function App() {

  let num = Math.floor(Math.random()*8+2);

  return (
    <div>
      <h1>{num} 단</h1>
      <Gutu dan = {num}/>
    </div>
  );
}

export default App;

