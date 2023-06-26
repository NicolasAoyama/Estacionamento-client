import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/',
    name: 'Iniciar',
    component: () => import(/* webpackChunkName: "about" */ '../views/PrincipalView.vue')  
  },
  {
    path: '/Entrada',
    name: 'Entrada',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistrarEntrada.vue')
  },
  {
    path: '/listarmarca',
    name: 'listarmarca',
    component: () => import(/* webpackChunkName: "about" */ '../views/Marca/MarcaListaView.vue')
  },
  {
    path: '/Adicionar',
    name: 'Adicionar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Marca/AdicionarMarca.vue'),
    children: [{
      path: 'Adicionar',
      name: 'Adicionar-editar',
      component: () => import(/* webpackChunkName: "about" */ '../views/Marca/AdicionarMarca.vue'),
    },
    {
      path: 'Adicionar',
      name: 'Adicionar-excluir',
      component: () => import(/* webpackChunkName: "about" */ '../views/Marca/AdicionarMarca.vue'), 
    }

    ]
  },
  {
    path: '/Adicionar-Veiculo',
    name: 'Adicionar-Veiculo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Veiculo/AdicionarVeiculos.vue'),
    children: [
      {
        path: '/Adicionar-Veiculo-editar',
        name: 'Adicionar-Veiculo-editar',
      component: () => import(/* webpackChunkName: "about" */ '../views/Veiculo/AdicionarVeiculos.vue'),
      }, 
      {
        path: '/Adicionar-Veiculo-excluir',
        name: 'Adicionar-Veiculo-excluir',
      component: () => import(/* webpackChunkName: "about" */ '../views/Veiculo/AdicionarVeiculos.vue'),
      }

    ]

    
  },
  {
    path: '/Listar-Veiculo',
    name: 'Listar-Veiculo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Veiculo/ListarVeiculos.vue')
  },
  {
    path: '/Listar-Condutor',
    name: 'Listar-Condutor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Condutor/ListarCondutor.vue')
  },
  {
    path: '/Adicionar-Condutor',
    name: 'Adicionar-Condutor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Condutor/AdicionarCondutor.vue'),
    children: [
      {
        path: '/Adicionar-Condutor-editar',
        name: 'Adicionar-Condutor-editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/Condutor/AdicionarCondutor.vue')
      },
      {
        path: '/Adicionar-Condutor-excluir',
        name: 'Adicionar-Condutor-excluir',
        component: () => import(/* webpackChunkName: "about" */ '../views/Condutor/AdicionarCondutor.vue')
      },

    ]
  },
  {
    path: '/Adicionar-Modelo',
    name: 'Adicionar-Modelo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Modelo/AdicionarModelo.vue'),
    children: [
      {
        path: '/Adicionar-Modelo-editar',
        name: 'Adicionar-Modelo-editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/Modelo/AdicionarModelo.vue')

      },
      {
        path: '/Adicionar-Modelo-excluir',
        name: 'Adicionar-Modelo-excluir',
        component: () => import(/* webpackChunkName: "about" */ '../views/Modelo/AdicionarModelo.vue')

      },

    ]
  },
  {
    path: '/Listar-Modelo',
    name: 'Listar-Modelo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Modelo/ListarModelo.vue')
  },
  {
    path: '/Listar-Configuracao',
    name: 'Listar-Configuracao',
    component: () => import(/* webpackChunkName: "about" */ '../views/Configuracao/ListarConfiguracao.vue')
  },
  {
    path: '/Adicionar-Configuracao',
    name: 'Adicionar-Configuracao',
    component: () => import(/* webpackChunkName: "about" */ '../views/Configuracao/ConfigurarConfiguracao.vue'),
    children: [
    {
      path: '/Adicionar-Configuracao-editar',
       name: 'Adicionar-Configuracao-editar',
      component: () => import(/* webpackChunkName: "about" */ '../views/Configuracao/ConfigurarConfiguracao.vue')

    }, 
    

    ]
  },
  {
    path: '/Movimentacao',
    name: 'Movimentacao',
    component: () => import(/* webpackChunkName: "about" */ '../views/Movimentacao/ListaMovimentacao.vue')
  },
  {
    path: '/Recibo',
    name: 'Recibo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Movimentacao/MovimentacaoFinalizada.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router