<template>
  <div class="container">
    <svg class="svg">
      <rect
        x="50%"
        y="50%"
        width="100"
        height="100"
        fill="#f9f9f9"
        filter="url(#inset-shadow)"
      />
      <defs>
        <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="6" />
          <feOffset dx="0" dy="0" result="offsetblur" />
          <feFlood flood-color="rgb(0, 0, 0)" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>

        <filter id="inset" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
      <!-- </svg> -->
    </svg>
  </div>
</template>
<script>
import { Remove } from "@element-plus/icons-vue";
export default {
  components: {
    Remove,
  },
  data() {
    return {
      graphNum: 1,
    };
  },
  methods: {
    loadData() {
      this.$store.dispatch("force/loadCarsData");
    },
    drawGraph() {},
  },
  computed: {
    drawData() {
      return this.$store.getters["force/vegaLiteData"];
    },
    carsData() {
      return this.$store.getters["force/carsData"];
    },
  },
  watch: {
    carsData(newVal) {
      if (newVal) {
        this.drawGraph();
      }
    },
  },
  created() {
    this.loadData();
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.svg {
  width: 100%;
  height: 100%;
}
</style>
