const Web3js = require("web3");
const voteInterface = require("./Election.json");
const CONTRACT_ABI = voteInterface.abi;
const CONTRACT_ADDRESS = '0x0bc74F659c4169F8B1fB09ABBF763E2df1F15C63';

const web3js = await new Web3js(Web3js.givenProvider);
const Election = new web3js.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
web3js.eth.defaultAccount = accounts[0];

async function getCandidate() {
    const add = await Election.methods.getCandidate(1).call()
                .then((result) => {
                    console.log("Success! Got result: " + result);
                }).catch((err) => {
                    console.log("Failed with error: " + err);
                });
}

async function addCandidate(name, party) {
    const add = await Election.methods.addCandidate(name, party)
                .send({from: web3js.eth.defaultAccount})
                .then((result) => {
                    console.log("Success! Got result: " + result);
                }).catch((err) => {
                    console.log("Failed with error: " + err);
                });
}

Election.events.addCandidateEvents()
.on("connected", function(subscriptionId){
    console.log(subscriptionId);
})
.on('data', function(event){
    console.log(event); // same results as the optional callback above
})
.on('changed', function(event){
    // remove event from local database
})
.on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
    console.log(error);
});