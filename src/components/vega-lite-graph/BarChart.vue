<template>
  <div class="container">
    <g id="vis"></g>
  </div>
</template>
<script>
import vegaEmbed from "vega-embed";
export default {
  methods: {
    createBarchart() {},
  },
  computed: {
    drawData() {
      return this.$store.getters["force/vegaLiteData"];
    },
  },
  mounted() {
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "A simple bar chart with embedded data.",
      // render as svg
      usermeta: { embedOptions: { renderer: "svg" } },
      width: 150,
      height: 150,
      data: {
        values: this.drawData,
      },
      mark: "bar",
      encoding: {
        x: { field: "a", type: "ordinal" },
        y: { field: "b", type: "quantitative" },
      },
    };

    vegaEmbed("#vis", yourVlSpec).then((result) => {
      // 销毁图表实例
      const container = d3.select("#vis");
      const svg = container.select("svg").node();
      container.node().appendChild(svg);
      container.select("div").remove();
      container.select("details").remove();
    });
  },
};
</script>
<style scoped>
/* .container {
  height: 100%;
  width: 100%;
} */
</style>
