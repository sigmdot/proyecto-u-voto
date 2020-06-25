<template>
  <div class="registerview container">
      <div class="row m-0 justify-content-center">
          <h3 class="col-12 text-center">Registro</h3>
          <p class="col-12 text-center">Buenas, para poder usar nuestra aplicación necesitamos un registro previo no tomará más de 5 minutos 😄</p>
          <div class="col-10 p-3 border">
              <FormularioRegistro></FormularioRegistro>
          </div>
      </div>
  </div>
</template>

<script>
import FormularioRegistro from '@/components/Registro/Formulario.vue'

export default {
    name:'Register',
    components:{
        FormularioRegistro
    }
}
</script>

<style>

</style>