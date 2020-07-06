import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueQrcodeReader from "vue-qrcode-reader";
 
Vue.use(VueQrcodeReader);

/* Instalación BOOTSTRAP y BOOTSTRAP VUE */

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* FIN INSTALACION BOOSTRAP Y BOOSTRAPVUE */

/* INSTALACION PORTAL VUE */
import PortalVue from 'portal-vue'

Vue.use(PortalVue)
/* FIN INSTALACION PORTAL VUE */


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    if(!store.getters.loggedIn){
      next({
        path: '/login'
      })
    }
    else{
      next()
    }
  }else if(to.matched.some(record => record.meta.requiresVisitor)) {

    if(store.getters.loggedIn){
      next({
        path: '/'
      })
    }
    else{
      next()
    }
  }
  else next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
