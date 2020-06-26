<template>
  <div class="formulariocreacion col-12 col-lg-10 p-3 border">
    <form @submit="checkForm">
      <div class="form-group">
        <label for="nombrevotacion">Nombre votación:</label>
        <input
          type="text"
          class="form-control"
          id="nombrevotacion"
          aria-describedby="nombrevotacionhelp"
        />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >Ejemplo : Elección panes estudiantiles 2020</small>
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect1">Tipo de elección:</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Privada</option>
          <option>Pública</option>
        </select>
      </div>
      <div class="btn btn-secondary col-1 p-1 mb-3" v-b-modal.my-modal>
          <b-icon icon="plus-circle-fill"></b-icon>
      </div>
      <div v-for="(pregunta,i) in preguntas" class="form-group" :key="i">

      </div>
      <button type="submit" class="btn btn-primary w-100">Crear votación</button>
      
    </form>
    <ModalAgregar id="my-modal" @preguntacompleta="preguntaCaptada"></ModalAgregar>
    {{preguntas}}
  </div>
</template>

<script>
import ModalAgregar from './ModalAgregar'

export default {
  name: "FormularioCreacion",
  components: {
      ModalAgregar
  },
  data: function() {
    return {
      preguntas: []
    };
  },
  methods:{
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      checkForm(){
          console.log('EHH');
      },
      preguntaCaptada(respuestas,nombrePregunta){
        const pregunta ={
            nombre: nombrePregunta,
            respuestas : respuestas
        }
        this.preguntas.push(pregunta);
      }
  }
};
</script>

<style>
</style>