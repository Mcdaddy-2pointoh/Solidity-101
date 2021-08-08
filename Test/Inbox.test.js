const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

class Car {
  park() {
    return "stopped";
  }
  drive() {
    return "vroom";
  }
}

// let car;

// beforeEach(() => {
//   car = new Car();
// });

// describe("Car_class", () => {
//   it("test park", () => {
//     assert.equal(car.park(), "stopped");
//   });

//   it("car drive", () => {
//     assert.equal(car.drive(), "vroom");
//   });
// });

let accounts;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts()

  });
  //get accounts returns a promise

  //Use one of the accounts
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(accounts);
  });
});
