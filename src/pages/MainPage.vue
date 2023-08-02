<template>
  <div class="container">
    <div
      :class="['content-box', 'container', { notEditMode: !editMode }]"
      @transitionend="handleTransitionEnd"
    >
      <div :class="['control-panel-box', { 'no-padding': !editMode }]">
        <BaseCard
          inset
          class="control-panel"
          v-show="editMode || !animationDone"
        >
          <div class="button-box" v-show="animationDone && editMode">
            <BaseButton inset @click="restart" class="btn">ReStart</BaseButton>
            <BaseButton inset @click="stop" class="btn">Stop</BaseButton>
          </div>
          <StatisticsGraph v-show="animationDone && editMode"></StatisticsGraph>
        </BaseCard>
      </div>

      <div class="force-graph-box">
        <ForceDirectedGraph
          ref="forceGraph"
          v-show="animationDone"
        ></ForceDirectedGraph>
      </div>
    </div>

    <BaseButton
      inset
      @click="toggleEditMode"
      class="edit-btn btn"
      :class="{ 'active-btn': editMode }"
    >
      <el-icon size="large" class="icon">
        <Tools />
      </el-icon>
    </BaseButton>
  </div>
</template>
<script>
// import BarChart from "@/components/vega-lite-graph/BarChart.vue";
import ForceDirectedGraph from "../components/force-directed-graph/ForceDirectedGraph.vue";
import StatisticsGraph from "@/components/control-panel-graph/StatisticsGraph.vue";
import { Tools } from "@element-plus/icons-vue";
export default {
  components: {
    ForceDirectedGraph,
    StatisticsGraph,
    Tools,
  },
  data() {
    return {
      editMode: true,
      animationDone: true,
    };
  },
  computed: {},
  watch: {
    selectedData() {
      return this.$store.getters["force/selectedData"];
    },
  },
  methods: {
    stop() {
      this.$refs.forceGraph.simStop();
    },
    restart() {
      this.$refs.forceGraph.restart(false);
    },
    toggleEditMode() {
      this.animationDone = false;
      this.editMode = !this.editMode;
    },

    handleTransitionEnd(event) {
      this.animationDone = true;
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
  background: #fff;
}
.content-box {
  /* display: flex; */

  display: grid;
  grid-template-columns: 2.5fr 7.5fr;
  transition: all 0.2s ease-in-out;
}

.content-box.notEditMode {
  grid-template-columns: 0fr 1fr;
}

.force-graph-box {
  height: 99%;

  grid-column: 2;
}
.control-panel-box {
  grid-column: 1;
  width: 100%;
  height: 100%;
  padding: 0.5vw;
}
.control-panel {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1vw;
  padding: 1vw;
  background: #f1f3f5;
}

.button-box {
  display: flex;
  gap: 1vw;
  justify-content: center;
}
.no-padding {
  padding: 0 !important;
}
</style>

<style scoped>
.btn {
  border-radius: 12px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.26);
}
.edit-btn {
  position: fixed;
  bottom: 5%;
  right: 3%;
  display: flex;
  align-items: center;
}
.active-btn {
  background: linear-gradient(
    119.06deg,
    #3fdfac 10.71%,
    #44e1bf 60.37%,
    #46dfc3 103.14%
  ) !important;
  color: #fff !important;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0),
    inset 0.4rem 0.3rem 0.4rem rgba(62, 202, 172, 0.6);
}
</style>
