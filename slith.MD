Summary
 - [solc-version](#solc-version) (2 results) (Informational)
 - [naming-convention](#naming-convention) (6 results) (Informational)
 - [external-function](#external-function) (4 results) (Optimization)
## solc-version
Impact: Informational
Confidence: High
 - [ ] ID-0
solc-0.8.15 is not recommended for deployment

 - [ ] ID-1
Pragma version[0.8.15](contracts/Election.sol#L2) necessitates a version too recent to be trusted. Consider deploying with 0.6.12/0.7.6/0.8.7

contracts/Election.sol#L2


## naming-convention
Impact: Informational
Confidence: High
 - [ ] ID-2
Parameter [Election.vote(uint256)._candidateId](contracts/Election.sol#L40) is not in mixedCase

contracts/Election.sol#L40


 - [ ] ID-3
Parameter [Election.addCandidate(string,string)._name](contracts/Election.sol#L22) is not in mixedCase

contracts/Election.sol#L22


 - [ ] ID-4
Parameter [Election.addCandidate(string,string)._party](contracts/Election.sol#L22) is not in mixedCase

contracts/Election.sol#L22


 - [ ] ID-5
Event [ElectionaddCandidateEvent(uint256)](contracts/Election.sol#L19) is not in CapWords

contracts/Election.sol#L19


 - [ ] ID-6
Event [ElectionvotedEvent(uint256)](contracts/Election.sol#L20) is not in CapWords

contracts/Election.sol#L20


 - [ ] ID-7
Parameter [Election.getCandidate(uint256)._candidateId](contracts/Election.sol#L35) is not in mixedCase

contracts/Election.sol#L35


## external-function
Impact: Optimization
Confidence: High
 - [ ] ID-8
getCandidateTotal() should be declared external:
	- [Election.getCandidateTotal()](contracts/Election.sol#L31-L33)

contracts/Election.sol#L31-L33


 - [ ] ID-9
getCandidate(uint256) should be declared external:
	- [Election.getCandidate(uint256)](contracts/Election.sol#L35-L37)

contracts/Election.sol#L35-L37


 - [ ] ID-10
vote(uint256) should be declared external:
	- [Election.vote(uint256)](contracts/Election.sol#L40-L58)

contracts/Election.sol#L40-L58


 - [ ] ID-11
addCandidate(string,string) should be declared external:
	- [Election.addCandidate(string,string)](contracts/Election.sol#L22-L29)

contracts/Election.sol#L22-L29


