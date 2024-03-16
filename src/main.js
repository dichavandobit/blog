import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { createPinia } from "pinia";
import { authStore } from "./stores/authStore.ts";
const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia)

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
      const store = authStore();
      if (store.token) {
        // aplica logica de validação do
        next();
      } else {
        next('/admin/login');
      }
    } else {
      // Non-protected route, allow access
      next();
    }
  });
app.mount('#app');