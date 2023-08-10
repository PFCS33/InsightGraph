<template>
  <div class="container">
    <svg>
      <use href="#defs-top2"></use>
    </svg>
    <defs>
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
    </defs>
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
      insightIconSize: 30,
    };
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {},
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
