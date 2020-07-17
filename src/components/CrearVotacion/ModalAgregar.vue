<template>
  <b-modal id="my-modal" hide-footer title="Agrega una pregunta" no-close-on-backdrop>
    <form>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="El nombre de tú pregunta"
          v-model="nombrePregunta"
        />
      </div>
      <div class="form-group row m-0">
        <label>Agregar opciones</label>
        <input class="col-10 p-0 form-control" type="text" v-model="itemrespu" />
        <div class="btn btn-primary col-2" @click="pushRespuesta">
          <b-icon icon="plus-square"></b-icon>
        </div>
      </div>
    </form>
    <ul class="list-group mt-3 mb-3">
        <li v-for="(item,index) in respuestas" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
            <p class="p-0 m-0 flex-grow-1">{{item}}</p> 
            <button class="btn btn-danger" @click="eliminarRespuesta(index)"> <b-icon icon="x-circle"></b-icon> </button>
        </li>
    </ul>
    <button class="btn btn-success w-100" @click="enviarPregunta"> Agregar pregunta </button>
   <button  class="btn btn-outline-danger w-100 mt-1" @click="esconderModal">Cancelar</button>
  </b-modal>
  
</template>

<script>
export default {
  name: "ModalAgregar",
  components: {},
  data: function() {
    return {
        itemrespu:null,
        nombrePregunta:null,
        respuestas:[]
    };
  },
  methods:{
      pushRespuesta(){
          if(this.itemrespu){
            this.respuestas.push(this.itemrespu);
            this.itemrespu = null;
            
          }
          else{
              console.log('NO NO NO NO NO SEÑOR');
          }
          
      },
      eliminarRespuesta(i){
          this.respuestas.splice(i,1);
      },
      enviarPregunta(){
          if(this.nombrePregunta && ((this.respuestas.length) > 1)){
              this.$emit('preguntacompleta',this.respuestas,this.nombrePregunta);
              this.nombrePregunta = null;
              this.respuestas = [];
              this.$bvModal.hide('my-modal');
          }
          else{
              console.log('NO NO NO CRISTO NO');
          }
          
      },
      esconderModal(){
        this.$bvModal.hide('my-modal');
        this.itemrespu = null
        this.nombrePregunta = null
        this.respuestas = []
      }
  }
};
</script>

<style>
</style>