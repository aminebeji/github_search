import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

export const app = createApp(App);
app.use(router)
app.mount("#app");