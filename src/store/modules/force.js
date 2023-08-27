export default {
  namespaced: true,
  state() {
    return {
      // load state
      loading: null,
      error: null,
      // graph data
      totalData: null,
      selectedData: null,
      linkDataGroup: null,
      nodeDataGroup: null,
      statisticNodeIdMap: null,
      scoreSelectionMap: null,
      allStatesData: null,
      stateLinksMap: null,
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
    stateLinksMap(state) {
      return state.stateLinksMap;
    },
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
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
    setAllStateLinksMap(state, payload) {
      state.stateLinksMap = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
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
    loadData(context, payload) {
      // const file = "test_data/result_0826_S1.json";
      // const url = `data/${file}`;
      const targetState = payload.state;
      context.commit("setLoading", true);
      const url =
        "http://127.0.0.1:4523/m1/3208600-0-default/getState/" + targetState;
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("NETWORK ERROR");
          }
          return response.json();
        })
        .then((data) => {
          context.commit("setLoading", false);
          context.commit("setError", {
            state: false,
            message: "",
          });
          // get table data
          const tableData = data.table;
          context.dispatch("table/loadHeadData", tableData, { root: true });

          // 获取不同state的对应的links和nodes map
          const allStatesNodes = d3.group(data.graph.nodes, (d) => d.state);
          const allStatesLinks = getLinksByNodes(
            allStatesNodes,
            data.graph.links
          );
          const allStatesData = new Map();

          Array.from(allStatesNodes.keys()).forEach((state) => {
            allStatesData.set(state, {
              links: allStatesLinks.get(state),
              nodes: allStatesNodes.get(state),
            });
          });

          context.commit("setAllStatesData", allStatesData);
          const stateLinksMap = new Map();
          const stateLinks = data["state_links"];

          Object.keys(stateLinks).forEach((nodeId) => {
            const stateObj = stateLinks[nodeId];
            const stateMaps = new Map();
            Object.keys(stateObj).forEach((state) => {
              stateMaps.set(state, stateObj[state]);
            });
            stateLinksMap.set(nodeId, stateMaps);
          });

          context.commit("setAllStateLinksMap", stateLinksMap);

          function getLinksByNodes(filteredNodes, allLinks) {
            const allStatesLinks = new Map();
            Array.from(filteredNodes.keys()).forEach((state) =>
              allStatesLinks.set(state, [])
            );
            allLinks.forEach((link) => {
              for (let [state, nodes] of filteredNodes.entries()) {
                if (
                  nodes.find((d) => d.id === link.source) &&
                  nodes.find((d) => d.id === link.target)
                ) {
                  allStatesLinks.get(state).push(link);
                  break;
                }
              }
            });
            return allStatesLinks;
          }
        })
        .catch((error) => {
          context.commit("setError", {
            state: true,
            message: error.message,
          });
          context.commit("setLoading", false);
          console.error("error:", error.message);
        });
    },
  },
};
