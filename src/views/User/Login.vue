<template>
  <div class="loginview container">
    <div class="row m-0 justify-content-center">
      <h3 class="col-12 p-0 text-center"> Entrar </h3>
      <p class="col-12 text-center">Bienvenido a nuestra aplicación web denuevo, entre para poder usarla</p>
      <div class="col-8 p-3 border">
        <LoginFormulario></LoginFormulario>
      </div>
    </div>
  </div>
</template>

<script>
import LoginFormulario from '@/components/Login/FormularioLogin.vue'

export default {
  name:'LoginView',
  components:{
    LoginFormulario
  }
}
</script>

<style>

</style>