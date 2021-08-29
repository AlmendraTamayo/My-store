import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Products,
  },
  {
    path: '/newproduct',
    name: 'NewProduct',
    component: () => import('../views/NewProduct.vue'),
  },
  {
    path: '/busqueda',
    name: 'Busqueda',
    component: () => import('../views/Busquedas.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
