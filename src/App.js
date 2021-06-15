import logo from "./logo.svg";
import Caver from "caver-js";
import "./App.css";

const COUNT_CONTRACT_ADDRESS = "0x0C86B9e0Fd79631D3A49fce193b9A80814Df6c85";
const ACCESS_KEY_ID = "KASKCOMA6MMOCY2TNRNO3EYA";
const SECRET_ACCESS_ID = "I-egvKQfHyniZxy9l78wTR0LXl4D1CTDG9OnL7a9";
const CHAIN_ID = "1001"; // MAINNET 8217 TESTNET 1001
const COUNT_ABI = `[ { "constant": false, "inputs": [ { "name": "_count", "type": "uint256" } ], "name": "setCount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "count", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getBlockNumber", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" } ]`;
const option = {
  headers: [
    {
      name: "Authorization",
      value:
        "Basic " +
        Buffer.from(ACCESS_KEY_ID + ":" + SECRET_ACCESS_ID).toString("base64"),
    },
    { name: "x-chain-id", value: CHAIN_ID },
  ],
};
const caver = new Caver(
  new Caver.providers.HttpProvider(
    "https://node-api.klaytnapi.com/v1/klaytn",
    option
  )
);
const CountContract = new caver.contract(
  JSON.parse(COUNT_ABI),
  COUNT_CONTRACT_ADDRESS
);
const readCount = async () => {
  const _count = await CountContract.methods.count().call();
  console.log(_count);
};

const getBalance = (address) => {
  return caver.rpc.klay.getBalance(address).then((res) => {
    const balance = caver.utils.convertFromPeb(
      caver.utils.hexToNumberString(res)
    );
    console.log(`BALANCE: ${balance}`);
    return balance;
  });
};

// 2021 0616 시작
// 1 Smart contract 배포 주소 파악 ( 가져오기 )
// 2 caver.js 를 이용해서 스마트 컨트랙트 연결하기
// 3 가져온 스마트 컨트랙트 실행 결과 (데이터 ) 웹에 표현하기
function App() {
  readCount();
  getBalance("0xf8f540fd7840d0e59c31092686a09de06b5136dd");
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
