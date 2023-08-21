import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers'  // router import
import VueCookies from "vue-cookies";

const app = createApp(App)
app.use(routers)  // router 추가
app.use(VueCookies)
app.mount('#app')