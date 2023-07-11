<template>
  <button v-if="!link" :class="{ mode }">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot> </slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  /* font-size: 14px; */
  font-size: 1.1vw;
  text-decoration: none;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(
    119.06deg,
    #3fdfac 10.71%,
    #44e1bf 60.37%,
    #46dfc3 103.14%
  );
  border: none;
  color: white;
  cursor: pointer;
}

a:hover,
a:active,
button:hover,
button:active {
  background: linear-gradient(
    119.06deg,
    #3bd0a1 10.71%,
    #3ecaac 60.37%,
    #43d3b9 103.14%
  );
  /* box-shadow: inset 2px 2px 16px #4444442a, inset -2px -2px 16px #4444442a; */
}
</style>
