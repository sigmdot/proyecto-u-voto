<template>
  <div class="form-group border rounded p-3 bg-light">
    <label>
      <strong>{{pregunta.nombre}}</strong>
    </label>
    <div v-for="(respuesto,j) in pregunta.respuesta" :key="j" class="custom-control custom-radio" >
      <input type="radio" v-bind:id="j" v-model="respuestax" class="custom-control-input"/>
      <label class="custom-control-label" v-bind:for="respuesto"  v-bind:name="respuesto">{{respuesto}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preguntas",
  components: {},
  props: {
    pregunta: Object
  },
  data:function(){
      return{
          respuestax:null
      }
      
  }
};
</script>

<style>
</style>