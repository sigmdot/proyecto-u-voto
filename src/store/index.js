import Vue from 'vue'
import Vuex from 'vuex'
import {Service} from '../service/Service'

const service = new Service()
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('acces_token') || null
  },
  getters: {
    loggedIn(state){
      return state.token !== null
    }
  },
  mutations: {
    login(state, token){
      state.token = token
    },
    destroyToken(state){
      state.token = null
    }
  },
  actions: {
    login(context, credenciales){

      return new Promise((resolve, reject) => {
        service.login(credenciales).
        then(res => {
          const token = res.token
          localStorage.setItem('acces_token',token)
          context.commit('login',token)

          resolve(res)
        })
        .catch(err =>{
          console.log(err)
          reject(err)
        })
      })

    },
    destroyToken(context){
      if(context.getters.loggedIn){
        return new Promise((resolve,reject) => {
          localStorage.removeItem('acces_token')
          context.commit('destroyToken')
          
          resolve()
          reject()
        })
        
      }
    }
  },
  modules: {
  }
})
