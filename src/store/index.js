import { createStore } from "vuex";
import state from "./modules";
import mutations from "./modules";

const store = createStore({
  state,
  mutations,
});
export default store;
