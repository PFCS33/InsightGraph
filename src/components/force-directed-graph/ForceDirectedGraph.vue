<template>
  <div class="container" ref="1">
    <!-- <transition name="slide"> -->
    <el-menu default-active="1" class="edit-panel" :collapse="!editMode">
      <el-sub-menu index="1">
        <template #title>
          <el-icon><operation /></el-icon>
          <span>Base Config</span>
        </template>
        <el-form
          label-position="top"
          label-width="100px"
          style="max-width: 460px"
          @submit.prevent
          size="small"
          class="form"
          novalidate
        >
          <el-form-item class="form-item-control">
            <div class="form-btn-control">
              <BaseButton @click="simRestart" class="config-btn btn"
                >Default</BaseButton
              >
              <BaseButton @click="simStop" class="config-btn btn"
                >Stop</BaseButton
              >
            </div>
          </el-form-item>
          <el-form-item label="Alpha" class="form-item-control">
            <el-input
              type="number"
              id="alpha"
              v-model="alpha"
              step="0.01"
              min="0"
              max="1"
              @blur="handleBaseBlur('alpha')"
              class="input-control"
            />
          </el-form-item>
          <el-form-item label="AlphaMin" class="form-item-control">
            <el-input
              type="number"
              id="alphaMin"
              v-model="alphaMin"
              step="0.001"
              min="0"
              max="1"
              @blur="handleBaseBlur('alphaMin')"
              class="input-control"
            />
          </el-form-item>
          <el-form-item label="AlphaDecay" class="form-item-control">
            <el-input
              type="number"
              id="alphaDecay"
              v-model="alphaDecay"
              step="0.001"
              min="0"
              max="1"
              @blur="handleBaseBlur('alphaDecay')"
              class="input-control"
            />
          </el-form-item>
          <el-form-item label="AlphaTarget" class="form-item-control">
            <el-input
              type="number"
              id="alphaTarget"
              v-model="alphaTarget"
              step="0.001"
              min="0"
              max="1"
              @blur="handleBaseBlur('alphaTarget')"
              class="input-control"
            />
          </el-form-item>
          <el-form-item label="VelocityDecay" class="form-item-control">
            <el-input
              type="number"
              id="velocityDecay"
              v-model="velocityDecay"
              step="0.01"
              min="0"
              max="1"
              @blur="handleBaseBlur('velocityDecay')"
              class="input-control"
            />
          </el-form-item>
        </el-form>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><setting /></el-icon>
          <span>Force Config</span>
        </template>
        <el-sub-menu index="2-1">
          <template #title>
            <el-icon><Location /></el-icon>
            <span>Center Force</span>
          </template>

          <el-form
            label-position="top"
            label-width="100px"
            style="max-width: 460px"
            @submit.prevent
            size="small"
            class="form"
            novalidate
          >
            <el-form-item>
              <template #label>
                <div class="btn-label" style="width: 100%">
                  <span>Set</span>
                  <el-switch
                    v-model="setCenter"
                    size="default"
                    :disabled="false"
                  />
                </div>
              </template>
            </el-form-item>
            <el-form-item>
              <div class="form-btn-control">
                <BaseButton
                  @click="forceDefaultSet('center')"
                  class="config-btn btn"
                  :disabled="!setCenter"
                  >Default</BaseButton
                >
              </div>
            </el-form-item>
            <el-form-item label="CenterX" class="form-item-control">
              <el-input
                :disabled="!setCenter"
                type="number"
                id="centerX"
                v-model="centerX"
                step="1"
                min="0"
                :max="defaultForceConfig.center.X * 2"
                class="input-control"
                @blur="handleCenterBlur('X')"
              />
              <el-slider
                :disabled="!setCenter"
                v-model="centerX"
                :min="0"
                :max="defaultForceConfig.center.X * 2"
              />
            </el-form-item>
            <el-form-item label="CenterY" class="form-item-control">
              <el-input
                :disabled="!setCenter"
                type="number"
                id="centerY"
                v-model="centerY"
                step="1"
                min="0"
                :max="defaultForceConfig.center.Y * 2"
                class="input-control"
                @blur="handleCenterBlur('Y')"
              />
              <el-slider
                :disabled="!setCenter"
                v-model="centerY"
                :min="0"
                :max="defaultForceConfig.center.Y * 2"
              />
            </el-form-item>
            <el-form-item label="CenterStrength" class="form-item-control">
              <el-input
                :disabled="!setCenter"
                type="number"
                id="centerStrength"
                v-model="centerStrength"
                step="0.1"
                min="-1"
                class="input-control"
                @blur="handleCenterBlur('Strength')"
              />
            </el-form-item>
          </el-form>
        </el-sub-menu>
        <el-menu-item index="2-2">
          <el-icon><Location /></el-icon>
          <template #title>Position Force</template>
        </el-menu-item>
        <el-menu-item index="2-3">
          <el-icon><IconMenu /></el-icon>
          <template #title>ManyBody Force</template>
        </el-menu-item>
        <el-menu-item index="2-4">
          <el-icon><Warning /></el-icon>
          <template #title>Collide Force</template>
        </el-menu-item>

        <el-menu-item index="2-5">
          <el-icon><Share /></el-icon>
          <template #title>Link Force</template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>

    <BaseButton
      @click="toggleEditMode"
      class="edit-btn btn"
      :class="{ 'active-btn': editMode }"
    >
      <el-icon size="large" class="icon">
        <Tools />
      </el-icon>
    </BaseButton>
    <BaseCard :inset="true" class="ticks-card"> {{ ticks }} </BaseCard>
    <div id="svg-container"></div>
  </div>
