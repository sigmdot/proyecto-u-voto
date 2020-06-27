<template>
  <div class="votarview container">
    <div class="row m-0">
      <div class="col-12 p-0 text-center">
        <h4>{{votacion.nombre}}</h4>
      </div>
      <form class="col-12 p-0">
        <Preguntas></Preguntas>    <!-- Componente listo -->
        <div v-for="(pregunta,i) in votacion.preguntaVotacion" :key="i" v-bind:id="pregunta.nombre" class="form-group border rounded p-3 bg-light">
          <label>
            <strong>{{pregunta.nombre}}</strong>
          </label>
          <b-form-radio   v-for="(resp,j) in pregunta.respuesta" :key="j" v-model="selected" v-bind:name="pregunta.nombre" v-bind:value="resp">{{resp}}</b-form-radio>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Preguntas from "@/components/Votacion/Preguntas.vue";

export default {
  name: "VotacionView",
  components: {
    Preguntas
  },
  data: function() {
    return {
      votacion: {
        nombre: "Votacion Glamurosa",
        preguntaVotacion: [
          {
            nombre: "Pregunta 1",
            respuesta: ["respuesta 1", "respuesta 2", "respuesta 3"]
          },
          {
            nombre: "Pregunta 2",
            respuesta: ["answer 1", "answer 2", "answer 3"]
          },
          {
            nombre: "Pregunta 3",
            respuesta: ["eje 1", "eje 2", "eje 3"]
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>