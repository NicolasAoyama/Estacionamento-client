import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/Entrada',
    name: 'Entrada',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Entrada.vue')
  },
  {
    path: '/ListMarca',
    name: 'ListMarca',
    component: () => import(/* webpackChunkName: "about" */ '../views/Marca/ListMarca.vue')
  },
  {
    path: '/AddMarca',
    name: 'AddMarca',
    component: () => import(/* webpackChunkName: "about" */ '../views/Marca/AddMarca.vue'),
    children: [{
      path: 'AddMarca',
      name: 'AddMarca-editar',
      component: () => import(/* webpackChunkName: "about" */ '../views/Marca/AddMarca.vue'),
    },
    {
      path: 'AddMarca',
      name: 'ExcluirMarca',
      component: () => import(/* webpackChunkName: "about" */ '../views/Marca/AddMarca.vue'), 
    }

    ]
  },
  {
    path: '/AddVeiculo',
    name: 'AddVeiculo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Veiculo/AddVeiculo.vue'),
    children: [
      {
        path: '/AddVeiculo',
        name: 'EditarVeiculo',
      component: () => import(/* webpackChunkName: "about" */ '../views/Veiculo/AddVeiculo.vue'),
      }, 
      {
        path: '/AddVeiculo',
        name: 'ExcluirVeiculo',
      component: () => import(/* webpackChunkName: "about" */ '../views/Veiculo/AddVeiculo.vue'),
      }
    ]

    
  },
  {
    path: '/ListVeiculo',
    name: 'ListVeiculo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Veiculo/ListVeiculo.vue')
  },
  {
    path: '/ListCondutor',
    name: 'ListCondutor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Condutor/ListCondutor.vue')
  },
  {
    path: '/Adicionar-Condutor',
    name: 'Adicionar-Condutor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Condutor/AddCondutor.vue'),
    children: [
      {
        path: '/Adicionar-Condutor-editar',
        name: 'Adicionar-Condutor-editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/Condutor/AddCondutor.vue')
      },
      {
        path: '/Adicionar-Condutor-excluir',
        name: 'Adicionar-Condutor-excluir',
        component: () => import(/* webpackChunkName: "about" */ '../views/Condutor/AddCondutor.vue')
      },

    ]
  },
  {
    path: '/AddModelo',
    name: 'AddModelo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Modelo/AddModelo.vue'),
    children: [
      {
        path: '/AddModelo',
        name: 'EditarModelo',
        component: () => import(/* webpackChunkName: "about" */ '../views/Modelo/AddModelo.vue')

      },
      {
        path: '/AddModelo',
        name: 'ExcluirModelo',
        component: () => import(/* webpackChunkName: "about" */ '../views/Modelo/AddModelo.vue')

      },

    ]
  },
  {
    path: '/ListModelo',
    name: 'ListModelo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Modelo/ListModelo.vue')
  },
  {
    path: '/ListConfiguracao',
    name: 'ListConfiguracao',
    component: () => import(/* webpackChunkName: "about" */ '../views/Configuracao/ListConfiguracao.vue')
  },
  {
    path: '/AddConfiguracao',
    name: 'AddConfiguracao',
    component: () => import(/* webpackChunkName: "about" */ '../views/Configuracao/AddConfiguracao.vue'),
    children: [
    {
      path: '/AddConfiguracao',
       name: 'EditarConfiguracao',
      component: () => import(/* webpackChunkName: "about" */ '../views/Configuracao/AddConfiguracao.vue')

    }, 
    

    ]
  },
  {
    path: '/ListMovimentacao',
    name: 'ListMovimentacao',
    component: () => import(/* webpackChunkName: "about" */ '../views/Movimentacao/ListMovimentacao.vue')
  },
  {
    path: '/FinalMovimentacao',
    name: 'FinalMovimentacao',
    component: () => import(/* webpackChunkName: "about" */ '../views/Movimentacao/FinalMovimentacao.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
