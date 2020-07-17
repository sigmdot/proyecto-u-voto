<template>
  <div class="resultadovotacion container">
      <div class="row m-0">
          <div class="col-12 p-0">
              <h3 class="text-center" v-if="resultadoVotacion.length">{{resultadoVotacion[0].nombre_votacion}}</h3>
          </div>
          <PreguntaResultado v-for="(pregunta, index) in resultadoVotacion" :key="index" :pregunta="pregunta" ></PreguntaResultado>

      </div>
  </div>
</template>

<script>
import PreguntaResultado from '@/components/ResultadosVotacion/PreguntaResultado.vue'

import {Service} from '../../service/Service'

const service = new Service()

export default {
    name:'ResultadoVotacion',
    components:{
       PreguntaResultado
    },
    data(){
        return {
            resultadoVotacion: []
        }
    },
    methods: {
        obtenerVotacion(){
            service.getResultadosVotacion(this.$route.params.idVotacion).
            then(res => {
                this.resultadoVotacion = res
                console.log(res)
            }).
            catch(err => {
                console.log(err)
            })
        }
    },
    mounted(){
        this.obtenerVotacion()
    }
}
</script>

<style>

</style>