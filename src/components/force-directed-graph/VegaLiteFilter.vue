<template>
  <div class="boundray">
    <BaseCard inset class="content-box">
      <el-form class="info-box" label-position="left" label-width="42px">
        <el-form-item label="Score" class="form-item">
          <div class="score-select-box">
            <el-select
              v-model="selectedIndex"
              placeholder="aelect Score"
              size="small"
              placement="top"
            >
              <el-option
                v-for="(insight, index) in insightList"
                :key="index"
                :label="insight['insight-score']"
                :value="index"
              />
            </el-select>
            <BaseButton inset class="btn" type="button" @click="setInsightIndex"
              >Set</BaseButton
            >
          </div>
        </el-form-item>

        <el-form-item label="Type" class="form-item">
          <div class="type-box">
            {{ insightList[selectedIndex]["insight-type"] }}
          </div>
        </el-form-item>
      </el-form>
      <div id="vega-lite-filtered-container"></div>
    </BaseCard>
  </div>
</template>

<script>
export default {
  props: ["insightList", "insightIndex"],
  data() {
    return {
      view: null,
      selectedIndex: null,
      currentIndex: null,
    };
  },
  watch: {
    selectedIndex(newVal) {
      if (this.view) this.view.finalize();
      this.drawVegaLite(newVal);
    },
    insightList() {
      this.currentIndex = this.insightIndex;

      if (this.selectedIndex !== this.currentIndex) {
        this.selectedIndex = this.currentIndex;
      } else {
        this.view.finalize();
        this.drawVegaLite(this.selectedIndex);
      }
    },
  },
  methods: {
    drawVegaLite(index) {
      const that = this;
      const container = d3.select("#vega-lite-filtered-container");
      container.selectAll("*").remove();

      let yourVlSpec = JSON.parse(this.insightList[index]["vega-lite"]);
      yourVlSpec["width"] = "container";
      yourVlSpec["height"] = "container";
      vegaEmbed(container.node(), yourVlSpec).then((result) => {
        this.view = result.view;
      });
    },
    setInsightIndex() {
      if (this.selectedIndex !== this.currentIndex) {
        this.$emit("insightIndexChange", this.selectedIndex);
        this.currentIndex = this.selectedIndex;
      }
    },
  },
  created() {
    this.selectedIndex = this.currentIndex = this.insightIndex;
  },
  mounted() {},
  beforeUnmount() {
    if (this.view) {
      this.view.finalize();
    }
  },
};
</script>

<style scoped>
.boundray {
  width: 20vw;
  height: 45vh;
}
.content-box {
  width: 100%;
  height: 100%;
  padding: 0.5vw 1vw;

  display: flex;
  flex-direction: column;
  gap: 0.3vw;
  background-color: #fff;
}
.info-box {
  flex: 0.2;
}
.type-box {
  font-size: 12px;
}
.form-item {
  margin-bottom: 0;
}
.score-select-box {
  display: flex;
  align-items: center;
  gap: 6px;
}
#vega-lite-filtered-container {
  flex: 0.8;
}
.btn {
  border-radius: 6px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.26);
  padding: 4px 10px;
  background: #f1f3f5;
}
</style>

<style>
.info-box .el-form-item__label {
  font-size: 12px;
  font-weight: bold;
}
</style>
