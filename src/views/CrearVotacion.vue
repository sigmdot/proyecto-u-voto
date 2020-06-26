<template>
  <div class="crearview container">
      <div class="row m-0 justify-content-center">
          <div class="col-12 p-0 text-center">
              <h3>Crear una votación</h3>
              <p>Para crear una votación, rellene los datos que acontinuación se les solicita.</p>
          </div>
          <FormularioCreacion @votacion="recibido"></FormularioCreacion>
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
            votacion:{
                nombre:null,
                type:null,
                preguntaVotacion:null
            }
        }
    },
    methods:{
        recibido(nombrevotacion,tipo,preguntas){
            const votacionn ={
                nombre: nombrevotacion,
                type: tipo,
                preguntaVotacion:preguntas
            }
            this.votacion = votacionn;
            console.log(this.votacion);
        }
    }
}
</script>

<style>

</style>