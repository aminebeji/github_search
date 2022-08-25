import { createStore } from "vuex";
import { state } from "./modules";
import { mutation } from "./modules";
import { actions } from "./modules";
console.log(actions);
const store = createStore({
  state,
  mutations: mutation,
  actions,
});
export default store;
