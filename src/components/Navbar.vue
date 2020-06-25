<template>
  <div class="navbar-app">
    <b-navbar toggleable="lg" class="color-navbar" type="dark" fixed="top">
      <b-navbar-brand class="is-hidden-mobile" href="#">Voto icon 404</b-navbar-brand>
      <div class="left">
        <div class="is-hidden-mobile">
          <b-navbar-nav class="mr-auto">
            <b-nav-item class="hover-effect">
              <router-link class="color-link" to="/dashboard">Dashboard</router-link>
            </b-nav-item>
            <b-nav-item class="hover-effect">
              <router-link class="color-link" to="/misvotaciones">Mis votaciones</router-link>
            </b-nav-item>
            <b-nav-item></b-nav-item>
          </b-navbar-nav>
        </div>
        <div class="is-hidden-pc">
          <!-- <b-navbar-brand href="#"></b-navbar-brand> Cuando se tenga el logo en chico-->
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item>
                <b-icon icon="kanban-fill" rotate="270"></b-icon>
                <router-link to="/dashboard">Dashboard</router-link>
              </b-nav-item>
              <b-nav-item href="#">
                <b-icon icon="receipt-cutoff"></b-icon>
                <router-link to="/misvotaciones">Mis votaciones</router-link>
              </b-nav-item>
              <b-nav-item v-if="!Usuario">
                <router-link class="color-link" to="/login"><a class="btn btn-secondary btn-sm">Entrar</a></router-link>
              </b-nav-item>
              <b-nav-item v-if="!Usuario">
                <router-link class="color-link" to="/registro"><a class="btn btn-primary btn-sm">Registrarse</a></router-link>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </div>
      <div class="right ml-auto">
        <b-navbar-nav>
          <b-nav-form class="is-hidden-mobile">
            <b-button v-if="Usuario" size="sm" class="my-2 my-sm-0" type="submit">Crear votación</b-button>
          </b-nav-form>
          <div class="user-nav" v-if="Usuario">
            <b-nav-item-dropdown :text="Usuario" right>
              <b-dropdown-item fixed="top" href="#">
                <b-icon icon="person-circle"></b-icon>Perfil
              </b-dropdown-item>
              <b-dropdown-item fixed="top" href="#">
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
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data: function() {
    return {
      Usuario: null
    };
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
</style>