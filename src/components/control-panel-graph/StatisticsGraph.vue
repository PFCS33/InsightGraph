<template>
  <div class="statistics-graph-box">
    <BaseCard mode="flat" class="barchart-container">
      <div class="title">Link Relationship</div>

      <div class="link-filter-box">
        <div v-for="link in linkType" class="link-filter">
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            :class="[
              'check-icon',
              { 'check-icon-active': selectedLinkType[link] },
            ]"
            @click="toggleSelectedLink(link)"
          >
            <path
              d="M433.1 657.7c12.7 17.7 39 17.7 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"
            ></path>
            <path
              d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z"
            ></path>
          </svg>
          <span> {{ link }}</span>
        </div>
      </div>
      <div id="barchart-box"></div
    ></BaseCard>
    <BaseCard mode="flat" id="histogram-box"></BaseCard>
  </div>
</template>
<script>
export default {
  data() {
    return {
      barchartConfig: null,
      histogramConfig: null,
      linkType: ["siblings", "parent-child", "same-name"],

      filteredNodes: null,
      filterdLinks: null,
      selectedNodes: null,

      selectedLinkType: {
        siblings: true,
        "parent-child": true,
        "same-name": true,
      },
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
    scoreSelectionMap() {
      return this.$store.getters["force/scoreSelectionMap"];
    },
  },

  methods: {
    toggleSelectedLink(link) {
      this.selectedLinkType[link] = !this.selectedLinkType[link];
    },
    drawBarchart(newVal) {
      const that = this;

      if (!this.barchartConfig) {
        const marginTop = 0;
        const marginRight = 10;
        const marginBottom = 20;
        const marginLeft = 10;
        const container = d3.select("#barchart-box");
        const width = parseInt(container.style("width"), 10);
        const height = parseInt(container.style("height"), 10);

        const colorScale = d3.scaleOrdinal(this.linkType, [
          "#F7A69F",
          "#C69DE9",
          "#53C4B6",
        ]);

        const tooltip = container
          .append("div")
          .attr("class", "tooltip")
          .style("opacity", 0);
        const svg = container
          .append("svg")
          .attr("viewBox", [0, 0, width, height])
          .attr("style", "width: 100%; height:100%;")
          .style("user-select", "none");
        const rectGroup = svg.append("g").attr("class", "rect-group");
        const xAxis = svg
          .append("g")
          .attr("class", "x-axis")
          .attr("transform", `translate(0,${height - marginBottom})`);

        this.barchartConfig = {};
        this.barchartConfig.marginTop = marginTop;
        this.barchartConfig.marginRight = marginRight;
        this.barchartConfig.marginBottom = marginBottom;
        this.barchartConfig.marginLeft = marginLeft;
        this.barchartConfig.container = container;
        this.barchartConfig.width = width;
        this.barchartConfig.height = height;
        this.barchartConfig.colorScale = colorScale;
        this.barchartConfig.tooltip = tooltip;
      }
      const config = this.barchartConfig;
      const y = d3
        .scaleBand()
        .domain(this.linkType.filter((d) => this.selectedLinkType[d]))
        .range([config.marginTop, config.height - config.marginBottom])
        .padding(0.1);

      const x = d3
        .scaleLinear()
        .domain([0, d3.max(newVal, (d) => d.count)])
        .nice()
        .range([config.marginLeft, config.width - config.marginRight]);

      config.container
        .select("svg")
        .select(".rect-group")
        .selectAll("rect")
        .data(newVal, (d) => d.type)
        .join(
          (enter) => {
            enter
              .append("rect")
              .on("mouseover", mouseover)
              .on("mousemove", mousemove)
              .on("mouseleave", mouseleave)
              .transition()
              .duration(300)
              .attr("cursor", "pointer")
              .attr("fill", (d) => config.colorScale(d.type))
              .attr("x", (d) => x(0))
              .attr("y", (d) => y(d.type))
              .attr("width", (d) => x(d.count) - x(0))
              .attr("height", y.bandwidth());
          },
          (update) => {
            update
              .transition()
              .duration(300)
              .attr("cursor", "pointer")
              .attr("fill", (d) => config.colorScale(d.type))
              .attr("x", (d) => x(0))
              .attr("y", (d) => y(d.type))
              .attr("width", (d) => x(d.count) - x(0))
              .attr("height", y.bandwidth());
          },
          (exit) => {
            exit
              .attr("opacity", 1)
              .attr("pointer-events", "none")
              .transition()
              .duration(100)
              .attr("opacity", 0)
              .remove();
          }
        );
      config.container
        .select("svg")
        .select(".x-axis")
        .transition()
        .duration(300)
        .call(d3.axisBottom(x).ticks(8))
        .select(".domain")
        .attr("stroke-opacity", 0);

      function mouseover(event, d) {
        config.tooltip.transition().duration(250).style("opacity", 1);
        d3.select(this).classed("barchart-hover-highlight", true);
      }
      function mousemove(event, d) {
        config.tooltip
          .html(`${d.type}: ${d.count}`)
          .style("left", event.x + 15 + "px")
          .style("top", event.y + "px");
      }
      function mouseleave(event, d) {
        config.tooltip.transition().duration(250).style("opacity", 0);
        d3.select(this).classed("barchart-hover-highlight", false);
      }
    },
    drawHistogram(newVal) {
      const that = this;

      if (!this.histogramConfig) {
        // initialization
        this.histogramConfig = {};
        this.histogramConfig.xTicks = {};
        this.histogramConfig.xFuncs = {};

        // 获取 总insight-type 类型
        const types = Array.from(newVal.keys());

        const container = d3.select("#histogram-box");
        // 获取总宽和高
        const width = parseInt(container.style("width"), 10);
        const height = parseInt(container.style("height"), 10);

        // 获取每个子图的高
        const subHeight = Math.floor(height / types.length);
        // slider的高
        const sliderHeight = 20;
        const sliderRectHeight = 15;
        // 设置每个子图的margin
        const marginTop = 5;
        const marginRight = 10;
        const marginBottom = 15 + sliderHeight;
        const marginLeft = width * 0.25;
        // slider的宽
        const sliderWidth = width - marginLeft - marginRight;
        //创建tooltip
        const tooltip = container
          .append("div")
          .attr("class", "tooltip")
          .style("opacity", 0);
        // 创建svg画布
        const svg = container
          .append("svg")
          .attr("viewBox", [0, 0, width, height])
          .attr("style", "width: 100%; height:100%;")
          .style("user-select", "none");
        // 创建分箱器
        const bin = d3.bin().value((d) => d.score);
        // .thresholds(d3.thresholdFreedmanDiaconis);

        types.forEach((type, index) => {
          const value = newVal.get(type);
          // 连续值分箱
          const bins = bin(value.scores);

          // 获取坐标轴刻度
          const all_ticks = [
            ...bins.map((bin) => bin.x0),
            bins[bins.length - 1].x1,
          ];
          this.histogramConfig.xTicks[type] = all_ticks;

          // 创建当前种类子图的g
          const g = svg
            .append("g")
            .attr("class", `${type}-box`)
            .attr("transform", `translate(0,${index * subHeight})`);

          const x = d3
            .scaleLinear()
            .domain([all_ticks[0], all_ticks[all_ticks.length - 1]])
            .range([marginLeft, width - marginRight]);

          this.histogramConfig.xFuncs[type] = x;
          const y = d3
            .scaleLinear()
            .domain([0, d3.max(bins, (d) => d.length)])
            .range([subHeight - marginBottom, marginTop]);

          // slider矩形框
          const sliderRect = g
            .append("rect")
            .attr("x", marginLeft)
            .attr("y", subHeight - sliderHeight)
            .attr("width", sliderWidth)
            .attr("height", sliderRectHeight)
            .attr("fill", "#edd2ff")
            .attr("stroke", "#fff");

          // 添加slider的背景线
          all_ticks.forEach((d, index) => {
            if (index !== 0)
              g.append("line")
                .attr("x1", x(d))
                .attr("x2", x(d))
                .attr("y1", subHeight - sliderHeight)
                .attr("y2", subHeight - sliderHeight + sliderRectHeight)
                .attr("stroke", "#fff");
          });

          // 添加brush
          const brush = d3
            .brushX()
            .extent([
              [marginLeft, subHeight - sliderHeight],
              [
                marginLeft + sliderWidth,
                subHeight - sliderHeight + sliderRectHeight,
              ],
            ])
            .on("end", function (event) {
              brushended(this, event, type);
            });
          g.append("g").attr("class", "brush").call(brush);

          function brushended(brushContainer, event, type) {
            // 获取选择的两端的svg坐标
            const selection = event.selection;

            if (!event.sourceEvent) return;
            if (!selection) {
              // 选择为空时 （默认全选）
              that.$store.dispatch("force/changeTypeSelection", {
                type: type,
                selection: "all",
              });
              return;
            }
            // 反解坐标，得到原值
            const [x0_selected, x1_selected] = selection.map((d) =>
              x.invert(d)
            );
            // 寻找最近的bins
            const x0 = all_ticks.reduce((acc, tick) => {
              return Math.abs(tick - x0_selected) < Math.abs(acc - x0_selected)
                ? tick
                : acc;
            }, all_ticks[0]);

            const x1 = all_ticks.reduce((acc, tick) => {
              return Math.abs(tick - x1_selected) < Math.abs(acc - x1_selected)
                ? tick
                : acc;
            }, all_ticks[0]);

            d3.select(brushContainer)
              .transition()
              .call(brush.move, x1 > x0 ? [x0, x1].map(x) : null);

            that.$store.dispatch("force/changeTypeSelection", {
              type: type,
              selection: x1 > x0 ? [x0, x1] : "all",
            });
          }
          // 直方图矩形框
          g.append("g")
            .attr("fill", "#b67dc1")
            .attr("class", "rect-group")
            .style("cursor", "pointer")
            .selectAll("rect")
            .data(bins, (d, index) => index)
            .join("rect")
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)
            .attr("x", (d) => {
              if (d.x0 === d.x1) {
                return marginLeft;
              } else {
                return x(d.x0) + 1;
              }
            })
            .attr("width", (d) => {
              const rectWidth = x(d.x1) - x(d.x0);
              if (rectWidth === 0) {
                return width - marginLeft - marginRight;
              } else {
                return rectWidth - 1;
              }
            })
            .attr("y", (d) => y(d.length))
            .attr("height", (d) => y(0) - y(d.length));
          // x轴
          g.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0,${subHeight - marginBottom})`)
            .call(d3.axisBottom(x).ticks(5).tickSizeOuter(0).tickSize(4))
            .call((g) => g.attr("font-size", "0.8rem"));
        });

        this.histogramConfig.container = container;
        this.histogramConfig.width = width;
        this.histogramConfig.marginLeft = marginLeft;
        this.histogramConfig.marginRight = marginRight;
        this.histogramConfig.marginTop = marginTop;
        this.histogramConfig.marginBottom = marginBottom;
        this.histogramConfig.subHeight = subHeight;
        this.histogramConfig.tooltip = tooltip;
        this.histogramConfig.types = types;

        // piechart.on("legendselectchanged", function (params) {
        //   const filteredNodes = that.filteredNodes
        //     ? that.filteredNodes
        //     : that.totalData.nodes;
        //   const selectedLinks = that.filterdLinks
        //     ? that.filterdLinks
        //     : that.totalData.links;

        //   const selectedNodeData = filteredNodes.filter(
        //     (d) =>
        //       params.selected[d["insight-list"][d.insightIndex]["insight-type"]]
        //   );

        //   const idMap = new Set();
        //   selectedNodeData.forEach((node) => {
        //     idMap.add(node.id);
        //   });
        //   const filteredLinks = selectedLinks.filter(
        //     (d) => idMap.has(d.source) && idMap.has(d.target)
        //   );

        //   that.$store.dispatch("force/groupByLinkType", filteredLinks);
        //   that.$store.dispatch("force/groupByNodeType", selectedNodeData);
        //   that.$store.commit("force/setSelectedData", {
        //     nodes: selectedNodeData,
        //     links: filteredLinks,
        //   });
        // });
      } else {
        const types = this.histogramConfig.types;
        const xTicks = this.histogramConfig.xTicks;
        types.forEach((type, index) => {
          const value = newVal.get(type);
          // get old x
          const x = this.histogramConfig.xFuncs[type];
          // get new bins
          let bins = [];
          if (value) {
            bins = d3
              .bin()
              .value((d) => d.score)
              .domain(x.domain())
              .thresholds(xTicks[type])(value.scores);
          }
          // get new y
          const y = d3
            .scaleLinear()
            .domain([0, d3.max(bins, (d) => d.length)])
            .range([
              this.histogramConfig.subHeight -
                this.histogramConfig.marginBottom,
              this.histogramConfig.marginTop,
            ]);

          this.histogramConfig.container
            .select("svg")
            .select(`.${type}-box`)
            .select(".rect-group")
            .selectAll("rect")
            .data(bins, (d, index) => index)
            .join(
              (enter) => {
                enter
                  .append("rect")
                  .attr("y", y(0))
                  .attr("x", x(xTicks[type][0]))
                  .attr("height", 0)
                  .on("mouseover", mouseover)
                  .on("mousemove", mousemove)
                  .on("mouseleave", mouseleave)
                  .transition()
                  .duration(300)
                  .attr("x", (d) => {
                    if (d.x0 === d.x1) {
                      return this.histogramConfig.marginLeft;
                    } else {
                      return x(d.x0) + 1;
                    }
                  })
                  .attr("width", (d) => {
                    const rectWidth = x(d.x1) - x(d.x0);
                    if (rectWidth === 0) {
                      return (
                        this.histogramConfig.width -
                        this.histogramConfig.marginLeft -
                        this.histogramConfig.marginRight
                      );
                    } else {
                      return rectWidth - 1;
                    }
                  })
                  .attr("y", (d) => y(d.length))
                  .attr("height", (d) => y(0) - y(d.length));
              },
              (update) => {
                update
                  .transition()
                  .duration(300)
                  .attr("x", (d) => {
                    if (d.x0 === d.x1) {
                      return this.histogramConfig.marginLeft;
                    } else {
                      return x(d.x0) + 1;
                    }
                  })
                  .attr("width", (d) => {
                    const rectWidth = x(d.x1) - x(d.x0);
                    if (rectWidth === 0) {
                      return (
                        this.histogramConfig.width -
                        this.histogramConfig.marginLeft -
                        this.histogramConfig.marginRight
                      );
                    } else {
                      return rectWidth - 1;
                    }
                  })
                  .attr("y", (d) => y(d.length))
                  .attr("height", (d) => y(0) - y(d.length));
              },
              (exit) => {
                exit
                  .attr("opacity", 1)
                  .attr("pointer-events", "none")
                  .transition()
                  .duration(100)
                  .attr("opacity", 0)
                  .remove();
              }
            );
        });
      }
      function mouseover(event, d) {
        that.histogramConfig.tooltip
          .transition()
          .duration(250)
          .style("opacity", 1);
        d3.select(this).classed("barchart-hover-highlight", true);
      }
      function mousemove(event, d) {
        that.histogramConfig.tooltip
          .html(`${d.length}`)
          .style("left", event.x + 15 + "px")
          .style("top", event.y + "px");
      }
      function mouseleave(event, d) {
        that.histogramConfig.tooltip
          .transition()
          .duration(250)
          .style("opacity", 0);
        d3.select(this).classed("barchart-hover-highlight", false);
      }
    },
    filterByScocre(scoreSelectionMap, originLinks, originNodes) {
      // 根据 score selection 筛选出新的selectedNodeData
      const selectedNodeData = originNodes.filter((node) => {
        let select = false;
        for (let insight of node["insight-list"]) {
          const type = insight["insight-type"];
          const score = insight["insight-score"];
          const selection = scoreSelectionMap.get(type);
          if (selection === "all") {
            select = true;
            break;
          } else if (score >= selection[0] && score < selection[1]) {
            select = true;
            break;
          }
        }
        return select;
      });

      const idMap = new Set();
      selectedNodeData.forEach((node) => {
        idMap.add(node.id);
      });
      const filteredLinks = originLinks.filter(
        (d) => idMap.has(d.source) && idMap.has(d.target)
      );
      return [filteredLinks, selectedNodeData];
    },
  },
  watch: {
    linkGroup(newVal) {
      if (newVal) {
        this.drawBarchart(newVal);
      }
    },
    nodeGroup(newVal) {
      if (newVal) {
        this.drawHistogram(newVal);
      }
    },
    scoreSelectionMap: {
      deep: true,
      handler(newVal) {
        const that = this;
        if (newVal) {
          const filteredNodes = that.filteredNodes
            ? that.filteredNodes
            : that.totalData.nodes;
          const selectedLinks = that.filterdLinks
            ? that.filterdLinks
            : that.totalData.links;

          const [filteredLinks, selectedNodeData] = this.filterByScocre(
            newVal,
            selectedLinks,
            filteredNodes
          );
          that.$store.dispatch("force/groupByLinkType", filteredLinks);
          that.$store.dispatch("force/groupByNodeType", {
            data: selectedNodeData,
            firstFlag: false,
          });
          that.$store.commit("force/setSelectedData", {
            nodes: selectedNodeData,
            links: filteredLinks,
          });
        }
      },
    },
    selectedLinkType: {
      deep: true,
      handler(newVal) {
        const that = this;
        // 作为主选项，每次选择获取全局数据
        const totalLinks = that.totalData.links;
        const totalNodes = that.totalData.nodes;

        const selectedLinkData = totalLinks.filter((d) => newVal[d.type]);

        const selectedId = new Set();
        selectedLinkData.forEach((link) => {
          const sourceId = link.source;
          const targetId = link.target;
          selectedId.add(sourceId);
          selectedId.add(targetId);
        });

        const unSelectedId = new Set();
        const unSelectedLinkData = totalLinks.filter((d) => !newVal[d.type]);

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
        that.filterdLinks = selectedLinkData;

        const [links, nodes] = this.filterByScocre(
          this.scoreSelectionMap,
          selectedLinkData,
          filteredNodes
        );

        that.$store.dispatch("force/groupByLinkType", links);
        that.$store.dispatch("force/groupByNodeType", {
          data: filteredNodes,
          firstFlag: false,
        });
        that.$store.commit("force/setSelectedData", {
          nodes: nodes,
          links: links,
        });
        // that.piechart.dispatchAction({
        //   type: "legendAllSelect",
        // });
      },
    },
  },

  created() {},
};
</script>

<style scoped>
.statistics-graph-box {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5vw;

  background-color: #fff;
}
.barchart-container {
  height: 25vh;
  width: 100%;
  background-color: #fff;
  transition: border-color 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  gap: 0.3vw;
}
#histogram-box {
  width: 100%;
  height: 120vh;
  margin-bottom: 0.3vw;
  background-color: #fff;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.link-filter-box {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 4%;
  flex-grow: 0;
  user-select: none;
}
.link-filter {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
#barchart-box {
  flex-grow: 1;
}

#histogram-box:hover,
.barchart-container:hover {
  box-shadow: 1px 4px 6px 1px rgba(0, 0, 0, 0.26);
}

.title {
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: #545b77;
  margin: 0.2vw 0;
  margin-top: 0.6vw;
  flex-grow: 0;
}
.check-icon {
  cursor: pointer;

  width: 15px;
  height: 15px;

  border-radius: 2px;
  fill: #545b77;
  background-color: #fff;
  transition: background-color 0.2s, fill 0.2s;
}

.check-icon:hover,
.check-icon:active {
  background-color: #545b77;
  fill: #fff;
}
.check-icon-active {
  background-color: #858eb5;
  fill: #fff;
}
</style>

<style>
.barchart-hover-highlight {
  filter: brightness(110%);

  transition: filter 0.2s;
}
</style>
