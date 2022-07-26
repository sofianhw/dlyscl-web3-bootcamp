const Web3js = require("web3");
const voteInterface = require("./Election.json");
const CONTRACT_ABI = voteInterface.abi;
const CONTRACT_ADDRESS = '0x0bc74F659c4169F8B1fB09ABBF763E2df1F15C63';

let web3js, Election;
let Candidates = [];

const metamaskBox = document.getElementById('Metamask');
const dataBox = document.getElementById('Data');

const statusBox = document.getElementById('status');
const candidateBox = document.getElementById('candidate');

const connectButton = document.getElementById("connectButton");
const getCandidateButton = document.getElementById("getCandidateButton");
const addCandidateButton = document.getElementById("addCandidateButton");
const voteButton = document.getElementById("voteButton");

const candidateName = document.getElementById("inputName");
const candidateParty = document.getElementById("inputParty");
const candidateId= document.getElementById("inputCandidate");


(async () => {
    dataBox.hidden = true;
    if (typeof window.ethereum !== "undefined") {
        const accounts = await ethereum.request({ method: "eth_accounts" });
        if(accounts.length > 0){
            statusBox.innerHTML = "Your Address " + accounts[0];
            initiateContract(accounts[0]);
            connectButton.disabled = true;
            dataBox.hidden = false;
        } else {
            statusBox.innerHTML = "Please Connect";
            connectButton.hidden = false;
        }
    } else {
        statusBox.innerHTML = "Please install Metamask Pluggin";
        connectButton.hidden = true;
    }
})();

async function connect() {
    if (window.ethereum.isConnected()) {
        try {
            await ethereum.request({ method: "eth_requestAccounts" });
        } catch (error) {
            console.log(error);
        }
        
        statusBox.innerHTML = "Connected"
        let accounts = await ethereum.request({ method: "eth_accounts" });
        connectButton.innerHTML = accounts[0];
        
        initiateContract(accounts[0]);    
        dataBox.hidden = false;
        connectButton.disabled = true;
    }
}

async function initiateContract(account) {
    web3js = await new Web3js(Web3js.givenProvider);
    web3js.eth.defaultAccount = account;
    Election = new web3js.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    await subscribe();
}

async function vote() {
    const id = candidateId.value;
    const vote = await Election.methods.vote(id).send({from: web3js.eth.defaultAccount});
    statusBox.innerHTML = "Candidate voted!";
    getCandidates();
    
}

// Add Candidate 
async function addCandidate() {
    const name = candidateName.value;
    const party = candidateParty.value;
    
    const candidate = await Election.methods.addCandidate(name, party).send({from: web3js.eth.defaultAccount});

    statusBox.innerHTML = "Candidate added!";
    getCandidates();
}

async function getCandidate(_candidateId) {
    const id = candidateId.value;
    const candidate = await Election.methods.getCandidate(_candidateId).call();
    return candidate;
}

// Get Total Candidate and Loop to print into table
async function getCandidates() {
    const totalCandidate = await Election.methods.getCandidateTotal().call();
    console.log(totalCandidate);
    
    candidateBox.innerHTML = "<tr><th>ID</th><th>Name</th><th>Party</th><th>Count</th></tr>";
    let candidateList = "";
    for( i=1 ; i<=totalCandidate ; i++){
        const candidate = await getCandidate(i);
        candidateList += "<tr><td>" 
            + candidate.id + "</td>" + "<td>" 
            + candidate.name + "</td>" + "<td>" 
            + candidate.party + "</td>" + "<td>" 
            + candidate.voteCount + "</td></tr>";

    }
    candidateBox.innerHTML += candidateList;

    console.log(Candidates);
}

function subscribe() {
    Election.events.addCandidateEvent()
    .on("connected", function(subscriptionId){
        console.log(subscriptionId);
    })
    .on('data', function(event){
        console.log(event); // same results as the optional callback above
    })
    .on('changed', function(event){
        // remove event from local database
    })
    .on('error', function(error, receipt) { 
        console.log(error);
    });    
} 

module.exports = {
    connect,
    addCandidate,
    getCandidates,
    vote
};