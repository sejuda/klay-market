import logo from "./logo.svg";
import { getBalance, readCount, setCount } from "./api/UseCaver";
import "./App.css";
import React, { useState } from "react";
import { queryByDisplayValue } from "@testing-library/react";

// 2021 0616 시작
// 1 Smart contract 배포 주소 파악 ( 가져오기 )
// 2 caver.js 를 이용해서 스마트 컨트랙트 연결하기
// 3 가져온 스마트 컨트랙트 실행 결과 (데이터 ) 웹에 표현하기
function onPressButton() {
  console.log("hi");
}
function onPressButton2(_balance, _setBalance) {
  _setBalance(_balance);
}
function App() {
  const [balance, setBalance] = useState("0");
  //readCount();
  // getBalance("0xf8f540fd7840d0e59c31092686a09de06b5136dd");
  const onClickGetAddress = () => {
    // clip
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button
          onClick={() => {
            onPressButton2("15", setBalance);
            onClickGetAddress();
          }}
        >
          주소 가져오기
        </button>
        <p>{balance}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
