<template>
  <div class="container">
    <div class="control-panel">
      <BaseCard class="button-box">
        <BaseButton @click="restart" class="config-btn btn">ReStart</BaseButton>
        <BaseButton @click="stop" class="config-btn btn">Stop</BaseButton>
      </BaseCard>
      <StatisticsGraph></StatisticsGraph>
    </div>
    <div class="force-graph-box">
      <ForceDirectedGraph
        ref="forceGraph"
        :drawData="selectedData"
      ></ForceDirectedGraph>
    </div>
  </div>
</template>
<script>
// import BarChart from "@/components/vega-lite-graph/BarChart.vue";
import ForceDirectedGraph from "../components/force-directed-graph/ForceDirectedGraph.vue";
import StatisticsGraph from "@/components/control-panel-graph/StatisticsGraph.vue";
export default {
  components: {
    ForceDirectedGraph,
    StatisticsGraph,
  },
  data() {
    return {
      selectedData: null,
    };
  },
  computed: {
    totalData() {
      return this.$store.getters["force/drawData"];
    },
    linkGroup() {
      return this.$store.getters["force/linkDataGroup"];
    },
    nodeGroup() {
      return this.$store.getters["force/nodeDataGroup"];
    },
  },
  watch: {
    totalData(newVal) {
      if (newVal) {
        this.selectedData = newVal;
      }
    },
  },
  methods: {
    stop() {
      this.$refs.forceGraph.simStop();
    },
    restart() {
      this.$refs.forceGraph.restart();
    },
  },
  created() {
    this.$store.dispatch("force/loadData");
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
  flex: 0.77;
}

.control-panel {
  height: 100%;
  width: 100%;
  border: 1px solid #000;
  flex: 0.23;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  padding: 1vw;
}
</style>
