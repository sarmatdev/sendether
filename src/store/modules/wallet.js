import Web3 from 'web3';
const web3 = new Web3(
  `https://mainnet.infura.io/v3/${process.env.VUE_APP_API_KEY}`
);

export default {
  state: {
    wallet: {}
  },
  mutations: {
    setWallet(state, payload) {
      state.wallet = payload;
    }
  },
  actions: {
    async createWallet({ commit }) {
      const wallet = await web3.eth.accounts.create();
      const data = {
        address: wallet.address,
        privateKey: wallet.privateKey,
        link: `${window.origin}/#${wallet.privateKey}`
      };
      commit('setWallet', data);
    }
  },
  getters: {
    wallet(state) {
      return state.wallet;
    }
  }
};
