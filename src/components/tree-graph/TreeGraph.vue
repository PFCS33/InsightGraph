<template>
  <div class="container">
    <div id="tree-svg-container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vegaLiteHeight: 100,
      vegaLiteWidth: 150,
      iconSize: 15,
      iconOffset: 5,
      rectWidthOffset: 3,
      rectHeightOffset: 13,
      rectHeightBottomOffset: 3,
      rectR: 10,
    };
  },
  computed: {
    totalData() {
      return this.$store.getters["tree/totalData"];
    },
  },
  methods: {
    drawVegaLite(g) {
      const that = this;

      // const simulation = this.simulations.get(state);
      // const showIndex = this.showIndexs.get(state);
      // const pinnedIndex = this.pinnedIndexs.get(state);

      const container = g.select(".vega-lite-container");
      const rect = g.selectChild(".rect");
      // const removeIcon = g.selectChild(".remove");
      // const pinIcon = g.selectChild(".pin");
      // const checkIcon = g.selectChild(".check");

      const rectTitle = g.select(".rect-title");
      const rectState = g.select(".title-state");
      const rectTitleName = g.selectChild(".title-name");
      const rectTitleDescription = g.selectChild(".title-description");
      const gData = g.datum().data.forceData;

      let yourVlSpec = JSON.parse(
        gData["insight-list"][gData.insightIndex]["vega-lite"]
      );

      // add some options
      yourVlSpec["width"] = this.vegaLiteWidth;
      yourVlSpec["height"] = this.vegaLiteHeight;
      yourVlSpec["usermeta"] = { embedOptions: { renderer: "svg" } };

      // initialization
      vegaEmbed(container.node(), yourVlSpec).then((result) => {
        const view = result.view.background("transparent");

        const svg = container.select("svg");

        // add animation
        svg
          .attr("class", "vega-lite-graph")
          .attr("fill-opacity", 0)
          .attr("stroke-opacity", 0)
          .transition()
          .duration(175)
          .attr("fill-opacity", 1)
          .attr("stroke-opacity", 1);
        const width = svg.attr("width");
        const height = svg.attr("height");

        const titleHeight = that.iconSize + 2 * that.iconOffset;
        const rectWidth = +width + that.rectWidthOffset * 2;
        const rectHeight =
          +height + that.rectHeightOffset * 2 + titleHeight + that.iconSize;

        const translateX = rectWidth / 2;
        const translateY = rectHeight / 2;

        // add ainmation
        rect
          .attr("rx", that.rectR)
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", 0)
          .attr("height", 0)
          .transition()
          .duration(150)
          .attr("x", -translateX)
          .attr("y", -translateY)
          .attr("width", rectWidth)
          .attr("height", rectHeight);

        rectTitle
          .attr("rx", that.rectR)
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", 0)
          .attr("height", 0)
          .transition()
          .duration(150)
          .attr("x", -translateX)
          .attr("y", -translateY)
          .attr("width", rectWidth)
          .attr("height", titleHeight);

        rectState
          .text(function () {
            return gData.state;
          })
          .attr("x", translateX - that.iconOffset)
          .attr("y", -translateY + that.iconSize + that.iconOffset / 2)
          .attr("text-anchor", "end")
          .attr("font-size", that.iconSize - 2);

        rectTitleName

          .text(function () {
            return gData["insight-list"][gData.insightIndex]["insight-type"];
          })
          .attr("x", -translateX + that.iconOffset)
          .attr("y", -translateY + that.iconSize + that.iconOffset / 2)
          .attr("font-size", that.iconSize - 2);
        rectTitleDescription
          .text(function () {
            const rowName = gData.row;

            return `row: ${rowName}`;
          })
          .attr("font-size", "10px")
          .attr("x", -translateX + that.iconOffset)
          .attr("y", -translateY + that.iconSize + titleHeight)
          .append("tspan")
          .attr("x", -translateX + that.iconOffset)
          .attr("dy", "1.2em")
          .style("text-align", "left")
          .text(function () {
            const colName = gData.col;
            return `col: ${colName}`;
          });

        container.node().appendChild(svg.node());

        container.select("div").remove();
        container.select("details").remove();

        container.style(
          "transform",
          `translate(${-width / 2}px,${
            -height / 2 + that.rectHeightOffset + titleHeight / 2
          }px)`
        );
      });
    },
    drawTree(newVal) {
      const that = this;
      const treeInfo = newVal.tree;

      const svgContainer = d3.select("#tree-svg-container");
      const containerWidth = parseInt(svgContainer.style("width"), 10);
      const containerHeight = parseInt(svgContainer.style("height"), 10);
      const width = containerWidth;
      const height = containerHeight;

      const offsetX = width * 0.01;
      const offsetY = height * 0.05;

      const svg = svgContainer
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [
          -offsetX,
          -height / 2,
          width + offsetX + this.vegaLiteWidth,
          height + offsetY * 2,
        ])
        .attr("style", "width: 100%; height: 100%;")
        .attr("overflow", "visible");
      const root = d3.hierarchy(treeInfo);
      const tree = d3
        .tree()
        .nodeSize([this.vegaLiteHeight * 4, this.vegaLiteWidth * 2.2]);

      tree(root);
      const link = svg
        .append("g")
        .attr("class", "link-group")
        .attr("fill", "none")
        .attr("stroke", "#555")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1.5)
        .selectAll()
        .data(root.links())
        .join("path")
        .attr(
          "d",
          // 水平路径，颠倒
          d3
            .linkHorizontal()
            .x((d) => d.y)
            .y((d) => d.x)
        );
      const nodeG = svg.append("g").attr("class", "node-group");

      const containerGroup = nodeG
        .selectAll()
        .data(root.descendants())
        .join("g")
        .attr("transform", (d) => `translate(${d.y},${d.x})`);

      containerGroup
        .filter((d) => d.data.name === "root")
        .append("circle")
        .attr("fill", (d) => (d.children ? "#555" : "#999"))
        .attr("r", 2.5);
      containerGroup
        .filter((d) => d.data.name !== "root")
        .append("rect")
        .attr("class", "rect vega-lite-border")
        .attr("fill", "#fff")
        .attr("stroke", "#ccc")
        .attr("stroke-width", 1.5)
        .attr("cursor", "pointer")
        .on("mouseover", function () {
          const g = d3.select(this.parentNode);
          d3.select(this).classed("center-highlight", true);
          g.select(".rect-title").classed("center-highlight", true);
        })
        .on("mouseout", function () {
          const g = d3.select(this.parentNode);
          d3.select(this).classed("center-highlight", false);
          g.select(".rect-title").classed("center-highlight", false);
        });

      const titleGroup = containerGroup
        .filter((d) => d.data.name !== "root")
        .append("rect")
        .attr("class", "rect-title")
        .attr("fill", "#e9ecef")
        .attr("stroke", "#ccc")
        .attr("stroke-width", 1.5)
        .attr("pointer-events", "none");

      const nameGroup = containerGroup
        .filter((d) => d.data.name !== "root")
        .append("text")
        .attr("class", "title-text title-name")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .attr("fill", "#555")
        .attr("font-weight", 600);

      const stateGroup = containerGroup
        .filter((d) => d.data.name !== "root")
        .append("text")
        .attr("class", "title-text title-state")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .attr("fill", "#555")
        .attr("font-weight", 600);

      const descriptionGroup = containerGroup
        .filter((d) => d.data.name !== "root")
        .append("text")

        .attr("class", "title-text title-description")
        .attr("pointer-events", "none")
        .attr("fill", "#555")
        .style("user-select", "none");

      const vegaLiteContainerGroup = containerGroup
        .filter((d) => d.data.name !== "root")
        .append("g")
        .attr("class", "vega-lite-container");

      containerGroup.each(function () {
        const g = d3.select(this);
        if (g.datum().data.name !== "root") that.drawVegaLite(g);
      });

      // node
      //   .append("text")
      //   .attr("dy", "0.31em")
      //   .attr("x", (d) => (d.children ? -6 : 6))
      //   .attr("text-anchor", (d) => (d.children ? "end" : "start"))
      //   .text((d) => d.data.name)
      //   .clone(true)
      //   .lower()
      //   .attr("stroke", "white");
      const zoomFunction = d3
        .zoom()
        .scaleExtent([0.5, 3])
        .on("zoom", function (event) {
          svg.attr("transform", event.transform);
        });

      svgContainer.call(zoomFunction);
    },
  },
  watch: {
    // totalData(newVal) {
    //   this.drawTree(newVal);
    // },
  },
  mounted() {
    this.drawTree(this.totalData);
  },
};
</script>

<style scoped>
.container,
#tree-svg-container {
  width: 100%;
  height: 100%;
}
</style>
