import { createStore } from "vuex";
import forceModule from "./modules/force";
import tableModule from "./modules/table";
const store = createStore({
  modules: {
    force: forceModule,
    table: tableModule,
  },
});

export default store;
