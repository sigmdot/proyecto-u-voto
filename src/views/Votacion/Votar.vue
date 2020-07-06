<template>
    <div>
      <div v-if="!votacionEnviada">
        <div class="row m-0" v-if="votacion !== null && votacion !== 'no'">
            <div class="col-12 p-0 text-center">
                <h4>{{votacion.titulo}}</h4>
            </div>
            <form class="col-12 p-0">
                <!-- <Preguntas></Preguntas>    Componente listo    -->
                <!-- NO VI ESTE COMPONENETE WN, lo vi cuando ya había hecho la wea así nomas-->
                <div v-for="(pregunta,i) in votacion.preguntas" :key="i" v-bind:id="i" class="form-group border rounded p-3 bg-light">
                <label>
                    <strong>{{pregunta.texto_pregunta}}</strong>
                </label>
                <b-form-radio   v-for="(resp,j) in pregunta.respuestas" :key="j" v-model="selected[i].selected" v-bind:name="pregunta.texto_pregunta" v-bind:value="resp">{{resp.respuesta}}</b-form-radio>
                </div>
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
      mensajeError: ''
    };
  },
  methods: {
    obtenerVotacion(id){
      console.log(localStorage.getItem('acces_token'))
      service.getVotacion(id).
        then(res => {

          this.votacion = res
          this.selected = []
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