<template>
  <div id="container">
    <svg class="chart"></svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawData: null,
    };
  },
  methods: {
    getData() {
      let data = [];
      let numItems = Math.ceil(Math.random() * 5);

      for (let i = 0; i < numItems; i++) {
        data.push(40);
      }
      return data;
    },
    update(data) {
      d3.select(".chart")
        .selectAll("circle")
        .data(data)
        .join(
          function (enter) {
            return enter.append("circle").style("opacity", 0.25);
          },
          function (update) {
            return update.style("opacity", 1);
          }
        )
        .attr("cx", function (d, i) {
          return i * 100;
        })
        .attr("cy", 50)
        .attr("r", function (d) {
          return 0.5 * d;
        })
        .style("fill", "orange");
    },
  },

  created() {
    this.drawData = this.getData();
  },
};
</script>

<style scoped>
#container {
  height: 100%;
  width: 100%;
}
</style>
