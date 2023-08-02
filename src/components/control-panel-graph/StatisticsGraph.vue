<template>
  <div class="statistics-graph-box">
    <BaseCard inset id="barchart-box"></BaseCard>
    <BaseCard inset id="piechart-box"></BaseCard>
  </div>
</template>
<script>
export default {
  data() {
    return {
      barchart: null,
      piechart: null,

      filteredNodes: null,
      selectedNodes: null,
      filterdLinks: null,
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
        this.barchart.setOption({
          series: newVal.map((item) => ({
            name: item.type,
            type: "bar",
            data: [item.count],
          })),
          yAxis: {
            type: "category",
            axisLabel: { show: false }, // 隐藏 Y 轴的标签,
          },
        });
      } else {
        const container = d3.select("#barchart-box").node();

        const barchart = echarts.init(container, "myTheme");

        const option = {
          title: {
            text: "Link Relationship",
            left: "center",
            top: "5%",
            textStyle: {
              color: "#555",
              fontSize: 13,
            },
          },
          legend: {
            top: "15%",
            left: "5%",
            icon: "circle",
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
            left: "10%",
            right: "10%",
            bottom: "10%",
            top: "32%",
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
            itemStyle: {
              borderRadius: 3,
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 4,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          })),
        };

        barchart.setOption(option);
        this.barchart = barchart;
        barchart.on("legendselectchanged", function (params) {
          const totalLinks = that.totalData.links;
          const totalNodes = that.totalData.nodes;

          const selectedLinkData = totalLinks.filter(
            (d) => params.selected[d.type]
          );

          const selectedId = new Set();
          selectedLinkData.forEach((link) => {
            const sourceId = link.source;
            const targetId = link.target;
            selectedId.add(sourceId);
            selectedId.add(targetId);
          });

          const unSelectedId = new Set();
          const unSelectedLinkData = totalLinks.filter(
            (d) => !params.selected[d.type]
          );

          unSelectedLinkData.forEach((link) => {
            const sourceId = link.source;
            const targetId = link.target;

            unSelectedId.add(sourceId);
            unSelectedId.add(targetId);
          });

          const unSelectedIdFixed = new Set(
            [...unSelectedId].filter((x) => !selectedId.has(x))
          );

          const filteredNodes = totalNodes.filter(
            (d) => !unSelectedIdFixed.has(d.id)
          );
          that.filteredNodes = filteredNodes;
          that.$store.dispatch("force/groupByLinkType", selectedLinkData);
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
              data: newVal.sort(function (a, b) {
                return a.value - b.value;
              }),
            },
          ],
        });
      } else {
        // initialization
        const container = d3.select("#piechart-box").node();
        const piechart = echarts.init(container, "myTheme");
        const option = {
          title: {
            text: "Insight Type",
            left: "center",
            top: "4%",
            textStyle: {
              color: "#555",
              fontSize: 13,
            },
          },
          legend: {
            top: "13%",
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
            right: "10%",
            bottom: "10%",
            top: "33%",
            containLabel: true,
          },

          series: [
            {
              name: "insight-type",
              stillShowZeroSum: false,
              type: "pie",
              data: newVal.sort(function (a, b) {
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
                length: 5,
                length2: 10,
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        };
        piechart.setOption(option);
        this.piechart = piechart;
        piechart.on("legendselectchanged", function (params) {
          const filteredNodes = that.filteredNodes
            ? that.filteredNodes
            : that.totalData.nodes;

          const selectedNodeData = filteredNodes.filter(
            (d) => params.selected[d["insight-type"]]
          );

          const idMap = new Set();
          selectedNodeData.forEach((node) => {
            idMap.add(node.id);
          });
          const filteredLinks = that.totalData.links.filter(
            (d) => idMap.has(d.source) && idMap.has(d.target)
          );

          that.$store.dispatch("force/groupByLinkType", filteredLinks);
          that.$store.commit("force/setSelectedData", {
            nodes: selectedNodeData,
            links: filteredLinks,
          });
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
      if (newVal) {
        this.drawBarchart(newVal);
      }
    },
    nodeGroup(newVal) {
      if (newVal) {
        this.drawPiechart(newVal);
      }
    },
  },

  created() {},
};
</script>

<style scoped>
.statistics-graph-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  background: #f1f3f5;
  /* background: #e9ecef; */
}
#barchart-box {
  width: 100%;
  height: 100%;
  flex: 0.4;
  background: #fff;
}
#piechart-box {
  width: 100%;
  height: 100%;
  flex: 0.6;
  background: #fff;
}
</style>
