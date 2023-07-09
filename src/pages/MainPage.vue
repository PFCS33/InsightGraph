<template>
  <div class="container">
    <BaseCard class="card">
      <ForceDirectedGraph></ForceDirectedGraph>
    </BaseCard>
  </div>
</template>
<script>
// import BarChart from "@/components/vega-lite-graph/BarChart.vue";
import ForceDirectedGraph from "../components/force-directed-graph/ForceDirectedGraph.vue";
export default {
  components: {
    // BarChart,
    ForceDirectedGraph,
  },
};
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
  padding: 1vw;
}

.card {
  height: 100%;
  width: 100%;
}
</style>
