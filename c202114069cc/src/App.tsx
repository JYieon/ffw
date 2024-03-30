import React from 'react';
import Gutu from './Gutu';

function App() {
  return (
    <div>
      <Gutu number = {Math.floor(Math.random()*9+1)}/>
    </div>
  );
}

export default App;

