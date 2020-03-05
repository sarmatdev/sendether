export default {
  state: {
    loading: false,
    snackbar: {
      text: '',
      show: false,
      color: ''
    }
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setSnackbar(state, payload) {
      state.snackbar.show = payload.show;
      state.snackbar.text = payload.text;
      state.snackbar.color = payload.color;
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
