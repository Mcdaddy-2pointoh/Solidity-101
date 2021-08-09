const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

// Setting up a Provider
const provider = new HDWalletProvider(
  "infant festival carpet absurd cave weekend brief inform street grow lawn woman",
  "https://rinkeby.infura.io/v3/018c7ff2e8394025adef1d28bb7b5b90"
);

const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Deploying from", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi There!"] })
    .send({ from: accounts[0],  gas: "1000000" });
  console.log("Address of deployed contract", result.options.address);
 };

deploy();
