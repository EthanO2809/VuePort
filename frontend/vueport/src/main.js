import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = Vue.createApp({});
app.mount('#app');

createApp(App).use(store).use(router).mount('#app')
