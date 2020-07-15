<template>
  <div class="formulariocreacion col-12 col-lg-10 p-3 border">
    <form @submit="checkForm">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Nombre votación</span>
        </div>
        <input
          type="text"
          class="form-control w-80"
          style="width:82%"
          id="nombrevotacion"
          aria-describedby="nombrevotacionhelp"
          v-model="nombrevotacion"
        />
      </div>
      <h4>Duración votación</h4>
      <div class="form-group w-100">
        <div class="col-12 p-0 row m-0 mb-3 w-100">
          <b-form-datepicker v-model="fechaInicio" :min="min"  locale="es" class="col-5 p-0 w-100"></b-form-datepicker>
          <div class="input-group-prepend col-7 p-0 pl-2">
            <span class="input-group-text" id="basic-addon1">Hora inicio</span>
            <input
              type="text"
              class="form-control w-100"
              placeholder="Hora 00:00"
              v-model="horaI"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div class="col-12 p-0 row m-0 mt-1">
          <b-form-datepicker v-model="fechaTermino" :min="min"  locale="es" class="col-5 p-0"></b-form-datepicker>
          <div class="input-group-prepend col-7 p-0 pl-2">
            <span class="input-group-text" id="basic-addon1" style="min-width:102.28px">Hora final</span>
            <input
              type="text"
              class="form-control w-100"
              placeholder="Hora 00:00"
              v-model="horaT"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
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

      <div
        v-for="(pregunta,i) in preguntas"
        class="form-group border rounded p-3 bg-light"
        :key="i"
      >
        <label>
          <strong>{{pregunta.nombre}}</strong>
        </label>
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
          <label class="custom-control-label" for="customRadio1">{{respuesta}}</label>
        </div>
        <div
          class="btn btn-outline-danger w-100 mt-3 w-100"
          @click="borrarpregunta(i)"
        >Borrar pregunta</div>
      </div>
      <button type="submit" class="btn btn-primary w-100" @click="logCrear">Crear votación</button>
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
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      // 15th two months prior
      const minDate = new Date(today)
      minDate.setMonth(minDate.getMonth())
    return {
      preguntas: [],
      tipo: "privada",
      nombrevotacion: null,
      fechaInicio:'',
      fechaTermino:'',
      min:minDate,
      horaI:null,
      horaT:null
    };
  },
  methods: {
    logCrear() {
      console.log(this.preguntas);
      console.log(this.tipo);
      console.log(this.nombrevotacion);
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    checkForm(e) {
      if (this.nombrevotacion && this.preguntas.length != 0 && this.tipo) {
        this.$emit("votacion", this.nombrevotacion, this.tipo, this.preguntas);
        this.nombrevotacion = null;
        this.preguntas = [];
        // this.tipo = null;
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
    borrarpregunta(index) {
      this.preguntas.splice(index, 1);
    }
  }
};
</script>

<style>
</style>