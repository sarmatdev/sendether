import Web3 from 'web3';

let network = process.env.NODE_ENV === 'production' ? 'mainnet' : 'ropsten';

const web3 = new Web3(
  `https://${network}.infura.io/v3/${process.env.VUE_APP_API_KEY}`
);

export default web3;
