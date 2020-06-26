<template>
  <div class="crearview container">
      <div class="row m-0 justify-content-center">
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