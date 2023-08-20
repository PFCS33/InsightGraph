<template>
  <div class="container">
    <transition name="slide">
      <div class="more-box" v-show="showMoreIcon">
        <svg
          class="more-icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          @click="
            showMoreIcon = !showMoreIcon;
            showMorePanel = !showMorePanel;
            hidePanelMode = !hidePanelMode;
          "
        >
          <path
            d="M511.48 22.62c-270.42 0-489.62 218.96-489.62 489.09s219.2 489.09 489.62 489.09 489.61-218.96 489.61-489.09S781.89 22.62 511.48 22.62zM211.83 435.56c-0.11-0.19-0.11-0.49-0.23-0.71l-0.3-1.2c0-0.23-0.11-0.42-0.11-0.6l-0.3-1.32c0-0.3-0.11-0.49-0.11-0.68-0.08-0.42-0.08-0.94-0.19-1.32 0-0.3-0.12-0.53-0.12-0.83 0-0.37-0.11-0.79-0.11-1.2-0.07-0.26-0.07-0.68-0.07-1.01v0.04c0-0.3-0.11-0.6 0-1.13-0.11-0.6-0.11-1.32-0.11-2 0-0.71 0.11-1.32 0.11-2.03l0.07-0.98 0.11-1.02c0-0.41 0-0.83 0.12-1.2 0-0.3 0.11-0.53 0.11-0.83 0.01-0.43 0.08-0.86 0.19-1.28 0-0.34 0.11-0.53 0.11-0.71l0.3-1.31c0-0.23 0-0.42 0.11-0.6l0.3-1.2c0.11-0.19 0.11-0.49 0.22-0.68 0.07-0.34 0.3-0.75 0.41-1.13l0.3-0.83c0.11-0.3 0.3-0.68 0.38-0.98l0.38-0.9c0.07-0.3 0.26-0.6 0.37-0.91 0.08-0.3 0.23-0.71 0.45-1.02 0.19-0.22 0.26-0.53 0.38-0.68 0.11-0.45 0.3-0.75 0.53-1.13 0.17-0.17 0.31-0.38 0.41-0.6 0.19-0.42 0.42-0.71 0.64-1.13 0.16-0.17 0.28-0.36 0.38-0.56 0.22-0.42 0.53-0.75 0.75-1.13 0.08-0.22 0.3-0.42 0.42-0.6l0.83-1.13 0.49-0.6c0.23-0.3 0.41-0.6 0.72-0.9 0.22-0.3 0.53-0.49 0.75-0.79 0.22-0.19 0.42-0.53 0.6-0.71l1.47-1.51 99.24-96.46c16.73-16.11 43.23-16.11 59.96 0 16.57 16.1 16.57 42.14 0 58.24l-26.93 26.15h413.09c23.5 0 42.44 18.51 42.44 41.23 0 22.84-19.06 41.27-42.44 41.27H252.39c-0.6 0-1.32-0.12-2.07-0.12l-0.9-0.11-1.06-0.07c-0.42 0.01-0.84-0.02-1.24-0.11-0.3 0-0.53-0.11-0.83-0.11-0.44-0.02-0.89-0.08-1.32-0.19-0.34 0-0.53-0.11-0.76-0.11l-1.32-0.3c-0.34-0.08-0.53-0.08-0.75-0.19l-1.2-0.3c-0.23-0.11-0.56-0.11-0.76-0.23l-1.13-0.37-0.83-0.34-1.06-0.38-0.9-0.3-0.94-0.42c-0.3-0.08-0.71-0.19-1.02-0.42-0.22-0.19-0.53-0.26-0.75-0.37-0.38-0.11-0.76-0.3-1.13-0.53-0.19-0.16-0.41-0.29-0.64-0.38l-1.13-0.6c-0.19-0.16-0.41-0.29-0.64-0.37-0.38-0.23-0.72-0.53-1.13-0.76-0.23-0.08-0.41-0.3-0.6-0.37l-1.13-0.83-0.64-0.45-0.94-0.75c-0.3-0.19-0.49-0.49-0.79-0.68l-0.75-0.6c-0.49-0.53-1.02-0.91-1.55-1.43-0.53-0.49-0.94-1.02-1.43-1.5-0.22-0.19-0.42-0.49-0.6-0.72-0.23-0.3-0.57-0.49-0.75-0.79-0.23-0.3-0.53-0.6-0.72-0.91l-0.53-0.6c-0.3-0.37-0.64-0.71-0.86-1.13-0.07-0.19-0.27-0.37-0.38-0.56-0.22-0.41-0.53-0.75-0.75-1.13-0.19-0.22-0.3-0.41-0.38-0.6l-0.64-1.09-0.41-0.64c-0.11-0.37-0.3-0.68-0.53-1.05-0.19-0.22-0.3-0.52-0.41-0.75-0.07-0.3-0.3-0.68-0.41-0.98-0.08-0.3-0.3-0.6-0.42-0.9l-0.3-0.94-0.42-1.02-0.3-0.75c-0.22-0.35-0.3-0.76-0.41-1.14z m600.83 166.18l-0.07 1.02-0.11 1.02c0 0.38 0 0.79-0.11 1.2 0 0.3-0.12 0.49-0.12 0.79-0.01 0.44-0.08 0.89-0.19 1.32 0 0.3-0.11 0.49-0.11 0.68l-0.3 1.32c0 0.23 0 0.41-0.11 0.6l-0.3 1.2c-0.12 0.23-0.12 0.53-0.23 0.72-0.08 0.34-0.3 0.71-0.41 1.09-0.08 0.34-0.19 0.53-0.3 0.83l-0.38 1.02-0.37 0.9c-0.07 0.3-0.27 0.61-0.38 0.91-0.08 0.3-0.22 0.68-0.45 0.98-0.19 0.22-0.26 0.53-0.37 0.71-0.12 0.38-0.3 0.71-0.53 1.13-0.19 0.19-0.3 0.38-0.42 0.56-0.19 0.41-0.41 0.75-0.64 1.13-0.19 0.22-0.3 0.42-0.38 0.6-0.22 0.38-0.53 0.71-0.75 1.13-0.08 0.19-0.3 0.38-0.42 0.56-0.3 0.41-0.49 0.75-0.83 1.13l-0.49 0.6c-0.23 0.3-0.42 0.6-0.76 0.91-0.3 0.3-0.49 0.6-0.83 0.9-0.22 0.19-0.41 0.53-0.6 0.71l-1.47 1.51-99.28 96.46c-16.53 16.1-43.31 16.1-59.88 0s-16.57-42.14 0-58.24l26.89-26.15h-413.2c-23.46 0-42.41-18.51-42.41-41.23 0-22.84 19.06-41.27 42.41-41.27h515.68c0.6 0 1.32 0.11 2.07 0.11 0.3 0 0.6 0.11 0.94 0.11l1.02 0.08c0.42 0 0.87 0 1.24 0.11 0.3 0 0.53 0.12 0.83 0.12 0.44 0.01 0.89 0.08 1.32 0.19 0.38 0 0.57 0.11 0.76 0.11l1.32 0.3c0.37 0.07 0.56 0.07 0.75 0.19l1.24 0.3c0.23 0.12 0.53 0.12 0.76 0.23l1.13 0.37 0.79 0.34 1.06 0.38 0.94 0.3 0.9 0.41c0.34 0.08 0.75 0.19 1.02 0.42 0.22 0.19 0.57 0.26 0.75 0.37 0.42 0.12 0.76 0.3 1.13 0.53 0.19 0.16 0.41 0.29 0.64 0.38l1.13 0.6c0.23 0.19 0.41 0.3 0.64 0.38 0.38 0.22 0.72 0.53 1.13 0.75 0.19 0.08 0.42 0.3 0.64 0.38l1.13 0.83 0.61 0.45c0.3 0.22 0.64 0.45 0.94 0.75 0.3 0.19 0.53 0.49 0.79 0.68l0.75 0.6 1.55 1.43 1.47 1.51c0.23 0.19 0.42 0.49 0.6 0.71 0.23 0.3 0.53 0.49 0.71 0.79l0.76 0.91 0.49 0.6c0.34 0.38 0.64 0.71 0.86 1.13 0.08 0.19 0.3 0.38 0.38 0.56 0.22 0.42 0.53 0.75 0.75 1.13 0.17 0.17 0.31 0.38 0.41 0.6 0.19 0.42 0.42 0.71 0.64 1.09 0.19 0.22 0.26 0.42 0.38 0.64 0.11 0.38 0.3 0.68 0.53 1.05 0.19 0.22 0.3 0.53 0.41 0.75l0.42 0.98c0.11 0.3 0.3 0.6 0.38 0.9l0.37 0.94 0.38 1.02 0.34 0.75c0.19 0.35 0.31 0.73 0.37 1.13 0.11 0.19 0.11 0.49 0.23 0.71l0.3 1.2c0 0.23 0 0.41 0.11 0.61l0.3 1.32c0 0.3 0.11 0.49 0.11 0.68 0.11 0.42 0.11 0.94 0.19 1.32 0 0.3 0.12 0.53 0.12 0.83 0 0.37 0.11 0.79 0.11 1.2 0.11 0.3 0.11 0.68 0.11 0.98 0.07 0.41 0.07 0.71 0.07 1.01 0.11 0.6 0.11 1.28 0.11 2.03 0.01 0.66-0.11 1.26-0.11 1.97z"
          ></path>
        </svg>
      </div>
    </transition>
    <transition name="slide">
      <VegaLiteFilter
        v-if="showMorePanel"
        :insightList="selectedNode['insight-list']"
        :insightIndex="selectedNode['insightIndex']"
        class="showMorePanelBox"
        @insightIndexChange="changeInsightIndex"
        @hideMoreBox="hideMoreBox"
      ></VegaLiteFilter>
    </transition>
    <div id="svg-container">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <symbol
            id="defs-dominance"
            :viewBox="`0 0 ${insightIconSize} ${insightIconSize}`"
          >
            <image
              href="/pic/dominance.png"
              :width="insightIconSize"
              :height="insightIconSize"
            ></image>
          </symbol>
          <symbol
            id="defs-outlier"
            :viewBox="`0 0 ${insightIconSize} ${insightIconSize}`"
          >
            <image
              href="/pic/outlier.png"
              :width="insightIconSize"
              :height="insightIconSize"
            ></image>
          </symbol>
          <symbol
            id="defs-top2"
            :viewBox="`0 0 ${insightIconSize} ${insightIconSize}`"
          >
            <image
              href="/pic/top2.png"
              :width="insightIconSize"
              :height="insightIconSize"
            ></image>
          </symbol>
          <symbol
            id="defs-evenness"
            :viewBox="`0 0 ${insightIconSize} ${insightIconSize}`"
          >
            <image
              href="/pic/evenness.png"
              :width="insightIconSize"
              :height="insightIconSize"
            ></image>
          </symbol>
          <symbol
            id="defs-trend"
            :viewBox="`0 0 ${insightIconSize} ${insightIconSize}`"
          >
            <image
              href="/pic/trend.png"
              :width="insightIconSize"
              :height="insightIconSize"
            ></image>
          </symbol>
          <symbol
            id="defs-skewness"
            :viewBox="`0 0 ${insightIconSize} ${insightIconSize}`"
          >
            <image
              href="/pic/skewness.png"
              :width="insightIconSize"
              :height="insightIconSize"
            ></image>
          </symbol>
          <symbol
            id="defs-kurtosis"
            :viewBox="`0 0 ${insightIconSize} ${insightIconSize}`"
          >
            <image
              href="/pic/kurtosis.png"
              :width="insightIconSize"
              :height="insightIconSize"
            ></image>
          </symbol>
          <symbol
            id="defs-correlation"
            :viewBox="`0 0 ${insightIconSize} ${insightIconSize}`"
          >
            <image
              href="/pic/correlation.png"
              :width="insightIconSize"
              :height="insightIconSize"
            ></image>
          </symbol>
        </defs>
      </svg>
    </div>
    <defs style="display: none">
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        id="defs-remove"
        :width="iconSize"
        :height="iconSize"
      >
        <path
          d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64zM288 512q0 16 11.008 27.008t27.008 11.008h372q16 0 27.008-11.008t11.008-27.008-11.008-27.008-27.008-11.008H326.016q-16 0-27.008 11.008T288 512z"
        ></path>
      </svg>
      <svg
        id="defs-pin"
        viewBox="0 0 1025 1024"
        xmlns="http://www.w3.org/2000/svg"
        :width="iconSize"
        :height="iconSize"
      >
        <path
          d="M320 839.68l-238.592 174.08c-8.704 6.656-19.456 9.728-29.696 9.728-12.8 0-26.112-5.12-35.84-14.848-17.92-17.92-20.48-46.08-5.12-66.56l212.992-288.256L56.32 487.424C39.936 471.04 36.864 445.44 48.128 425.472c8.192-12.8 76.8-112.64 229.376-75.264 2.56 0.512 5.12 0.512 8.192 1.024 6.144 0.512 13.312 1.024 20.992 2.56 32.256 5.12 89.6-20.48 139.264-62.976 47.616-40.448 78.336-87.552 78.336-120.32 0-7.68 0-15.872-0.512-23.552-1.024-30.72-3.072-77.824 31.744-112.64 41.472-41.472 107.52-45.056 153.088-7.68 1.024 0.512 1.536 1.536 2.56 2.56 24.576 24.064 276.48 275.968 279.04 278.528 21.504 21.504 33.792 50.688 33.792 81.408s-11.776 59.392-33.792 80.896c-34.816 34.816-82.432 33.28-113.664 31.744-7.168 0-15.36-0.512-23.04-0.512-30.72 0-67.584 21.504-103.936 60.928-50.688 55.296-81.92 126.464-79.36 158.72 1.024 10.24 3.072 28.16 3.584 30.72 36.864 149.504-62.976 217.6-74.752 225.28-20.48 12.288-46.592 9.216-62.976-7.168l-165.376-165.376-50.688 35.328z"
        ></path>
      </svg>
      <svg
        id="defs-check"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        :width="iconSize"
        :height="iconSize"
      >
        <path
          d="M1002.88 321.92L405.76 935.04a32 32 0 0 1-45.76 0L21.12 612.48a32 32 0 0 1 0-44.8L160 433.6a32 32 0 0 1 45.76 0L359.04 576 796.16 120.64a32 32 0 0 1 46.08 0l160 156.48a32 32 0 0 1 0.64 44.8z"
        ></path>
      </svg>
      <!-- insight icon -->
    </defs>
  </div>
