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
    path: '/about',
    name: 'About us',
    component: () => import('../views/AcercaDe.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
