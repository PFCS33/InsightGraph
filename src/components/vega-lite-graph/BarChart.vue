<template>
  <div id="vis"></div>
</template>
<script>
import vegaEmbed from "vega-embed";
export default {
  methods: {
    createBarchart() {},
  },
  created() {
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "A simple bar chart with embedded data.",
      // render as svg
      usermeta: { embedOptions: { renderer: "svg" } },
      data: {
        values: [
          { a: "A", b: 28 },
          { a: "B", b: 55 },
          { a: "C", b: 43 },
          { a: "D", b: 91 },
          { a: "E", b: 81 },
          { a: "F", b: 53 },
          { a: "G", b: 19 },
          { a: "H", b: 87 },
          { a: "I", b: 52 },
        ],
      },
      mark: "bar",
      encoding: {
        x: { field: "a", type: "ordinal" },
        y: { field: "b", type: "quantitative" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
  },
};
</script>
<style scoped></style>
