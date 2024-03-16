import { createRouter, createWebHistory } from 'vue-router';
import HomePageVue from './pages/HomePage.vue';
import ShowPost from './pages/posts/ShowPost.vue';
import LoginVue from './pages/Login.vue';
import EditPost from './pages/posts/EditPost.vue';



const routes = [
  { path: '/', component: HomePageVue },
  { path: '/posts/:id', name: 'showPost', component: ShowPost, props: true},
  { path: '/admin/login', name: 'login', component: LoginVue },
  {
    path: '/posts/edit/:id',
    component: EditPost,
    props: true,
    meta: {
      requiresAuth: true 
    }
  },
  {
    path: '/posts/create',
    component: EditPost,
    meta: {
      requiresAuth: true 
    }
  }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;