// 引入createApp创建应用
import { createApp } from "vue";

/* 引入createPinia，用于创建pinia */
import { createPinia } from 'pinia'
// 引入跟组件
import App from "./App.vue";
// import router from "./router";

const app = createApp(App)
/* 创建pinia */
const pinia = createPinia()

app.use(pinia)
// app.use(router)
app.mount('#app')