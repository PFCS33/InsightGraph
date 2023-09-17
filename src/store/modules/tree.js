export default {
  namespaced: true,
  state() {
    return {
      totalData: null,
    };
  },
  getters: {
    totalData(state) {
      return state.totalData;
    },
  },
  mutations: {
    setTotalData(state, payload) {
      state.totalData = payload;
    },
  },
  actions: {},
};
