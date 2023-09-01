<template>
  <div
    class="container"
    v-loading="loading"
    element-loading-text="Computing..."
  >
    <nav class="navBar">
      <div class="nav-title">NavBar</div>
      <div class="nav-button-box">
        <div class="uploader">
          <svg
            class="nav-icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            @click="triggerFileInput"
          >
            <path
              d="M768 938.666667H256c-72.533333 0-128-55.466667-128-128v-85.333334c0-25.6 17.066667-42.666667 42.666667-42.666666s42.666667 17.066667 42.666666 42.666666v85.333334c0 25.6 17.066667 42.666667 42.666667 42.666666h512c25.6 0 42.666667-17.066667 42.666667-42.666666v-85.333334c0-25.6 17.066667-42.666667 42.666666-42.666666s42.666667 17.066667 42.666667 42.666666v85.333334c0 72.533333-55.466667 128-128 128zM725.333333 426.666667c-12.8 0-21.333333-4.266667-29.866666-12.8L512 230.4 328.533333 413.866667c-17.066667 17.066667-42.666667 17.066667-59.733333 0s-17.066667-42.666667 0-59.733334l213.333333-213.333333c17.066667-17.066667 42.666667-17.066667 59.733334 0l213.333333 213.333333c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z"
            ></path>
            <path
              d="M512 725.333333c-25.6 0-42.666667-17.066667-42.666667-42.666666V170.666667c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667v512c0 25.6-17.066667 42.666667-42.666667 42.666666z"
            ></path>
          </svg>
          <input
            type="file"
            ref="fileInput"
            @change="handleFileChange"
            accept=".xls,.xlsx"
            style="display: none"
          />
        </div>
        <svg
          class="nav-icon"
          :class="{ 'active-btn': editMode }"
          @click="toggleEditMode"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M665.65 28.3c-76.085 0-139.942 52.676-158.38 123.19H49.71v82.13h457.56c18.438 70.514 82.295 123.18 158.38 123.18s139.942-52.666 158.38-123.18h129.06v-82.13H824.03C805.592 80.976 741.735 28.3 665.65 28.3z m0 82.13c45.169 0 82.13 36.951 82.13 82.12 0 45.169-36.961 82.13-82.13 82.13s-82.12-36.961-82.12-82.13 36.951-82.12 82.12-82.12zM337.03 346.26c-76.085 0-139.942 52.676-158.38 123.19H49.59v82.13h129.06c18.438 70.514 82.295 123.18 158.38 123.18 76.084 0 139.932-52.666 158.37-123.18h457.56v-82.13H495.4c-18.438-70.514-82.286-123.19-158.37-123.19z m0 82.13c45.169 0 82.12 36.951 82.12 82.12 0 45.169-36.951 82.13-82.12 82.13-45.169 0-82.13-36.961-82.13-82.13s36.961-82.12 82.13-82.12z m328.5 245.81c-76.088 0-139.945 52.67-158.38 123.19H49.59v82.12h457.56c18.438 70.514 82.295 123.19 158.38 123.19 76.084 0 139.932-52.676 158.37-123.19h129.06v-82.12H823.91c-18.434-70.52-82.291-123.19-158.38-123.19z m0 82.12c45.169 0 82.12 36.961 82.12 82.13s-36.951 82.12-82.12 82.12c-45.169 0-82.13-36.951-82.13-82.12 0-45.169 36.961-82.13 82.13-82.13z"
          ></path>
        </svg>
      </div>
    </nav>
    <div
      :class="['content-box', { notEditMode: !editMode }]"
      @transitionend="handleTransitionEnd"
      :key="refreshFlag"
    >
      <div class="loading-mask" v-if="error.state">
        <div class="introduction">
          <div>Upload <strong>.xls/.xlsx</strong> files now</div>

          <div>and start exploring <em>Insight Stories</em>!</div>
        </div>
      </div>
      <div :class="['control-panel-box']" v-show="editMode">
        <BaseCard mode="flat" class="control-panel" v-show="animationDone">
          <div class="button-box-content">
            <el-tabs
              v-model="controlPanelMode"
              :stretch="true"
              class="config-panel-tab"
            >
              <el-tab-pane label="Base" name="base"></el-tab-pane>
              <el-tab-pane label="Table" name="table"></el-tab-pane>
            </el-tabs>
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
              <StatisticsGraph ref="controlGraph"></StatisticsGraph>
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
  </div>
