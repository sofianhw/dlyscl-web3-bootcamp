# dlyscl-web3-bootcamp
## Install & Deploy SmartContract

```
yarn
yarn hardhat compile
yarn hardhat run scripts/deploy.js --network ganache
```
  
## Security Check
### Install Tools
- [Install Mythrill](https://mythril-classic.readthedocs.io/en/master/installation.html)
- [Install Slither](https://github.com/crytic/slither#how-to-install)

### Test SmartContract
```
slither contracts/Election.sol --checklist > slith.MD
myth analyze contracts/Lockdrop.sol --max-depth 20 --execution-timeout 30 -o markdown > myth.MD
```