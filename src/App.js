import logo from "./logo.svg";
import "./App.css";

// 2021 0616 시작
// 1 Smart contract 배포 주소 파악 ( 가져오기 )
// 2 caver.js 를 이용해서 스마트 컨트랙트 연결하기
// 3 가져온 스마트 컨트랙트 실행 결과 (데이터 ) 웹에 표현하기
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>good src/App.js</code> and save to reload.
        </p>
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