</template>

<script>
import VegaLiteFilter from "@/components/force-directed-graph/VegaLiteFilter.vue";

export default {
  components: {
    VegaLiteFilter,
  },
  computed: {
    selectedData() {
      return this.$store.getters["force/selectedData"];
    },
  },
  data() {
    return {
      // (id, gdata)
      nodeIdMap: null,

      // color
      defaultLinkColor: "#999",
      defaultNodeColor: "#aaa",
      circleHoveredColor: "#e6fcf5",

      circleRScale: null,
      insightSizeScale: null,

      circleR: 12,
      circleFocusR: 24,
      // rectWH: 125 * 0.7 + 20,
      rectWidthOffset: 3,
      rectHeightOffset: 13,
      rectHeightBottomOffset: 3,
      rectR: 10,
      vegaLiteR: 125,
      vegaLiteHeight: 100,
      vegaLiteWidth: 150,

      circleLink: 30,
      vegaLiteLink: 200,
      vegaLiteLongLink: 350,
      circleNeighborLink: 100,

      circleStrength: -250,
      circleNeighborStrength: -500,
      vegaLiteStrength: -3000,

      insightNum: 7,
      insightIconSize: 20,
      iconSize: 15,
      iconOffset: 5,

      // show conifg of vega-lite graph
      // (id,view)
      showIndex: new Map(),
      // (id, g)
      pinnedIndex: new Map(),
      // (id, row, col)
      checkIndex: new Map(),
      // (id, row,col)
      hoverIndex: new Map(),
      // neighbor info
      // (id, [...idn])
      neighborMap: new Map(),
      // id
      selectedNode: {
        id: null,
        insightIndex: null,
        "insight-list": null,
        col: null,
        row: null,
      },
      // showMoreIcon
      showMoreIcon: false,
      showMorePanel: false,
      hidePanelMode: false,

      simulation: null,
      zoom: null,
      ticks: 0,
      editMode: false,
      durationTime: 150,

      /* -------------------------------------------------------------------------- */
      // force Config
      restartAlphaDecay: 1 - Math.pow(0.001, 1 / 300),
      defaultBaseConfig: {
        alpha: 1,
        alphaMin: 0.001,
        alphaDecay: 1 - Math.pow(0.001, 1 / 300),
        alphaTarget: 0,
        velocityDecay: 0.4,
      },

      defaultForceConfig: {
        center: {
          X: null,
          Y: null,
          Strength: 1,
        },
        x: {
          X: null,
          Strength: 0.1,
        },
        y: {
          Y: null,
          Strength: 0.1,
        },
        radial: {
          X: null,
          Y: null,
          R: 100,
          Strength: 1,
        },
        manyBody: {
          Strength: null,
          Theta: 0.9,
          DistanceMin: 1,
          DistanceMax: 5000,
        },
        link: {
          Distance: null,
          Strength: null,
          Iterations: 1,
        },
        collide: {
          Radius: null,
          Strength: 1,
          Iterations: 1,
        },
      },
    };
  },

  watch: {
    checkIndex: {
      handler(newVal) {
        this.$store.dispatch("table/convertCheckSelection", {
          mode: "checked",
          data: newVal,
        });
      },
      deep: true,
    },
    hoverIndex: {
      handler(newVal) {
        this.$store.dispatch("table/convertCheckSelection", {
          mode: "hovered",
          data: newVal,
        });
      },
      deep: true,
    },
    selectedData(newVal) {
      if (newVal) {
        this.neighborHighligt(
          this.selectedNode.id,
          this.neighborMap.get(this.selectedNode.id),
          "selected",
          false
        );
        this.selectedNode = {
          id: null,
          insightIndex: null,
          "insight-list": null,
          col: null,
          row: null,
        };
        this.getNeighbourInfo(newVal);
        if (this.simulation) {
          this.simulation.stop();
          this.restart(true);
        } else {
          // draw force graph
          this.drawGraph(newVal);
        }
      }
    },

    selectedNode(newVal, oldVal) {
      if (newVal.id !== oldVal.id) {
        // get id array of neighbour
        const neighborSet = this.neighborMap.get(newVal.id);
        const oldNeighborSet = this.neighborMap.get(oldVal.id);
        this.neighborHighligt(oldVal.id, oldNeighborSet, "selected", false);
        this.neighborHighligt(newVal.id, neighborSet, "selected", true);

        if (newVal.id) {
          this.$store.dispatch("table/convertCheckSelection", {
            mode: "clicked",
            data: new Map().set(newVal.id, {
              col: newVal.col,
              row: newVal.row,
            }),
          });
          if (newVal["insight-list"].length > 1) {
            if (this.hidePanelMode) {
              if (this.showMoreIcon) {
                this.showMoreIcon = false;

                this.$nextTick(() => {
                  setTimeout(() => {
                    this.showMoreIcon = true;
                  }, 150);
                });
              } else {
                this.showMoreIcon = true;
              }
            } else {
              if (this.showMorePanel) {
                this.showMorePanel = false;

                this.$nextTick(() => {
                  setTimeout(() => {
                    this.showMorePanel = true;
                  }, 150);
                });
              } else {
                this.showMorePanel = true;
              }
            }
          } else {
            this.showMorePanel = false;
            this.showMoreIcon = false;
          }
        } else {
          this.showMorePanel = false;
          this.showMoreIcon = false;

          this.$store.dispatch("table/convertCheckSelection", {
            mode: "clicked",
            data: null,
          });
        }
      }
    },
    /* -------------------------------------------------------------------------- */
    // default config
    /* -------------------------------------------------------------------------- */
  },
  methods: {
    hideMoreBox() {
      this.hidePanelMode = true;
      this.showMorePanel = false;
      this.showMoreIcon = true;
    },
    changeInsightIndex(selectedIndex, targetId) {
      let id = targetId;
      if (!id) id = this.selectedNode.id;
      const oldIndex = this.selectedNode.insightIndex;
      // change index record of selectedNode
      this.selectedNode.insightIndex = selectedIndex;
      const nodeData = this.nodeIdMap.get(id);
      // change data record in force graph
      nodeData.insightIndex = selectedIndex;
      const oldType = nodeData["insight-list"][oldIndex]["insight-type"];
      const newType = nodeData["insight-list"][selectedIndex]["insight-type"];
      const g = d3
        .select("#svg-container")
        .select("svg")
        .select(".node-group")
        .selectChildren("g")
        .filter((d) => d.id === id);

      //change insight icon
      g.select(".insight-icon").attr("href", function () {
        const gData = d3.select(this.parentNode).datum();
        const group = gData["insight-list"][gData.insightIndex]["insight-type"];

        let insightType = null;
        switch (group) {
          case "dominance":
            insightType = "dominance";
            break;
          case "outlier":
            insightType = "outlier";
            break;
          case "top2":
            insightType = "top2";
            break;
          case "evenness":
            insightType = "evenness";
            break;
          case "trend":
            insightType = "trend";
            break;
          case "skewness":
            insightType = "skewness";
            break;
          case "kurtosis":
            insightType = "kurtosis";
            break;
          case "correlation":
          case "correlation-temporal":
            insightType = "correlation";
            break;
        }
        return "#defs-" + insightType;
      });
      // change vega-lite graph
      this.showIndex.get(id).finalize();
      g.selectAll(".vega-lite-graph").remove();
      g.datum().view = null;
      g.datum().img = null;
      this.drawVegaLite(g, this.pinnedIndex.get(id) ? "svg" : "img");

      // change data of statistic graph
      this.$store.getters["force/statisticNodeIdMap"].get(id).insightIndex =
        selectedIndex;

      // const oldNodeDataGroup = this.$store.getters["force/nodeDataGroup"];
      // const newNodeDataGroup = oldNodeDataGroup.map((d) => {
      //   if (d.name === oldType) d.value -= 1;
      //   if (d.name === newType) d.value += 1;
      //   return d;
      // });

      // this.$store.commit("force/setNodeDataGroup", newNodeDataGroup);
    },
    createInsetFilter(svg) {
      let svgNamespace = "http://www.w3.org/2000/svg";

      let filter = document.createElementNS(svgNamespace, "filter");
      filter.setAttribute("id", "inset-shadow");
      filter.setAttribute("x", "-50%");
      filter.setAttribute("y", "-50%");
      filter.setAttribute("width", "200%");
      filter.setAttribute("height", "200%");

      let feComponentTransfer = document.createElementNS(
        svgNamespace,
        "feComponentTransfer"
      );
      feComponentTransfer.setAttribute("in", "SourceAlpha");

      let feFuncA = document.createElementNS(svgNamespace, "feFuncA");
      feFuncA.setAttribute("type", "table");
      feFuncA.setAttribute("tableValues", "1 0");

      feComponentTransfer.appendChild(feFuncA);

      let feGaussianBlur = document.createElementNS(
        svgNamespace,
        "feGaussianBlur"
      );
      feGaussianBlur.setAttribute("stdDeviation", "5");

      let feOffset = document.createElementNS(svgNamespace, "feOffset");
      feOffset.setAttribute("dx", "2.5");
      feOffset.setAttribute("dy", "2.5");
      feOffset.setAttribute("result", "offsetblur");

      let feFlood = document.createElementNS(svgNamespace, "feFlood");
      feFlood.setAttribute("flood-color", "steelblue");
      feFlood.setAttribute("result", "color");

      let feComposite1 = document.createElementNS(svgNamespace, "feComposite");
      feComposite1.setAttribute("in2", "offsetblur");
      feComposite1.setAttribute("operator", "in");

      let feComposite2 = document.createElementNS(svgNamespace, "feComposite");
      feComposite2.setAttribute("in2", "SourceAlpha");
      feComposite2.setAttribute("operator", "in");

      let feMerge = document.createElementNS(svgNamespace, "feMerge");

      let feMergeNode1 = document.createElementNS(svgNamespace, "feMergeNode");
      feMergeNode1.setAttribute("in", "SourceGraphic");

      let feMergeNode2 = document.createElementNS(svgNamespace, "feMergeNode");

      feMerge.appendChild(feMergeNode1);
      feMerge.appendChild(feMergeNode2);

      filter.appendChild(feComponentTransfer);
      filter.appendChild(feGaussianBlur);
      filter.appendChild(feOffset);
      filter.appendChild(feFlood);
      filter.appendChild(feComposite1);
      filter.appendChild(feComposite2);
      filter.appendChild(feMerge);

      // Append the filter to the SVG element
      let svgElement = document.querySelector("svg"); // replace this with the actual svg element
      svg.appendChild(filter);
    },
    setDomAttributes(linkG, circleG) {
      const that = this;

      circleG
        .attr("opacity", 0)
        .transition()
        .duration(this.durationTime)
        .attr("opacity", 1);
      linkG
        .attr("opacity", 0)
        .transition()
        .duration(this.durationTime)
        .attr("opacity", 1);

      const linkTypeColor = d3.scaleOrdinal(
        ["parent-child", "siblings", "same-name"],

        ["#C69DE9", "#F7A69F", "#53C4B6"]
      );

      // 画links
      const linkGroup = linkG
        .append("line")
        .attr("class", "link")
        .attr("stroke", function () {
          const type = d3.select(this.parentNode).datum().type;
          return linkTypeColor(type);
        })
        .attr("stroke-opacity", 0.6)
        .attr("class", "network-line")
        .attr("stroke-width", 1);

      const linkContainerGroup = linkG;

      //画nodes
      const circleGroup = circleG
        .append("circle")
        .attr("class", "circle")
        .classed("not-show", function () {
          const gData = d3.select(this.parentNode).datum();
          return gData.showDetail;
        })
        .attr("r", function () {
          return d3.select(this.parentNode).datum().circleR;
        })
        .attr("stroke", this.defaultNodeColor)
        .attr("fill", "#fff")
        .attr("stroke-width", 1.5)
        .style("transition", "transform 0.2s")

        .on("mouseover", function (event) {
          const d = d3.select(this.parentNode).datum();
          that.hoverIndex.clear();
          that.hoverIndex.set(d.id, {
            col: d.col,
            row: d.row,
          });
          if (!d.showDetail) {
            d3.select(this)
              .attr("fill", that.circleHoveredColor)
              .style("cursor", "pointer")
              .attr("transform", "scale(2)");

            d3.select(this.parentNode)
              .select(".insight-icon")
              .attr("transform", "scale(2)");
          }
        })
        .on("mouseout", function (event) {
          const d = d3.select(this.parentNode).datum();
          if (!d.showDetail) {
            d3.select(this).attr("transform", "scale(1)").attr("fill", "#FFF");
          }
          d3.select(this.parentNode)
            .select(".insight-icon")
            .attr("transform", "scale(1)");
        })
        .on("click", function () {
          // 获取选择circle对应的container - g元素
          const g = d3.select(this.parentNode);

          that.selectedNode = {
            id: g.datum().id,
            insightIndex: g.datum().insightIndex,
            "insight-list": g.datum()["insight-list"],
            col: g.datum().col,
            row: g.datum().row,
          };

          if (!g.datum().showDetail) {
            g.datum().showDetail = true;

            const circle = d3.select(this);
            const rect = g.selectChild(".rect");
            const insightIcon = g.selectChild(".insight-icon");
            const rectTitle = g.select(".rect-title");
            const rectText = g.selectChildren(".title-text");

            rect.classed("not-show", false);
            rectTitle.classed("not-show", false);
            rectText.classed("not-show", false);
            circle.classed("not-show", true);
            insightIcon.classed("not-show", true);
            g.append("use")
              .attr("href", "#defs-remove")
              .attr("class", "remove vega-lite-icon")
              .attr("cursor", "pointer")
              .on("click", function () {
                g.datum().showDetail = false;
                g.datum().pinned = false;
                g.datum().checked = false;
                g.classed("pinned", false);
                g.datum().fx = null;
                g.datum().fy = null;
                that.selectedNode = {
                  id: null,
                  insightIndex: null,
                  "insight-list": null,
                  col: null,
                  row: null,
                };
                g.selectChildren("rect").classed("svg-inset", false);
                g.selectChildren(".vega-lite-icon").remove();
                that.deleteVegaLite(g);
                const collideForce = that.simulation.force("collide");
                const bodyForce = that.simulation.force("charge");
                const linkForce = that.simulation.force("link");
                if (collideForce)
                  collideForce.initialize(that.simulation.nodes());
                if (linkForce) linkForce.initialize(that.simulation.nodes());
                if (bodyForce) {
                  that.simulation.force("charge", null);
                  that.simulation.force("charge", bodyForce);
                }
                rect.classed("not-show", true);
                rectTitle.classed("not-show", true);
                rectText.classed("not-show", true);
                circle
                  .classed("not-show", false)
                  .attr("transform", "scale(1)")
                  .attr("fill", "#FFF");
                insightIcon.classed("not-show", false);
                that.simulation.alphaDecay(that.restartAlphaDecay);
                that.simulation.alpha(that.defaultBaseConfig.alpha);
                that.simulation.restart();
              });

            g.append("use")
              .attr("href", "#defs-pin")
              .attr("class", "pin vega-lite-icon")
              .attr("cursor", "pointer")
              .on("click", togglePin);

            g.append("use")
              .attr("href", "#defs-check")
              .attr("class", "check vega-lite-icon")
              .attr("cursor", "pointer")
              .on("click", toggleCheck);

            that.drawVegaLite(g, "img");
          }
        });

      const containerGroup = circleG;

      const iconGroup = containerGroup
        .append("use")
        .attr("href", function () {
          const gData = d3.select(this.parentNode).datum();

          const group =
            gData["insight-list"][gData.insightIndex]["insight-type"];

          let insightType = null;
          switch (group) {
            case "dominance":
              insightType = "dominance";
              break;
            case "outlier":
              insightType = "outlier";
              break;
            case "top2":
              insightType = "top2";
              break;
            case "evenness":
              insightType = "evenness";
              break;
            case "trend":
              insightType = "trend";
              break;
            case "skewness":
              insightType = "skewness";
              break;
            case "kurtosis":
              insightType = "kurtosis";
              break;
            case "correlation":
            case "correlation-temporal":
              insightType = "correlation";
              break;
          }
          return "#defs-" + insightType;
        })
        .attr("class", "insight-icon")
        .attr("width", function () {
          return d3.select(this.parentNode).datum().iconSize;
        })
        .attr("height", function () {
          return d3.select(this.parentNode).datum().iconSize;
        })
        .attr("x", function () {
          return -d3.select(this.parentNode).datum().iconSize / 2;
        })
        .attr("y", function () {
          return -d3.select(this.parentNode).datum().iconSize / 2;
        })
        .attr("pointer-events", "none")
        .style("transition", "transform 0.2s");

      const rectGroup = containerGroup
        .append("rect")
        .attr("class", "rect vega-lite-border")
        .classed("not-show", function () {
          const gData = d3.select(this.parentNode).datum();
          return !gData.showDetail;
        })
        .attr("fill", "#fff")
        .attr("stroke", "#ccc")
        .attr("stroke-width", 1.5)
        .attr("cursor", "pointer")
        .on("mouseover", function (event) {
          //颜色变，表示被选中
          const rect = d3.select(this);
          const parentNode = d3.select(this.parentNode);
          const id = parentNode.datum().id;
          const neighbor = that.neighborMap.get(id);
          that.neighborHighligt(id, neighbor, "hover", true);
          rect.classed("center-highlight", true);
          parentNode.select(".rect-title").classed("center-highlight", true);
          that.hoverIndex.clear();
          that.hoverIndex.set(id, {
            col: parentNode.datum().col,
            row: parentNode.datum().row,
          });
        })
        .on("mouseout", function (event) {
          const rect = d3.select(this);
          const parentNode = d3.select(this.parentNode);
          const id = parentNode.datum().id;
          const neighbor = that.neighborMap.get(id);
          that.neighborHighligt(id, neighbor, "hover", false);

          if (id !== that.selectedNode.id) {
            rect.classed("center-highlight", false);
            parentNode.select(".rect-title").classed("center-highlight", false);
          }
        })
        .on("click", function () {
          // 获取对应的container - g元素
          const g = d3.select(this.parentNode);

          that.selectedNode = {
            id: g.datum().id,
            insightIndex: g.datum().insightIndex,
            "insight-list": g.datum()["insight-list"],
            row: g.datum().row,
            col: g.datum().col,
          };

          // d3.select(this).classed("center-highlight", true);
        })
        .on("dblclick", togglePin);

      const titleGroup = containerGroup
        .append("rect")
        .attr("class", "rect-title")
        .classed("not-show", function () {
          const gData = d3.select(this.parentNode).datum();

          return !gData.showDetail;
        })
        .attr("fill", "#e9ecef")
        .attr("stroke", "#ccc")
        .attr("stroke-width", 1.5)
        .attr("pointer-events", "none");

      const nameGroup = containerGroup
        .append("text")
        .classed("not-show", function () {
          const gData = d3.select(this.parentNode).datum();
          return !gData.showDetail;
        })
        .attr("class", "title-text title-name")
        .attr("pointer-events", "none")
        .style("user-select", "none")
        .attr("fill", "#555")
        .attr("font-weight", 600);

      const descriptionGroup = containerGroup
        .append("text")
        .classed("not-show", function () {
          const gData = d3.select(this.parentNode).datum();
          return !gData.showDetail;
        })
        .attr("class", "title-text title-description")
        .attr("pointer-events", "none")
        .attr("fill", "#555")
        .style("user-select", "none");

      const vegaLiteContainerGroup = containerGroup
        .append("g")
        .attr("class", "vega-lite-container");

      const svg = d3.select("#svg-container").select("svg");
      const dragDefine = d3
        .drag()
        .container(function () {
          // 选择顶层nodeGy元素作为容器，影响 event.x和event.y
          return svg.selectChild(".node-group").node();
        })
        .subject(function (event) {
          // 将父元素 g 作为 subject 返回 (因为数据挂载在父元素g上)
          return d3.select(this.parentNode).datum();
        })
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
      // 设置结点拖动行为，也是只在圆上设置，避免与vega-lite图的鼠标事件冲突
      svg
        .selectChild(".node-group")
        .selectChildren("g")
        .selectChild(".circle")
        .call(dragDefine);
      svg
        .selectChild(".node-group")
        .selectChildren("g")
        .selectChild(".rect")
        .call(dragDefine);

      const simulation = this.simulation;
      // 拖动开始时，重新加热迭代过程，并且修正被拖动点的fx,fy
      function dragstarted(event) {
        if (!event.active)
          simulation
            .alphaTarget(
              +that.defaultBaseConfig.alphaTarget + 0.3 > 1
                ? 1
                : +that.defaultBaseConfig.alphaTarget + 0.3
            )
            .restart();

        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      // 拖动时，让点跟着鼠标走
      function dragged(event) {
        // 更新节点位置
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      // 拖动结束，降温
      function dragended(event) {
        if (!event.active)
          simulation.alphaTarget(that.defaultBaseConfig.alphaTarget);

        if (event.subject.pinned) {
          event.subject.fx = event.subject.x;
          event.subject.fy = event.subject.y;
        } else {
          event.subject.fx = null;
          event.subject.fy = null;
        }
      }
      function togglePin(event, d) {
        const g = d3.select(this.parentNode);
        const pinned = !g.datum().pinned;
        g.datum().pinned = pinned;
        g.classed("pinned", true);
        if (pinned) {
          g.datum().fx = g.datum().x;
          g.datum().fy = g.datum().y;
          g.select(".pin").classed("icon-pinned", true);

          that.drawVegaLite(g, "svg");
          that.pinnedIndex.set(g.datum().id, g);
        } else {
          g.classed("pinned", false);
          g.select(".pin").classed("icon-pinned", false);
          g.datum().fx = null;
          g.datum().fy = null;
          that.drawVegaLite(g, "img");
          that.pinnedIndex.delete(g.datum().id);
        }
      }

      function toggleCheck() {
        const g = d3.select(this.parentNode);
        const checked = !g.datum().checked;
        g.datum().checked = checked;
        if (checked) {
          that.checkIndex.set(g.datum().id, {
            row: g.datum().row,
            col: g.datum().col,
          });

          g.select(".check").classed("icon-pinned", true);
          g.selectChildren("rect").classed("svg-inset", true);
        } else {
          that.checkIndex.delete(g.datum().id);
          g.select(".check").classed("icon-pinned", false);
          g.selectChildren("rect").classed("svg-inset", false);
        }
      }
    },

    neighborHighligt(id, neighbor, type, enable) {
      const className = type + "-highlight";
      const nodeGroup = d3
        .select("#svg-container")
        .select(".node-group")
        .selectChildren("g");

      const linkGroup = d3
        .select("#svg-container")
        .select(".link-group")
        .selectChildren("g");
      if (neighbor) {
        nodeGroup
          .filter((d) => neighbor.includes(d.id))
          .selectChildren("circle, rect, .insight-icon")
          .classed(className, enable);
        linkGroup
          .filter((d) => id === d.source.id || id === d.target.id)
          .selectChildren("line")
          .classed(className, enable);
      }
      if (type === "selected") {
        nodeGroup
          .filter((d) => d.id === id)
          .selectChildren("circle, rect,.insight-icon")
          .classed("center-highlight", enable);
      }
    },

    // 构造用于查询邻居的 neighborMap
    getNeighbourInfo(data) {
      this.neighborMap = new Map();
      const links = data.links;
      links.forEach((link) => {
        const sourceId = link.source;
        const targetId = link.target;

        if (this.neighborMap.has(sourceId)) {
          this.neighborMap.get(sourceId).push(targetId);
        } else {
          this.neighborMap.set(sourceId, [targetId]);
        }
        if (this.neighborMap.has(targetId)) {
          this.neighborMap.get(targetId).push(sourceId);
        } else {
          this.neighborMap.set(targetId, [sourceId]);
        }
      });
    },

    /* -------------------------------------------------------------------------- */
    // base config
    /* -------------------------------------------------------------------------- */

    simStop() {
      this.simulation.stop();
    },

    // rebind data of dom element(nodes and links) and sim system
    restart(newVal) {
      const that = this;
      this.ticks = 0;

      // 获取原始绘画数据
      const data = this.selectedData;

      const preNodes = this.simulation.nodes();
      const links = data.links.map((d) => ({ ...d }));
      let nodes = null;
      if (!newVal) {
        // simple restart
        nodes = preNodes.map(function (d) {
          delete d.x;
          delete d.y;
          delete d.vx;
          delete d.vy;
          return d;
        });
      } else {
        const statisticNodeIdMap =
          this.$store.getters["force/statisticNodeIdMap"];
        const scoreSelectionMap =
          this.$store.getters["force/scoreSelectionMap"];
        // newly filtered value
        nodes = data.nodes.map((d) => {
          const id = d.id;
          // get force data
          const oldNode = this.nodeIdMap.get(d.id);
          // get total insight-list data
          const originInsightList = statisticNodeIdMap.get(id)["insight-list"];

          oldNode["insight-list"] = originInsightList.filter((insight) => {
            const type = insight["insight-type"];
            const score = insight["insight-score"];
            const selection = scoreSelectionMap.get(type);
            if (
              selection === "all" ||
              (score >= selection[0] && score < selection[1])
            )
              return true;
            else return false;
          });

          // reset insight index
          oldNode.insightIndex = 0;
          return oldNode;
        });
        // recalculate the size of circle and icon
        nodes.forEach((d) => {
          const insightNum = d["insight-list"].length;
          d.circleR = this.circleRScale(insightNum);
          d.iconSize = this.insightSizeScale(insightNum);
        });
      }

      const nodeSingleG = d3
        .select("#svg-container")
        .select("svg")
        .select("g.node-group");
      const linkSingleG = d3
        .select("#svg-container")
        .select("svg")
        .select("g.link-group");

      // rebind data of dom elements
      let nodeG = null;
      let linkG = null;
      linkSingleG
        .selectAll("g")
        .data(links, (d) => {
          if (typeof d.source === "object") {
            return `${d.source.id}_${d.target.id}`;
          } else {
            return `${d.source}_${d.target}`;
          }
        })
        .join(
          (enter) => {
            linkG = enter.append("g");
            return linkG;
          },
          (update) => update,
          (exit) => {
            exit
              .attr("opacity", 1)
              .transition()
              .duration(this.durationTime)
              .attr("opacity", 0)
              .remove();
          }
        );
      nodeSingleG
        .selectChildren("g")
        .data(nodes, (d) => d.id)
        .join(
          (enter) => {
            nodeG = enter.append("g");
          },
          (update) => {
            // update vega-lite graph
            update.each(function (d) {
              const g = d3.select(this);
              const id = d.id;
              const view = that.showIndex.get(id);
              if (view) {
                view.finalize();
                g.selectAll(".vega-lite-graph").remove();
                g.datum().view = null;
                g.datum().img = null;
                that.drawVegaLite(g, that.pinnedIndex.get(id) ? "svg" : "img");
              }
            });

            // updata circle R
            update.select(".circle").attr("r", function () {
              return d3.select(this.parentNode).datum().circleR;
            });
            // update icon
            update
              .select(".insight-icon")
              .attr("href", function () {
                const gData = d3.select(this.parentNode).datum();
                const group =
                  gData["insight-list"][gData.insightIndex]["insight-type"];
                let insightType = null;
                switch (group) {
                  case "dominance":
                    insightType = "dominance";
                    break;
                  case "outlier":
                    insightType = "outlier";
                    break;
                  case "top2":
                    insightType = "top2";
                    break;
                  case "evenness":
                    insightType = "evenness";
                    break;
                  case "trend":
                    insightType = "trend";
                    break;
                  case "skewness":
                    insightType = "skewness";
                    break;
                  case "kurtosis":
                    insightType = "kurtosis";
                    break;
                  case "correlation":
                  case "correlation-temporal":
                    insightType = "correlation";
                    break;
                }
                return "#defs-" + insightType;
              })
              .attr("class", "insight-icon")
              .attr("width", function () {
                return d3.select(this.parentNode).datum().iconSize;
              })
              .attr("height", function () {
                return d3.select(this.parentNode).datum().iconSize;
              })
              .attr("x", function () {
                return -d3.select(this.parentNode).datum().iconSize / 2;
              })
              .attr("y", function () {
                return -d3.select(this.parentNode).datum().iconSize / 2;
              });
          },
          (exit) => {
            exit
              .each((data) => {
                const id = data.id;
                if (this.showIndex.has(id)) {
                  this.showIndex.delete(id);
                }
                if (this.pinnedIndex.has(id)) {
                  this.pinnedIndex.delete(id);
                  data.fx = null;
                  data.fy = null;
                }
                if (this.checkIndex.has(id)) {
                  this.checkIndex.delete(id);
                }

                data.showDetail = false;
                data.pinned = false;
                data.checked = false;
                data.view = null;
                data.img = null;
                data.rect = null;
              })
              .attr("opacity", 1)
              .transition()
              .duration(this.durationTime)
              .attr("opacity", 0)
              .remove();
          }
        );

      this.setDomAttributes(linkG, nodeG);

      // rebind data of simulation
      this.simulation.nodes(nodes);
      this.simulation.force("link").links(links);

      // this.simulation.force("center").initialize(nodes);
      // this.simulation.force("x").initialize(nodes);
      // this.simulation.force("y").initialize(nodes);
      // reset alpha to reheat
      this.simulation.alphaDecay(this.defaultBaseConfig.alphaDecay);
      this.simulation.alpha(this.defaultBaseConfig.alpha);

      this.simulation.restart();
    },

    /* -------------------------------------------------------------------------- */
    // vegaLite relative
    /* -------------------------------------------------------------------------- */
    drawVegaLite(g, mode) {
      const that = this;
      const container = g.select(".vega-lite-container");
      const rect = g.selectChild(".rect");
      const removeIcon = g.selectChild(".remove");
      const pinIcon = g.selectChild(".pin");
      const checkIcon = g.selectChild(".check");
      const preView = g.datum().view;
      const rectTitle = g.select(".rect-title");
      const rectTitleName = g.selectChild(".title-name");
      const rectTitleDescription = g.selectChild(".title-description");
      const gData = g.datum();

      if (preView) {
        // reset the view
        const svg = container.selectChild("svg");
        switch (mode) {
          case "img":
            // 创建反应新状态的img
            svg.classed("not-show", true);
            const imgInfo = gData.img;
            preView.toCanvas(5).then((canvas) => {
              // Access the canvas element and export as an image
              const image = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "image"
              );
              image.setAttribute("href", canvas.toDataURL("image/png", 1));
              image.setAttribute("width", imgInfo.width);
              image.setAttribute("height", imgInfo.height);
              image.setAttribute("class", "vega-lite-graph");
              container.node().appendChild(image);
            });
            break;
          case "svg":
            container.selectChild("image").remove();
            svg.classed("not-show", false);

            break;
        }
      } else {
        let yourVlSpec = JSON.parse(
          gData["insight-list"][gData.insightIndex]["vega-lite"]
        );

        // add some options
        yourVlSpec["width"] = this.vegaLiteWidth;
        yourVlSpec["height"] = this.vegaLiteHeight;
        yourVlSpec["usermeta"] = { embedOptions: { renderer: "svg" } };

        // initialization
        vegaEmbed(container.node(), yourVlSpec).then((result) => {
          const view = result.view.background("transparent");
          // record the view
          g.datum().view = view;
          that.showIndex.set(gData.id, view);

          const linkForce = that.simulation.force("link");
          if (linkForce) linkForce.initialize(that.simulation.nodes());
          const bodyForce = that.simulation.force("charge");
          if (bodyForce) {
            that.simulation.force("charge", null);
            that.simulation.force("charge", bodyForce);
          }

          const svg = container.select("svg");

          // add animation
          svg
            .attr("class", "vega-lite-graph")
            .attr("fill-opacity", 0)
            .attr("stroke-opacity", 0)
            .transition()
            .duration(175)
            .attr("fill-opacity", 1)
            .attr("stroke-opacity", 1);
          const width = svg.attr("width");
          const height = svg.attr("height");

          // record the img info
          g.datum().img = {
            width: width,
            height: height,
          };

          const titleHeight = that.iconSize + 2 * that.iconOffset;
          const rectWidth = +width + that.rectWidthOffset * 2;
          const rectHeight =
            +height + that.rectHeightOffset * 2 + titleHeight + that.iconSize;

          const translateX = rectWidth / 2;
          const translateY = rectHeight / 2;
          g.datum().rect = {
            r: Math.sqrt(Math.pow(translateX, 2) + Math.pow(translateY, 2)),
            width: rectWidth,
            height: rectHeight,
          };
          const collideForce = that.simulation.force("collide");
          if (collideForce) collideForce.initialize(that.simulation.nodes());

          // add ainmation
          rect
            .attr("rx", that.rectR)
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 0)
            .attr("height", 0)
            .transition()
            .duration(150)
            .attr("x", -translateX)
            .attr("y", -translateY)
            .attr("width", rectWidth)
            .attr("height", rectHeight);

          rectTitle
            .attr("rx", that.rectR)
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 0)
            .attr("height", 0)
            .transition()
            .duration(150)
            .attr("x", -translateX)
            .attr("y", -translateY)
            .attr("width", rectWidth)
            .attr("height", titleHeight);

          rectTitleName
            .text(function () {
              return gData["insight-list"][gData.insightIndex]["insight-type"];
            })
            .attr("x", -translateX + that.iconOffset)
            .attr("y", -translateY + that.iconSize + that.iconOffset / 2)
            .attr("font-size", that.iconSize - 2);
          rectTitleDescription
            .text(function () {
              const rowName = gData.row;

              return `row: ${rowName}`;
            })
            .attr("font-size", "10px")
            .attr("x", -translateX + that.iconOffset)
            .attr("y", -translateY + that.iconSize + titleHeight)
            .append("tspan")
            .attr("x", -translateX + that.iconOffset)
            .attr("dy", "1.2em")
            .style("text-align", "left")
            .text(function () {
              const colName = gData.col;
              return `col: ${colName}`;
            });
          removeIcon.attr(
            "transform",
            `translate(${translateX - that.iconSize - that.iconOffset},${
              -translateY + that.iconOffset
            })`
          );

          pinIcon.attr(
            "transform",
            `translate(${translateX - 2 * that.iconSize - that.iconOffset},${
              -translateY + that.iconOffset
            })`
          );
          checkIcon.attr(
            "transform",
            `translate(${
              translateX - 3 * that.iconSize - that.iconOffset - 2
            },${-translateY + that.iconOffset})`
          );

          switch (mode) {
            case "img":
              // 创建反应新状态的img
              svg.classed("not-show", true);
              const imgInfo = gData.img;
              view.toCanvas(5).then((canvas) => {
                // Access the canvas element and export as an image
                const image = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "image"
                );
                image.setAttribute("href", canvas.toDataURL("image/png", 1));
                image.setAttribute("width", imgInfo.width);
                image.setAttribute("height", imgInfo.height);
                image.setAttribute("class", "vega-lite-graph");
                container.node().appendChild(svg.node());
                container.node().appendChild(image);
                g.select("image")
                  .attr("opacity", 0)
                  .transition()
                  .duration(175)
                  .attr("opacity", 1);
              });
              break;
            case "svg":
              // 初始就设置为 pinned 状态
              pinIcon.classed("icon-pinned", true);
              that.pinnedIndex.set(gData.id, g);
              g.datum().pinned = true;
              g.classed("pinned", true);
              g.datum().fx = gData.x;
              g.datum().fy = gData.y;
              container.node().appendChild(svg.node());
              break;
          }

          container.select("div").remove();
          container.select("details").remove();

          container.style(
            "transform",
            `translate(${-width / 2}px,${
              -height / 2 + that.rectHeightOffset + titleHeight / 2
            }px)`
          );
        });
      }
      that.simulation.alphaDecay(that.restartAlphaDecay);
      that.simulation.alpha(that.defaultBaseConfig.alpha);
      that.simulation.restart();
    },
    deleteVegaLite(g) {
      const id = g.datum().id;
      this.showIndex.get(id).finalize();
      g.selectAll(".vega-lite-graph").remove();
      g.datum().view = null;
      g.datum().img = null;
      this.checkIndex.delete(id);
      this.pinnedIndex.delete(id);
      this.showIndex.delete(id);
    },
    /* -------------------------------------------------------------------------- */
    // other
    /* -------------------------------------------------------------------------- */

    // getRandomInt(min, max) {
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // },

    // createObserver(svgElement) {
    //   // 创建 ResizeObserver 实例
    //   const observer = new ResizeObserver((entries) => {
    //     // 遍历所有被观察的元素
    //     for (let entry of entries) {
    //       const { width, height } = entry.contentRect;
    //       this.width = width;
    //       this.height = height;
    //       this.rightCornerCoord = [width, height];

    //       this.zoom.translateExtent([
    //         [-width, -height],
    //         [width * 2, height * 2],
    //       ]);
    //       const defaultForceConfig = this.defaultForceConfig;
    //       this.simulation
    //         .force(
    //           "center",
    //           d3
    //             .forceCenter(width / 2, height / 2)
    //             .strength(defaultForceConfig.center.Strength)
    //         )
    //         .force(
    //           "x",
    //           d3
    //             .forceX()
    //             .x(width / 2)
    //             .strength(defaultForceConfig.x.Strength)
    //         )
    //         .force(
    //           "y",
    //           d3
    //             .forceY()
    //             .y(height / 2)
    //             .strength(defaultForceConfig.y.Strength)
    //         );

    //       this.restart(false);
    //     }
    //   });
    //   // 开始观察 SVG 元素
    //   observer.observe(svgElement);
    // },
    // initial drawing, create DOM elements and sim system
    drawGraph(newVal) {
      const that = this;
      // 获取绘画数据
      const data = newVal;
      const links = data.links.map((d) => ({ ...d }));

      // 创建每个node insight num到 circleR & insight icon size的映射
      let maxVegaLiteNum = 0;
      data.nodes.forEach((node) => {
        const vegaLiteNum = node["insight-list"].length;
        if (vegaLiteNum > maxVegaLiteNum) maxVegaLiteNum = vegaLiteNum;
      });

      const circleRScale = d3
        .scaleLog([1, maxVegaLiteNum], [this.circleR, this.circleR * 2])
        .base(2);
      const insightSizeScale = d3
        .scaleLog(
          [1, maxVegaLiteNum],
          [this.insightIconSize, this.insightIconSize * 2]
        )
        .base(2);

      this.circleRScale = circleRScale;
      this.insightSizeScale = insightSizeScale;
      // 加入更多属性，控制vega-lite图的显示
      const nodes = data.nodes.map((d) => {
        const insightNum = d["insight-list"].length;
        return {
          ...d,
          circleR: circleRScale(insightNum),
          iconSize: insightSizeScale(insightNum),
          showDetail: false,
          pinned: false,
          checked: false,
          view: null,
          img: null,
          rect: null,
        };
      });
      const nodeIdMap = new Map();
      nodes.forEach((node) => {
        nodeIdMap.set(node.id, node);
      });
      this.nodeIdMap = nodeIdMap;
      // 选择svg container
      const svgContainer = d3.select("#svg-container");

      // // 清除之前的
      // svgContainer.selectAll("*").remove();

      // 获取container的宽和高
      const width = parseInt(svgContainer.style("width"), 10);
      const height = parseInt(svgContainer.style("height"), 10);

      // 先把svg图和nodes+links 元素画出来

      // 选择svg
      const svg = svgContainer
        .select("svg")
        .attr("style", "width: 100%;height:100% ;")
        .attr("viewBox", [0, 0, width, height]);
      this.createInsetFilter(svg.node());
      // this.createObserver(svg.node());
      //data binding
      const linkG = svg
        .append("g")
        .attr("class", "link-group")
        .selectAll("g")
        .data(links, (d) => {
          if (typeof d.source === "object") {
            return `${d.source.id}_${d.target.id}`;
          } else {
            return `${d.source}_${d.target}`;
          }
        })
        .join("g");

      const circleG = svg
        .append("g")
        .attr("class", "node-group")
        .selectAll("g")
        .data(nodes, (d) => d.id)
        .join("g");

      /* -------------------------------------------------------------------------- */
      const defaultBaseConfig = this.defaultBaseConfig;
      const defaultForceConfig = this.defaultForceConfig;

      // 力导向系统创建
      const simulation = d3
        .forceSimulation(nodes)
        .force(
          "link",
          d3
            .forceLink(links)
            // 指明对应的是nodes数据的id属性
            .id((d) => d.id)
            // .distance(defaultForceConfig.link.Distance)
            .distance(function (d) {
              const sourceId = d.source.id;
              const targetId = d.target.id;

              const neighbor1 = that.neighborMap.get(sourceId);
              const neighbor2 = that.neighborMap.get(targetId);
              let neighborCount1 = 0;
              let neighborCount2 = 0;
              if (neighbor1) neighborCount1 = neighbor1.length;
              if (neighbor2) neighborCount2 = neighbor2.length;

              let distanceIncrease = 5;
              if (neighborCount1 > 3 && neighborCount2 > 3) {
                distanceIncrease = 20;
              } else if (neighborCount1 > 3 || neighborCount2 > 3) {
                distanceIncrease = 0;
              }

              const circleR1 = d.source.circleR;
              const circleR2 = d.target.circleR;
              const middleR = that.circleR * 1.5;
              if (circleR1 > middleR || circleR2 > middleR) {
                distanceIncrease += 25;
                if (circleR1 > middleR && circleR2 > middleR)
                  distanceIncrease += 25;
              }

              if (that.showIndex.size > 0) {
                const show1 = that.showIndex.has(d.source.id);
                const show2 = that.showIndex.has(d.target.id);
                if (show1 || show2) {
                  if (show1 && show2) {
                    return that.vegaLiteLongLink + distanceIncrease;
                  } else {
                    return that.vegaLiteLink + distanceIncrease;
                  }
                }

                for (const id of that.showIndex.keys()) {
                  const directNeighbor = that.neighborMap.get(id);
                  if (directNeighbor) {
                    for (const neighbor of directNeighbor) {
                      const secondNeighbor = that.neighborMap.get(neighbor);
                      if (
                        (targetId === neighbor &&
                          secondNeighbor.includes(sourceId)) ||
                        (sourceId === neighbor &&
                          secondNeighbor.includes(targetId))
                      ) {
                        return that.circleNeighborLink + distanceIncrease;
                      }
                    }
                  }
                }
              }

              return that.circleLink + distanceIncrease;
            })
            .iterations(defaultForceConfig.link.Iterations)
          // .strength(defaultForceConfig.link.Strength)
        )
        .force(
          "charge",
          d3
            .forceManyBody()
            .strength(function (d) {
              let forceIncrease = 0;
              const circleR = d.circleR;
              const middleR = that.circleR * 1.5;
              if (circleR > middleR) {
                forceIncrease = -100;
              }

              let strength = that.circleStrength;
              if (d.showDetail) {
                strength = that.vegaLiteStrength;
              } else {
                if (that.showIndex.size > 0) {
                  const id = d.id;
                  for (const showId of that.showIndex.keys()) {
                    const directNeighbor = that.neighborMap.get(showId);
                    if (directNeighbor) {
                      for (const neighbor of directNeighbor) {
                        const secondNeighbor = that.neighborMap.get(neighbor);
                        if (secondNeighbor.includes(id)) {
                          return that.circleNeighborStrength + forceIncrease;
                        }
                      }
                    }
                  }
                }
              }

              return strength + forceIncrease;
            })
            .theta(defaultForceConfig.manyBody.Theta)
            .distanceMin(defaultForceConfig.manyBody.DistanceMin)
          // .distanceMax(defaultForceConfig.manyBody.DistanceMax)
        )
        .force(
          "center",
          d3
            .forceCenter(width / 2, height / 2)
            .strength(defaultForceConfig.center.Strength)
        )
        .force(
          "x",

          d3
            .forceX()
            .x(width / 2)
            .strength(defaultForceConfig.x.Strength)
        )
        .force(
          "y",

          d3
            .forceY()
            .y(height / 2)
            .strength(defaultForceConfig.y.Strength)
        )
        .force(
          "collide",
          d3
            .forceCollide((d) => {
              if (d.showDetail) {
                return d.rect.r;
              } else {
                return d.circleR;
              }
            })
            .strength(defaultForceConfig.collide.Strength)
            .iterations(defaultForceConfig.collide.Iterations)
        )
        .alpha(defaultBaseConfig.alpha)
        .alphaMin(defaultBaseConfig.alphaMin)
        .alphaTarget(defaultBaseConfig.alphaTarget)
        .alphaDecay(defaultBaseConfig.alphaDecay)
        .velocityDecay(defaultBaseConfig.velocityDecay)
        .on("tick", ticked);

      this.simulation = simulation;
      this.setDomAttributes(linkG, circleG);
      // 每次迭代回调函数，更新结点位置
      function ticked() {
        that.ticks++;

        // 只通过transform.translate 更新父元素g的位置
        svg
          .select(".node-group")
          .selectChildren("g")
          .style("transform", (d) => {
            return `translate(${d.x}px,${d.y}px)`;
          });

        svg
          .select(".link-group")
          .selectChildren("g")
          .selectChildren(".network-line")
          .attr("x1", function () {
            const d = d3.select(this.parentNode).datum();

            return d.source.x;
          })
          .attr("y1", function () {
            const d = d3.select(this.parentNode).datum();
            return d.source.y;
          })
          .attr("x2", function () {
            const d = d3.select(this.parentNode).datum();
            return d.target.x;
          })
          .attr("y2", function () {
            const d = d3.select(this.parentNode).datum();
            return d.target.y;
          });

        svg
          .select(".link-group")
          .selectChildren("g")
          .selectChildren("text")
          .attr("x", function () {
            const d = d3.select(this.parentNode).datum();
            return (d.source.x + d.target.x) / 2;
          })
          .attr("y", function () {
            const d = d3.select(this.parentNode).datum();
            return (d.source.y + d.target.y) / 2;
          });
      }

      // 设置整体zoom行为,只选择最顶层的2个g即可
      const group = svg.selectChildren("g");

      // 创建缩放函数
      const zoom = d3
        .zoom()
        .scaleExtent([0.3, 8]) // 设置缩放的范围
        // .translateExtent([
        //   [-width * 1.5, -height * 1.5],
        //   [width * 2.5, height * 2.5],
        // ])
        .on("zoom", zoomed)
        .filter((event) => event.target === svg.node());

      this.zoom = zoom;
      // 仅将缩放行为应用到顶层元素
      svg.call(zoom);
      // 定义zoom的回调函数
      function zoomed(event) {
        const transform = event.transform;
        // 更新地理路径组的变换属性
        group.attr("transform", transform);
      }

      // initialize the default data

      this.defaultForceConfig.center.X =
        this.defaultForceConfig.x.X =
        this.defaultForceConfig.radial.X =
          width / 2;

      this.defaultForceConfig.center.Y =
        this.defaultForceConfig.y.Y =
        this.defaultForceConfig.radial.Y =
          height / 2;
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
#svg-container {
  height: 100%;
  width: 100%;
}

