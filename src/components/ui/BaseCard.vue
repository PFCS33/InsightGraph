<template>
  <div :class="[mode, { inset: inset }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: "card",
    },
    inset: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.inset {
  box-shadow: inset 1px 1px 5px #4444442a, inset -1px -1px 5px #4444442a;
}

.flat {
  border-radius: 12px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);
}
</style>