</template>
<script>
import ForceDirectedGraph from "@/components/force-directed-graph/ForceDirectedGraph.vue";
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
      count: 0,
      refreshFlag: false,
      editMode: true,
      animationDone: true,
      controlPanelMode: "base",
    };
  },
  computed: {
    loading() {
      return this.$store.getters["force/loading"];
    },

    error() {
      return this.$store.getters["force/error"];
    },
  },
  watch: {
    error(newVal) {
      if (newVal.state) {
        ElMessage.error(`Error: ${newVal.message}`);
        setTimeout(() => ElMessage.error("Please reload again"), 500);
      }
      if (!newVal.state) {
        ElMessage.success(`Calculation complete`);
      }
    },
  },
  watch: {
    // refreshFlag(newVal) {
    //   if (newVal === true) this.refreshFlag = false;
    // },
  },
  methods: {
    clearData() {
      this.$refs.forceGraph.clearData();
      this.$refs.controlGraph.clearData();
    },
    handleFileChange() {
      const file = event.target.files[0];
      if (file) {
        // 限制为 .xls / .xlsx 类型
        const isExcel =
          file.type ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
          file.type === "application/vnd.ms-excel";

        if (!isExcel) {
          ElMessage.warning(`Incorrect file type, please upload again`);
          return;
        }

        this.refreshFlag = true;
        this.$store.dispatch("force/clearData");
        this.$nextTick(() => {
          this.refreshFlag = false;
          this.$store.dispatch("force/uploadData", file);
        });
      }
    },

    triggerFileInput() {
      this.$refs.fileInput.value = null;
      this.$refs.fileInput.click();
    },
    stop() {
      this.$refs.forceGraph.simStop();
    },
    restart() {
      this.$refs.forceGraph.restart(
        false,
        this.$refs.forceGraph.focusState,
        null
      );
    },
    toggleEditMode() {
      this.animationDone = false;
      this.editMode = !this.editMode;
    },

    handleTransitionEnd(event) {
      if (event.propertyName === "grid-template-columns") {
        this.animationDone = true;
      }
    },
  },
};
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
  /* background: linear-gradient(#fff, #f8f8f8); */
  background-color: #fafafa;

  display: flex;
  flex-direction: column;
  gap: 0.4vw;
}
.navBar {
  flex: 5%;
  width: 100%;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  /* margin-bottom: 0.4vw; */
  transition: box-shadow 0.3s;
  z-index: 5;

  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1vw;
}
.navBar:hover {
  box-shadow: 0px 2px 5px 0px #545b7785;
}
.nav-button-box {
  height: 100%;
  display: flex;
  gap: 0.6vw;
  padding: 0.3vh;
}

.nav-title {
  font-size: 20px;
  font-weight: bold;
  color: #545b77;
  font-style: italic;
}

.loading-mask {
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
}

.introduction {
  font-size: 6rem;
  line-height: 120%;
  position: absolute;
  top: 15%;
  left: 10%;
}

.content-box {
  flex: 0 0 95%;
  display: grid;
  grid-template-columns: 2fr 8fr;
  transition: all 0.2s ease-in-out;
  position: relative;
}

.content-box.notEditMode {
  grid-template-columns: 0fr 1fr;
}

.force-graph-box {
  max-height: 95vh;
  grid-column: 2;
}
.control-panel-box {
  grid-column: 1;
  width: 100%;
  height: 100%;

  padding: 0.3vw;
  padding-top: 0;
  padding-left: 0;
  max-height: 95vh;
}
.control-panel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  background-color: #fff;
}
.control-panel-content {
  flex: 0 0 95%;
  padding: 1vw;
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.control-panel-content::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}
.button-box-content {
  flex: 0 0 5%;
  width: 100%;
  /* height: 100%; */
}

.base-mode {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.3vw;
}
.button-box {
  flex: fit-content;
  display: flex;
  gap: 0px;
  justify-content: left;
}

.table-mode {
  width: 100%;
  height: 100%;
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

.no-padding {
  padding: 0 !important;
}
</style>

<style scoped>
.uploader {
  height: 100%;
}
.nav-icon {
  height: 100%;
  cursor: pointer;
  border: none;
  fill: #545b77;
  border-radius: 2px;
  transition: background-color 0.3s, fill 0.3s;
}

.nav-icon:hover,
.nav-icon:active {
  background-color: #858eb5;
  fill: #fff;
}
.btn {
  border-radius: 12px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.26);
}
.edit-btn {
  display: flex;
  align-items: center;
  padding: 0.3rem 0.3rem;
}
.active-btn {
  background-color: #545b77;
  fill: #fff;
}

.panel-icon {
  cursor: pointer;
  fill: #545b77;
  padding: 0.2rem;

  border-radius: 4px;
  width: 25px;
  height: 25px;
  transition: background-color 0.3s, fill 0.3s;
}

.panel-icon:hover,
.panel-icon:active {
  background-color: #545b77;
  fill: #fff;
  border: none;
}
</style>

<style lang="less">
.config-panel-tab {
  height: 100%;
  --el-tabs-header-height: none;
  --el-color-primary: #545b77;
  padding: 0 1vw;

  .el-tabs__header {
    margin: 0;
  }
  .el-tabs__item {
    color: #aaa;
  }
  .el-tabs__item.is-active {
    color: var(--el-color-primary);
  }
  .el-tabs__item:hover {
    color: var(--el-color-primary);
  }
  .el-tabs__nav,
  .el-tabs__nav-scroll,
  .el-tabs__nav-wrap,
  .el-tabs__header {
    height: 100%;
  }
}
.el-loading-mask {
  --el-color-primary: #545b77;
}
</style>
