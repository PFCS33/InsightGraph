export default {
  namespaced: true,
  state() {
    return {
      totalData: null,
      selectedData: null,
      linkDataGroup: null,
      nodeDataGroup: null,
      statisticNodeIdMap: null,
      scoreSelectionMap: null,
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
    scoreSelectionMap(state) {
      return state.scoreSelectionMap;
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
    setScoreSelectionMap(state, payload) {
      state.scoreSelectionMap = payload;
    },
  },
  actions: {
    changeTypeSelection(context, payload) {
      context.getters.scoreSelectionMap.set(payload.type, payload.selection);
    },
    groupByNodeType(context, payload) {
      const scoreMap = new Map();
      if (payload.length > 0) {
        payload.forEach((node) => {
          const id = node.id;
          node["insight-list"].forEach((insight, index) => {
            const type = insight["insight-type"];
            const score = insight["insight-score"];
            if (scoreMap.has(type)) {
              const value = scoreMap.get(type);
              value.count += 1;
              value.scores.push({
                id: id,
                index: index,
                score: score,
              });
            } else {
              const value = {
                count: 1,
                scores: [
                  {
                    id: id,
                    index: index,
                    score: score,
                  },
                ],
              };
              scoreMap.set(type, value);
            }
          });
        });
      }

      const types = new Map();
      for (let type of scoreMap.keys()) {
        types.set(type, "all");
      }

      context.commit("setScoreSelectionMap", types);
      context.commit("setNodeDataGroup", scoreMap);
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
