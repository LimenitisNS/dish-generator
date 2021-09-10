import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementPlus from "element-plus";
import lang from "element-plus/packages/locale/lang/ru";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus, { lang });

app.mount("#app");