</template>

<script>
import {
  Tools,
  Share,
  Menu as IconMenu,
  Location,
  Setting,
  Operation,
  Warning,
} from "@element-plus/icons-vue";

export default {
  components: {
    Tools,
    Location,
    IconMenu,
    Setting,
    Share,
    Operation,
    Warning,
  },
  data() {
    return {
      width: null,
      height: null,
      simulation: null,
      ticks: 0,
      editMode: false,
      // Base Config
      alpha: 1,
      alphaMin: 0.001,
      alphaDecay: 1 - Math.pow(0.001, 1 / 300),
      alphaTarget: 0,
      velocityDecay: 0.4,
      defaultBaseConfig: {
        alpha: 1,
        alphaMin: 0.001,
        alphaDecay: 1 - Math.pow(0.001, 1 / 300),
        alphaTarget: 0,
        velocityDecay: 0.4,
      },

      // Force Config
      // center config
      setCenter: true,
      centerX: null,
      centerY: null,
      centerStrength: 1,
      defaultForceConfig: {
        center: {
          X: null,
          Y: null,
          Strength: 1,
        },
      },
    };
  },
  computed: {
    drawData() {
      return this.$store.getters["force/drawData"];
    },
    vegaLiteData() {
      return this.$store.getters["force/vegaLiteData"];
    },
  },
  watch: {
    drawData(newVal) {
      if (newVal) {
        this.drawGraph();
      }
    },

    /* -------------------------------------------------------------------------- */
    // default config
    /* -------------------------------------------------------------------------- */
    alpha(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal > 1) {
          this.alpha = 1;
        } else if (newVal < 0) {
          this.alpha = 0;
        } else {
          this.baseConfigSet("alpha", newVal);
        }
      }
    },
    alphaMin(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal > 1) {
          this.alphaMin = 1;
        } else if (newVal < 0) {
          this.alphaMin = 0;
        } else {
          this.baseConfigSet("alphaMin", newVal);
        }
      }
    },
    alphaDecay(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal > 1) {
          this.alphaDecay = 1;
        } else if (newVal < 0) {
          this.alphaDecay = 0;
        } else {
          this.baseConfigSet("alphaDecay", newVal);
        }
      }
    },
    alphaTarget(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal > 1) {
          this.alphaTarget = 1;
        } else if (newVal < 0) {
          this.alphaTarget = 0;
        } else {
          this.baseConfigSet("alphaTarget", newVal);
        }
      }
    },
    velocityDecay(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal > 1) {
          this.velocityDecay = 1;
        } else if (newVal < 0) {
          this.velocityDecay = 0;
        } else {
          this.baseConfigSet("velocityDecay", newVal);
        }
      }
    },
    /* -------------------------------------------------------------------------- */
    // center force config
    /* -------------------------------------------------------------------------- */
    setCenter(newVal) {
      if (newVal) {
        this.simulation.force(
          "center",
          d3
            .forceCenter(
              this.defaultForceConfig.center.X,
              this.defaultForceConfig.center.Y
            )
            .strength(this.defaultForceConfig.center.Strength)
        );
      } else {
        // remove center force
        this.simulation.force("center", null);
      }
      this.simulation.alpha(this.alpha);
      this.simulation.restart();
    },

    centerX(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal < 0) {
          this.conterX = 0;
        } else {
          this.forceConfigSet("center", "x", newVal);
        }
      }
    },
    centerY(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal < 0) {
          this.conterY = 0;
        } else {
          this.forceConfigSet("center", "y", newVal);
        }
      }
    },
    centerStrength(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal < -1) {
          this.centerStrength = -1;
        } else {
          this.forceConfigSet("center", "strength", newVal);
        }
      }
    },
  },
  methods: {
    // 载入nodes和links数据
    loadData() {
      this.$store.dispatch("force/loadData");
    },

    /* -------------------------------------------------------------------------- */
    // base config
    /* -------------------------------------------------------------------------- */
    // 修正输入为空的情况
    handleBaseBlur(configType) {
      //console.log(target);
      if (!this[configType]) {
        this[configType] = this.defaultBaseConfig[configType];
      }
    },
    simStop() {
      this.simulation.stop();
    },

    // reset all config to default
    simRestart() {
      if (this.simulation) {
        this.alpha = this.defaultBaseConfig.alpha;
        this.alphaMin = this.defaultBaseConfig.alphaMin;
        this.alphaDecay = this.defaultBaseConfig.alphaDecay;
        this.alphaTarget = this.defaultBaseConfig.alphaTarget;
        this.velocityDecay = this.defaultBaseConfig.velocityDecay;
        this.simulation.alpha(this.defaultBaseConfig.alpha);
        this.simulation.alphaMin(this.defaultBaseConfig.alphaMin);
        this.simulation.alphaDecay(this.defaultBaseConfig.alphaDecay);
        this.simulation.alphaTarget(this.defaultBaseConfig.alphaTarget);
        this.simulation.velocityDecay(this.defaultBaseConfig.velocityDecay);
        this.restart();
      }
    },

    // ?
    // rebind data of dom element(nodes and links) and sim system
    restart() {
      this.ticks = 0;
      // 获取原始绘画数据
      const data = this.drawData;

      // 创建原始数据的copy，因为 force simulation 会改变数组数据
      const links = data.links.map((d) => ({ ...d }));
      const nodes = data.nodes.map((d) => ({ ...d }));

      // console.log("nodes", JSON.parse(JSON.stringify(nodes)));

      const nodeG = d3
        .select("#svg-container")
        .select("svg")
        .select("g.node-group");
      const linkG = d3
        .select("#svg-container")
        .select("svg")
        .select("g.link-group");
      //console.log("2: ", nodeG);

      // rebind data of dom elements
      nodeG.selectChildren("g").data(nodes).join("g");
      linkG.selectAll("line").data(links).join("line");
      // rebind data of simulation
      this.simulation.nodes(nodes);
      this.simulation.force("link").links(links);

      // reset alpha to reheat
      this.simulation.restart();
    },
    // 设置 default config
    baseConfigSet(configType, newVal) {
      this.simulation[configType](newVal);
      if (configType !== "alpha") {
        this.simulation.alpha(this.alpha);
      }
      this.restart();
    },

    /* -------------------------------------------------------------------------- */
    // force config
    /* -------------------------------------------------------------------------- */
    forceConfigSet(forceType, configType, newVal) {
      this.simulation.force(forceType)[configType](newVal);
      this.simulation.alpha(this.alpha);
      this.simulation.restart();
      //this.restart();
    },
    forceDefaultSet(forceType) {
      switch (forceType) {
        case "center":
          this.centerX = this.defaultForceConfig.center.X;
          this.centerY = this.defaultForceConfig.center.Y;
          this.centerStrength = this.defaultForceConfig.center.Strength;
          break;
      }
      // reheat and restart
      this.simulation.alpha(this.alpha);
      this.simulation.restart();
      //this.restart();
    },

    /* -------------------------------------------------------------------------- */
    // center force config
    /* -------------------------------------------------------------------------- */

    handleCenterBlur(configType) {
      const name = "center" + configType;
      if (!this[name]) this[name] = this.defaultForceConfig.center[configType];
    },

    /* -------------------------------------------------------------------------- */
    // vegaLite relative
    /* -------------------------------------------------------------------------- */
    drawVegaLite(g) {
      // 获取data
      const data = g.datum()["vega-lite"];
      // vega-lite config
      var yourVlSpec = {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        description: "A simple bar chart with embedded data.",
        // render as svg
        usermeta: { embedOptions: { renderer: "svg" } },
        // 由于还有坐标轴，实际的svg大小还要大些(+50)
        width: 150,
        height: 150,
        data: {
          values: data,
        },
        mark: "bar",
        encoding: {
          x: { field: "a", type: "ordinal" },
          y: { field: "b", type: "quantitative" },
        },
      };
      // select container by id
      // const id = "g-" + g.datum().id.replace(".", "");
      // const container = d3.select("#" + id);
      const circle = g.selectChild("circle");
      // create vega-lite svg
      vegaEmbed(g.node(), yourVlSpec).then(() => {
        // 提出svg元素，并去掉多余的div和details
        const svg = g.select("svg");
        g.node().appendChild(circle.node());
        g.node().appendChild(svg.node());
        g.select("div").remove();
        g.select("details").remove();
      });
    },
    deleteVegaLite(g) {
      g.selectChild("svg").remove();
    },
    /* -------------------------------------------------------------------------- */
    // other
    /* -------------------------------------------------------------------------- */
    toggleEditMode() {
      this.editMode = !this.editMode;
    },
    // initial drawing, create DOM elements and sim system
    drawGraph() {
      const that = this;
      // 获取绘画数据
      const data = this.drawData;
      // 创建原始数据的copy，因为 force simulation 会改变数组数据
      const links = data.links.map((d) => ({ ...d }));
      const nodes = data.nodes.map((d) => ({ ...d }));
      //console.log(data.links);
      // 选择svg container
      const svgContainer = d3.select("#svg-container");
      // 获取container的宽和高
      const width = parseInt(svgContainer.style("width"), 10);
      const height = parseInt(svgContainer.style("height"), 10);

      // 先把svg图和nodes+links 元素画出来
      // 随便设置一个种类的颜色映射
      const color = d3.scaleOrdinal(d3.schemeCategory10);
      const selectedColor = "#c92a2a";
      // 创建svg
      const svg = svgContainer
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewbox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto;");
      // 画links
      const linkGroup = svg
        .append("g")
        .attr("class", "link-group")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(links)
        .join("line")
        // link的value值映射到粗细
        .attr("stroke-width", (d) => Math.sqrt(d.value));
      //画nodes
      const nodeGroup = svg
        .append("g")
        .attr("class", "node-group")
        .selectAll("g")
        .data(nodes)
        .join("g")
        // // for vega-lite vis
        .attr("showDetail", "1")
        // .attr("id", (d) => "g-" + d.id.replace(".", ""))
        .append("circle")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
        .style("cursor", "pointer")
        .attr("r", 5)
        // node 进行分类颜色映射
        .attr("fill", (d) => color(d.group))
        .style("transition", "r 0.2s")
        .on("mouseover", function (event, d) {
          //颜色变，表示被选中
          d3.select(this).attr("fill", selectedColor).attr("r", 20);
        })
        .on("mouseout", function () {
          d3.select(this)
            .attr("r", 5)
            .attr("fill", (d) => color(d.group));
        })
        .on("click", function () {
          // 获取选择circle对应的container - g元素
          const g = d3.select(this.parentNode);
          // circle.style("display", "none");

          const showDetail = g.attr("showDetail");
          //console.log(showDetail);

          if (showDetail === "1") {
            that.drawVegaLite(g);
            g.attr("showDetail", "0");
          } else if (showDetail === "0") {
            that.deleteVegaLite(g);
            g.attr("showDetail", "1");
          }
        });

      const containerGroup = d3
        .select("#svg-container")
        .select("svg")
        .select("g.node-group")
        .selectAll("g");
      // containerGroup.datum(null);
      // nodeGroup.data(nodes);

      /* -------------------------------------------------------------------------- */
      const defaultBaseConfig = this.defaultBaseConfig;
      const defaultForceConfig = this.defaultForceConfig;
      // 力导向系统创建
      const simulation = d3
        .forceSimulation(nodes)
        .force(
          "link",
          // 指明对应的是nodes数据的id属性
          d3.forceLink(links).id((d) => d.id)
        )
        .force("charge", d3.forceManyBody())
        .force(
          "center",
          d3
            .forceCenter(width / 2, height / 2)
            .strength(defaultForceConfig.center.Strength)
        )
        .alpha(defaultBaseConfig.alpha)
        .alphaMin(defaultBaseConfig.alphaMin)
        .alphaTarget(defaultBaseConfig.alphaTarget)
        .alphaDecay(defaultBaseConfig.alphaDecay)
        .velocityDecay(defaultBaseConfig.velocityDecay)
        .on("tick", ticked);
      // console.log("1", simulation.force("charge").strength());
      // 每次迭代回调函数，更新结点位置
      function ticked() {
        //console.log("ticked");
        //console.log("alpha", simulation.alpha());
        //console.log("link:", linkGroup);

        that.ticks++;
        linkGroup
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);

        // nodeGroup.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
        containerGroup.style("transform", (d) => {
          return `translate(${d.x}px,${d.y}px)`;
        });
      }

      // 设置结点拖动行为
      containerGroup.call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );
      // 拖动开始时，重新加热迭代过程，并且修正被拖动点的fx,fy
      function dragstarted(event) {
        if (!event.active)
          simulation
            .alphaTarget(
              +that.alphaTarget + 0.3 > 1 ? 1 : +that.alphaTarget + 0.3
            )
            .restart();
        // console.log(+that.alphaTarget + 0.3 > 1 ? 1 : +that.alphaTarget + 0.3);
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      // 拖动时，让点跟着鼠标走
      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      // 拖动结束，降温
      function dragended(event) {
        if (!event.active) simulation.alphaTarget(that.alphaTarget);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      // 设置整体zoom行为,只选择最顶层的2个g即可
      const group = svg.selectChildren("g");
      //console.log(group);
      // 创建缩放函数
      const zoom = d3
        .zoom()
        .scaleExtent([0.5, 30]) // 设置缩放的范围
        .translateExtent([
          [0, 0],
          [width, height],
        ])
        .on("zoom", zoomed);

      svg.call(zoom);
      // 定义zoom的回调函数
      function zoomed(event) {
        const transform = event.transform;
        // 更新地理路径组的变换属性
        group.attr("transform", transform);
      }

      // initialize the data
      this.simulation = simulation;
      this.centerX = this.defaultForceConfig.center.X = width / 2;
      this.centerY = this.defaultForceConfig.center.Y = height / 2;
    },
  },

  created() {
    this.loadData();
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

.ticks-card {
  position: fixed;
  top: 5%;
  right: 3%;
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

<!-- Animation -->
<style scoped>
.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.3s ease-in;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-200px); /* 初始状态和最终状态 */
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0); /* 平移隐藏 */
}
</style>

<!-- form -->
<style scoped>
.el-menu-item {
  height: fit-content;
}
.form {
  padding: 0.8vw 2vw 1vw 2vw;
}

.form-item-control {
  margin-bottom: 10px;
}
.config-btn {
  font-size: 100%;
  flex: 1 1 50%;
}

.form-btn-control {
  display: flex;
  gap: 0.5vw;
  width: 100%;
}
.btn-label {
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-control {
  /* width: 90%; */
}
</style>

<style scoped>
.el-slider {
  width: 100%;
}
</style>
<style>
.el-form-item__label {
  margin-bottom: 2px !important;
}
</style>
