export default {
  namespaced: true,
  state() {
    return {
      totalData: null,
      selectedData: null,
      linkDataGroup: null,
      nodeDataGroup: null,
    };
  },
  getters: {
    totalData(state) {
      return state.totalData;
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
    setTotalData(state, payload) {
      state.totalData = payload;
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
      const counts = [
        { type: "siblings", value: 0 },
        { type: "parent-child", value: 0 },
        { type: "same-name", value: 0 },
      ];
      if (payload.length > 0) {
        const groups = d3.group(payload, (d) => d.type);
        groups.forEach((group, type) => {
          const index = counts.findIndex((c) => c.type === type);
          if (index !== -1) {
            counts[index].count = group.length;
          }
        });
      }
      context.commit("setLinkDataGroup", counts);
    },
    // load test data
    loadData(context, _payload) {
      const file = "test_data/result_0730.json";
      const path = `data/${file}`;
      d3.json(path).then(function (data) {
        context.commit("setTotalData", data);

        context.commit("setSelectedData", data);
        context.dispatch("groupByLinkType", data.links);
        context.dispatch("groupByNodeType", data.nodes);
      });
    },
  },
};
