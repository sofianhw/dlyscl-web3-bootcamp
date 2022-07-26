// require("@nomiclabs/hardhat-ganache");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.15",
      },
      {
        version: "0.5.0",
      },
    ],   
  }, 
  defaultNetwork: "ganache",
  networks: {
    ganache: {
      	url: "http://127.0.0.1:7545",
	      gasLimit: 6000000000,
      	defaultBalanceEther: 10,
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: ''
    }
  },
};
