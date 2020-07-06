import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import MisVotaciones from '../views/MisVotaciones.vue'
import AnalisisVotacion from '../views/Votacion/AnalisisVotacion.vue'
import Login from '../views/User/Login.vue'
import Register from '../views/User/Register.vue'
import CrearVotacion from '../views/CrearVotacion.vue'
import VotacionView from '../views/Votacion/Votacion.vue'
import ResultadoVotacion from '../views/Votacion/ResultadoVotacion.vue'
import Votar from '../views/Votacion/Votar.vue'
import PageNotFound from '../views/PageNotFound.vue'
import Home from '../views/Home'



Vue.use(VueRouter)

  const routes = [
  { path: "*",
   component: PageNotFound 
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },{
    path:'/dashboard',
    name:'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:'/misvotaciones',
    name:'Mis votaciones',
    component: MisVotaciones,
    meta: {
      requiresAuth: true
    }
  },
  /* EDITAR DPS */
  {
    path:'/analisisPrueba',
    name:'Analisis votación',
    component: AnalisisVotacion,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:'/login',
    name:'Login',
    component: Login,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path:'/registro',
    name:'Registro',
    component: Register,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path:'/crearvotacion',
    name:'CrearVotacion',
    component: CrearVotacion,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:'/votar',
    name:'Vota!',
    component:VotacionView,
    meta: {
      requiresAuth: true
    },
    children: [ 
      { path: ':id', component: Votar }
    ] 
  },
  {
    path: '/resultados',
    name: 'Resultados',
    component: ResultadoVotacion
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
