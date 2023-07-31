export default {
  namespaced: true,
  state() {
    return {
      drawData: null,
      selectedData: null,
      linkDataGroup: null,
      nodeDataGroup: null,
    };
  },
  getters: {
    drawData(state) {
      return state.drawData;
    },
    selectedData(state) {
      return state.selectedData;
    },
    linkDataGroup(state) {
      return state.linkDataGroup;
    },
    nodeDataGroup(state) {
      return state.nodeDataGroup;
    },
  },
  mutations: {
    setDrawData(state, payload) {
      state.drawData = payload;
    },
    setSelectedData(state, payload) {
      state.selectedData = payload;
    },
    setLinkDataGroup(state, payload) {
      state.linkDataGroup = payload;
    },
    setNodeDataGroup(state, payload) {
      state.nodeDataGroup = payload;
    },
  },
  actions: {
    groupByNodeType(context, payload) {
      const groups = d3.group(payload, (d) => d["insight-type"]);
      //  console.log(groups);
      const counts = Array.from(groups, ([key, value]) => ({
        "insight-type": key,
        count: value.length,
      }));
      //  console.log(counts);
      context.commit("setNodeDataGroup", counts);
    },
    groupByLinkType(context, payload) {
      const groups = d3.group(payload, (d) => d.type);
      const counts = Array.from(groups, ([type, sum]) => ({
        type,
        count: sum.length,
      }));
      context.commit("setLinkDataGroup", counts);
    },
    // load test data
    loadData(context, _payload) {
      const file = "test_data/result_0730.json";
      const path = `data/${file}`;
      d3.json(path).then(function (data) {
        context.commit("setDrawData", data);
        context.commit("setSelectedData", data);
        context.dispatch("groupByLinkType", data.links);
        context.dispatch("groupByNodeType", data.nodes);
      });
    },
  },
};
