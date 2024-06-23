import { createRouter, createWebHistory } from '@ionic/vue-router';
import Logi from '../views/auth/login.vue'

import homePage from '../views/home-page.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path : '/home',
    component: homePage
  },
  {
    path : '/login',
    component: Logi,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
