import { createStore } from "vuex";
import forceModule from "./modules/force";
const store = createStore({
  modules: {
    force: forceModule,
  },
});

export default store;
