import Web3 from 'web3';
const web3 = new Web3(
  `https://mainnet.infura.io/v3/${process.env.VUE_APP_API_KEY}`
);

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
    updateBalance({ commit, state }) {
      web3.eth.getBalance(state.account.address, (err, wei) => {
        let balance = web3.utils.fromWei(wei, 'ether');
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
