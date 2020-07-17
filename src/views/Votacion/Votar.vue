<template>
    <div>
      <div v-if="!votacionEnviada && tiempoRestante != 0 ">
        <div class="row m-0" v-if="votacion !== null && votacion !== 'no'">
            <div class="col-12 p-0 text-center">
                <h4>{{votacion.titulo}}</h4>
            </div>
            <form class="col-12 p-0">
                <div class="row">
                  <div class="col-lg-8 col-sm-12">
                    <div v-for="(pregunta,i) in votacion.preguntas" :key="i" v-bind:id="i" class="form-group border rounded p-3 bg-light">
                      <label>
                          <strong>{{pregunta.texto_pregunta}}</strong>
                      </label>
                      <b-form-radio   v-for="(resp,j) in pregunta.respuestas" :key="j" v-model="selected[i].selected" v-bind:name="pregunta.texto_pregunta" v-bind:value="resp">{{resp.respuesta}}</b-form-radio>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-12 form-group border rounded p-3 bg-light">
                    <h6>la votación se cierra en :</h6>
                    <countdown :time="tiempoRestante" style="font-weight:400">
                      <template  slot-scope="props">{{ props.days != 1 ?  props.days + ' días ' :  props.days + ' día '}}, {{ props.hours != 1 ? props.hours + ' horas' : props.hours + ' hora' }} , {{ props.minutes }} minutos, {{ props.seconds }} segundos.</template>
                    </countdown>

                  </div>

                </div>
                <!-- <Preguntas></Preguntas>    Componente listo    -->
                <!-- NO VI ESTE COMPONENETE WN, lo vi cuando ya había hecho la wea así nomas-->
                
            </form>
            <button class="btn btn-dark mx-1" type="button" @click="votar"> Votar </button>
            <!-- <button class="btn btn-primary" type="button" v-b-modal.modal-1> Abrir validación </button>
            <CarnetVali></CarnetVali> -->
        </div>
        <div v-if="votacion === 'no'" class="alert alert-danger mt-4 py-4"> 
          {{mensajeError}}
        </div>
      </div>
      <div v-if="votacionEnviada" class="alert alert-success">
        Votacion Enviada
      </div>
      <div v-if="tiempoRestante <= 0" class="alert alert-success">
        La votación se ha cerrado
      </div>
    </div>
  
</template>

<script>
// import Preguntas from "@/components/Votacion/Preguntas.vue";
// import CarnetVali from '@/components/Votacion/CarnetVali.vue'

import {Service} from '../../service/Service'

const service = new Service()

export default {
  name: "VotacionView",
  components: {
    // Preguntas,
    // CarnetVali
  },
  data: function() {
    return {
      votacion: null,
      votacionHecha: {},
      selected: [],
      votacionEnviada: false,
      mensajeError: '',
      tiempoRestante: null
    };
  },
  methods: {
    obtenerVotacion(id){
      service.getVotacion(id).
        then(res => {

          this.votacion = res
          console.log(this.votacion)
          this.selected = []

          let ahora = new Date();
          let fechaTermino = new Date(this.votacion.fecha_termino)
         
          this.tiempoRestante = fechaTermino - ahora
          console.log(this.tiempoRestante)
          console.log(this.tiempoRestante)

          for(let i = 0; i < this.votacion.preguntas.length ; i++){
            this.selected.push({
              selected: null
            })
          }
         
        })
        .catch(err => {

          this.votacion = 'no'
          this.mensajeError = err.response.data.msg
          console.log(err)
          
        })

    },
    obtenerRespuestasAPreguntas(){
      let respuestas = []
      for(let i = 0; i < this.selected.length; i++){
        respuestas.push(this.selected[i].selected)
      }

      return respuestas
    },
    votar(){

      if(this.estanPreguntasRespondidas()){

        this.votacionHecha.id_votacion = this.votacion.id_votacion
        this.votacionHecha.selected = this.obtenerRespuestasAPreguntas()
        
        service.votar(this.votacionHecha).
          then(res => {
            console.log(res)
            this.votacionEnviada = true
            
          }).
          catch(err =>{ 
            console.log(err)
            this.votacionEnviada = false
            
          })

      }
    },
    estanPreguntasRespondidas(){

        for(let i = 0; i < this.selected.length; i++){
          if(this.selected[i].selected === null){
             return false
          }
        }
        
        if(this.selected){
          return true 
        }

    }
  },
  mounted(){

    const codigoVotacion = this.$route.params.id
    this.obtenerVotacion(codigoVotacion)
    this.votacionEnviada = false

    

  },
  watch :{

    $route(to, from) {
      console.log(from,to)
      this.obtenerVotacion(to.params.id)
      this.votacionEnviada = false
    }

  }
};
</script>

<style>
</style>