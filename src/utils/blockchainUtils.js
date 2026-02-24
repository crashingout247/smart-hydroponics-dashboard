import Web3 from 'web3';

// Mock Web3 provider (simulates a blockchain connection; in real, use Infura/Alchemy for testnet)
const web3 = new Web3('http://localhost:8545'); // Use a local node if you have one; otherwise, this mocks it

export const logToBlockchain = (data) => {
  // Simulate hashing and logging data (in real: send transaction to smart contract)
  const hashedData = web3.utils.keccak256(JSON.stringify(data));
  console.log('Simulated Blockchain Log:');
  console.log('Data:', data);
  console.log('Hash:', hashedData);
  console.log('Logged on-chain (mocked)');

  // Store in localStorage as "on-chain" record
  localStorage.setItem('blockchainLog', JSON.stringify({ ...data, hash: hashedData, timestamp: new Date().toISOString() }));
};