.edit-panel {
  position: absolute;
  top: 5%;
  left: 1%;
  z-index: 10;
  height: 90%;
  overflow: auto;
}
.edit-panel:not(.el-menu--collapse) {
  width: 200px;
}

/* scroll bar hide */
.edit-panel {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.edit-panel::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.edit-btn {
  position: fixed;
  bottom: 5%;
  right: 3%;
}

.more-icon {
  fill: #545b77;
  cursor: pointer;
  width: 25px;
  height: 25px;
}

.more-box {
  position: fixed;
  top: 7%;
  right: 1%;
}
.showMorePanelBox {
  position: absolute;
  top: 0;
  right: 0;
}
.ticks-card {
  position: fixed;
  top: 5%;
  right: 2%;
  padding: 1vw;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.active-btn {
  box-shadow: inset 2px 2px 16px #4444442a, inset -2px -2px 16px #4444442a;
}

.btn {
  border-radius: 12px;
}
</style>

<style lang="less" scoped>
.el-slider {
  width: 100%;
}
.bugfix {
  margin-top: 10px;
}
</style>

<!-- Animation -->
<style scoped>
.slide-enter-active {
  transition: all 70ms ease-out;
}

.slide-leave-active {
  transition: all 70ms ease-in;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(200px); /* 初始状态和最终状态 */
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0); /* 平移隐藏 */
}
</style>

<!-- global style -->
<style lang="less">
.circle,
.rect,
.rect-title {
  &.hover-highlight {
    //stroke: #f98585;
    stroke: #aaa;
    stroke-width: 2.5px;
  }
  &.selected-highlight {
    stroke: #71627a;
    stroke-width: 2.5px;
  }
  &.center-highlight {
    stroke: #22b8cf;
    stroke-width: 3px;
  }
}
.insight-icon,
.circle {
  &.hover-highlight {
    transform: scale(1.4);
  }
}

.network-line {
  &.hover-highlight,
  &.selected-highlight,
  &.center-highlight {
    stroke-width: 4px;
  }
}

.el-form-item__label {
  margin-bottom: 2px !important;
}
.el-tabs__content {
  display: flex;
  align-items: center;
}

.pinned {
  will-change: transform;
}

.not-show {
  display: none;
}

.vega-lite-icon {
  fill: #555;
}
.vega-lite-icon:hover,
.vega-lite-icon:active {
  fill: #22b8cf;
}
.icon-pinned {
  fill: #1098ad;
}
.svg {
  width: 100%;
}
.svg-inset {
  stroke: steelblue !important;
  //  stroke-width: 0 !important;
  stroke-opacity: 0.3;
  filter: url(#inset-shadow);
}
</style>
