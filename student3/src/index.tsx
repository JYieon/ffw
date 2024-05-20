import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <React.StrictMode> 
  개발 서버에서 실행할 때, deprecated 기능을 사용하고 있지 않은지 자동으로 검사해준다.
  그런데 이 기능 때문에, 컴포넌트들이 두 번씩 렌더링된다.
  test_axios3.ts 테스트 코드가 두 번씩 호출되면, 등록 수정 삭제 요청이 중복되면서 문제가 생길 수 있다.
  위와 같이 주석으로 막자. */}

