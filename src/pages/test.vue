<template>
  <div class="container">
    <!-- <ForceDirectedGraphOld></ForceDirectedGraphOld> -->
    <BarChart></BarChart>
  </div>
</template>

<script>
import BarChart from "@/components/vega-lite-graph/BarChart.vue";
import * as echarts from "echarts";
import ForceDirectedGraphOld from "../components/vega-lite-graph/ForceDirectedGraphOld.vue";
export default {
  components: {
    BarChart,
    ForceDirectedGraphOld,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
}
</style>
