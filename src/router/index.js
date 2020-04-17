import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about.vue'),
  },
  {
    path: '/p/camera',
    name: 'Camera',
    component: () => import('../views/camera.vue'),
  },
  {
    path: '/p/detail',
    name: 'Camera',
    component: () => import('../views/detail_product.vue'),
  },
  {
    path: '/contact',
    name: 'Contact Us',
    component: () => import('../views/contact.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
