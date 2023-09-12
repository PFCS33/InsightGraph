export default {
  namespaced: true,
  state() {
    return {
      tableData: null,
      rowDict: null,
      colDict: null,
      checkedArea: null,
      hoveredArea: null,
      clickedArea: null,
      heatValues: null,
    };
  },
  getters: {
    tableData(state) {
      return state.tableData;
    },
    rowDict(state) {
      return state.rowDict;
    },
    colDict(state) {
      return state.colDict;
    },
    checkedArea(state) {
      return state.checkedArea;
    },
    hoveredArea(state) {
      return state.hoveredArea;
    },
    clickedArea(state) {
      return state.clickedArea;
    },
    heatValues(state) {
      return state.heatValues;
    },
  },
  mutations: {
    setTableData(state, payload) {
      state.tableData = payload;
    },
    setRowDict(state, payload) {
      state.rowDict = payload;
    },
    setColDict(state, payload) {
      state.colDict = payload;
    },
    setCheckedArea(state, payload) {
      state.checkedArea = payload;
    },
    setHoveredArea(state, payload) {
      state.hoveredArea = payload;
    },
    setClickedArea(state, payload) {
      state.clickedArea = payload;
    },
    setHeatValues(state, payload) {
      state.heatValues = payload;
    },
  },
  actions: {
    convertCheckSelection(context, payload) {
      let result = new Map();
      const data = payload.data;
      const mode = payload.mode;

      if (data) {
        for (let [key, value] of data.entries()) {
          const rowName = value.row;
          const colName = value.col;
          const rowDict = context.getters.rowDict;
          const colDict = context.getters.colDict;

          let colSpan = null;
          if (colName === "_") {
            colSpan = [0, context.getters.tableData.colNum - 1];
          } else {
            colSpan = findColSpan(colName, colDict);
          }
          let rowSpan = null;
          if (rowName === "_") {
            rowSpan = [0, context.getters.tableData.rowNum - 1];
          } else {
            rowSpan = findRowSpan(rowName, rowDict);
          }

          result.set(key, {
            rowSpan: rowSpan,
            colSpan: colSpan,
          });
        }
      } else {
        result = null;
      }

      if (mode === "checked") context.commit("setCheckedArea", result);
      else if (mode === "hovered") context.commit("setHoveredArea", result);
      else if (mode === "clicked") context.commit("setClickedArea", result);

      function findColSpan(colName, colDict) {
        const path = colName.split("_");
        let info = colDict[path[0]];
        for (let i = 1; i < path.length; i++) {
          info = info.children[path[i]];
        }
        return info.colSpan;
      }
      function findRowSpan(rowName, rowDict) {
        const path = rowName.split("_");
        let info = rowDict[path[0]];
        for (let i = 1; i < path.length; i++) {
          info = info.children[path[i]];
        }
        return info.rowSpan;
      }
    },

    loadHeadData(context, payload) {
      const data = payload.structure;

      context.commit("setTableData", data);
      context.commit("setRowDict", listToDict(data.rows));
      context.commit("setColDict", listToDict(data.cols));
      context.commit("setHeatValues", payload.heat);

      function listToDict(list) {
        let obj = {};
        for (let item of list) {
          if ("children" in item && item.children) {
            // Don't modify the existing list, but create a new dict for children
            let childObj = listToDict(item.children);
            obj[item.name] = { ...item, children: childObj };
          } else {
            obj[item.name] = item;
          }
        }
        return obj;
      }
    },
  },
};
