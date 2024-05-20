import { useEffect } from "react";
import { test1, test2 } from './test_axios3';

function App() {
  useEffect(() => {
    test1();
    test2();
  });

  return (
    <h1>axios 테스트</h1>
  )
}

export default App

