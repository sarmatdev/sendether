export default {
  state: {
    loading: false
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    setLoading({ commit }, loading) {
      commit('setLoading', loading);
    }
  },
  getters: {
    loading(state) {
      return state.loading;
    }
  }
};
