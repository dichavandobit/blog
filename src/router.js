import { createRouter, createWebHistory } from 'vue-router';
import HomePageVue from './pages/HomePage.vue';
import ShowPost from './pages/posts/ShowPost.vue';

const routes = [
  { path: '/', component: HomePageVue },
  { path: '/posts/:id', name: 'showPost', component: ShowPost, props: true},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;