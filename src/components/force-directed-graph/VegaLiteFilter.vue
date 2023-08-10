<template>
  <div>
    <BaseCard inset class="container">
      <el-select
        v-model="selectedIndex"
        placeholder="Score"
        size="small"
        placement="top"
      >
        <el-option
          v-for="(insight, index) in insightList"
          :key="insight['insight-score']"
          :label="insight['insight-score']"
          :value="index"
        />
      </el-select>
      <div>type: {{ insightList[selectedIndex]["insight-type"] }}</div>
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
  },

  methods: {
    drawVegaLite(index) {
      const that = this;
      const container = d3.select("#vega-lite-filtered-container");
      container.selectAll("*").remove();
      let yourVlSpec = JSON.parse(this.insightList[index]["vega-lite"]);
      yourVlSpec["width"] = 150;
      yourVlSpec["height"] = 150;

      vegaEmbed(container.node(), yourVlSpec).then((result) => {
        this.view = result.view;
      });
    },
  },
  mounted() {
    this.drawVegaLite(this.selectedIndex);
  },
};
</script>

<style scoped>
.container {
  padding: 1vw;
  display: flex;
  flex-direction: column;
  gap: 1vw;
}
</style>

<style></style>
