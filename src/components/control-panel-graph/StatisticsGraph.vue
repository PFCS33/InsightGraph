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
    };
  },

  computed: {
    totalData() {
      return this.$store.getters["force/drawData"];
    },
    linkGroup() {
      return this.$store.getters["force/linkDataGroup"];
    },
    nodeGroup() {
      return this.$store.getters["force/nodeDataGroup"];
    },
  },
  methods: {
    drawBarchart() {
      const container = d3.select("#barchart-box").node();
      const barchart = echarts.init(container);
      const that = this;
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

        series: this.linkGroup.map((item) => ({
          name: item.type,
          type: "bar",
          data: [item.count],
        })),
      };

      barchart.setOption(option);

      barchart.on("legendselectchanged", function (params) {
        const selectedLinkData = that.totalData.links.filter(
          (d) => params.selected[d.type]
        );
        const selectedId = new Set();
        selectedLinkData.forEach((link) => {
          // console.log(link);
          const sourceId = link.source;
          const targetId = link.target;
          selectedId.add(sourceId);
          selectedId.add(targetId);
        });
        // console.log(selectedId);
        const filteredNodes = that.totalData.nodes.filter((d) =>
          selectedId.has(d.id)
        );
        that.$store.dispatch("force/groupByNodeType", filteredNodes);
        that.$store.commit("force/setSelectedData", {
          nodes: filteredNodes,
          links: selectedLinkData,
        });
      });
    },
    drawPiechart(newVal) {
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
        const that = this;
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
          const selectedData = that.totalData.nodes.filter(
            (d) => params.selected[d["insight-type"]]
          );
          //console.log(selectedData);
        });
      }
    },
  },
  watch: {
    linkGroup(newVal) {
      // console.log(newVal);
      if (newVal) {
        this.drawBarchart();
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
