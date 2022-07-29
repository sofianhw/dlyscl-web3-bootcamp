# dlyscl-web3-bootcamp
## Preparation
First you have to deploy the Election Contract
you can find it at [Election Contract at Rinkeby](https://rinkeby.etherscan.io/address/0xc59fA424d23C6Ab54B313581185a53A14AAB763A#code)

Once deployed you will get two things: ABI and Address of your Contract
then replace Election.js to ABI
after that change const CONTRACT_ADDRESS in index.js to your new contract address

## Install & Deploy 
### Yarn
```
yarn
yarn build
yarn http-server
```
### NPM
```
npm install
npm run build
npm start
```