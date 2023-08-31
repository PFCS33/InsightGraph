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
            d="M508.472 383.852c67.346 0 122.15 54.805 122.15 122.15s-54.804 122.15-122.15 122.15-122.15-54.805-122.15-122.15 54.805-122.15 122.15-122.15m0-54.289c-97.448 0-176.439 78.99-176.439 176.44s78.99 176.438 176.44 176.438 176.438-78.99 176.438-176.439-78.99-176.439-176.439-176.439m436.186 284.16c7.758-33.082 11.71-67.147 11.71-101.722 0-34.575-3.952-68.64-11.71-101.722-3.425-14.602-18.038-23.664-32.64-20.24-14.603 3.425-23.665 18.039-20.24 32.641 6.806 29.024 10.276 58.927 10.276 89.321s-3.47 60.297-10.276 89.32c-3.425 14.603 5.637 29.217 20.24 32.641 14.602 3.425 29.215-5.637 32.64-20.24z m-32.086 20.848c1.718 0 3.155 0.026 4.466 0.083 14.985 0.652 27.66-10.967 28.312-25.952 0.651-14.984-10.968-27.66-25.952-28.311a155.244 155.244 0 0 0-6.826-0.134c-14.999 0-27.157 12.158-27.157 27.157 0 14.998 12.158 27.157 27.157 27.157z m-88.67 163.374c-11.086-17.03-17.072-36.87-17.072-57.632 0-58.4 47.342-105.742 105.742-105.742 14.998 0 27.157-12.159 27.157-27.157 0-14.999-12.159-27.158-27.157-27.158-88.397 0-160.057 71.66-160.057 160.057 0 31.37 9.088 61.489 25.87 87.265 8.183 12.57 25.006 16.126 37.576 7.942 12.57-8.183 16.125-25.006 7.942-37.575z m-183.785 139.66c67.576-20.297 129.146-56.495 179.854-105.271 10.809-10.398 11.143-27.59 0.745-38.4s-27.59-11.142-38.4-0.744c-44.525 42.83-98.555 74.595-157.823 92.395-14.364 4.314-22.512 19.457-18.197 33.821 4.314 14.365 19.456 22.512 33.821 18.198z m-223.82-14.449c17.308-36.785 54.332-60.762 95.704-60.762 41.38 0 78.426 23.984 95.731 60.762 6.386 13.572 22.564 19.397 36.135 13.012 13.572-6.386 19.397-22.564 13.012-36.135C630.696 844.386 574.615 808.08 512 808.08c-62.61 0-118.666 36.302-144.85 91.953-6.386 13.57-0.56 29.75 13.01 36.135 13.572 6.385 29.75 0.56 36.136-13.012zM205.25 833.495c50.49 48.178 111.615 83.952 178.655 104.107 14.364 4.318 29.508-3.825 33.826-18.189 4.319-14.363-3.825-29.508-18.188-33.826-58.81-17.68-112.458-49.078-156.796-91.387-10.851-10.354-28.041-9.952-38.396 0.9s-9.952 28.04 0.9 38.395zM113.276 634.57c58.4 0 105.742 47.342 105.742 105.742 0 21.123-6.193 41.291-17.634 58.497-8.304 12.49-4.912 29.347 7.577 37.652 12.49 8.304 29.347 4.912 37.652-7.577 17.32-26.047 26.72-56.662 26.72-88.572 0-88.397-71.66-160.056-160.057-160.056-14.998 0-27.157 12.159-27.157 27.157s12.159 27.157 27.157 27.157z m-5.974 0.15c1.83-0.101 3.809-0.15 5.974-0.15 14.999 0 27.158-12.159 27.158-27.157 0-14.999-12.16-27.158-27.158-27.158-3.112 0-6.073 0.073-8.954 0.231-14.976 0.823-26.45 13.63-25.627 28.607 0.823 14.976 13.63 26.45 28.607 25.626zM79.37 410.202c-7.77 33.163-11.736 67.251-11.736 101.798S71.6 580.636 79.37 613.8c3.422 14.603 18.034 23.667 32.637 20.246 14.603-3.422 23.667-18.034 20.246-32.637-6.822-29.115-10.305-59.046-10.305-89.407 0-30.361 3.483-60.292 10.305-89.407 3.422-14.603-5.643-29.215-20.246-32.637-14.603-3.421-29.215 5.643-32.637 20.246z m33.906-20.772c-2.165 0-4.144-0.049-5.974-0.15-14.977-0.822-27.784 10.651-28.607 25.627-0.823 14.976 10.65 27.784 25.627 28.607 2.88 0.158 5.842 0.23 8.954 0.23 14.999 0 27.158-12.158 27.158-27.157 0-14.998-12.16-27.157-27.158-27.157z m88.108-164.239c11.443 17.208 17.634 37.377 17.634 58.524 0 58.393-47.335 105.715-105.742 105.715-14.998 0-27.157 12.159-27.157 27.157 0 14.999 12.159 27.158 27.157 27.158 88.401 0 160.057-71.636 160.057-160.03 0-31.933-9.398-62.548-26.72-88.598-8.305-12.49-25.162-15.882-37.652-7.577s-15.881 25.162-7.577 37.651zM383.905 86.4c-67.04 20.155-128.166 55.93-178.655 104.107-10.85 10.355-11.253 27.545-0.899 38.396 10.355 10.851 27.545 11.254 38.396 0.9 44.338-42.31 97.986-73.708 156.796-91.388 14.363-4.318 22.507-19.463 18.188-33.826-4.318-14.364-19.462-22.507-33.826-18.189z m223.827 14.446c-17.303 36.775-54.348 60.762-95.704 60.762-41.396 0-78.421-23.974-95.73-60.762-6.386-13.572-22.565-19.397-36.136-13.011-13.571 6.385-19.397 22.564-13.01 36.135 26.186 55.654 82.244 91.952 144.877 91.952 62.59 0 118.67-36.31 144.85-91.952 6.385-13.572 0.56-29.75-13.011-36.135-13.572-6.386-29.75-0.56-36.136 13.01z m212.233 90.817c-50.705-48.745-112.27-84.94-179.838-105.262-14.363-4.32-29.508 3.822-33.828 18.185s3.822 29.508 18.185 33.828c59.273 17.827 113.31 49.596 157.839 92.404 10.812 10.395 28.004 10.056 38.399-0.757s10.055-28.004-0.757-38.398z m92.607 197.768c-58.407 0-105.742-47.322-105.742-105.715 0-20.786 5.985-40.627 17.073-57.658 8.183-12.57 4.627-29.393-7.942-37.576-12.57-8.184-29.393-4.628-37.576 7.942-16.784 25.78-25.87 55.9-25.87 87.292 0 88.394 71.656 160.03 160.057 160.03 14.998 0 27.157-12.159 27.157-27.158 0-14.998-12.159-27.157-27.157-27.157z m4.466-0.083c-1.31 0.057-2.748 0.083-4.466 0.083-14.999 0-27.157 12.159-27.157 27.158 0 14.998 12.158 27.157 27.157 27.157 2.451 0 4.652-0.04 6.825-0.134 14.985-0.652 26.604-13.327 25.952-28.312-0.651-14.984-13.326-26.603-28.31-25.952z"
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
  background-color: #545b77;
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
  background-color: #858eb5;
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
