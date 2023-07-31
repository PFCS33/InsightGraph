<template>
  <div class="container">
    <div id="barchart-box"></div>
    <div id="piechart-box"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      barchart: null,
      piechart: null,
      selectedLinkData: null,
      filteredNodes: null,
      selectedNodeData: null,
      //filterdLinks: null,
    };
  },

  computed: {
    totalData() {
      return this.$store.getters["force/totalData"];
    },
    linkGroup() {
      return this.$store.getters["force/linkDataGroup"];
    },
    nodeGroup() {
      return this.$store.getters["force/nodeDataGroup"];
    },
  },
  methods: {
    drawBarchart(newVal) {
      const that = this;
      if (this.barchart) {
        console.log(newVal);
        this.barchart.setOption({
          series: newVal.map((item) => ({
            name: item.type,
            type: "bar",
            data: [item.count],
          })),
        });
      } else {
        const container = d3.select("#barchart-box").node();
        const barchart = echarts.init(container);
        const option = {
          title: {
            text: "Links: Relationship",
            left: "center",
            top: "2%",
            textStyle: {
              color: "#555",
              fontSize: 15,
            },
          },
          legend: {
            top: "12%",
            left: "5%",
            textStyle: {
              fontSize: 10,
              color: "#555",
            },
          },
          tooltip: {
            trigger: "item",
            textStyle: {
              color: "#555",
              fontSize: 12,
            },
          },
          grid: {
            left: "5%",
            right: "4%",
            bottom: "5%",
            top: "35%",
            containLabel: true,
          },
          xAxis: {},
          yAxis: {
            type: "category",
            axisLabel: { show: false }, // 隐藏 Y 轴的标签,
          },

          series: newVal.map((item) => ({
            name: item.type,
            type: "bar",
            data: [item.count],
          })),
        };

        barchart.setOption(option);
        this.barchart = barchart;
        barchart.on("legendselectchanged", function (params) {
          const selectedLinkData = that.totalData.links.filter(
            (d) => params.selected[d.type]
          );
          that.selectedLinkData = selectedLinkData;

          const selectedId = new Set();
          selectedLinkData.forEach((link) => {
            const sourceId = link.source;
            const targetId = link.target;
            selectedId.add(sourceId);
            selectedId.add(targetId);
          });

          const unSelectedId = new Set();
          const unSelectedLinkData = that.totalData.links.filter(
            (d) => !params.selected[d.type]
          );

          unSelectedLinkData.forEach((link) => {
            // console.log(link);
            const sourceId = link.source;
            const targetId = link.target;

            unSelectedId.add(sourceId);
            unSelectedId.add(targetId);
          });

          const unSelectedIdFixed = new Set(
            [...unSelectedId].filter((x) => !selectedId.has(x))
          );

          // console.log(selectedId);
          const filteredNodes = that.totalData.nodes.filter(
            (d) => !unSelectedIdFixed.has(d.id)
          );
          that.filteredNodes = filteredNodes;

          that.$store.dispatch("force/groupByNodeType", filteredNodes);
          that.$store.commit("force/setSelectedData", {
            nodes: filteredNodes,
            links: selectedLinkData,
          });
        });
      }
    },
    drawPiechart(newVal) {
      const that = this;
      if (this.piechart) {
        // update data
        this.piechart.setOption({
          series: [
            {
              data: newVal
                .map((item) => ({
                  name: item["insight-type"],
                  value: item["count"],
                }))
                .sort(function (a, b) {
                  return a.value - b.value;
                }),
            },
          ],
        });
      } else {
        // initialization
        const container = d3.select("#piechart-box").node();
        const piechart = echarts.init(container);
        //console.log(this.nodeGroup);
        const option = {
          title: {
            text: "Node: Insight Type",
            left: "center",
            top: "2%",
            textStyle: {
              color: "#555",
              fontSize: 15,
            },
          },
          legend: {
            top: "12%",
            left: "5%",
            textStyle: {
              fontSize: 10,
              color: "#555",
            },
          },
          tooltip: {
            trigger: "item",
            textStyle: {
              color: "#555",
              fontSize: 12,
            },
          },
          grid: {
            left: "5%",
            right: "4%",
            bottom: "5%",
            top: "35%",
            containLabel: true,
          },

          series: [
            {
              name: "insight-type",
              stillShowZeroSum: false,
              type: "pie",
              data: newVal
                .map((item) => ({
                  name: item["insight-type"],
                  value: item["count"],
                }))
                .sort(function (a, b) {
                  return a.value - b.value;
                }),
              radius: ["5%", "55%"],
              center: ["50%", "70%"],
              roseType: "area",
              itemStyle: {
                borderRadius: 4,
              },
              labelLine: {
                smooth: 0.2,
                length: 10,
                length2: 20,
              },
            },
          ],
        };
        piechart.setOption(option);
        this.piechart = piechart;
        piechart.on("legendselectchanged", function (params) {
          // console.log(params);
          const filteredNodes = that.filteredNodes
            ? that.filteredNodes
            : that.totalData.nodes;

          const selectedNodeData = filteredNodes.filter(
            (d) => params.selected[d["insight-type"]]
          );
          that.selectedNodeData = selectedNodeData;
          const idMap = new Set();
          selectedNodeData.forEach((node) => {
            idMap.add(node.id);
          });
          const filteredLinks = that.totalData.links.filter(
            (d) => idMap.has(d.source) && idMap.has(d.target)
          );
          // console.log("filteredLinks:", filteredLinks);

          that.$store.dispatch("force/groupByLinkType", filteredLinks);
          that.$store.commit("force/setSelectedData", {
            nodes: selectedNodeData,
            links: filteredLinks,
          });

          //console.log(selectedData);
        });
      }
    },
  },
  watch: {
    // totalData(newVal) {
    //   if (newVal) {
    //     const idMap = new Set();
    //     newVal.nodes.forEach((node) => {
    //       idMap.add(node.id);
    //     });
    //     this.idMap = idMap;
    //   }
    // },
    linkGroup(newVal) {
      // console.log(newVal);
      if (newVal) {
        this.drawBarchart(newVal);
      }
    },
    nodeGroup(newVal) {
      // console.log(newVal);
      if (newVal) {
        this.drawPiechart(newVal);
      }
    },
  },

  created() {},
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;

  border: 1px solid #000;
  display: flex;
  flex-direction: column;
}
#barchart-box {
  width: 100%;
  height: 100%;
  border: 1px solid #000;
}
#piechart-box {
  width: 100%;
  height: 100%;
  border: 1px solid #000;
}
</style>
