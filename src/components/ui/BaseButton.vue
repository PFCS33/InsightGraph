<template>
  <button v-if="!link" :class="mode">
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

  background: linear-gradient(91.58deg, #69c2a7 -8.01%, #5ad1ad 105.39%);
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
    #3fdfac 10.71%,
    #44e1bf 60.37%,
    #46dfc3 103.14%
  );
  box-shadow: 0 0 0 #00000000, 0 0 0 #00000000,
    inset 0.2rem 0.3rem 0.4rem #55b3c099;
}

.transparent {
  /* font-size: 12px; */
  font-size: 0.9vw;
  background-color: transparent;
  border: none;
  color: #3a0061;
}
.transparent:hover,
.transparent:active {
  background-color: transparent;
  color: #270041;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>
