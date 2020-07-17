<template>
  <div class="preguntaresultado col-lg-8 offset-2  p-0 row my-2 border bg-light mb-4" style="margin: 0 auto">
      <h5 class="col-12 p-3 text-center">{{pregunta.texto_pregunta}}</h5>
      <div class="col-12 p-3">
          <BarGraph :pregunta="pregunta" ></BarGraph>
      </div>
      <div class="col-12 p-3 bg-success border text-center text-white ">
          <h5 v-if="ganadores.length === 1" >Ganador : {{ganadores[0].respuesta}}</h5>
          <h5 v-else>Empate</h5>
      </div>
  </div>
</template>

<script>
import BarGraph from '@/components/Dashboard/BarGraph.vue'

export default {
    name:'PreguntaResultado',
    components:{
        BarGraph
    },
    props: ['pregunta'],
    data(){
        return {
            ganadores: []
        }
    },
    methods: {
        calcularGanador(){
            
            let mayorCantidadVotos =  this.calcularMayorCantidadVotos(this.pregunta.respuestas)
            let ganadores = this.obtenerGanadores(this.pregunta.respuestas, mayorCantidadVotos)

            //si la longitud del array GANADORES es mayor a 1, significa que hubo empate
            return ganadores
        },
        calcularMayorCantidadVotos(respuestas){
            let mayorCantidadVotos = respuestas[0].cantidad_votos

            if(respuestas.length === 1) return respuestas[0].cantidad_votos

            for(let i = 1; i < respuestas.length ; i++){
                if(respuestas[i].cantidad_votos > mayorCantidadVotos){
                    mayorCantidadVotos = respuestas[i].cantidad_votos
                }
            }
            console.log(mayorCantidadVotos)
            return mayorCantidadVotos

        },
        obtenerGanadores(respuestas, mayorCantidadVotos){

            let ganadores = []

            for(let i = 0; i < respuestas.length ; i++){

                if(mayorCantidadVotos === respuestas[i].cantidad_votos){
                    ganadores.push(respuestas[i])
                }
            }

            return ganadores
        }
    },
    mounted(){
        this.ganadores = this.calcularGanador()
    }
}
</script>

<style>

</style>