export default {
  namespaced: true,
  state() {
    return {
      // load state
      loading: null,
      error: null,
      // statistic graph data, single state
      focusState: null,
      totalData: null,
      selectedData: null,

      // statistic graph data, multi state
      scoreSelectionMaps: new Map(),

      // force graph, data loading
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

    scoreSelectionMaps(state) {
      return state.scoreSelectionMaps;
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

    focusState(state) {
      return state.focusState;
    },
  },
  mutations: {
    setTotalData(state, payload) {
      state.totalData = payload;
    },
    setSelectedData(state, payload) {
      state.selectedData = payload;
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

    setFocusState(state, payload) {
      state.focusState = payload;
    },
  },
  actions: {
    setStatisticGraph(context, payload) {
      const state = payload.state;
      const data = payload.data;
      // reset total data and focus state
      context.commit("setTotalData", data);
      context.commit("setFocusState", state);
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
