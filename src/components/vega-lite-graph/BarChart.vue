<template>
  <svg class="container">
    <!-- <svg class="svg" :viewBox="[0, 0, 500, 500]"> -->
    <!-- <circle class="circle"></circle> -->
    <circle
      cx="50%"
      cy="50%"
      r="50"
      fill="#f9f9f9"
      filter="url(#inset-shadow)"
    />

    <circle cx="25%" cy="25%" r="50" fill="#f9f9f9" filter="url(#inset)" />
    <rect
      x="100"
      y="500"
      width="100"
      height="100"
      filter="url(#inset-shadow)"
      fill="transparent"
      stroke="#000"
    ></rect>

    <g id="vis0" width="500" height="500"></g>

    <defs>
      <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feComponentTransfer in="SourceAlpha">
          <feFuncA type="table" tableValues="1 0" />
        </feComponentTransfer>
        <feGaussianBlur stdDeviation="6" />
        <feOffset dx="0" dy="0" result="offsetblur" />
        <feFlood flood-color="rgb(0, 0, 0)" result="color" />
        <feComposite in2="offsetblur" operator="in" />
        <feComposite in2="SourceAlpha" operator="in" />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode />
        </feMerge>
      </filter>

      <filter id="inset" x="0" y="0" width="200%" height="200%">
        <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
    </defs>
    <!-- </svg> -->
  </svg>
</template>
<script>
import { Remove } from "@element-plus/icons-vue";
export default {
  components: {
    Remove,
  },
  data() {
    return {
      graphNum: 1,
    };
  },
  methods: {
    loadData() {
      this.$store.dispatch("force/loadCarsData");
    },
    drawGraph() {
      const Myvis = {
        description: "Drag out a rectangular brush to highlight points.",
        usermeta: { embedOptions: { renderer: "svg" } },
        data: { values: this.carsData },
        params: [
          {
            name: "brush",
            select: "interval",
            value: { x: [55, 160], y: [13, 37] },
          },
        ],
        mark: "point",
        encoding: {
          x: { field: "Horsepower", type: "quantitative" },
          y: { field: "Miles_per_Gallon", type: "quantitative" },
          color: {
            condition: {
              param: "brush",
              field: "Cylinders",
              type: "ordinal",
            },
            value: "grey",
          },
        },
      };
      for (let i = 0; i < this.graphNum; i++) {
        const id = "#vis" + i;
        vegaEmbed(id, Myvis).then((result) => {
          const view = result.view;
          // // Export to SVG
          // view.toSVG().then((svgString) => {
          //   console.log(svgString);
          // });
          // Export to canvas, then transform to img
          view.toCanvas().then((canvas) => {
            const container = d3.select(id);
            container.select("div").remove();
            container.select("details").remove();
            // Access the canvas element and export as an image
            const image = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "image"
            );

            image.setAttribute("href", canvas.toDataURL());
            image.setAttribute("width", view.width());
            image.setAttribute("height", view.height());
            container.node().appendChild(image);
          });

          // // 销毁图表实例
          // const container = d3.select(id);
          // const svg = container.select("svg").node();
          // container.node().appendChild(svg);
          // container.select("div").remove();
          // // container.select("details").remove();
        });
      }

      // var yourVlSpec = {
      //   $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      //   description: "A simple bar chart with embedded data.",
      //   // render as svg
      //   usermeta: { embedOptions: { renderer: "svg" } },
      //   width: 150,
      //   height: 150,
      //   data: {
      //     values: this.drawData,
      //   },
      //   mark: { type: "bar", tooltip: true },

      //   encoding: {
      //     x: { field: "a", type: "ordinal" },
      //     y: { field: "b", type: "quantitative" },
      //   },
      // };
    },
  },
  computed: {
    drawData() {
      return this.$store.getters["force/vegaLiteData"];
    },
    carsData() {
      return this.$store.getters["force/carsData"];
    },
  },
  watch: {
    carsData(newVal) {
      if (newVal) {
        this.drawGraph();
      }
    },
  },
  created() {
    this.loadData();
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.svg {
  width: 100%;
  height: 100%;
}
.circle {
  fill: none;
  stroke: black;
  stroke-width: 2;
  r: 100;
  cx: 250;
  cy: 250;
}
#vis {
}

.shadow {
  /* filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7)); */
}
</style>
