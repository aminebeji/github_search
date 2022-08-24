import { createStore } from "vuex";
import {state} from "./modules";
 import {mutation} from "./modules";

const store = createStore({
  state,
  // mutations : mutation, 
});
export default store;
