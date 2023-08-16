export default {
  namespaced: true,
  state() {
    return {
      totalData: null,
      selectedData: null,
      linkDataGroup: null,
      nodeDataGroup: null,
      statisticNodeIdMap: null,
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
    statisticNodeIdMap(state) {
      return state.statisticNodeIdMap;
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
    setStatisticNodeIdMap(state, payload) {
      state.statisticNodeIdMap = payload;
    },
  },
  actions: {
    groupByNodeType(context, payload) {
      const counts = [
        { name: "trend", value: 0 },
        { name: "correlation", value: 0 },
        { name: "dominance", value: 0 },
        { name: "correlation-temporal", value: 0 },
        { name: "outlier", value: 0 },
        { name: "top2", value: 0 },
        { name: "skewness", value: 0 },
        {
          name: "kurtosis",
          value: 0,
        },
      ];
      if (payload.length > 0) {
        const groups = d3.group(
          payload,
          (d) => d["insight-list"][d.insightIndex]["insight-type"]
        );

        groups.forEach((group, type) => {
          const index = counts.findIndex((c) => c.name === type);
          if (index !== -1) {
            counts[index].value = group.length;
          }
        });
      }

      context.commit("setNodeDataGroup", counts);
    },
    groupByLinkType(context, payload) {
      let counts = [];
      if (payload.length > 0) {
        counts = d3
          .rollups(
            payload,
            (D) => D.length,
            (d) => d.type
          )
          .map((d) => ({
            type: d[0],
            count: d[1],
          }));
      }

      context.commit("setLinkDataGroup", counts);
    },
    // load test data
    loadData(context, _payload) {
      const file = "test_data/result_0807.json";
      const path = `data/${file}`;
      d3.json(path).then(function (data) {
        // 增加insight-index属性
        data.nodes.forEach((d) => (d.insightIndex = 0));
        const statisticNodeIdMap = new Map();

        data.nodes.forEach((d) => {
          statisticNodeIdMap.set(d.id, d);
        });
        context.commit("setStatisticNodeIdMap", statisticNodeIdMap);
        context.commit("setTotalData", data);
        context.commit("setSelectedData", data);
        context.dispatch("groupByLinkType", data.links);
        context.dispatch("groupByNodeType", data.nodes);
      });
    },
  },
};
