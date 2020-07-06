<template>
  <div class="navbar-app">
    <b-navbar toggleable="lg" class="color-navbar" type="dark" fixed="top">
      <router-link to="/"><b-navbar-brand class="is-hidden-mobile mouseoverja" >DigiVote</b-navbar-brand></router-link> 
      <div class="left">
        <div class="is-hidden-mobile">
          <!-- <b-navbar-nav class="mr-auto">
            <b-nav-item class="hover-effect" v-if="loggedIn">
              <router-link class="color-link" to="/dashboard">Dashboard</router-link>
            </b-nav-item>
            <b-nav-item class="hover-effect" v-if="loggedIn">
              <router-link class="color-link" to="/misvotaciones">Mis votaciones</router-link>
            </b-nav-item>
            <b-nav-item></b-nav-item>
          </b-navbar-nav> -->
        </div>
        <div class="is-hidden-pc">
          <!-- <b-navbar-brand href="#"></b-navbar-brand> Cuando se tenga el logo en chico-->
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <!-- <b-nav-item v-if="loggedIn">
                <b-icon icon="kanban-fill" rotate="270"></b-icon>
                <router-link to="/dashboard">Dashboard</router-link>
              </b-nav-item>
              <b-nav-item v-if="loggedIn">
                <b-icon icon="receipt-cutoff"></b-icon>
                <router-link to="/misvotaciones">Mis votaciones</router-link>
              </b-nav-item> -->
              <!-- <b-nav-item v-if="!loggedIn">
                <router-link  to="/login"><a class="btn btn-secondary btn-sm">Entrar</a></router-link>
              </b-nav-item>
              <b-nav-item v-if="!loggedIn">
                <router-link  to="/registro"><a class="btn btn-primary btn-sm">Registrarse</a></router-link>
              </b-nav-item> -->
            </b-navbar-nav>
          </b-collapse>
        </div>
      </div>
      <div class="right ml-auto">
        <b-navbar-nav>
          <b-nav-form >
            <button type="button" class="btn btn-success btn-sm mr-1" v-b-modal.modalvotacion v-if="loggedIn">Ingresar a votación</button>
            <router-link to="/crearvotacion"><b-button  size="sm" class="my-2 my-sm-0" v-if="loggedIn">Crear votación</b-button></router-link>
          </b-nav-form>
          <div class="user-nav" v-if="loggedIn">
            <b-nav-item-dropdown  right>
              <!-- <b-dropdown-item fixed="top" href="#">
                <b-icon icon="person-circle"></b-icon>Perfil
              </b-dropdown-item> -->
              <b-dropdown-item fixed="top" href="#" @click="logOut">
                <b-icon icon="box-arrow-in-left"></b-icon>Salir
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          <div v-else class="user-buttons">
            <router-link class="color-link" to="/registro"><button type="button" class="btn btn-primary mr-1">Registrarse</button></router-link>
            <router-link class="color-link" to="/login"><button type="button" class="btn btn-secondary">Entrar</button></router-link>
          </div>
        </b-navbar-nav>
      </div>
    </b-navbar>
    <IngresoVotacionModal ok-title="ir a votación" />
  </div>
</template>

<script>
import IngresoVotacionModal from '@/components/IngresoVotacionModal.vue'

export default {
  name: "Navbar",
  components: {
    IngresoVotacionModal
  },
  data: function() {
    return {
    };
  },
  methods:{
    logOut(){
      this.$store.dispatch('destroyToken')
        .then(() =>{
          this.$router.push('/login')
        })
        .catch(() => {
          this.$router.push('/login')
        })
    }
  },
  computed:{
    loggedIn(){
      return this.$store.getters.loggedIn
    }
    
  }
};
</script>

<style>
.color-navbar {
  background-color: #1b2752;
}
.user-nav {
  display: flex;
  align-items: center;
}
.color-link {
  color: white !important;
}
.color-link:hover {
  text-decoration: none;
}
.hover-effect {
  transition: 300ms all;
}
.hover-effect:hover {
  transform: scale(1.2, 1.2) !important;
}
.mouseoverja:hover{
  cursor: pointer;
}
</style>