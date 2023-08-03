<template>
  <div class="container">
    <svg class="svg">
      <rect
        x="40%"
        y="40%"
        rx="10"
        width="100"
        height="100"
        fill="#fff"
        stroke="steelblue"
        stroke-width="3"
        stroke-opacity="0.3"
        filter="url(#inset-shadow)"
      />
      <circle
        cx="10%"
        cy="10%"
        r="50"
        width="100"
        height="100"
        fill="#fff"
        filter="url(#inset-shadow)"
      />
      <!-- <rect
        x="40%"
        y="40%"
        cr="50"
        width="100"
        height="30"
        fill="#f9f9f9"
        filter="url(#inset-shadow)"
      /> -->
      <defs>
        <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="6" />
          <feOffset dx="5" dy="5" result="offsetblur" />
          <feFlood flood-color="steelblue" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>

        <filter id="inset" x="-50%" y="-50%" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2.5" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
    </svg>
    <div id="echarts-container"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  methods: {
    drawEcharts() {
      const container = d3.select("#echarts-container").node();
      const barchart = echarts.init(container);
      const option = {
        dataset: {
          source: [
            {
              source: "_-2013_",
              target: "_-2014_",
              type: "siblings",
              count: 1,
            },
            {
              source: "_-2014_",
              target: "_-2015_",
              type: "siblings",
              count: 1,
            },
            {
              source: "_-2015_",
              target: "_-2016_",
              type: "siblings",
              count: 1,
            },
            { source: "_-2013_", target: "_-2014_", type: "friends", count: 1 },
            { source: "_-2014_", target: "_-2015_", type: "friends", count: 1 },
          ],
          transform: [
            {
              type: "aggregate",
              groupBy: "type",
              aggregate: {
                count: "sum",
              },
            },
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [
          {
            datasetIndex: 1,
            type: "bar",
            encode: {
              x: "type",
              y: "count",
            },
          },
        ],
      };

      barchart.setOption(option);
    },
  },
  computed: {},
  watch: {},
  mounted() {
    this.drawEcharts();
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
#echarts-container {
  width: 100%;
  height: 100%;
}

.svg {
  width: 100%;
  height: 100%;
}
</style>
