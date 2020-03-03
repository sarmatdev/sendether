import Vue from 'vue';
import Vuex from 'vuex';
import account from './modules/account';
import wallet from './modules/wallet';
import transaction from './modules/transaction';
import common from './modules/common';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    account,
    wallet,
    transaction,
    common
  },
  state: {},
  mutations: {},
  actions: {}
});
