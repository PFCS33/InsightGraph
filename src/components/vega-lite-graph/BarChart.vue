<template>
  <div class="container">
    <!-- <svg class="svg">
      <rect
        x="40%"
        y="40%"
        rx="10"
        width="100"
        height="100"
        fill="#fff"
        stroke="steelblue"
        stroke-width="3"
        stroke-opacity="0.3"
        filter="url(#inset-shadow)"
      />
      <circle
        cx="10%"
        cy="10%"
        r="50"
        width="100"
        height="100"
        fill="#fff"
        filter="url(#inset-shadow)"
      />
  
      <defs>
        <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="6" />
          <feOffset dx="5" dy="5" result="offsetblur" />
          <feFlood flood-color="steelblue" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>

        <filter id="inset" x="-50%" y="-50%" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2.5" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
    </svg> -->
    <!-- <div id="echarts-container"></div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      rowName: null,
      colName: null,
      rowDict: null,
      colDict: null,
    };
  },
  methods: {},
  computed: {
    headData() {
      return this.$store.getters["table/headData"];
    },
  },
  watch: {
    headData(newVal) {
      if (newVal) {
        this.rowDict = listToDict(newVal.rows);
        this.colDict = listToDict(newVal.cols);
      }
      function listToDict(list) {
        let obj = {};
        for (let item of list) {
          if ("children" in item && item.children) {
            item.children = listToDict(item.children);
          }
          obj[item.name] = item;
        }
        return obj;
      }
    },
  },
  mounted() {
    this.$store.dispatch("table/loadHeadData");
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
#echarts-container {
  width: 100%;
  height: 100%;
}

.svg {
  width: 100%;
  height: 100%;
}
</style>
