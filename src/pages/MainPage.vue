<template>
  <div class="container">
    <BaseCard inset class="control-panel">
      <div class="button-box">
        <BaseButton inset @click="restart" class="btn">ReStart</BaseButton>
        <BaseButton inset @click="stop" class="btn">Stop</BaseButton>
      </div>
      <StatisticsGraph></StatisticsGraph>
    </BaseCard>
    <div class="force-graph-box">
      <ForceDirectedGraph ref="forceGraph"></ForceDirectedGraph>
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
    return {};
  },
  computed: {},
  watch: {
    // selectedData(newVal) {
    //   if (newVal) {
    //   }
    // },
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
  background: #fff;
}

.force-graph-box {
  height: 100%;
  width: 100%;

  flex: 0.77;
}

.control-panel {
  flex: 0.23;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  padding: 1vw;
  margin: 0.5vw;

  background: #f1f3f5;
}
.button-box {
  display: flex;
  gap: 1vw;
  justify-content: center;
}
.btn {
  border-radius: 12px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
