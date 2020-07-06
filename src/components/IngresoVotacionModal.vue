<template>
  <b-modal id="modalvotacion" title="Ingresa a una aplicación" class="container-fluid" >
    <div class="row m-0">
        <div class="col-6 p-0">
            Ingrese codigo de votacion:
        </div>
        <div class="col-6 p-0">
            <input type="text" class="w-100 form-control" v-model="codigoVotacion" /> 
            {{codigoVotacion}}
        </div>
        
    </div>
    <template slot="modal-footer">
          <router-link :to="'/votar/'+codigoVotacion" id=""><input type="button" class="btn btn-primary "  value="ir a votacion" @click="irAVotacion"></router-link>
           <input type="button" class="btn btn-dark "  value="cancelar" @click="hideModal">
        </template>
  </b-modal>
</template>

<script>
/* eslint-disable */ 
export default {
    name:'IngresoVotacionModal',
    components:{},
    data(){
     return {
       codigoVotacion: null
     } 
    },
    methods: {
       hideModal(){
        // this.$refs['modalvotacion'].hide()
        this.$bvModal.hide('modalvotacion')
      },
      irAVotacion(){
        
        this.hideModal()
      }
    }
}   
</script>

<style>

</style>