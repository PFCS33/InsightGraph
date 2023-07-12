import * as d3 from "d3";
export default {
  namespaced: true,
  state() {
    return {
      drawData: [],
      vegaLiteData: [
        { a: "A", b: 28 },
        { a: "B", b: 55 },
        { a: "C", b: 43 },
        { a: "D", b: 91 },
        { a: "E", b: 81 },
        { a: "F", b: 53 },
        { a: "G", b: 19 },
        { a: "H", b: 87 },
        { a: "I", b: 52 },
      ],
    };
  },
  getters: {
    drawData(state) {
      return state.drawData;
    },
    vegaLiteData(state) {
      return state.vegaLiteData;
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
