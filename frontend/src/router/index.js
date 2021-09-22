import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/InicioSesion.vue')
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/user/admin',
    name: 'Admin panel',
    component: () => import('../views/AdminPanel.vue')
  },
  {
    path: '/user/settings',
    name: 'Settings panel',
    component: () => import('../views/Ajustes.vue')
  },
  {
    path: '/demo',
    name: 'Demo URL',
    component: () => import('../views/DemoURL.vue')
  },
  {
    path: '/demo/reader',
    name: 'Demo reader',
    component: () => import('../views/Lector.vue')
  },
  {
    path: '/user/reader',
    name: 'Document reader',
    component: () => import('../views/Lector.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
