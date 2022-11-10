# dlyscl-web3-bootcamp
## Preparation
First you have to deploy the Election Contract
you can find it at [Election Contract at Rinkeby](https://goerli.etherscan.io/tx/0x65de7662862a2ecd4b5272c38e33b617dcbed56207f73880e09b41773ad4474e)

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