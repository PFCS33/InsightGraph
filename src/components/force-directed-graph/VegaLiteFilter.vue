<template>
  <div class="boundray">
    <BaseCard inset class="content-box">
      <el-form class="info-box" label-position="left" label-width="42px">
        <el-form-item label="Score" class="form-item">
          <el-select
            v-model="selectedIndex"
            placeholder="Score"
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
  props: ["insightList"],
  data() {
    return {
      selectedIndex: 0,
      view: null,
    };
  },
  watch: {
    selectedIndex(newVal) {
      this.view.finalize();
      this.drawVegaLite(newVal);
    },
    insightList() {
      if (this.selectedIndex !== 0) this.selectedIndex = 0;
      else {
        this.view.finalize();
        this.drawVegaLite(0);
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
  },
  mounted() {
    this.drawVegaLite(this.selectedIndex);
  },
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
  padding: 0.5vw;
  padding-left: 1vw;

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
#vega-lite-filtered-container {
  flex: 0.8;
}
</style>

<style>
.info-box .el-form-item__label {
  font-size: 12px;
  font-weight: bold;
}
</style>
