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
      allStatesData: null,
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
    allStatesData(state) {
      return state.allStatesData;
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
    setAllStatesData(state, payload) {
      state.allStatesData = payload;
    },
  },
  actions: {
    changeTypeSelected(context, payload) {
      context.getters.scoreSelectionMap.get(payload.type).selected =
        payload.selected;
    },
    changeTypeSelection(context, payload) {
      context.getters.scoreSelectionMap.get(payload.type).selection =
        payload.selection;
    },
    groupByNodeType(context, payload) {
      const data = payload.data;
      const scoreMap = new Map();
      const scoreSelectionMap = context.getters.scoreSelectionMap;
      if (data.length > 0) {
        data.forEach((node) => {
          const id = node.id;
          node["insight-list"].forEach((insight, index) => {
            const type = insight["insight-type"];
            const score = insight["insight-score"];

            let scoreFilter = true;
            if (!payload.firstFlag) {
              const filter = scoreSelectionMap.get(type);
              if (
                !filter.selected ||
                score < filter.selection[0] ||
                score >= filter.selection[1]
              ) {
                scoreFilter = false;
              }
            }

            if (scoreFilter) {
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
            }
          });
        });
      }

      if (payload.firstFlag) {
        const types = new Map();
        for (let type of scoreMap.keys()) {
          types.set(type, { selection: "all", selected: true });
        }

        context.commit("setScoreSelectionMap", types);
      }
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
      const file = "test_data/result_0817.json";
      const path = `data/${file}`;
      d3.json(path).then(function (data) {
        const tableData = data.table;
        context.dispatch("table/loadHeadData", tableData, { root: true });

        // 获取不同state的对应的links和nodesmap
        const allStatesNodes = d3.group(data.graph.nodes, (d) => d.state);
        const allStatesLinks = new Map();
        Array.from(allStatesNodes.keys()).forEach((state) =>
          allStatesLinks.set(state, [])
        );
        data.graph.links.forEach((link) => {
          for (let [state, nodes] of allStatesNodes.entries()) {
            if (
              nodes.find((d) => d.id === link.source || d.id === link.target)
            ) {
              allStatesLinks.get(state).push(link);
              break;
            }
          }
        });
        const allStatesData = new Map();

        Array.from(allStatesNodes.keys()).forEach((state) => {
          allStatesData.set(state, {
            links: allStatesLinks.get(state),
            nodes: allStatesNodes.get(state),
          });
        });

        context.commit("setAllStatesData", allStatesData);

        // // set focus data
        // const focusNodes = allStatesData.get("S0").nodes;
        // const focusLinks = allStatesData.get("S0").links;

        // // 增加insight-index属性
        // focusNodes.forEach((d) => (d.insightIndex = 0));
        // const statisticNodeIdMap = new Map();

        // focusNodes.forEach((d) => {
        //   statisticNodeIdMap.set(d.id, d);
        // });
        // context.commit("setStatisticNodeIdMap", statisticNodeIdMap);
        // context.commit("setTotalData", {
        //   nodes: focusNodes,
        //   links: focusLinks,
        // });
        // context.dispatch("groupByLinkType", focusLinks);
        // context.dispatch("groupByNodeType", {
        //   data: focusNodes,
        //   firstFlag: true,
        // });
      });
    },
  },
};
