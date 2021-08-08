// Importing prerequisite files
const solc = require("solc");
const path = require("path");
const fs = require("fs");

// Path to Inbox folder
const inboxPath = path.resolve(__dirname, "Contracts", "inbox.sol");

// Reading contents of Solidity file
const sourceFile = fs.readFileSync(inboxPath, "utf8");

// Compiling the solidity contract
module.export = solc.compile(sourceFile, 1).contracts[":Inbox"];
