import Caver from "caver-js";
import {
  ACCESS_KEY_ID,
  SECRET_ACCESS_ID,
  COUNT_CONTRACT_ADDRESS,
  CHAIN_ID,
} from "../constants/index";
import CounterABI from "../abi/CounterABI.json";
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
const CountContract = new caver.contract(CounterABI, COUNT_CONTRACT_ADDRESS);
export const readCount = async () => {
  const _count = await CountContract.methods.count().call();
  console.log(_count);
};

export const getBalance = (address) => {
  return caver.rpc.klay.getBalance(address).then((res) => {
    const balance = caver.utils.convertFromPeb(
      caver.utils.hexToNumberString(res)
    );
    console.log(`BALANCE: ${balance}`);
    return balance;
  });
};

export const setCount = async (newCount) => {
  // 사용할 account 설정
  try {
    const privatekey =
      "0xc95ea41f54c5fafe7086c536a4e4294a68640935472cb61c90b8067452158742";
    const deployer = caver.wallet.keyring.createFromPrivateKey(privatekey);

    caver.wallet.add(deployer);
    // 스마트 컨트랙트 실행 트랜잭션 날리기
    // 결과 확인

    const receipt = await CountContract.methods.setCount(newCount).send({
      from: deployer.address, // adress
      gas: "0x4bfd200", //
    });
    console.log(receipt);
  } catch (e) {
    console.log(`[ERROR_SET_COUNT]${e}`);
  }
};
