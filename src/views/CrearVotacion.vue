<template>
  <div class="crearview container">
      <div class="row m-0 justify-content-center">
          <div class="col-12 p-0 text-center">
              <h3>Crear una votación</h3>
              <p>Para crear una votación, rellene los datos que acontinuación se les solicita.</p>
          </div>
          <FormularioCreacion></FormularioCreacion>
      </div>
  </div>
</template>

<script>
import FormularioCreacion from '@/components/CrearVotacion/FormularioCreacion.vue'

export default {
    name:'CrearVotacion',
    components:{
        FormularioCreacion
    },
    data:function(){
        return{
        }
    }
}
</script>

<style>

</style>