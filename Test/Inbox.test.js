const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

// https://rinkeby.infura.io/v3/018c7ff2e8394025adef1d28bb7b5b90

let accounts;
let inbox;
let msg = "Hi there!";
beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  //get accounts returns a promise

  //Use one of the accounts
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [msg] })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(inbox);
  });

  it("get message", async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, msg);
  });

  it("set message", async () => {
    msg = "Highway to hell";
    await inbox.methods.setMessage(msg).send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, msg);
  });
});
