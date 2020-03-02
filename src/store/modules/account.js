import Web3 from 'web3';
const web3 = new Web3(
  'https://ropsten.infura.io/v3/9c85a82e358f46d389135967ceeeea82'
);
const Tx = require('ethereumjs-tx');

export default {
  state: {
    account: {}
  },
  mutations: {
    setAccount(state, payload) {
      state.account = payload;
    },
    updateBalance(state, payload) {
      state.account.balance = payload;
    }
  },
  actions: {
    async createAccount({ commit }) {
      const account = await web3.eth.accounts.privateKeyToAccount(
        window.location.hash.substring(1)
      );
      const data = {
        address: account.address,
        privateKey: account.privateKey,
        balance: web3.utils.fromWei(
          await web3.eth.getBalance(account.address),
          'ether'
        )
      };
      commit('setAccount', data);
    },
    async sendEther({ commit, state }, transaction) {
      web3.eth.getTransactionCount(state.account.address, (err, txCount) => {
        // Build the transaction
        const txObject = {
          nonce: web3.utils.toHex(txCount),
          to: transaction.address,
          value: web3.utils.toHex(
            web3.utils.toWei(`${transaction.amount}`, 'ether')
          ),
          gasLimit: web3.utils.toHex(transaction.gasLimit),
          gasPrice: web3.utils.toHex(
            web3.utils.toWei(`${transaction.gasPrice}`, 'gwei')
          )
        };
        const privateKey = new Buffer(
          state.account.privateKey.slice(2, state.account.privateKey.length),
          'hex'
        );

        // Sign the transaction
        const tx = new Tx(txObject);
        tx.sign(privateKey);

        const serializedTx = tx.serialize();
        const raw = '0x' + serializedTx.toString('hex');

        // Broadcast the transaction
        web3.eth.sendSignedTransaction(raw, (err, txHash) => {
          console.log('txHash:', txHash);
          console.log(err);
          // Now go check etherscan to see the transaction!
        });
      });
    },
    updateBalance({ commit, state }) {
      web3.eth.getBalance(state.account.address, (err, wei) => {
        let balance = web3.utils.fromWei(wei, 'ether');
        console.log(balance);
        commit('updateBalance', balance);
      });
    }
  },
  getters: {
    account(state) {
      return state.account;
    }
  }
};
