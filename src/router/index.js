import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import MisVotaciones from '../views/MisVotaciones.vue'
import AnalisisVotacion from '../views/Votacion/AnalisisVotacion.vue'
import Login from '../views/User/Login.vue'
import Register from '../views/User/Register.vue'
import CrearVotacion from '../views/CrearVotacion.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path:'/dashboard',
    name:'Dashboard',
    component: Dashboard
  },
  {
    path:'/misvotaciones',
    name:'Mis votaciones',
    component: MisVotaciones
  },
  /* EDITAR DPS */
  {
    path:'/analisisPrueba',
    name:'Analisis votación',
    component: AnalisisVotacion
  },
  {
    path:'/login',
    name:'Login',
    component: Login
  },
  {
    path:'/registro',
    name:'Registro',
    component: Register
  },
  {
    path:'/crearvotacion',
    name:'CrearVotacion',
    component: CrearVotacion
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
