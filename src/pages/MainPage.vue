<template>
  <div class="container">
    <div
      :class="['content-box', 'container', { notEditMode: !editMode }]"
      @transitionend="handleTransitionEnd"
    >
      <div :class="['control-panel-box']" v-show="editMode">
        <BaseCard mode="flat" class="control-panel" v-show="animationDone">
          <div class="button-box-content">
            <button
              :class="[
                'tab-btn',
                { 'active-tab-btn': controlPanelMode === 'base' },
              ]"
              @click="controlPanelMode = 'base'"
            >
              Base
            </button>

            <button
              :class="[
                'tab-btn',
                { 'active-tab-btn': controlPanelMode === 'table' },
              ]"
              @click="controlPanelMode = 'table'"
            >
              Table
            </button>
          </div>

          <div class="control-panel-content" v-show="animationDone">
            <div class="base-mode" v-show="controlPanelMode === 'base'">
              <div class="button-box">
                <div>
                  <svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="restart"
                    class="panel-icon"
                  >
                    <path
                      d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m205.653333-210.090667a298.666667 298.666667 0 1 0-79.018666 54.016l-41.6-74.88A213.333333 213.333333 0 1 1 725.333333 512h-128l120.32 216.576z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    viewBox="-38 -38 1062 1062"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="stop"
                    class="panel-icon"
                  >
                    <path
                      d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416z m-192-608h384v384H320z"
                    ></path>
                  </svg>
                </div>
              </div>
              <StatisticsGraph></StatisticsGraph>
            </div>
            <div class="table-mode" v-if="controlPanelMode === 'table'">
              <MiniTable></MiniTable>
            </div>
          </div>
        </BaseCard>
      </div>

      <div class="force-graph-box">
        <ForceDirectedGraph ref="forceGraph"></ForceDirectedGraph>
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
import MiniTable from "@/components/control-panel-graph/MiniTable.vue";
import { Tools } from "@element-plus/icons-vue";
export default {
  components: {
    ForceDirectedGraph,
    StatisticsGraph,
    MiniTable,
    Tools,
  },
  data() {
    return {
      editMode: true,
      animationDone: true,
      controlPanelMode: "base",
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
      console.log(event);
      if (event.propertyName === "grid-template-columns") {
        this.animationDone = true;
      }
    },
  },
  created() {
    this.$store.dispatch("force/loadData");
    this.$store.dispatch("table/loadHeadData");
  },
};
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
  background-color: #fff;
}
.content-box {
  /* display: flex; */

  display: grid;
  grid-template-columns: 2.3fr 7.7fr;
  transition: all 0.2s ease-in-out;
}

.content-box.notEditMode {
  grid-template-columns: 0fr 1fr;
}

.force-graph-box {
  height: 100%;
  grid-column: 2;
}
.control-panel-box {
  grid-column: 1;
  width: 100%;
  height: 100%;
  padding: 0.3vw;
}
.control-panel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  overflow: hidden;
  background-color: #fafafa;
}

.button-box-content {
  flex: 0.05;
  width: 100%;
  /* height: 100%; */
  display: flex;

  gap: 0;
}
.tab-btn {
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: #545b77;
  cursor: pointer;
  padding-top: 1.5%;
}

.tab-btn:active,
.tab-btn:hover {
  box-shadow: 0 5px 0px -3px rgba(0, 0, 0, 0.2);
}
.active-tab-btn {
  box-shadow: 0 5px 0px -3px rgba(0, 0, 0, 0.2);
}
.control-panel-content {
  flex: 0.95;
  overflow: hidden;
  padding: 1vw;
}
.base-mode {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1vw;
}
.table-mode {
  width: 100%;
  height: 100%;
}

.button-box {
  display: flex;
  gap: 0;
  justify-content: left;
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
  background-color: #545b77 !important;
  color: #fff !important;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0),
    inset 0.4rem 0.3rem 0.4rem #474c5e;
}

.panel-icon {
  cursor: pointer;
  fill: #888;
  padding: 0.2rem;

  border-radius: 4px;
  width: 25px;
  height: 25px;
}

.panel-icon:hover,
.panel-icon:active {
  background-color: #aaa;
  fill: #fff;
  border: none;
}
</style>
