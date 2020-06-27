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
          v-model="nombrevotacion"
        />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >Ejemplo : Elección panes estudiantiles 2020</small>
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect1" >Tipo de elección:</label>
        <select class="form-control" id="exampleFormControlSelect1" v-model="tipo">
          <option value="private">Privada</option>
          <option value="public">Pública</option>
        </select>
      </div>
      <h4>Preguntas</h4>
      <div class="row m-0">
        <div class="btn btn-secondary col-4 col-md-1 col-lg-1 p-1 mb-3" v-b-modal.my-modal>
          <b-icon icon="plus-circle-fill"></b-icon>
        </div>
        <div class="col p-0 pl-1">
            <p>Agregar una pregunta</p>
        </div>
      </div>

      <div v-for="(pregunta,i) in preguntas" class="form-group border rounded p-3 bg-light" :key="i">
        <label> <strong> {{pregunta.nombre}} </strong> </label>
        <div
          v-for="(respuesta,j) in pregunta.respuestas"
          :key="j"
          class="custom-control custom-radio"
        >
          <input
            type="radio"
            id="customRadio1"
            name="customRadio"
            class="custom-control-input"
            disabled
          />
          <label class="custom-control-label" for="customRadio1"> {{respuesta}}</label>
        </div>
        <div class="btn btn-outline-danger w-100 mt-3 w-100" @click="borrarpregunta(i)">Borrar pregunta</div>
      </div>
      <button type="submit" class="btn btn-primary w-100">Crear votación</button>
    </form>
    <ModalAgregar id="my-modal" @preguntacompleta="preguntaCaptada"></ModalAgregar>
  </div>
</template>

<script>
import ModalAgregar from "./ModalAgregar";

export default {
  name: "FormularioCreacion",
  components: {
    ModalAgregar
  },
  data: function() {
    return {
      preguntas: [],
      tipo:null,
      nombrevotacion:null
    };
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    checkForm(e) {
      if(this.nombrevotacion && (this.preguntas.length != 0) && this.tipo){
        this.$emit('votacion',this.nombrevotacion,this.tipo,this.preguntas);
        this.nombrevotacion = null;
        this.preguntas = [];
        this.tipo = null;
      }
      e.preventDefault();
    },
    preguntaCaptada(respuestas, nombrePregunta) {
      const pregunta = {
        nombre: nombrePregunta,
        respuestas: respuestas
      };
      this.preguntas.push(pregunta);
    },
    borrarpregunta(index){
      this.preguntas.splice(index,1);
    }
  }
};
</script>

<style>
</style>