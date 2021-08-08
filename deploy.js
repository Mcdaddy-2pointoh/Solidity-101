const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

// Setting up a Provider
const provider = new HDWalletProvider(

);
