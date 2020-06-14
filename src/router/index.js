import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import MisVotaciones from '../views/MisVotaciones.vue'
import AnalisisVotacion from '../views/Votacion/AnalisisVotacion.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
