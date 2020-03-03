export default {
  state: {
    loading: false,
    snackbar: {
      text: '',
      show: false
    }
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setSnackbar(state, payload) {
      console.log(payload);
      state.snackbar.show = payload.show;
      state.snackbar.text = payload.text;
    }
  },
  actions: {
    setLoading({ commit }, loading) {
      commit('setLoading', loading);
    },
    setSnackbar({ commit }, loading) {
      commit('setSnackbar', loading);
    }
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    snackbar(state) {
      return state.snackbar;
    }
  }
};
