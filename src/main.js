import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@/styles/global.scss"
import store from './store/index';
export const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
