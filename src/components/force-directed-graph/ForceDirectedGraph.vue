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
        :insightList="filterNode['insight-list']"
        :insightIndex="filterNode['insightIndex']"
        class="showMorePanelBox"
        @insightIndexChange="changeInsightIndex"
        @hideMoreBox="hideMoreBox"
      ></VegaLiteFilter>
    </transition>
    <div id="svg-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="total-svg"
        style="width: 100%; height: 100%"
      >
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
    allStatesData() {
      return this.$store.getters["force/allStatesData"];
    },
    stateLinksMap() {
      return this.$store.getters["force/stateLinksMap"];
    },
  },
  data() {
    return {
      //

      // vega-lite filter
      filterNode: {
        id: null,
        state: null,
        insightIndex: null,
        "insight-list": null,
      },
      // top svg force control
      maxNodeNum: 0,
      svgRScale: null,
      linkDistanceScale: null,
      chargeStrengthScale: null,
      containerWidth: null,
      containerHeight: null,
      // mutiple states
      focusState: "S0",
      selectedNodes: new Map(),
      checkIndexs: new Map(),
      hoverIndexs: new Map(),
      showIndexs: new Map(),
      pinnedIndexs: new Map(),
      simulations: new Map(),
      neighborMaps: new Map(), // (id, gdata)
      nodeIdMaps: new Map(),
      circleRScales: new Map(),
      insightSizeScales: new Map(),

      globalSimulation: null,

      // color
      defaultLinkColor: "#999",
      defaultNodeColor: "#aaa",
      circleHoveredColor: "#e6fcf5",
      nodeTypeColor: null,

      circleRScale: null,
      insightSizeScale: null,

      circleR: 14,
      circleFocusR: 28,
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
      // id
      selectedNode: {
        id: null,
        state: null,
        insightIndex: null,
        "insight-list": null,
        col: null,
        row: null,
      },
      // showMoreIcon
      showMoreIcon: false,
      showMorePanel: false,
      hidePanelMode: false,

      zoom: null,

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
    showIndex: {
      deep: true,
      handler(newVal, oldVal) {
        console.log(1);
        // get node map
        const relatedNodeIdMap = new Map();
        for (let showId of newVal.keys()) {
          const stateMap = this.stateLinksMap.get(showId);

          if (stateMap) {
            for (let [state, nodeIds] of stateMap.entries()) {
              const singleStateIds = relatedNodeIdMap.get(state);

              if (singleStateIds) {
                singleStateIds.push(...nodeIds);
              } else {
                const newNodeIds = [];
                newNodeIds.push(...nodeIds);

                relatedNodeIdMap.set(state, newNodeIds);
              }
            }
          }
        }
        // get node Data
        const filteredAllStateData =
          this.getFilterSubGraphData(relatedNodeIdMap);

        //console.log(filteredAllStateData);
        Array.from(filteredAllStateData.keys()).forEach((state) => {
          this.restart(true, state, filteredAllStateData.get(state));
        });
      },
    },
    allStatesData: {
      // don't watch deep
      handler(newVal) {
        this.maxNodeNum = d3.max(
          Array.from(newVal.values()),
          (d) => d.nodes.length
        );
        this.setTopScale(this.maxNodeNum);

        this.drawGlobalGraph(newVal);
      },
    },
    filterNode(newVal, oldVal) {
      if (newVal.id !== oldVal.id) {
        if (newVal.id) {
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
        }
      }
    },
    // selectedNodes: {
    //   deep: true,
    //   handler(newVal) {
    //
    //   },
    // },
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
        // this.neighborHighligt(
        //   this.selectedNode.id,
        //   this.neighborMap.get(this.selectedNode.id),
        //   "selected",
        //   false,
        //   "S0"
        // );
        // this.selectedNode = {
        //   id: null,
        //   state: null,
        //   insightIndex: null,
        //   "insight-list": null,
        //   col: null,
        //   row: null,
        // };
        //this.neighborMap = this.getNeighbourInfo(newVal);
        const state = this.focusState;
        const simulation = this.simulations.get(state);
        if (simulation) {
          simulation.stop();
          this.restart(true, state, newVal);
        } else {
          // draw force graph
          this.drawGraph(newVal);
        }
      }
    },

    selectedNode(newVal, oldVal) {
      if (newVal.id !== oldVal.id) {
        // get id array of neighbour
        const neighborMap = this.neighborMaps.get(this.focusState);
        const neighborSet = neighborMap.get(newVal.id);
        const oldNeighborSet = neighborMap.get(oldVal.id);
        this.neighborHighligt(
          oldVal.id,
          oldNeighborSet,
          "selected",
          false,
          "S0"
        );
        this.neighborHighligt(newVal.id, neighborSet, "selected", true, "S0");
        this.filterNode = newVal;
        if (newVal.id) {
          this.$store.dispatch("table/convertCheckSelection", {
            mode: "clicked",
            data: new Map().set(newVal.id, {
              col: newVal.col,
              row: newVal.row,
            }),
          });
        } else {
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
    getFilterSubGraphData(relatedNodeIdMap) {
      const filteredNodeData = new Map();
      for (const [state, nodeIds] of relatedNodeIdMap) {
        const nodeData = this.allStatesData.get(state).nodes;

        const newNodeData = Array.from(nodeData.values()).filter((d) =>
          nodeIds.includes(d.id)
        );

        const oldNodeData = filteredNodeData.get(state);
        if (oldNodeData) {
          oldNodeData.push(...newNodeData);
        } else {
          filteredNodeData.set(state, newNodeData);
        }
      }

      const filteredLinkData = new Map();
      for (const [state, nodeIds] of relatedNodeIdMap) {
        const linkData = this.allStatesData.get(state).links;

        filteredLinkData.set(
          state,
          Array.from(linkData.values()).filter(
            (d) => nodeIds.includes(d.source) && nodeIds.includes(d.target)
          )
        );
      }

      const allStatesData = new Map();
      Array.from(this.allStatesData.keys()).forEach((state) => {
        if (state !== this.focusState) {
          const nodes = filteredNodeData.get(state);
          if (nodes) {
            allStatesData.set(state, {
              links: filteredLinkData.get(state),
              nodes: filteredNodeData.get(state),
            });
          } else {
            allStatesData.set(state, {
              links: [],
              nodes: [],
            });
          }
        }
      });
      return allStatesData;
    },

    domUpate(nodes, links, nodeSingleG, linkSingleG, state) {
      const that = this;
      const showIndex = this.showIndexs.get(state);
      const pinnedIndex = this.showIndexs.get(state);
      const checkIndex = this.checkIndexs.get(state);
      const simulation = this.simulations.get(state);

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
            // update all vega-lite graph
            update.each(function (d) {
              const g = d3.select(this);
              const id = d.id;
              const view = showIndex.get(id);
              if (view) {
                view.finalize();
                g.selectAll(".vega-lite-graph").remove();
                g.datum().view = null;
                g.datum().img = null;
                that.drawVegaLite(
                  g,
                  pinnedIndex.get(id) ? "svg" : "img",
                  state
                );
              }
            });

            // update circle attr
            update
              .select(".circle")
              .attr("r", function () {
                return d3.select(this.parentNode).datum().circleR;
              })
              .attr("fill", function () {
                const gData = d3.select(this.parentNode).datum();
                return that.nodeTypeColor(
                  gData["insight-list"][gData.insightIndex]["insight-category"]
                );
              });
            // update icon
            update
              .select(".insight-icon")
              .attr("href", function () {
                return that.setInsightIcon(this);
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
                if (showIndex.has(id)) {
                  showIndex.delete(id);
                }
                if (pinnedIndex.has(id)) {
                  pinnedIndex.delete(id);
                  data.fx = null;
                  data.fy = null;
                }
                if (checkIndex.has(id)) {
                  checkIndex.delete(id);
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

      this.setDomAttributes(linkG, nodeG, state);
      // rebind data of simulation
      simulation.nodes(nodes);
      simulation.force("link").links(links);

      // reset alpha to reheat
      simulation.alphaDecay(this.defaultBaseConfig.alphaDecay);
      simulation.alpha(this.defaultBaseConfig.alpha);

      simulation.restart();
    },
    setTopScale(maxNodeNum) {
      const svgContainer = d3.select("#svg-container");
      this.containerWidth = parseInt(svgContainer.style("width"), 10);
      this.containerHeight = parseInt(svgContainer.style("height"), 10);
      const maxR =
        (this.containerWidth > this.containerHeight
          ? this.containerHeight
          : this.containerWidth) / 2.5;

      this.svgRScale = d3.scaleLinear([0, maxNodeNum], [75, maxR]);
      this.linkDistanceScale = d3.scaleLinear([0, maxNodeNum], [50, maxR * 2]);
      this.chargeStrengthScale = d3.scaleLinear(
        [0, maxNodeNum],
        [-2000, -5000]
      );
    },
    hideMoreBox() {
      this.hidePanelMode = true;
      this.showMorePanel = false;
      this.showMoreIcon = true;
    },
    setInsightIcon(that) {
      const gData = d3.select(that.parentNode).datum();
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
    },
    changeInsightIndex(selectedIndex) {
      const that = this;
      const id = this.filterNode.id;
      const state = this.filterNode.state;
      const showIndex = this.showIndexs.get(state);
      const pinnedIndex = this.pinnedIndexs.get(state);

      // change index record of filterNode
      this.filterNode.insightIndex = selectedIndex;

      const nodeData = this.nodeIdMaps.get(state).get(id);
      // change data record in force graph
      nodeData.insightIndex = selectedIndex;

      const newType = nodeData["insight-list"][selectedIndex]["insight-type"];
      const g = d3
        .select("#svg-container")
        .select("#total-svg")
        .selectChild("g.node-group")
        .select(`.${state}-state`)
        .select(".node-group")
        .selectChildren("g")
        .filter((d) => d.id === id);

      //change insight icon
      g.select(".insight-icon").attr("href", function () {
        return that.setInsightIcon(this);
      });
      // change vega-lite graph
      showIndex.get(id).finalize();

      g.select(".vega-lite-graph").remove();
      g.datum().view = null;
      g.datum().img = null;
      this.drawVegaLite(g, pinnedIndex.get(id) ? "svg" : "img", state);
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
    setDomAttributes(linkG, circleG, state) {
      const that = this;

      const selectedNodes = this.selectedNodes;
      //  state === this.focusState ? null : this.selectedNodes;
      const simulation = this.simulations.get(state);
      const hoverIndex = this.hoverIndexs.get(state);
      const checkIndex = this.checkIndexs.get(state);
      const pinnedIndex = this.pinnedIndexs.get(state);
      const neighborMap = this.neighborMaps.get(state);

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

      const nodeTypeColor = d3.scaleOrdinal(
        ["point", "shape", "compound"],

        ["#C69DE9", "#F7A69F", "#53C4B6"]
      );
      this.nodeTypeColor = nodeTypeColor;

      // 画links
      const linkGroup = linkG
        .append("line")
        .attr("class", "link")
        .attr("stroke", "#555")
        .attr("stroke-opacity", 0.6)
        .attr("class", "network-line")
        .attr("stroke-width", 1);

      const linkContainerGroup = linkG;

      //画nodes
      const circleGroup = circleG
        .append("circle")
        .attr("class", "circle normal-circle")
        .classed("not-show", function () {
          const gData = d3.select(this.parentNode).datum();
          return gData.showDetail;
        })
        .attr("r", function () {
          return d3.select(this.parentNode).datum().circleR;
        })
        .attr("fill", function () {
          const gData = d3.select(this.parentNode).datum();
          return nodeTypeColor(
            gData["insight-list"][gData.insightIndex]["insight-category"]
          );
        })
        .style("transition", "transform 0.2s")
        .on("mouseover", function (event) {
          circleMouseover(event, this, hoverIndex);
        })
        .on("mouseout", function (event) {
          circleMouseout(event, this, hoverIndex);
        })
        .on("click", function () {
          circleClick(that, this, simulation);
        });

      const containerGroup = circleG;

      const iconGroup = containerGroup
        .append("use")
        .attr("href", function () {
          return that.setInsightIcon(this);
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
        .on("mouseover", function () {
          rectMouseover(that, this, neighborMap, hoverIndex);
        })
        .on("mouseout", function () {
          rectMouseout(that, this, neighborMap, hoverIndex);
        })
        .on("click", function () {
          rectClick(that, this);

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

      const svg = d3
        .select("#svg-container")
        .select("#total-svg")
        .selectChild("g.node-group")
        .select(`.${state}-state`);
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

      function circleMouseover(event, that, hoverIndex) {
        const d = d3.select(that.parentNode).datum();
        hoverIndex.clear();
        hoverIndex.set(d.id, {
          col: d.col,
          row: d.row,
        });
        if (!d.showDetail) {
          d3.select(that)
            .attr("fill", function () {
              return d3.color(d3.select(that).attr("fill")).brighter(0.4);
            })
            .style("cursor", "pointer")
            .attr("transform", "scale(2)");

          d3.select(that.parentNode)
            .select(".insight-icon")
            .attr("transform", "scale(2)");
        }
      }
      function circleMouseout(event, that, hoverIndex) {
        const d = d3.select(that.parentNode).datum();
        hoverIndex.clear();
        if (!d.showDetail) {
          d3.select(that)
            .attr("transform", "scale(1)")
            .attr("fill", function () {
              const gData = d3.select(that.parentNode).datum();

              return nodeTypeColor(
                gData["insight-list"][gData.insightIndex]["insight-category"]
              );
            });
        }
        d3.select(that.parentNode)
          .select(".insight-icon")
          .attr("transform", "scale(1)");
      }

      function circleClick(self, that, simulation) {
        // ! 注意selectedNode,只能通过self访问，watch才能及时响应
        // 获取选择circle对应的container - g元素
        const g = d3.select(that.parentNode);

        if (state === self.focusState) {
          self.selectedNode = {
            id: g.datum().id,
            state: state,
            insightIndex: g.datum().insightIndex,
            "insight-list": g.datum()["insight-list"],
            col: g.datum().col,
            row: g.datum().row,
          };
          selectedNodes.set(state, self.selectedNode);
        } else {
          selectedNodes.set(state, {
            id: g.datum().id,
            state: state,
            insightIndex: g.datum().insightIndex,
            "insight-list": g.datum()["insight-list"],
            col: g.datum().col,
            row: g.datum().row,
          });
          self.filterNode = {
            id: g.datum().id,
            state: state,
            insightIndex: g.datum().insightIndex,
            "insight-list": g.datum()["insight-list"],
          };
        }

        if (!g.datum().showDetail) {
          g.datum().showDetail = true;

          const circle = d3.select(that);
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
              if (state === self.focusState) {
                self.selectedNode = {
                  id: null,
                  state: null,
                  insightIndex: null,
                  "insight-list": null,
                  col: null,
                  row: null,
                };
                selectedNodes.set(state, self.selectedNode);
              } else {
                selectedNodes.set(state, {
                  id: null,
                  state: null,
                  insightIndex: null,
                  "insight-list": null,
                  col: null,
                  row: null,
                });
                self.filterNode = {
                  id: null,
                  state: null,
                  insightIndex: null,
                  "insight-list": null,
                };
              }

              g.selectChildren("rect").classed("svg-inset", false);
              g.selectChildren(".vega-lite-icon").remove();
              self.deleteVegaLite(g, state);
              const collideForce = simulation.force("collide");
              const bodyForce = simulation.force("charge");
              const linkForce = simulation.force("link");
              if (collideForce) collideForce.initialize(simulation.nodes());
              if (linkForce) linkForce.initialize(simulation.nodes());
              if (bodyForce) {
                simulation.force("charge", null);
                simulation.force("charge", bodyForce);
              }
              rect.classed("not-show", true);
              rectTitle.classed("not-show", true);
              rectText.classed("not-show", true);
              circle
                .classed("not-show", false)
                .attr("transform", "scale(1)")
                .attr("fill", function () {
                  const gData = d3.select(that.parentNode).datum();

                  return nodeTypeColor(
                    gData["insight-list"][gData.insightIndex][
                      "insight-category"
                    ]
                  );
                });
              insightIcon.classed("not-show", false);
              simulation.alphaDecay(self.restartAlphaDecay);
              simulation.alpha(self.defaultBaseConfig.alpha);
              simulation.restart();
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
            .on("click", function () {
              toggleCheck(this, checkIndex);
            });

          self.drawVegaLite(g, "img", state);
        }
      }
      function rectMouseover(self, that, neighborMap, hoverIndex) {
        //颜色变，表示被选中
        const rect = d3.select(that);
        const parentNode = d3.select(that.parentNode);
        const id = parentNode.datum().id;
        const neighbor = neighborMap.get(id);
        self.neighborHighligt(id, neighbor, "hover", true, state);
        rect.classed("center-highlight", true);
        parentNode.select(".rect-title").classed("center-highlight", true);
        hoverIndex.clear();
        hoverIndex.set(id, {
          col: parentNode.datum().col,
          row: parentNode.datum().row,
        });
      }
      function rectMouseout(self, that, neighborMap, hoverIndex) {
        const rect = d3.select(that);
        const parentNode = d3.select(that.parentNode);
        const id = parentNode.datum().id;
        const neighbor = neighborMap.get(id);
        self.neighborHighligt(id, neighbor, "hover", false, state);
        hoverIndex.clear();
        if (id !== selectedNodes.get(state).id) {
          rect.classed("center-highlight", false);
          parentNode.select(".rect-title").classed("center-highlight", false);
        }
      }
      function rectClick(self, that) {
        // ! 注意:selectedNode
        // 获取对应的container - g元素
        const g = d3.select(that.parentNode);
        if (state === self.focusState) {
          self.selectedNode = {
            id: g.datum().id,
            state: state,
            insightIndex: g.datum().insightIndex,
            "insight-list": g.datum()["insight-list"],
            col: g.datum().col,
            row: g.datum().row,
          };
          selectedNodes.set(state, self.selectedNode);
        } else {
          selectedNodes.set(state, {
            id: g.datum().id,
            state: state,
            insightIndex: g.datum().insightIndex,
            "insight-list": g.datum()["insight-list"],
            row: g.datum().row,
            col: g.datum().col,
          });
          self.filterNode = {
            id: g.datum().id,
            state: state,
            insightIndex: g.datum().insightIndex,
            "insight-list": g.datum()["insight-list"],
          };
        }
      }
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
      function togglePin() {
        const g = d3.select(this.parentNode);
        const pinned = !g.datum().pinned;
        g.datum().pinned = pinned;
        g.classed("pinned", true);
        if (pinned) {
          g.datum().fx = g.datum().x;
          g.datum().fy = g.datum().y;
          g.select(".pin").classed("icon-pinned", true);

          that.drawVegaLite(g, "svg", state);
          pinnedIndex.set(g.datum().id, g);
        } else {
          g.classed("pinned", false);
          g.select(".pin").classed("icon-pinned", false);
          g.datum().fx = null;
          g.datum().fy = null;
          that.drawVegaLite(g, "img", state);
          pinnedIndex.delete(g.datum().id);
        }
      }

      function toggleCheck(that, checkIndex) {
        const g = d3.select(that.parentNode);
        const checked = !g.datum().checked;
        g.datum().checked = checked;
        if (checked) {
          checkIndex.set(g.datum().id, {
            row: g.datum().row,
            col: g.datum().col,
          });

          g.select(".check").classed("icon-pinned", true);
          g.selectChildren("rect").classed("svg-inset", true);
        } else {
          checkIndex.delete(g.datum().id);
          g.select(".check").classed("icon-pinned", false);
          g.selectChildren("rect").classed("svg-inset", false);
        }
      }
    },

    neighborHighligt(id, neighbor, type, enable, state) {
      const className = type + "-highlight";
      const nodeGroup = d3
        .select("#svg-container")
        .select("#total-svg")
        .selectChild("g.node-group")
        .select(`.${state}-state`)
        .select(".node-group")
        .selectChildren("g");

      const linkGroup = d3
        .select("#svg-container")
        .select("#total-svg")
        .selectChild("g.node-group")
        .select(`.${state}-state`)
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
      const neighborMap = new Map();
      const links = data.links;
      links.forEach((link) => {
        const sourceId = link.source;
        const targetId = link.target;

        if (neighborMap.has(sourceId)) {
          neighborMap.get(sourceId).push(targetId);
        } else {
          neighborMap.set(sourceId, [targetId]);
        }
        if (neighborMap.has(targetId)) {
          neighborMap.get(targetId).push(sourceId);
        } else {
          neighborMap.set(targetId, [sourceId]);
        }
      });
      return neighborMap;
    },

    /* -------------------------------------------------------------------------- */
    // base config
    /* -------------------------------------------------------------------------- */

    simStop() {
      this.simulations.get(this.focusState).stop();
    },

    // rebind data of dom element(nodes and links) and sim system
    restart(hasNewVal, state, newVal) {
      const that = this;
      const nodeIdMap = this.nodeIdMaps.get(state);
      const simulation = this.simulations.get(state);

      /* construct "new" links and nodes  -------------------------------------------------------------------------- */

      const data = newVal === null ? this.selectedData : newVal;

      const links = data.links.map((d) => ({ ...d }));
      let nodes = null;
      if (!hasNewVal) {
        // 获取之前的数据
        const preNodes = simulation.nodes();
        // simple restart, 用旧数据进行更新
        nodes = preNodes.map(function (d) {
          delete d.x;
          delete d.y;
          delete d.vx;
          delete d.vy;
          return d;
        });
      } else {
        // change neighbour highlight and neighbor info
        const selectedNodes = this.selectedNodes;
        const neighborMaps = this.neighborMaps;

        const selectedId = selectedNodes.get(state).id;

        this.neighborHighligt(
          selectedId,
          neighborMaps.get(state).get(selectedId),
          "selected",
          false,
          "S0"
        );
        if (state === this.focusState) {
          this.selectedNode = {
            id: null,
            state: null,
            insightIndex: null,
            "insight-list": null,
            col: null,
            row: null,
          };
          selectedNodes.set(state, this.selectedNode);
        }
        neighborMaps.set(state, this.getNeighbourInfo(newVal));

        // filter of insight
        const statisticNodeIdMap =
          this.$store.getters["force/statisticNodeIdMap"];
        const scoreSelectionMap =
          this.$store.getters["force/scoreSelectionMap"];
        // newly filtered value
        nodes = data.nodes.map((d) => {
          const id = d.id;
          const oldNode = nodeIdMap.get(d.id);

          if (state === this.focusState) {
            // filter insight-list
            const originInsightList =
              statisticNodeIdMap.get(id)["insight-list"];
            const oldInsightIndexList = oldNode.insightIndexList;
            const oldInsightIndex = oldInsightIndexList[oldNode.insightIndex];
            const newInsightIndexList = [];
            // filter insight-list data
            oldNode["insight-list"] = originInsightList.filter(
              (insight, index) => {
                const type = insight["insight-type"];
                const score = insight["insight-score"];
                const selection = scoreSelectionMap.get(type).selection;
                const selected = scoreSelectionMap.get(type).selected;
                let result = false;
                if (selected) {
                  if (
                    selection === "all" ||
                    (score >= selection[0] && score < selection[1])
                  ) {
                    result = true;
                    newInsightIndexList.push(index);
                  }
                }
                return result;
              }
            );
            const newInsightIndex = newInsightIndexList.findIndex(
              (e) => e === oldInsightIndex
            );
            // reset insight index
            oldNode.insightIndex = newInsightIndex >= 0 ? newInsightIndex : 0;
            oldNode.insightIndexList = newInsightIndexList;
          }
          return oldNode;
        });
      }

      const circleRScale = this.circleRScales.get(state);
      const insightSizeScale = this.insightSizeScales.get(state);
      // recalculate the size of circle and icon
      nodes.forEach((d) => {
        const insightNum = d["insight-list"].length;
        d.circleR = circleRScale(insightNum);
        d.iconSize = insightSizeScale(insightNum);
      });

      const nodeSingleG = d3
        .select("#svg-container")
        .select("#total-svg")
        .selectChild("g.node-group")
        .select(`.${state}-state`)
        .select("g.node-group");
      const linkSingleG = d3
        .select("#svg-container")
        .select("#total-svg")
        .selectChild("g.node-group")
        .select(`.${state}-state`)
        .select("g.link-group");

      this.domUpate(nodes, links, nodeSingleG, linkSingleG, state);
    },

    /* -------------------------------------------------------------------------- */
    // vegaLite relative
    /* -------------------------------------------------------------------------- */
    drawVegaLite(g, mode, state) {
      const that = this;
      const simulation = this.simulations.get(state);
      const showIndex = this.showIndexs.get(state);
      const pinnedIndex = this.pinnedIndexs.get(state);

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
          showIndex.set(gData.id, view);

          const linkForce = simulation.force("link");
          if (linkForce) linkForce.initialize(simulation.nodes());
          const bodyForce = simulation.force("charge");
          if (bodyForce) {
            simulation.force("charge", null);
            simulation.force("charge", bodyForce);
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
          const collideForce = simulation.force("collide");
          if (collideForce) collideForce.initialize(simulation.nodes());

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
              pinnedIndex.set(gData.id, g);
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
      simulation.alphaDecay(that.restartAlphaDecay);
      simulation.alpha(that.defaultBaseConfig.alpha);
      simulation.restart();
    },
    deleteVegaLite(g, state) {
      const showIndex = this.showIndexs.get(state);
      const pinnedIndex = this.pinnedIndexs.get(state);
      const checkIndex = this.checkIndexs.get(state);
      const id = g.datum().id;
      showIndex.get(id).finalize();
      g.selectAll(".vega-lite-graph").remove();
      g.datum().view = null;
      g.datum().img = null;
      checkIndex.delete(id);
      pinnedIndex.delete(id);
      showIndex.delete(id);
    },
    /* -------------------------------------------------------------------------- */
    // other
    /* -------------------------------------------------------------------------- */

    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

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
    // initialization of focus graph, create DOM elements and sim system
    drawGraph(newVal) {
      const that = this;

      const neighborMap = this.getNeighbourInfo(newVal);

      this.showIndexs.set(this.focusState, this.showIndex);
      this.hoverIndexs.set(this.focusState, this.hoverIndex);
      this.checkIndexs.set(this.focusState, this.checkIndex);
      this.selectedNodes.set(this.focusState, this.selectedNode);
      this.pinnedIndexs.set(this.focusState, this.pinnedIndex);
      this.neighborMaps.set(this.focusState, neighborMap);

      const showIndex = this.showIndex;
      const hoverIndex = this.hoverIndex;
      const checkIndex = this.checkIndex;
      const pinnedIndex = this.pinnedIndex;

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

      this.circleRScales.set(this.focusState, circleRScale);
      this.insightSizeScales.set(this.focusState, insightSizeScale);

      // 加入更多属性，控制vega-lite图的显示
      const nodes = data.nodes.map((d) => {
        const insightNum = d["insight-list"].length;
        return {
          ...d,
          insightIndex: 0,
          insightIndexList: [...Array(insightNum).keys()],
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

      this.nodeIdMaps.set(this.focusState, nodeIdMap);
      // 选择svg container
      const svgContainer = d3.select("#svg-container");

      // // 清除之前的
      // svgContainer.selectAll("*").remove();

      // 获取container的宽和高
      const width = this.containerWidth;
      const height = this.containerHeight;

      // 先把svg图和nodes+links 元素画出来
      const boundaryR = this.svgRScale(nodes.length);

      const boundary = [
        -boundaryR * 1.5,
        -boundaryR * 1.5,
        boundaryR * 5,
        boundaryR * 5,
      ];
      // 选择top node g
      const gTop = svgContainer
        .select("#total-svg")
        .selectChild("g.node-group");

      const originalX = width * 0.5 - boundaryR;
      const originalY = height * 0.5 - boundaryR;
      const originalWidth = boundaryR * 2;
      const originalHeight = originalWidth;
      const svg = gTop
        .select("svg.S0-state")
        .attr("width", originalWidth)
        .attr("height", originalWidth)
        .attr("viewBox", boundary);

      svg.datum().width = originalWidth;
      svg.datum().height = originalHeight;
      svg.datum().pinned = true;
      svg.datum().fx = width * 0.5;
      svg.datum().fy = height * 0.5;

      const backgroundShape = svg
        .append("rect")
        .attr("class", "background-shape")
        .attr("x", boundary[0])
        .attr("y", boundary[1])
        .attr("width", boundary[2])
        .attr("height", boundary[3])
        // .attr("height", boundary[3])
        .attr("stroke", "#555")
        .attr("stroke-width", 10)
        .attr("fill", "#fff");
      // .style("background-color", "#000");

      // this.createInsetFilter(svg.node());
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

      const simulation = this.createForceSimulation(
        nodes,
        links,
        ticked,
        neighborMap,
        showIndex,
        boundaryR
      );
      this.simulations.set(this.focusState, simulation);

      this.setDomAttributes(linkG, circleG, this.focusState);
      // 每次迭代回调函数，更新结点位置
      function ticked() {
        // 只通过transform.translate 更新父元素g的位置
        svg
          .select(".node-group")
          .selectChildren("g")
          .style("transform", (d) => {
            // 计算节点到圆心的距离
            if (d.x < boundary[0]) {
              d.x = boundary[0];
            } else if (d.x > boundary[2] + boundary[0]) {
              d.x = boundary[2] + boundary[0];
            }

            if (d.y < boundary[1]) {
              d.y = boundary[1];
            } else if (d.y > boundary[3] + boundary[1]) {
              d.y = boundary[3] + boundary[1];
            }

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

        // svg
        //   .select(".link-group")
        //   .selectChildren("g")
        //   .selectChildren("text")
        //   .attr("x", function () {
        //     const d = d3.select(this.parentNode).datum();
        //     return (d.source.x + d.target.x) / 2;
        //   })
        //   .attr("y", function () {
        //     const d = d3.select(this.parentNode).datum();
        //     return (d.source.y + d.target.y) / 2;
        //   });
      }

      // 设置整体zoom行为,只选择最顶层的2个g即可
      const group = svg.selectChildren("g");

      // 创建缩放函数
      const zoom = d3
        .zoom()
        .scaleExtent([0.3, 8]) // 设置缩放的范围

        .on("zoom", zoomed)
        .filter((event) => {
          return event.shiftKey && event.target === backgroundShape.node();
        });

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
          boundaryR;

      this.defaultForceConfig.center.Y =
        this.defaultForceConfig.y.Y =
        this.defaultForceConfig.radial.Y =
          boundaryR;
    },
    drawSubGraph(graphInfo) {
      const that = this;
      const state = graphInfo.state;
      const data = graphInfo.data;

      // 创建自己的 circle scale 和 insight scale函数
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
      this.circleRScales.set(state, circleRScale);
      this.insightSizeScales.set(state, insightSizeScale);
      // 创建内部nodes和links数据
      let links = data.links.map((d) => ({ ...d }));
      let nodes = data.nodes.map((d) => {
        const insightNum = d["insight-list"].length;
        return {
          ...d,
          insightIndex: 0,
          insightIndexList: [...Array(insightNum).keys()],
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
      // 创建 id map，便于查询数据
      const nodeIdMap = new Map();
      nodes.forEach((node) => {
        nodeIdMap.set(node.id, node);
      });
      this.nodeIdMaps.set(state, nodeIdMap);

      const showIndex = new Map();
      const hoverIndex = new Map();
      const checkIndex = new Map();
      const pinnedIndex = new Map();
      const selectedNode = {
        id: null,
        state: null,
        insightIndex: null,
        "insight-list": null,
        col: null,
        row: null,
      };
      const neighborMap = this.getNeighbourInfo(data);

      this.showIndexs.set(state, showIndex);
      this.hoverIndexs.set(state, hoverIndex);
      this.checkIndexs.set(state, checkIndex);
      this.selectedNodes.set(state, selectedNode);
      this.pinnedIndexs.set(state, pinnedIndex);
      this.neighborMaps.set(state, neighborMap);

      // 选择svg container
      const svgContainer = d3.select("#svg-container");
      const gTop = svgContainer
        .select("#total-svg")
        .selectChild("g.node-group");
      // 获取container的宽和高
      const width = this.containerWidth;
      const height = this.containerHeight;

      // 先把svg图和nodes+links 元素画出来
      const boundaryR = this.svgRScale(nodes.length);
      const boundary = [
        -boundaryR * 1.5,
        -boundaryR * 1.5,
        boundaryR * 5,
        boundaryR * 5,
      ];
      const originalWidth = boundaryR * 2;
      const originalHeight = originalWidth;
      const svg = gTop
        .select(`svg.${state}-state`)
        .attr("width", originalWidth)
        .attr("height", originalHeight)
        .attr("viewBox", boundary);

      svg.datum().width = originalWidth;
      svg.datum().height = originalHeight;
      svg.datum().pinned = false;

      const backgroundShape = svg
        .append("rect")
        .attr("class", "background-shape")
        .attr("x", boundary[0])
        .attr("y", boundary[1])
        .attr("width", boundary[2])
        .attr("height", boundary[3])
        .attr("stroke", "#555")
        .attr("fill", "#fff");

      /* -------------------------------------------------------------------------- */
      // clear nodes and links data
      nodes = [];
      links = [];

      //local force data binding
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

      //力导向系统创建;
      const simulation = this.createForceSimulation(
        nodes,
        links,
        ticked,
        neighborMap,
        showIndex,
        boundaryR
      );
      this.simulations.set(state, simulation);

      this.setDomAttributes(linkG, circleG, state);

      function ticked() {
        // 只通过transform.translate 更新父元素g的位置
        svg
          .select(".node-group")
          .selectChildren("g")
          .style("transform", (d) => {
            // 计算节点到圆心的距离
            if (d.x < boundary[0]) {
              d.x = boundary[0];
            } else if (d.x > boundary[2] + boundary[0]) {
              d.x = boundary[2] + boundary[0];
            }

            if (d.y < boundary[1]) {
              d.y = boundary[1];
            } else if (d.y > boundary[3] + boundary[1]) {
              d.y = boundary[3] + boundary[1];
            }

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
      }
    },
    drawGlobalGraph(newVal) {
      const that = this;

      // get binding data for top force simulation
      const svgData = Array.from(newVal.entries()).map((stateInfo) => ({
        id: stateInfo[0],
        nodeNum: stateInfo[1].nodes.length,
      }));

      const svgLinks = Array.from(newVal.keys()).map((state) => ({
        source: this.focusState,
        target: state,
      }));
      svgLinks.shift();

      // 选择svg container
      const svgContainer = d3.select("#svg-container");

      // 获取container的宽和高
      const width = parseInt(svgContainer.style("width"), 10);
      const height = parseInt(svgContainer.style("height"), 10);
      // 设置top svg属性
      const svgTop = svgContainer
        .select("#total-svg")
        .attr("viewBox", [0, 0, width, height]);
      this.createInsetFilter(svgTop.node());
      // 添加top g，用于global zoom
      const linkGTop = svgTop.append("g").attr("class", "link-group");
      const nodeGTop = svgTop.append("g").attr("class", "node-group");

      const groupsTop = svgTop.selectChildren("g");

      // 清除之前的子svg
      groupsTop.selectAll("*").remove();
      // 绑定顶层svg与links数据到g中

      const svgGroups = nodeGTop
        .selectChildren("svg")
        .data(svgData)
        .join("svg")
        .attr("class", (d) => `${d.id}-state`);

      const linkGroups = linkGTop
        .selectAll("line")
        .data(svgLinks, (d) => {
          if (typeof d.source === "object") {
            return `${d.source.id}_${d.target.id}`;
          } else {
            return `${d.source}_${d.target}`;
          }
        })
        .join("line")
        .attr("stroke", "none");

      // 创建子svg图
      for (let [state, data] of newVal) {
        if (state === this.focusState) {
          // initilize the focus data
          const focusNodes = data.nodes;
          const focusLinks = data.links;

          const statisticNodeIdMap = new Map();

          focusNodes.forEach((d) => {
            statisticNodeIdMap.set(d.id, d);
          });

          this.$store.commit("force/setStatisticNodeIdMap", statisticNodeIdMap);

          this.$store.commit("force/setTotalData", {
            nodes: focusNodes,
            links: focusLinks,
          });
          this.$store.dispatch("force/groupByLinkType", focusLinks);
          this.$store.dispatch("force/groupByNodeType", {
            data: focusNodes,
            firstFlag: true,
          });
          // this.drawGraph({
          //   nodes: focusNodes,
          //   links: focusLinks,
          // });
        } else {
          const subNodes = data.nodes;
          const subLinks = data.links;

          this.drawSubGraph({
            state: state,
            data: {
              nodes: subNodes,
              links: subLinks,
            },
          });
        }
      }

      // 创建全局zoom
      const zoomTop = d3
        .zoom()
        .scaleExtent([0.3, 8]) // 设置缩放的范围
        .on("zoom", zoomedTop)
        .filter((event) => {
          return (
            event.target === svgTop.node() ||
            nodeGTop
              .selectChildren("svg")
              .select(".background-shape")
              .nodes()
              .includes(event.target)
          );
        });
      svgTop.call(zoomTop);

      function zoomedTop(event) {
        const transform = event.transform;
        // 更新地理路径组的变换属性
        groupsTop.attr("transform", transform);
      }
      // 创建顶层svg drag
      const dragDefine = d3
        .drag()
        .container(function () {
          // 选择顶层nodeGy元素作为容器，影响 event.x和event.y
          return nodeGTop.node();
        })
        .filter((event) => !event.shiftKey)
        .on("start", dragstartedSvg)
        .on("drag", draggedSvg)
        .on("end", dragendedSvg);

      svgGroups.call(dragDefine);

      function dragstartedSvg(event) {
        if (!event.active)
          that.globalSimulation
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
      function draggedSvg(event) {
        // 更新节点位置
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      // 拖动结束，降温
      function dragendedSvg(event) {
        if (!event.active)
          that.globalSimulation.alphaTarget(that.defaultBaseConfig.alphaTarget);

        if (event.subject.pinned) {
          event.subject.fx = event.subject.x;
          event.subject.fy = event.subject.y;
        } else {
          event.subject.fx = null;
          event.subject.fy = null;
        }
      }

      // 创建全局力道图布局
      const defaultBaseConfig = this.defaultBaseConfig;
      const defaultForceConfig = this.defaultForceConfig;
      const globalSimulation = d3
        .forceSimulation(svgData)
        .force(
          "link",
          d3
            .forceLink(svgLinks)
            .id((d) => d.id)
            //.distance(width / 3)
            .distance((d) => {
              const nodeNumS = d.source.nodeNum;
              const nodeNumT = d.target.nodeNum;

              return (
                this.linkDistanceScale(nodeNumS) +
                this.linkDistanceScale(nodeNumT)
              );
            })
        )
        .force(
          "charge",
          d3
            .forceManyBody()
            .strength((d) => this.chargeStrengthScale(d.nodeNum))
            .theta(defaultForceConfig.manyBody.Theta)
            .distanceMin(defaultForceConfig.manyBody.DistanceMin)
        )
        // .force(
        //   "center",
        //   d3
        //     .forceCenter(width / 2, height / 2)
        //     .strength(defaultForceConfig.center.Strength)
        // )
        // .force(
        //   "x",
        //   d3
        //     .forceX()
        //     .x(width / 2)
        //     .strength(defaultForceConfig.x.Strength)
        // )
        // .force(
        //   "y",
        //   d3
        //     .forceY()
        //     .y(height / 2)
        //     .strength(defaultForceConfig.y.Strength)
        // )
        .alpha(defaultBaseConfig.alpha)
        .alphaMin(defaultBaseConfig.alphaMin)
        .alphaTarget(defaultBaseConfig.alphaTarget)
        .alphaDecay(defaultBaseConfig.alphaDecay)
        .velocityDecay(defaultBaseConfig.velocityDecay)
        .on("tick", globalTicked);
      this.globalSimulation = globalSimulation;

      function globalTicked() {
        // 移动svg时，由于左上角是x，y坐标，要记得减去高和宽的偏移
        svgGroups.attr("x", (d) => d.x - d.width / 2);
        svgGroups.attr("y", (d) => d.y - d.height / 2);
        linkGroups
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);
      }
    },
    // force function
    createForceSimulation(
      nodes,
      links,
      ticked,
      neighborMap,
      showIndex,
      boundaryR
    ) {
      const defaultBaseConfig = this.defaultBaseConfig;
      const defaultForceConfig = this.defaultForceConfig;
      const that = this;
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

              const neighbor1 = neighborMap.get(sourceId);
              const neighbor2 = neighborMap.get(targetId);
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

              if (showIndex.size > 0) {
                const show1 = showIndex.has(d.source.id);
                const show2 = showIndex.has(d.target.id);
                if (show1 || show2) {
                  if (show1 && show2) {
                    return that.vegaLiteLongLink + distanceIncrease;
                  } else {
                    return that.vegaLiteLink + distanceIncrease;
                  }
                }

                for (const id of showIndex.keys()) {
                  const directNeighbor = neighborMap.get(id);
                  if (directNeighbor) {
                    for (const neighbor of directNeighbor) {
                      const secondNeighbor = neighborMap.get(neighbor);
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
                if (showIndex.size > 0) {
                  const id = d.id;
                  for (const showId of showIndex.keys()) {
                    const directNeighbor = neighborMap.get(showId);
                    if (directNeighbor) {
                      for (const neighbor of directNeighbor) {
                        const secondNeighbor = neighborMap.get(neighbor);
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
            .forceCenter(boundaryR, boundaryR)
            .strength(defaultForceConfig.center.Strength)
        )
        .force(
          "x",

          d3.forceX().x(boundaryR).strength(defaultForceConfig.x.Strength)
        )
        .force(
          "y",

          d3.forceY().y(boundaryR).strength(defaultForceConfig.y.Strength)
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

      return simulation;
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
.normal-circle {
  stroke: none;
}

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
