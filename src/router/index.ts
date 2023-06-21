import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/condutor',
    name: 'condutor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Condutor.vue')
  },
  {
    path: '/configuracao',
    name: 'configuracao',
    component: () => import(/* webpackChunkName: "about" */ '../views/Configuracao.vue')
  },
  {
    path: '/marca',
    name: 'marca',
    component: () => import(/* webpackChunkName: "about" */ '../views/Marca.vue')
  },
  {
    path: '/modelo',
    name: 'modelo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Modelo.vue')
  },
  {
    path: '/movimentacao',
    name: 'movimentacao',
    component: () => import(/* webpackChunkName: "about" */ '../views/Movimentacao.vue')
  },
  {
    path: '/veiculo',
    name: 'veiculo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Veiculo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
