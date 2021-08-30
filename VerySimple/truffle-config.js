var HDWalletProvider = require("truffle-hdwallet-provider");
const dotenv = require('dotenv');
const result = dotenv.config();

if (result.error) {
  throw result.error
}


const mnemonic = process.env.MNEMONIC;
const projectID = process.env.PROJECT_ID;


module.exports = {
  contracts_directory: "./src/contracts",
  migrations_directory: "./src/migrations",
  contracts_build_directory: "./src/build/contracts",
  test_directory: './src/test',
  networks: {
     development: {
        host: "127.0.0.1",     // Localhost (default: none)
        port: 7545,            // Standard Ethereum port (default: none)
        network_id: "*",       // Any network (default: none)
     },
     ropsten: {
     provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${projectID}`),
     network_id: 3,       // Ropsten's id
     gas: 8000000,        // Ropsten has a lower block limit than mainnet
     },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
       version: "0.5.10",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },
};
