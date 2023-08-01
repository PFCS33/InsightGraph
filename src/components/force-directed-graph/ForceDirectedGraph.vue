<template>
  <div class="container" ref="1">
    <!-- <transition name="slide"> -->
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
      <svg id="defs-dominance" xmlns="http://www.w3.org/2000/svg">
        <image
          href="/pic/dominance.png"
          :width="insightIconSize"
          :height="insightIconSize"
        ></image>
      </svg>
      <svg id="defs-outlier" xmlns="http://www.w3.org/2000/svg">
        <image
          href="/pic/outlier.png"
          :width="insightIconSize"
          :height="insightIconSize"
        ></image>
      </svg>
      <svg id="defs-top2" xmlns="http://www.w3.org/2000/svg">
        <image
          href="/pic/top2.png"
          :width="insightIconSize"
          :height="insightIconSize"
        ></image>
      </svg>
      <svg id="defs-evenness" xmlns="http://www.w3.org/2000/svg">
        <image
          href="/pic/evenness.png"
          :width="insightIconSize"
          :height="insightIconSize"
        ></image>
      </svg>
      <svg id="defs-trend" xmlns="http://www.w3.org/2000/svg">
        <image
          href="/pic/trend.png"
          :width="insightIconSize"
          :height="insightIconSize"
        ></image>
      </svg>
      <svg id="defs-skewness" xmlns="http://www.w3.org/2000/svg">
        <image
          href="/pic/skewness.png"
          :width="insightIconSize"
          :height="insightIconSize"
        ></image>
      </svg>
      <svg id="defs-kurtosis" xmlns="http://www.w3.org/2000/svg">
        <image
          href="/pic/kurtosis.png"
          :width="insightIconSize"
          :height="insightIconSize"
        ></image>
      </svg>
      <svg id="defs-correlation" xmlns="http://www.w3.org/2000/svg">
        <image
          href="/pic/correlation.png"
          :width="insightIconSize"
          :height="insightIconSize"
        ></image>
      </svg>
    </defs>
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
  RemoveFilled,
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
    Remove: RemoveFilled,
  },
  computed: {
    selectedData() {
      return this.$store.getters["force/selectedData"];
    },
  },
  data() {
    return {
      // color
      defaultLinkColor: "#999",
      defaultNodeColor: "#868e96",
      circleHoveredColor: "#e6fcf5",

      // graph set
      width: null,
      height: null,
      leftCornerCoord: null,
      rightCornerCoord: null,

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

      circleLink: 75,
      circleNeighborLink: 100,
      vegaLiteLink: 200,
      vegaLiteLongLink: 350,

      circleStrength: -100,
      circleNeighborStrength: -300,
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
      // neighbor info
      // (id, [...idn])
      neighborMap: new Map(),
      selectedNode: null,

      simulation: null,
      ticks: 0,
      editMode: false,

      /* -------------------------------------------------------------------------- */
      // force Config

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
    selectedData(newVal) {
      if (newVal) {
        this.neighborHighligt(
          this.selectedNode,
          this.neighborMap.get(this.selectedNode),
          "selected",
          false
        );
        this.selectedNode = null;
        this.getNeighbourInfo(newVal);
        if (this.simulation) {
          this.simulation.stop();

          this.restart(newVal);
        } else {
          // draw force graph
          this.drawGraph(newVal);
        }
      }
    },

    selectedNode(newVal, oldVal) {
      if (newVal !== oldVal) {
        // get id array of neighbour
        const neighborSet = this.neighborMap.get(newVal);
        const oldNeighborSet = this.neighborMap.get(oldVal);

        this.neighborHighligt(oldVal, oldNeighborSet, "selected", false);

        this.neighborHighligt(newVal, neighborSet, "selected", true);
      }
    },
    /* -------------------------------------------------------------------------- */
    // default config
    /* -------------------------------------------------------------------------- */
  },
  methods: {
    setDomAttributes(linkG, circleG) {
      const that = this;
      circleG.attr("opacity", 0).transition().duration(175).attr("opacity", 1);
      // 画links
      const linkGroup = linkG
        .append("line")
        .attr("class", "link")
        .attr("stroke", this.defaultLinkColor)
        .attr("stroke-opacity", 0.6)
        .attr("class", "network-line")
        .attr("stroke-width", 1);

      const linkContainerGroup = linkG;
      const linkTextGroup = linkContainerGroup
        .append("text")
        .attr("class", "link-label")
        .text((d) => d.type)
        .attr("dy", ".35em")
        .attr("fill", "#555")
        .style("opacity", 0.5)
        .style("user-select", "none")
        .attr("font-size", "8px");

      const typeColor = d3.scaleOrdinal(
        ["shape", "point", "compound"],
        //     d3.schemePaired
        ["#fcc2d7", "#bac8ff", "#b992d3"]
      );
      //画nodes

      const circleGroup = circleG
        .append("circle")
        .attr("class", "circle")
        .classed("not-show", function () {
          const gData = d3.select(this.parentNode).datum();
          return gData.showDetail;
        })
        .attr("r", that.circleR)
        .attr("stroke", function () {
          const gData = d3.select(this.parentNode).datum();
          return typeColor(gData["insight-category"]);
        })
        // node 进行分类颜色映射
        .attr("fill", "#fff")
        .attr("stroke-width", 2)
        .style("transition", "r 0.2s")
        .on("mouseover", function (event) {
          const d = d3.select(this.parentNode).datum();
          if (!d.showDetail) {
            //颜色变，表示被选中
            d3.select(this)
              .attr("fill", that.circleHoveredColor)
              .attr("r", that.circleFocusR)
              .style("cursor", "pointer");

            d3.select(this.parentNode)
              .select(".insight-icon")
              .attr("transform", "scale(2)");
          }
        })
        .on("mouseout", function (event) {
          const d = d3.select(this.parentNode).datum();
          if (!d.showDetail) {
            d3.select(this).attr("r", that.circleR).attr("fill", "#FFF");
          }
          d3.select(this.parentNode)
            .select(".insight-icon")
            .attr("transform", "scale(1)");
        })
        .on("click", function (event, d) {
          // 获取选择circle对应的container - g元素
          const g = d3.select(this.parentNode);
          that.selectedNode = g.datum().id.replace(".", "");

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
            const remove = g
              .append("use")
              .attr("href", "#defs-remove")
              .attr("class", "remove vega-lite-icon")
              .attr("cursor", "pointer")
              .on("click", function () {
                g.datum().showDetail = false;
                g.datum().pinned = false;
                g.classed("pinned", false);
                g.datum().fx = null;
                g.datum().fy = null;
                that.selectedNode = null;
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
                  .attr("r", that.circleR)
                  .attr("fill", "#FFF");
                insightIcon.classed("not-show", false);

                that.simulation.alpha(that.defaultBaseConfig.alpha);
                that.simulation.restart();
              });

            const pin = g
              .append("use")
              .attr("href", "#defs-pin")
              .attr("class", "pin vega-lite-icon")
              .attr("cursor", "pointer")
              .on("click", togglePin);

            that.drawVegaLite(g, "img");
          }
        });

      const containerGroup = circleG;

      const iconGroup = containerGroup
        .append("use")
        .attr("href", function () {
          const g = d3.select(this.parentNode);
          //const group = g.datum().group % that.insightNum;
          const group = g.datum()["insight-type"];

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
        .attr("x", -this.insightIconSize / 2)
        .attr("y", -this.insightIconSize / 2)
        .attr("pointer-events", "none")
        .style("transition", "transform 0.2s");

      const rectGroup = containerGroup
        .append("rect")
        .attr("class", "rect")
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
          const id = parentNode.datum().id.replace(".", "");
          const neighbor = that.neighborMap.get(id);
          that.neighborHighligt(id, neighbor, "hover", true);
          rect.classed("center-highlight", true);

          parentNode.select(".rect-title").classed("center-highlight", true);
        })
        .on("mouseout", function (event) {
          const rect = d3.select(this);
          const parentNode = d3.select(this.parentNode);
          const id = parentNode.datum().id.replace(".", "");
          const neighbor = that.neighborMap.get(id);
          that.neighborHighligt(id, neighbor, "hover", false);

          if (id !== that.selectedNode) {
            rect.classed("center-highlight", false);
            parentNode.select(".rect-title").classed("center-highlight", false);
          }
        })
        .on("click", function () {
          // 获取对应的container - g元素
          const g = d3.select(this.parentNode);
          that.selectedNode = g.datum().id.replace(".", "");

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
          .filter((d) => neighbor.includes(d.id.replace(".", "")))
          .selectChildren("circle, rect")
          .classed(className, enable);
        linkGroup
          .filter(
            (d) =>
              id === d.source.id.replace(".", "") ||
              id === d.target.id.replace(".", "")
          )
          .selectChildren("line")
          .classed(className, enable);
      }
      if (type === "selected") {
        nodeGroup
          .filter((d) => d.id.replace(".", "") === id)
          .selectChildren("circle, rect")
          .classed("center-highlight", enable);
      }
    },

    // 构造用于查询邻居的 neighborMap
    getNeighbourInfo(data) {
      this.neighborMap = new Map();
      const links = data.links;
      links.forEach((link) => {
        const sourceId = link.source.replace(".", "");
        const targetId = link.target.replace(".", "");

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
      this.ticks = 0;
      // 获取原始绘画数据
      const data = this.selectedData;
      //const= d3.select('.node-group')
      const preNodes = this.simulation.nodes();
      const links = data.links.map((d) => ({ ...d }));
      let nodes = null;
      if (!newVal) {
        nodes = preNodes.map(function (d) {
          delete d.x;
          delete d.y;
          delete d.vx;
          delete d.vy;
          return d;
        });
      } else {
        let idMap = new Map();
        preNodes.forEach((node) => {
          idMap.set(node.id, node);
        });
        nodes = data.nodes.map((newNode) => {
          const oldNode = idMap.get(newNode.id);
          if (oldNode) {
            newNode.showDetail = oldNode.showDetail;
            newNode.pinned = oldNode.pinned;
            newNode.view = oldNode.view;
            newNode.img = oldNode.img;
            newNode.rect = oldNode.rect;
          } else {
            newNode.showDetail = false;
            newNode.pinned = false;
            newNode.view = null;
            newNode.img = null;
            newNode.rect = null;
          }

          return newNode;
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
      nodeSingleG
        .selectChildren("g")
        .data(nodes, (d) => d.id)
        .join(
          (enter) => {
            nodeG = enter.append("g");

            return nodeG;
          },
          (update) => update,
          (exit) => {
            exit
              .each((data) => {
                const id = data.id;
                if (this.showIndex.has(id)) {
                  this.showIndex.delete(id);
                }
                if (this.pinnedIndex.has(id)) {
                  data.fx = null;
                  data.fy = null;
                }
              })
              .attr("opacity", 1)
              .transition()
              .duration(175)
              .attr("opacity", 0)
              .remove();
          }
        );
      linkSingleG
        .selectAll("g")
        .data(links, (d) => {
          if (d.source.id) {
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
          (exit) => exit.remove()
        );

      this.setDomAttributes(linkG, nodeG);
      // rebind data of simulation
      this.simulation.nodes(nodes);
      const linkForce = this.simulation.force("link");
      if (linkForce) this.simulation.force("link").links(links);

      // reset alpha to reheat
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
      const preView = g.datum().view;
      const rectTitle = g.select(".rect-title");
      const rectTitleName = g.selectChild(".title-name");
      const rectTitleDescription = g.selectChild(".title-description");

      if (preView) {
        // reset the view
        const svg = container.selectChild("svg");
        switch (mode) {
          case "img":
            // 创建反应新状态的img
            svg.classed("not-show", true);
            const imgInfo = g.datum().img;
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
        let yourVlSpec = JSON.parse(g.datum()["vega-lite"]);

        // add some options
        yourVlSpec["width"] = this.vegaLiteWidth;
        yourVlSpec["height"] = this.vegaLiteHeight;
        yourVlSpec["usermeta"] = { embedOptions: { renderer: "svg" } };

        // initialization
        vegaEmbed(container.node(), yourVlSpec).then((result) => {
          const view = result.view.background("transparent");
          // record the view
          g.datum().view = view;
          that.showIndex.set(g.datum().id, view);

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
              return g.datum()["insight-type"];
            })
            .attr("x", -translateX + that.iconOffset)
            .attr("y", -translateY + that.iconSize + that.iconOffset / 2)
            .attr("font-size", that.iconSize - 2);
          rectTitleDescription
            .text(function () {
              const rowName = g.datum().row;
              const colName = g.datum().col;
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
              const colName = g.datum().col;
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

          switch (mode) {
            case "img":
              // 创建反应新状态的img
              svg.classed("not-show", true);
              const imgInfo = g.datum().img;
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
              that.pinnedIndex.set(g.datum().id, g);
              g.datum().pinned = true;
              g.classed("pinned", true);
              g.datum().fx = g.datum().x;
              g.datum().fy = g.datum().y;
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
      that.simulation.alpha(that.defaultBaseConfig.alpha);
      that.simulation.restart();
    },
    deleteVegaLite(g) {
      const id = g.datum().id;
      this.showIndex.get(id).finalize();
      g.selectAll(".vega-lite-graph").remove();
      g.datum().view = null;
      g.datum().img = null;
      this.pinnedIndex.delete(id);
      this.showIndex.delete(id);
    },
    /* -------------------------------------------------------------------------- */
    // other
    /* -------------------------------------------------------------------------- */
    toggleEditMode() {
      this.editMode = !this.editMode;
    },

    // getRandomInt(min, max) {
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // },

    // initial drawing, create DOM elements and sim system
    drawGraph(newVal) {
      const that = this;
      // 获取绘画数据
      const data = newVal;
      // 创建原始数据的copy，因为 force simulation 会改变数组数据
      const links = data.links.map((d) => ({
        ...d,
      }));

      // 加入更多属性，控制vega-lite图的显示
      const nodes = data.nodes.map((d) => ({
        ...d,
        showDetail: false,
        pinned: false,
        view: null,
        img: null,
        rect: null,
      }));

      // 选择svg container
      const svgContainer = d3.select("#svg-container");
      // // 清除之前的
      // svgContainer.selectAll("*").remove();

      // const defs = document.createElementNS(
      //   "http://www.w3.org/2000/svg",
      //   "defs"
      // );
      // svgContainer.node().appendChild(defs);

      // 获取container的宽和高
      const width = parseInt(svgContainer.style("width"), 10);
      const height = parseInt(svgContainer.style("height"), 10);
      this.leftCornerCoord = [0, 0];
      this.rightCornerCoord = [width, height];
      // 先把svg图和nodes+links 元素画出来
      // 随便设置一个种类的颜色映射
      const color = d3.scaleOrdinal(d3.schemeCategory10);

      // 创建svg
      const svg = svgContainer
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewbox", [-width, -height, width, height])
        .attr("style", "max-width: 100%; height: auto;");

      //data binding
      const linkG = svg
        .append("g")
        .attr("class", "link-group")
        .selectAll("g")
        .data(links, (d) => {
          if (d.source.id) {
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
          // 指明对应的是nodes数据的id属性
          d3
            .forceLink(links)
            .id((d) => d.id)
            // .distance(defaultForceConfig.link.Distance)
            .distance(function (d) {
              if (that.showIndex.size > 0) {
                const show1 = that.showIndex.has(d.source.id);
                const show2 = that.showIndex.has(d.target.id);
                if (show1 || show2) {
                  if (show1 && show2) {
                    return that.vegaLiteLongLink;
                  } else {
                    return that.vegaLiteLink;
                  }
                }

                const sourceId = d.source.id.replace(".", "");
                const targetId = d.target.id.replace(".", "");
                // const sourceNeighbor = that.neighborMap.get(sourceId);
                // const targetNeighbor = that.neighborMap.get(targetId);

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
                        return that.circleNeighborLink;
                      }
                    }
                  }
                }
              }
              return that.circleLink;
            })
            .iterations(defaultForceConfig.link.Iterations)
          // .strength(defaultForceConfig.link.Strength)
        )
        .force(
          "charge",
          d3
            .forceManyBody()
            .strength(function (d) {
              let strength = that.circleStrength;
              if (d.showDetail) {
                strength = that.vegaLiteStrength;
              } else {
                if (that.showIndex.size > 0) {
                  const id = d.id.replace(".", "");
                  for (const showId of that.showIndex.keys()) {
                    const directNeighbor = that.neighborMap.get(showId);
                    if (directNeighbor) {
                      for (const neighbor of directNeighbor) {
                        const secondNeighbor = that.neighborMap.get(neighbor);
                        if (secondNeighbor.includes(id)) {
                          return that.circleNeighborStrength;
                        }
                      }
                    }
                  }
                }
              }

              return strength;
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
                return that.circleR;
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
            let offsetWidth = 0;
            let offsetHeight = 0;

            if (d.showDetail) {
              offsetWidth =
                d.img.width / 2 + that.rectWidthOffset + that.iconOffset;
              offsetHeight =
                d.img.height / 2 +
                ((that.rectHeightOffset + that.iconOffset) * 5) / 4;
            } else {
              offsetWidth = offsetHeight = that.circleR;
            }
            const x = d.x;
            const y = d.y;
            if (x - offsetWidth < that.leftCornerCoord[0]) {
              // d.vx = Math.abs(d.vx);
              d.x = that.leftCornerCoord[0] + offsetWidth;
            } else if (x + offsetWidth > that.rightCornerCoord[0]) {
              //d.vx = -Math.abs(d.vx);
              d.x = that.rightCornerCoord[0] - offsetWidth;
            }

            if (y - offsetHeight < that.leftCornerCoord[1]) {
              // d.vy = Math.abs(d.vy);
              d.y = that.leftCornerCoord[1] + offsetHeight;
            } else if (y + offsetHeight > that.rightCornerCoord[1]) {
              //  d.vy = -Math.abs(d.vy);
              d.y = that.rightCornerCoord[1] - offsetHeight;
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
        .scaleExtent([0.5, 30]) // 设置缩放的范围
        .translateExtent([
          [0, 0],
          [width, height],
        ])
        .on("zoom", zoomed)
        // .on("end", zoomEnd)
        .filter((event) => event.target === svg.node());

      // 仅将缩放行为应用到顶层元素
      svg.call(zoom);
      // 定义zoom的回调函数
      function zoomed(event) {
        const transform = event.transform;

        // 更新地理路径组的变换属性
        group.attr("transform", transform);

        if (transform.k < 1.3) {
          that.leftCornerCoord = transform.invert([0, 0]);
          that.rightCornerCoord = transform.invert([width, height]);
        }
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
      this.defaultForceConfig.collide.Radius = this.circleR;
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

<style lang="less" scoped>
.el-slider {
  width: 100%;
}
.bugfix {
  margin-top: 10px;
}
</style>

<!-- global style -->
<style lang="less">
.circle,
.rect,
.network-line,
.rect-title {
  &.hover-highlight {
    stroke: #b197fc;
    stroke-width: 3px;
  }
  &.selected-highlight {
    stroke: #22b8cf;
    stroke-width: 3px;
  }
  &.center-highlight {
    stroke: #0c8599;
    stroke-width: 3px;
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
</style>
