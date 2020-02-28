import Vue from 'vue';
import Vuex from 'vuex';
import account from './modules/account';
import wallet from './modules/wallet';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    account,
    wallet
  },
  state: {},
  mutations: {},
  actions: {}
});
