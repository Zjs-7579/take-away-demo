import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/css/normalize.css'
import './assets/font/iconfont.css'
import './assets/css/HeaderTop.css'
createApp(App).use(store).use(router).mount("#app");