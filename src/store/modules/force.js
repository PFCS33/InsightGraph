import * as d3 from "d3";
export default {
  namespaced: true,
  state() {
    return {
      drawData: [],
    };
  },
  getters: {
    drawData(state) {
      return state.drawData;
    },
  },
  mutations: {
    setDrawData(state, payload) {
      state.drawData = payload;
    },
  },
  actions: {
    // load test data
    loadData(context, _payload) {
      const file = "test_data/test_data_for_force.json";
      const path = `data/${file}`;
      d3.json(path).then(function (data) {
        context.commit("setDrawData", data);
      });
    },
  },
};
