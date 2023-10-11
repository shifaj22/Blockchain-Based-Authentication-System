This project shows how the use of Blockchain allows the creation of a Blockchain-based authentication where the user's login data hash is stored in a smart contract.

Blockchain is an immutable, decentralized ledger secured by cryptography, ideal for a secure authentication process. We propose using this technology for authentication, storing user login data as hashed entries on the blockchain via smart contracts. When a user seeks access, their provided credentials are hashed and compared with the stored hash. Successful matches authorize access, leveraging the unique link between the user's Ethereum address and their login hash. This innovative approach ensures both security and data integrity.

During sign-up, the user's login hash is typically stored in a smart contract on the blockchain, incurring transaction gas fees.
Gas fees associated with storing data on the blockchain can discourage users from utilizing blockchain-based authentication (BBA).
An alternative approach is to store this information either on IPFS for public use or a private blockchain for business applications, reducing or eliminating gas fees for the sign-up process.
Gas fees can be limited to the sign-up stage, and subsequent login processes can be gas-free by validating the data signature without the need to write data to the smart contract.
A smart contract with JavaScript functions can facilitate the validation process, ensuring secure and efficient authentication without persistent gas costs.
Installation steps:

Make sure you have installed Ganache GUI.
Truffle suite
git clone https://github.com/shifaj22/Blockchain-Based-Authentication-System
npm install
truffle migrate --reset
npm run start