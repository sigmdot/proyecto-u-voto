<template>
  <div class="crearview container">
      <div class="row m-0 justify-content-center">
          <div class="col-12 p-0 text-center">
              <h3>Crear una votación</h3>
              <p>Para crear una votación, rellene los datos que acontinuación se les solicita.</p>
          </div>
          <FormularioCreacion @votacion="recibido"></FormularioCreacion>

          <div v-if="votacionCreada" class="alert alert-success mt-4" role="alert">
            <h5 class="alert-heading">Votacion Creada!</h5>
            <hr/>
            <h4> código de Votación: {{codigoVotacion}}</h4>
            <hr>
            <p class="mb-0">Recuerda guardar el código de la votación, ya que con él, otros usuarios podrán participar en ella!</p>
          </div>
      </div>
  </div>
</template>

<script>
import FormularioCreacion from '@/components/CrearVotacion/FormularioCreacion.vue'
import {Service} from '../service/Service'

const service = new Service()

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
            },
            votacionCreada: false,
            codigoVotacion: null,
            
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
            service.crearVotacion(this.votacion).
                then(res => {
                    console.log(res)
                    this.votacionCreada = true
                    this.codigoVotacion = res.codigoVotacion
                })
                .catch(err => {
                    console.log(err)
                    this.votacionCreada = false
                })
            console.log(this.votacion);
        }
    }
}
</script>

<style>

</style>