<template>
  <div class="container">
    <div class="control-panel">
      <BaseCard class="button-box">
        <BaseButton @click="restart" class="config-btn btn">ReStart</BaseButton>
        <BaseButton @click="stop" class="config-btn btn">Stop</BaseButton>
      </BaseCard>
    </div>
    <div class="force-graph-box">
      <ForceDirectedGraph ref="forceGraph"></ForceDirectedGraph>
    </div>
  </div>
</template>
<script>
// import BarChart from "@/components/vega-lite-graph/BarChart.vue";
import ForceDirectedGraph from "../components/force-directed-graph/ForceDirectedGraph.vue";
export default {
  components: {
    ForceDirectedGraph,
  },
  methods: {
    stop() {
      this.$refs.forceGraph.simStop();
    },
    restart() {
      this.$refs.forceGraph.restart();
    },
  },
};
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;

  display: flex;
}

.force-graph-box {
  height: 100%;
  width: 100%;
  border: 1px solid #000;
  flex: 0.8;
}

.control-panel {
  height: 100%;
  width: 100%;
  border: 1px solid #000;
  flex: 0.2;
}
</style>
