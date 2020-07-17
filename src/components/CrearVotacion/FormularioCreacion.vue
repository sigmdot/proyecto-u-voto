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
      <hr/>
      <div class="form-group">
        <div class="row">
          <div class="col-12">
            <label for="fecha-inicio">Fecha y hora inicio:</label>
          </div>
          <div class="col-lg-6 col-sm-12 p-lg-0 pl-lg-3 ">
            <b-form-datepicker dropleft placeholder="Ingrese una fecha" v-model="fechaInicio.fecha"  id="fecha-inicio" class="mb-2"></b-form-datepicker>
          </div>
          <div class="col-lg-6  col-sm-12 pr-lg-3">
            <b-form-timepicker placeholder="Ingrese una hora" v-model="fechaInicio.hora" label-close-button="aceptar"></b-form-timepicker>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-12">
            <label for="fecha-termino">Fecha y hora término:</label>
          </div>
          <div class="col-lg-6 col-sm-12 p-lg-0 pl-lg-3 ">
            <b-form-datepicker dropleft placeholder="Ingrese una fecha" v-model="fechaTermino.fecha" id="fecha-termino" class="mb-2"></b-form-datepicker>
          </div>
          <div class="col-lg-6  col-sm-12 pr-lg-3">
            <b-form-timepicker placeholder="Ingrese una hora" v-model="fechaTermino.hora" label-close-button="aceptar"></b-form-timepicker>
          </div>
        </div>
      </div>
      <hr/>
      <div v-if="fechaInicioAntesDeFechaActual" class="alert alert-danger">
        La fecha y hora de inicio de la votación no puede ser menor a la fecha y hora actual
        <hr/>
      </div>
      <div v-if="fechaTerminoAntesDeFechaInicio" class="alert alert-danger">
        La fecha y hora de termino de la votación no puede ser menor a la fecha y hora de inicio de la votación
        <hr/>
      </div>
      <!-- <div class="form-group">
        <label for="exampleFormControlSelect1" >Tipo de elección:</label>
        <select class="form-control" id="exampleFormControlSelect1" v-model="tipo">
          <option value="private">Privada</option>
          <option value="public">Pública</option>
        </select>
      </div> -->
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
    </b-form>
    <ModalAgregar id="my-modal" @preguntacompleta="preguntaCaptada"></ModalAgregar>
  </div>
</template>

<script>
import ModalAgregar from "./ModalAgregar";

import moment from 'moment';

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
      tipo:'privada',
      nombrevotacion:null,
      fechaInicio: {
        fecha: null,
        hora: null
      },
      fechaTermino: {
        fecha: null,
        hora: null
      },
      fechaInicioAntesDeFechaActual: false,
      fechaTerminoAntesDeFechaInicio: false
    };
  },
  methods: {
    logCrear(){
      console.log(this.preguntas)
      console.log(this.tipo)
      console.log(this.nombrevotacion)
      // console.log(this.fechaInicio)
      console.log(moment(this.fechaInicio.fecha + ' ' + this.fechaInicio.hora).isAfter(new Date(),'minute'))
      console.log(new Date())
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    checkForm(e) {
      e.preventDefault();
      let fechaInicio = this.fechaInicio.fecha + ' ' + this.fechaInicio.hora 
      let fechaTermino = this.fechaTermino.fecha + ' ' + this.fechaTermino.hora 
      console.log(fechaInicio)
      console.log(fechaTermino)

      if(this.nombrevotacion && (this.preguntas.length != 0) && this.tipo && this.fechaInicio.fecha && this.fechaInicio.hora && this.fechaTermino.fecha && this.fechaTermino.hora){
        if(moment(this.fechaInicio.fecha + ' ' + this.fechaInicio.hora).isBefore(new Date(), 'minute')){
          console.log('fecha inicio anterior a fecha y hora actual')
          this.fechaInicioAntesDeFechaActual = true
          this.fechaTerminoAntesDeFechaInicio = false
          return
        }
        if(moment(this.fechaInicio.fecha + ' ' + this.fechaInicio.hora).isAfter(this.fechaTermino.fecha + ' ' + this.fechaTermino.hora, 'minute')){
          this.fechaTerminoAntesDeFechaInicio = true
          this.fechaInicioAntesDeFechaActual = false
          console.log('fecha de termino anterior a fecha inicio')
          return
        }
         this.fechaInicioAntesDeFechaActual = false
         this.fechaInicioAntesDeFechaActual = false

        this.$emit('votacion',this.nombrevotacion,this.tipo,this.preguntas,fechaInicio,fechaTermino);
        this.nombrevotacion = null;
        this.preguntas = [];
        // this.tipo = null;
      }
      
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