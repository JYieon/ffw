import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const errorname = <p>아이디를 입력하세요.</p>
  const errorage = <p>비밀번호를 입력하세요.</p>
  return (
    <div id="app">
      <h1>입력폼</h1>
      <div className="control">
        <input type="text" placeholder="아이디"
               onChange={(e) => setName(e.target.value)} value={name} />
        {name ? null : errorname}
      </div>
      <div className="control">
        <input type="password" placeholder="비밀번호"
               onChange={(e) => setAge(e.target.value)} value={age} />
        {age ? null : errorage}       
      </div>
      <hr />
      <h1>입력된 값</h1>
      <div className="control">아이디: {name}</div>
      <div className="control">비밀번호: {age}</div>
    </div>
  );
}

export default App;

