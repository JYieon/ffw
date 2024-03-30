import React from 'react';
import './App.css';

function App() {
  let count = 0;
  const increase = () => { ++count; console.log(count); };
  const decrease = () => { --count; console.log(count); };
  return (
    <div>
      <p>{ count }</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
}

export default App;

