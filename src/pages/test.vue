<template>
  <div class="container">
    <BarChart></BarChart>
  </div>
</template>

<script>
import BarChart from "@/components/vega-lite-graph/BarChart.vue";
export default {
  components: {
    BarChart,
  },
  data() {
    return {
      drawData: null,
    };
  },
  methods: {},
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
}
</style>
