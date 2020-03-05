import Web3 from 'web3';
const web3 = new Web3(
  'https://ropsten.infura.io/v3/9c85a82e358f46d389135967ceeeea82'
);
const Tx = require('ethereumjs-tx');

export default {
  state: {
    txHash: {
      hash: '',
      show: false
    }
  },
  mutations: {
    setLink(state, payload) {
      state.txHash.hash = payload;
      state.txHash.show = true;
      console.log(state.txHash);
    }
  },
  actions: {
    async sendEther({ commit, state, dispatch, getters }, transaction) {
      commit('setLoading', true);
      web3.eth.getTransactionCount(getters.account.address, (err, txCount) => {
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
          getters.account.privateKey.slice(
            2,
            getters.account.privateKey.length
          ),
          'hex'
        );

        const tx = new Tx(txObject);
        tx.sign(privateKey);

        const serializedTx = tx.serialize();
        const raw = '0x' + serializedTx.toString('hex');

        web3.eth.sendSignedTransaction(raw, (err, txHash) => {
          if (txHash) {
            commit('setLoading', false);
            commit('setSnackbar', {
              text: 'Transaction sended.',
              show: true,
              color: 'success'
            });
            dispatch('updateBalance');
            commit('setLink', txHash);
          } else if (err) {
            console.log(err);
            commit('setLoading', false);
            commit('setSnackbar', {
              text: 'Something went wrong! Try later.',
              show: true,
              color: 'error'
            });
          }
        });
      });
    }
  },
  getters: {
    link(state) {
      return state.txHash;
    }
  }
};
