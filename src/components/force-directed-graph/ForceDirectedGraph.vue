<template>
  <div id="svg-container"></div>
</template>

<script>
import * as d3 from "d3";
export default {
  data() {
    return {};
  },
  computed: {
    drawData() {
      return this.$store.getters["force/drawData"];
    },
  },
  watch: {
    drawData(newVal) {
      if (newVal) {
        this.drawGraph();
      }
    },
  },
  methods: {
    loadData() {
      this.$store.dispatch("force/loadData");
    },
    drawGraph() {
      // 获取绘画数据
      const data = this.drawData;
      // 创建原始数据的copy，因为 force simulation 会改变数组数据
      const links = data.links.map((d) => ({ ...d }));
      const nodes = data.nodes.map((d) => ({ ...d }));
      //console.log(data.links);
      // 选择svg container
      const svgContainer = d3.select("#svg-container");
      // 获取container的宽和高
      const width = parseInt(svgContainer.style("width"), 10);
      const height = parseInt(svgContainer.style("height"), 10);

      // 先把svg图和nodes+links 元素画出来
      // 随便设置一个种类的颜色映射
      const color = d3.scaleOrdinal(d3.schemeCategory10);
      // 创建svg
      const svg = svgContainer
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewbox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto;");
      // 画links
      const linkGroup = svg
        .append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .selectAll()
        .data(links)
        .join("line")
        // link的value值映射到粗细
        .attr("stroke-width", (d) => Math.sqrt(d.value));
      //画nodes
      const nodeGroup = svg
        .append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
        .selectAll()
        .data(nodes)
        .join("circle")
        .attr("r", 5)
        // node 进行分类颜色映射
        .attr("fill", (d) => color(d.group));

      // 力导向系统创建
      const simulation = d3
        .forceSimulation(nodes)
        .force(
          "link",
          // 指明对应的是nodes数据的id属性
          d3.forceLink(links).id((d) => d.id)
        )
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2))
        .on("tick", ticked);

      // 每次迭代回调函数
      function ticked() {
        linkGroup
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);

        nodeGroup.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      }

      // 设置结点拖动行为
      nodeGroup.call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );
      // 拖动开始时，重新加热迭代过程，并且修正被拖动点的fx,fy
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      // 拖动时，让点跟着鼠标走
      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      // 拖动结束，降温
      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      // 设置整体zoom行为
      const group = svg.selectAll("g");
      // 创建缩放函数
      const zoom = d3
        .zoom()
        .scaleExtent([0.5, 20]) // 设置缩放的范围
        .translateExtent([
          [0, 0],
          [width, height],
        ])
        .on("zoom", zoomed);

      svg.call(zoom);
      // 定义zoom的回调函数
      function zoomed(event) {
        const transform = event.transform;
        // 更新地理路径组的变换属性
        group.attr("transform", transform);
      }
    },
  },

  created() {
    this.loadData();
  },
};
</script>

<style scoped>
#svg-container {
  height: 100%;
  width: 100%;
}
</style>
